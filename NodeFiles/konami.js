let cursor = 0;
const KONAMI_CODE = [38, 40, 37, 39, 66];
/*const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];*/
document.addEventListener('keydown', (e) => {
  cursor = (e.keyCode == KONAMI_CODE[cursor]) ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) activate();
});

function activate() {
 /* document.getElementById("secret").classList.add('SecretCode');*/
  document.getElementsByClassName('tausta')[0].src='./NodeFiles/Files/ulko3.jpg'
  document.getElementById("flip").style.opacity = "0.8";
}
