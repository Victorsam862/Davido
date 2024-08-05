const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const headers = document.getElementById('headers');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    headers.classList.add('scrolled');
  } else {
    headers.classList.remove('scrolled');
  }
});





const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', function() {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});

closeBtn.addEventListener('click', function() {
  menuToggle.classList.remove('active');
  menu.classList.remove('active');
});





function support(){
  var question = document.getElementById('?');
  var donate = document.getElementById('donate');

  if (question.innerHTML && donate.innerHTML){
    question.innerHTML = '';
    donate.innerHTML = '';
  }else{
    question.innerHTML = `Buy Dev a cup of coffee:`;
    donate.innerHTML = `<input type="text" id="clipboard-input" class = 'clipboards'  value="Copy: AHtxPaH6gQ3JpRrznHHp21XAVfbuhhuzkqit83it3HsS" readonly >`
  }
}

