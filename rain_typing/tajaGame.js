const taja = [
  "건축학개론", "곡성", "극한직업", "기생충", "내 머리 속의 지우개", "늑대소년", "명량", "범죄도시", "부산행", "살인의 추억", "신세계", "싱글 인 서울", "승부", "아마추어", "야당", "열혈형사", "올드보이", "친구", "친절한 금자씨", "쾌걸춘향", "퇴마록", "로비",

  "그래비티", "닥터 스트레인지", "더 배트맨", "라이언 일병 구하기", "라라랜드", "마션", "매드맥스", "반지의 제왕", "베러맨", "비긴 어게인", "세 얼간이", "쇼생크 탈출", "어바웃 타임", "어벤져스", "에이리언", "엘리멘탈", "업", "아이언맨", "인사이드 아웃", "인셉션", "인터스텔라", "월-E", "윈터 솔저", "코코", "킹스맨", "타이타닉", "탑건: 매버릭", "터미네이터", "토이 스토리", "트랜스포머", "파이트 클럽", "플로우", "해리 포터",

  "너의 이름은", "라스트 마일", "스즈메의 문단속",
];

// 선언한 tajaContents 안에 글자로 된 Div를 넣어주게 된다.
const tajaContents = document.getElementById("tajaContents");

//tajaDiv를 다루기 위한 배열
const newObj = [];

// taja의 각 글자마다 top을 주기위한 배열 초기화 (글자를 내려오게 하기 위해 style 의 top을 이용할 것입니다)
let plusTop = new Array(taja.length);
for (let i = 0; i < plusTop.length; i++) {
  plusTop[i] = 0;
}

//글자의 div  크기를 고정으로 주기 위한 변수
const TAJAWIDTH = 150;
const TAJAHEIGHT = 30;

// 그려지는 것보다 내려오는게 간격이 더짧게 함. (셋 인터벌의 시간 변수)
const DRAWTIME = 1000;
const DOWNTIME = 500;

//생명변수
let life = 5;
let lifeDiv = document.getElementById("life");
lifeDiv.innerText = "LIFE : " + life;
//점수변수
let score = 0;
let scoreDiv = document.getElementById("score");
scoreDiv.innerHTML = "SCORE : " + score;

//타자배열의 인덱스 값에 대한 변수
let idx = 0;

//g화면에 글자를 내리기위한 메서드
function drawTaja() {
  let randomPick = 0;
  let temp = null;

  //랜덤으로 타자 배열을 섞어주기 위한 for문
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 구조분해 할당으로 swap
    }
  }
  
  shuffleArray(taja); // drawTaja 함수 시작 전에 실행
  

  // 일정한 간격으로 화면에 단어를 하나씩 뿌려주기 위한 setInteval 메서드 입니다.
  var drawInterval = setInterval(function () {

    var leftWidth = Math.round(Math.random() * 1200);
    var tajaDiv = document.createElement("div");
    tajaDiv.classList.add("tajaWord");
    tajaDiv.style.width = TAJAWIDTH + "px";
    tajaDiv.style.height = TAJAHEIGHT + "px";
    tajaDiv.style.position = "absolute";
    tajaDiv.style.textAlign = "center";
    tajaDiv.innerHTML = taja[idx++];
    tajaContents.appendChild(tajaDiv);
    // leftWidth 변수가 0 < leftWidth < 1200 으로 설정되어있기 때문에
    // 글자의 width값 까지 더하게 되면 tajaContents의 범위를 넘어갈 수 있습니다.
    // 그래서 그 범위를 넘어가게 되면 안넘어가게 하기 위한 재설정해주는 부분입니다.
    if (leftWidth + TAJAWIDTH >= tajaContents.offsetWidth) {
      tajaDiv.style.left = (leftWidth - TAJAWIDTH) + "px";
    } else {
      tajaDiv.style.left = leftWidth + "px";
    }

    // 각각의 tajaDiv를 다루기 위해 newObj 배열에 담는다.
    newObj.push(tajaDiv);

    // 화면에 글자가 다 뿌려지면 더 이상 글자를 뿌려주기 위한
    // setInterval() 을 중지시킨다. ( 그렇지 않으면 글자가 다 뿌려진 이후에도 계속 동작하게 됩니다.)
    if (newObj.length === taja.length) {
      clearInterval(drawInterval);
    }
  }, DRAWTIME);

}


// 글자를 내려주기 위한 메서드
function downTaja() {
  //글자가 뿌려진 이후에는 일정한 간격으로 글자를 내려줘야 합니다.
  setInterval(function () {
      for (let i = 0; i < taja.length; i++) {
          if (i < newObj.length) {
              newObj[i].style.top = plusTop[i] + "px";
              // 글자의 범위가 경계(바닥) 바깥으로 나갔을 경우 제거
              if (plusTop[i] + TAJAHEIGHT >= tajaContents.offsetHeight) {
                  if (tajaContents.contains(newObj[i])) {
                      tajaContents.removeChild(newObj[i]);
                      life--;
                      lifeDiv.innerHTML = "LIFE : " + life;

                      // 목숨을 모두 잃었을 때 - 실패
                      if (life === 0) {
                          alert('5개의 생명을 모두 사용하셨습니다.');
                          alert('총 ' + score + '점을 획득하였습니다.');
                          location.reload();
                      }

                      // life가 남은상태로 게임이 끝났을 경우 - 성공
                      if (newObj.length === taja.length) { // 화면에 단어가 다 뿌려진 이후
                          if (!tajaContents.hasChildNodes()) { // 뿌려진 단어가 화면에 존재하지 않을 경우
                              alert('다음 단계로 이동합니다.(준비중)');
                              alert('총 ' + score + '점을 획득하였습니다.');
                              location.reload();
                          }
                      }

                  }
              }
              plusTop[i] += 30;
          }
      }
  }, DOWNTIME);

}


var tajaText = document.getElementById("tajaText");
tajaText.addEventListener("keydown", function (e) {
  // enter 눌렀을 때
  if (e.keyCode === 13) {
      for (let i = 0; i < newObj.length; i++) {
          // 타자 친 단어와 화면의 단어가 일치했을 때
          if (tajaText.value === newObj[i].innerHTML) {
              tajaContents.removeChild(newObj[i]);
              score += 100;
              scoreDiv.innerHTML = "SCORE : " + score;

              // 더이상 화면에 뿌려질 단어가 없고
              // life를 다 소진하지않고 clear 했을 경우
              if (newObj.length === taja.length) {
                  if (!tajaContents.hasChildNodes()) {
                      alert('다음 단계로 이동합니다.(준비중)');
                      alert('총 ' + score + '점을 획득하였습니다.');
                      location.reload();
                  }

              }

          }
      }
      // enter 눌렀을 때 input 창 초기화
      tajaText.value = "";
  }
});

// 클릭 횟수에 대한 변수
var count = 0;

// 시작하기
var tajaBtn = document.getElementById("tajaBtn");
tajaBtn.addEventListener("click", function () {
  // 버튼을 눌렀을 때마다 메서드가 실행되므로 최초 1회만 실행되도록 count변수로 막아주었습니다.
  if (count === 0) {
      drawTaja();
      downTaja();
  }
  count++;
});