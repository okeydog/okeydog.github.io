const url = 'https://okeydog.github.io/';
const title = '[반려견의 mbti] 반려견의 타고난 기질은?';
const hash = '%23반려견 %23반려견성격 %23반려견테스트 ';

const fb = () => {
  window.open('https://www.facebook.com/sharer/sharer.php?u='
    + url + '&t=' + title + '' + hash,
    'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const tw = () => {
  let name = document.querySelector('.result').innerHTML;
  switch (name) {
    case '표범':
    case '유니콘':
      name += '이에요! ';
      break;
    default:
      name += '예요! ';
  }
  window.open('https://twitter.com/intent/tweet?text='
    + title + '%0A' + '저의 반려견은 ' + name + '' + hash + '%0A' + url,
    'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  return false;
}
const nv = () => {
  window.open('http://share.naver.com/web/shareView.nhn?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}
const band = () => {
  window.open('https://band.us/plugin/share?url='
    + url + '&title=' + title,
    'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
  return false;
}