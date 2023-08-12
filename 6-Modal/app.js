function showModal() {
  document.querySelector('.overlay').classList.add('showoverlay');
  document.querySelector('.loginform').classList.add('showlogin');
}
function closeModal() {
  document.querySelector('.overlay').classList.remove('showoverlay');
  document.querySelector('.loginform').classList.remove('showlogin');
}
const btnlogin = document.querySelector('.btn-login');
btnlogin.addEventListener('click', showModal);

const c = document.querySelector('span');
c.addEventListener('click', closeModal);
