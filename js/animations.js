document.addEventListener('DOMContentLoaded', function(){
    /* Menu Show & Hidden */

    const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')
          
    /* Nav Open */      
    /* Validate if constant exists */

    if (navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
            navToggle.classList.add('remove-toggle')
        })
    }

    /* Nav Close */
    /* Validate if constant exists */

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
            navToggle.classList.remove('remove-toggle')
        })
    }

    /* Remove Mobile selection NAV */

    const navItem = document.querySelectorAll('.item__reference')

    function navLink(){
        navMenu.classList.remove('show-menu')
        navToggle.classList.remove('remove-toggle')
    }
    navItem.forEach(n => n.addEventListener('click', navLink))

    /* This code hide the nav and button dark/light */

    const buttonsNav = document.getElementById('buttons-header')

    window.onscroll = function() {animateNav()}

    function animateNav(){
        if(document.documentElement.scrollTop > -20){
            buttonsNav.classList.add('show-nav')
        }else{
            buttonsNav.classList.remove('show-nav')
        }
    }

})