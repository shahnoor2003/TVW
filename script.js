const navclick =document.querySelector('#nav-icon') ;
    navclick.addEventListener('click',()=>{
    document.querySelector('.sidebar-navigation').classList.toggle('slide');
    navclick.classList.toggle('rotate');
  });
 