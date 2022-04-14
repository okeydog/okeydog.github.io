const header = document.getElementById('header');
const footer = document.getElementById('footer');
const qna = document.getElementById('qna');
const u_name = document.querySelector('input[type=text]');
const wrap = document.getElementById('wrap');
const tabletMQL = window.matchMedia("all and (min-width: 768px)");
const pcMQL = window.matchMedia("all and (min-width: 1024px)");
const ENDPOINT = 10;
const select = [];
let qIdx = -1;

const goTo = (dest) => {
  let elem;
  let elemTop;
  if (dest === 'artist') {
    elem = document.getElementById('intro-box');
  } else {
    elem = document.getElementById('share-box');
  }
  elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
  if (pcMQL.matches) {
    elemTop -= 150;
  } else if (tabletMQL.matches) {
    elemTop -= 115;
  } else {
    elemTop -= 60;
  }
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elemTop
  });
}
const goArtist = () => goTo('artist');
const goShare = () => goTo('share');

const copy = () => {
  const tmp = document.createElement('textarea');
  document.body.appendChild(tmp);
  tmp.value = url;
  tmp.select();
  document.execCommand('copy');
  document.body.removeChild(tmp);
}

const calcScore = () => {
  let fear = 0;
  let aggressive = 0;
  let energetic = 0;
  let sociable = 0;
  const fearList = [1, 6, 9, 12, 19, 21, 24, 28, 30, 32, 36, 38, 42, 47, 54, 58, 61, 66, 70, 74];
  const aggressiveList_Human = [2, 13, 17, 23, 33, 43, 51, 62, 68, 73];
  const aggressiveList_Dog = [5, 8, 15, 20, 22, 26, 34, 39, 41, 49, 52, 57, 60, 65, 75];
  const energeticList = [3, 7, 10, 14, 16, 25, 27, 31, 35, 40, 44, 46, 48, 53, 55, 59, 63, 67, 69, 72  ];
  const sociableList = [76, 77, 78, 79, 80 ];

  // for (let i = 0; i < ENDPOINT; i++) {
  //   fear += qnaList[i].a[select[i]].score;
  // }

  for (let i = 0; i < fearList.length; i++) {
    fear += qnaList[fearList[i]-1].a[select[i]].score;
  }
  for (let i = 0; i < aggressiveList_Human.length; i++) {
    aggressive += qnaList[aggressiveList_Human[i]-1].a[select[i]].score;
  }
  for (let i = 0; i < aggressiveList_Dog.length; i++) {
    aggressive += qnaList[aggressiveList_Dog[i]-1].a[select[i]].score;
  }
  for (let i = 0; i < energeticList.length; i++) {
    energetic += qnaList[energeticList[i]-1].a[select[i]].score;
  }
  for (let i = 0; i < sociableList.length; i++) {
    sociable += qnaList[sociableList[i]-1].a[select[i]].score;
  }

  if (energetic >=40 && sociable >= 16 && aggressive >= 40 && fear >= 40  ) { //동적/관계/공격/높은두려움
    num = 0; //천사의 탈을 쓴 악마犬

  }
  if (energetic >=40 && sociable >= 16 && aggressive >= 40 && fear < 40  ) { //동적/관계/공격/낮은두려움
    num = 1; //오지랖 넓은 중재자

  }
  if (energetic >=40 && sociable < 16 && aggressive >= 40 && fear < 40  ) { //동적/독립/공격/낮은두려움
    num = 2; //제멋대로 마이웨이犬

  }
  if (energetic >=40 && sociable < 16 && aggressive >= 40 && fear >= 40  ) { //동적/독립/공격/높은두려움
    num = 3; //허세 부리는 상꼬맹이

  }
  /////////////////////////////////
    if (energetic >=40 && sociable >= 16 && aggressive < 40 && fear >= 40  ) { //동적/관계/비공격/높은두려움
    num = 4; //눈치 빠른 꼬맹이

  }
  if (energetic >=40 && sociable >= 16 && aggressive < 40 && fear < 40  ) { //동적/관계/비공격/낮은두려움
    num = 5; //천진난만한 탐험대원

  }
  if (energetic >=40 && sociable < 16 && aggressive < 40 && fear < 40  ) { //동적/독립/비공격적/낮은두려움
    num = 6; //자유로운 영혼

  }
  if (energetic >=40 && sociable < 16 && aggressive < 40 && fear >= 40  ) { //동적/독립/비공격적/높은두려움
    num = 7; //호기심 많은 쫄보

  }
  ////////////////////////////////////
    if (energetic <40 && sociable >= 16 && aggressive < 40 && fear >= 40  ) { //정적/관계/비공격/높은두려움
    num = 8; //눈치보는 쭈구리

  }
  if (energetic <40 && sociable >= 16 && aggressive < 40 && fear < 40  ) { //정적/관계/비공격/낮은두려움
    num = 9; //정석의 엄친아犬

  }
  if (energetic <40 && sociable < 16 && aggressive < 40 && fear < 40  ) { //정적/독립/비공격/낮은두려움
    num = 10; //무념무상 창문바라기

  }
  if (energetic <40 && sociable < 16 && aggressive < 40 && fear >= 40  ) { //정적/독립/비공격적/높은두려움
    num = 11; //방구석의 겁쟁이

  }
  //////////////////////////////////////
    if (energetic <40 && sociable >= 16 && aggressive >= 40 && fear >= 40  ) { //정적/관계/공격/높은두려움
    num = 12; //뻔뻔한 밀당 고수

  }
  if (energetic <40 && sociable >= 16 && aggressive >= 40 && fear < 40  ) { //정적/관계/공격/낮은두려움

    num = 13; //우리집 꼬마 대장

  }
  if (energetic <40 && sociable < 16 && aggressive >= 40 && fear < 40  ) { //정적/독립/공격/낮은두려움

    num = 14; //고독한 카리스마

  }
  if (energetic <40 && sociable < 16 && aggressive >= 40 && fear >= 40  ) { //정적/독립/공격적/높은두려움

    num = 15; //까칠한 얼음공주

  }
  return num;
}

// const sortResult = (point) => {
//   let num = 0;
//   if (point <= 20) {
//     num = 0;
//   } else if (point <= 30) {
//     num = 1;
//   } else if (point <= 40) {
//     num = 2;
//   } else if (point <= 50) {
//     num = 3;
//   } else if (point <= 60) {
//     num = 4;
//   } else {
//     num = 5;
//   }
//   return num;
// }

const goResult = () => {
  if (pcMQL.matches) {
    console.log('PC');
    wrap.style.marginTop = '150px';
  } else if (tabletMQL.matches) {
    console.log('tablet');
    wrap.style.marginTop = '115px';
  }

  const result = document.getElementById('result');
  // const point = calcScore();
  // const grade = sortResult(point);
  const grade = calcScore();
  const pTitle = document.querySelector('.p');
  const res_point = document.querySelector('.point');
  const pin = document.querySelector('.pin');
  const img_url = 'img/image-' + grade + '.png';
  const res_img = document.createElement('img');
  const res_img_div = document.querySelector('.art');
  const animal = document.querySelector('.result');
  const desc = document.querySelector('.res');

  //pTitle.innerHTML = u_name.value + ' 님의 점수는...';
  //res_point.innerHTML = point + '점';
  pin.style.marginLeft = infoList[grade].mLeft;
  res_img.src = img_url;
  res_img.alt = infoList[grade].name;
  res_img.title = infoList[grade].name;
  res_img_div.appendChild(res_img);
  animal.innerHTML = infoList[grade].name;
  desc.innerHTML = infoList[grade].desc;

  setTimeout(() => {
    header.style.display = 'block';
    footer.style.display = 'block';
    result.style.display = 'block';
    header.style.animation =
      'fade-in 0.3s forwards';
    footer.style.animation =
      'fade-in 0.3s forwards';
    result.style.animation =
      'going-up 0.5s, ' +
      'fade-in 0.5s forwards';
  }, 600);

}

const end = () => {
  qna.style.animation = '';
  const interval = setInterval(() => {
    qna.style.opacity -= 0.1;
    qna.style.transform = 'translateY(-1px)';
  }, 50);
  setTimeout(() => clearTimeout(interval), 500);
  setTimeout(() => qna.style.display = 'none', 500);
  setTimeout(() => {
    const calc = document.getElementById('calc');
    calc.style.display = 'block';
    calc.style.animation =
      'going-up 0.5s forwards, ' +
      'fade-in 0.5s forwards';
  }, 700);
  setTimeout(() => {
    calc.style.animation = '';
    calc.style.animation =
      'going-left 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      calc.style.display = 'none';
      goResult();
    }, 400);
  }, 9000);
}

const addAnswer = (answerTxt, idx) => {
  const answer = document.createElement('button');
  const a = document.querySelector('.answer');
  answer.className += 'a box';
  answer.innerHTML = answerTxt;
  answer.addEventListener('click', () => {
    const parent = answer.parentNode;
    const children = parent.childNodes;
    for (let i in children) {
      children[i].disabled = true;
    }
    parent.classList.add('fade-out-5-4');
    setTimeout(() => {
      select[qIdx] = idx;
      a.innerHTML = '';
      parent.classList.remove('fade-out-5-4');
      goNext();
    }, 800);
  });

  setTimeout(() => answer.style.animation =
    'going-down 0.25s forwards, fade-in 0.25s forwards', 50);
  a.appendChild(answer);
}


const goNext = () => {
  if (qIdx++ === 10) {
    end();
    return;
  }

  const status = document.querySelector('.status');
  const qNum = qnaList[qIdx];
  const q = document.querySelector('.q');

  status.style.width = (ENDPOINT * (qIdx + 1)) + '%';
  q.innerHTML = qNum.q;
  qna.style.animation =
    'fade-in 0.3s ease-in-out 0.4s forwards, ' +
    'going-down 0.3s ease-in-out 0.4s forwards';

  setTimeout(() => {
    const endIdx = qNum.a.length - 1;
    for (let i in qNum.a) {
      addAnswer(qNum.a[i].answer, i);
    }
    qna.style.opacity = 1;
  }, 700);
}

const begin = () => {
  const welcome = document.getElementById('welcome');
  header.style.animation =
    'going-up 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  footer.style.animation =
    'going-down 0.4s forwards, ' +
    'fade-out 0.4s forwards';
  setTimeout(() => welcome.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards', 500);
  setTimeout(() => {
    header.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';
    qna.style.display = 'block';
    if (pcMQL.matches) {
      console.log('PC');
      wrap.style.marginTop = '50px';
    } else if (tabletMQL.matches) {
      console.log('tablet');
      wrap.style.marginTop = '30px';
    }
    goNext();
  }, 1000);
}

const load = () => {
  const msg = document.querySelector('.check-name');
  const start_btn = document.querySelector('.start');

  u_name.addEventListener('blur', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
    } catch (err) {
      msg.innerHTML = err;
    }
  });

  start_btn.addEventListener('click', () => {
    try {
      if (u_name.value.length < 1) {
        throw '이름을 입력하고 시작해 주세요.';
      }
      msg.innerHTML = '';
      start_btn.disabled = true;
      begin();
    } catch (err) {
      msg.innerHTML = err;
    }
  });

}

window.onload = load();