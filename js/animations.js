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

    const buttonDm = document.getElementById('button--dark-mode'),
          buttonLm = document.getElementById('button--light-mode')

    window.onscroll = function() {hideNav()}
    window.onscroll = function() {showNav()}

    function hideNav(){
        if(document.body.scrollTop < 20 || document.documentElement.scrollTop < 20){
            navToggle.classList.add('hide_buttons')
            buttonDm.classList.add('hide_buttons')
            buttonLm.classList.add('hide_buttons')
        }
    }
/*
    function showNav(){
        if(document.body.scrollTop){

        }
    }
*/
})