let cursor = 0;
const KONAMI_CODE = [38,38,37,37,39,39,81,87,69,82,84,89];

document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) activate();
});

function activate() { 
 /* document.getElementById("secret").classList.add('SecretCode');*/ 
  document.getElementsByClassName('tausta')[0].src='../Files/Keittiö2.jpg'
  document.getElementById("flip").style.opacity = "0.8"; 
}
function displayunicode(e){
    var unicode=e.keyCode? e.keyCode : e.charCode
    alert(unicode)
}