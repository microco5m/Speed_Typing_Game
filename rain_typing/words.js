const movies = [
  "건축학개론", "곡성", "극한직업", "기생충", "내 머리 속의 지우개", "늑대소년", "명량", "범죄도시", "부산행", "살인의 추억", "신세계", "싱글 인 서울", "승부", "아마추어", "야당", "열혈형사", "올드보이", "친구", "친절한 금자씨", "쾌걸춘향", "퇴마록", "로비",

  "그래비티", "닥터 스트레인지", "더 배트맨", "라이언 일병 구하기", "라라랜드", "마션", "매드맥스", "반지의 제왕", "베러맨", "비긴 어게인", "세 얼간이", "쇼생크 탈출", "어바웃 타임", "어벤져스", "에이리언", "엘리멘탈", "업", "아이언맨", "인사이드 아웃", "인셉션", "인터스텔라", "월-E", "윈터 솔저", "코코", "킹스맨", "타이타닉", "탑건: 매버릭", "터미네이터", "토이 스토리", "트랜스포머", "파이트 클럽", "플로우", "해리 포터",

  "너의 이름은", "라스트 마일", "스즈메의 문단속",
];

const dramas = [
  "이태원 클라쓰", "더 글로리", "사랑의 불시착", "빈센조", "미스터 션샤인", "도깨비", "킹덤", "슬기로운 의사생활", "악의 마음을 읽는 자들", "모범택시", "비밀의 숲", "시그널", "해를 품은 달", "호텔 델루나", "오징어 게임", "눈물의 여왕", "무빙", "이번 생은 처음이라", "연모", "마이 네임", "닥터 차정숙", "낭만닥터 김사부", "불가살", "타인은 지옥이다", "나의 아저씨", "구미호뎐", "철인왕후", "알고있지만", "로스쿨", "스토브리그", "유미의 세포들", "지리산", "너는 나의 봄", "삼식이", "재벌집 막내아들",

  "브레이킹 배드", "왕좌의 게임", "기묘한 이야기", "로스트", "그레이 아나토미", "덱스터", "하우스 오브 카드", "체르노빌", "더 보이즈", "더 라스트 오브 어스", "수츠", "나르코스", "더 크라운", "웨스트월드", "마블 데어데블", "블랙 미러", "투 브로크 걸즈", "모던 패밀리", "빅뱅 이론", "트루 디텍티브", "멘탈리스트", "콜 미 캣", "루시퍼", "지니어스", "로키", "완다비전", "문나이트", "호크아이", "잭 라이언", "디 아메리칸스",

  "리갈 하이", "고쿠센", "1리터의 눈물", "하얀 거탑", "중쇄를 찍자!", "언내추럴", "컨피던스맨 JP", "99.9 형사전문변호사", "진", "노다메 칸타빌레", "심야식당", "오늘은 회사 쉬겠습니다", "고독한 미식가", "사랑하는 사이", "마더", "블랙페어", "MIU404", "세상의 중심에서 사랑을 외치다", "우로보로스", "드래곤사쿠라", "신의 카르테", "기묘한 이야기 일본판", "판도라의 상자", "파견의 품격",

  "셜록", "블랙 미러", "더 크라운", "브로드처치", "피키 블라인더스",

  "상견니", "장난스런 키스", "악작극지문", "운명처럼 널 사랑해", "우리의 거리"
];

const harrypotterKr = ["해리 포터", "헤르미온느 그레인저", "론 위즐리", "알버스 덤블도어", "세베루스 스네이프", "드레이코 말포이", "네빌 롱바텀", "루나 러브굿", "진 위즐리", "프레드 위즐리", "조지 위즐리", "시리우스 블랙", "루핀 교수", "릴리 포터", "제임스 포터", "볼드모트", "벨라트릭스 레스트랭", "루시우스 말포이", "나르시사 말포이", "크랩", "고일", "초 챙", "딘 토마스", "세이머스 피니건", "해그리드", "필치", "맥고나걸 교수", "플리트윅 교수", "스프라우트 교수", "트릴로니 교수", "퀴렐 교수", "돌로레스 엄브리지", "피브즈", "닉 거의 목 없는 닉", "블레이즈 자비니", "퍼시 위즐리", "아서 위즐리", "몰리 위즐리", "플뢰르 델라쿠르", "세드릭 디고리", "빅터 크룸", "초티 샤플", "빈센트 크랩", "그레고리 고일", "분류 모자", "도비", "위링크", "그린델왈드", "뉴트 스캐맨더", "크레덴스 베어본"];


const moviesEng = [
  "Architecture 101", "The Wailing", "Extreme Job", "Parasite", "A Moment to Remember", "A Werewolf Boy", "The Admiral: Roaring Currents", "The Outlaws", "Train to Busan", "Memories of Murder", "New World", "Fiery detective", "Oldboy", "Friend", "Sympathy for Lady Vengeance","Delightful Girl Choon-hyang", "Exorcism Chronicles",

  "Gravity", "Doctor Strange", "The Batman", "Saving Private Ryan", "La La Land", "The Martian", "Mad Max: Fury Road","Better Man", "Begin Again", "3 Idiots", "The Shawshank Redemption", "About Time", "The Avengers", "Alien", "Elemental", "Up", "Iron Man", "Inside Out", "Inception", "Interstellar", "WALL·E", "Captain America: The Winter Soldier", "Coco", "Kingsman: The Secret Service", "Titanic", "Top Gun: Maverick", "The Terminator", "Toy Story", "Transformers", "Fight Club", "Harry Potter", "The Lord of the Rings", "Flow",

  "Your Name", "Last mile", "Suzume"
];

const dramasEng = [
  "Itaewon Class", "The Glory", "Crash Landing on You", "Vincenzo", "Mr. Sunshine", "Guardian: The Lonely and Great God", "Kingdom", "Hospital Playlist", "Through the Darkness", "Taxi Driver", "Stranger", "Signal", "Moon Embracing the Sun", "Hotel Del Luna", "Squid Game", "Queen of Tears", "Moving", "Because This Is My First Life", "The King's Affection", "My Name", "Doctor Cha", "Dr. Romantic", "Strangers from Hell", "My Mister", "Tale of the Nine Tailed", "Mr. Queen", "Nevertheless", "Law School", "Hot Stove League", "Yumi's Cells", "Jirisan", "Reborn Rich",

  "Breaking Bad", "Game of Thrones", "Stranger Things", "Lost", "Grey's Anatomy", "Dexter", "House of Cards", "Chernobyl", "The Boys", "The Last of Us", "Suits", "Narcos", "The Crown", "Westworld", "Daredevil", "Black Mirror", "2 Broke Girls", "Modern Family", "The Big Bang Theory", "True Detective", "The Mentalist", "Call Me Kat", "Lucifer", "Genius", "Loki", "WandaVision", "Moon Knight", "Hawkeye", "Jack Ryan", "The Americans",

  "Legal High", "Gokusen", "1 Litre of Tears", "The Great White Tower", "Sleepeeer Hit!", "Unnatural", "The Confidence Man JP", "99.9 Criminal Lawyer", "Jin", "Nodame Cantabile", "Midnight Diner", "I'm Taking the Day Off", "The Solitary Gourmet", "Mother", "MIU404", "Crying Out Love in the Center of the World", "Uroboros", "Dragon Zakura", "Pandora's Box", "Haken no Hinkaku",

  "Sherlock", "Black Mirror", "The Crown", "Broadchurch", "Peaky Blinders",

  "Someday or One Day", "It Started with a Kiss"
];

const harrypotterEng = [
  "Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Draco Malfoy", "Neville Longbottom", "Luna Lovegood", "Ginny Weasley", "Fred Weasley", "George Weasley", "Sirius Black", "Remus Lupin", "Lily Potter", "James Potter", "Voldemort", "Bellatrix Lestrange", "Lucius Malfoy", "Narcissa Malfoy", "Crabbe", "Goyle", "Cho Chang", "Dean Thomas", "Seamus Finnigan", "Rubeus Hagrid", "Argus Filch", "Minerva McGonagall", "Filius Flitwick", "Pomona Sprout", "Sybill Trelawney", "Quirinus Quirrell", "Dolores Umbridge", "Peeves", "Nearly Headless Nick", "Blaise Zabini", "Percy Weasley", "Arthur Weasley", "Molly Weasley", "Fleur Delacour", "Cedric Diggory", "Viktor Krum", "Choiti Shapple", "Vincent Crabbe", "Gregory Goyle", "Sorting Hat", "Dobby", "Winky", "Gellert Grindelwald", "Newt Scamander", "Credence Barebone"
];
