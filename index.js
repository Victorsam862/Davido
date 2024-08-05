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

function support(){
    alert('9LAjk5F4rFetELE4CygcBbZ5hYc2QhRrbJjfm5Q26jWM')
}





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
  document.getElementById('?').innerHTML = `Buy Dev a cup of coffe:`
  
  document.getElementById('donate').innerHTML =  `<input type="text" id="clipboard-input" value="C/A: AHtxPaH6gQ3JpRrznHHp21XAVfbuhhuzkqit83it3HsS" readonly >`
  console.log(donate)

  
}
