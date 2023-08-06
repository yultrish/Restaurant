console.log('js is working')
menuIcon = document.querySelector('.menu')
closeIcon = document.querySelector('.close-icon')
list = document.querySelector('ul')
width = window.innerWidth;
isClicked = false;

function smallScreen(){
    if (width<=899){
         menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        list.style.display = 'block';
        isClicked = true;
    }    
  return;
}
menuIcon.addEventListener('click', ()=>{
    console.log('hi')
       smallScreen()
    
})

closeIcon.addEventListener('click', function(){
    menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        list.style.display = 'none';
})

function pageScroll() {
  if (isClicked) {
    list.style.display = 'none';
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    isClicked = false;
  }
}

window.addEventListener('scroll', ()=>{
    pageScroll()
});