document.addEventListener('DOMContentLoaded', function(){

    /* This code it's used to animate scroll button up */
    /*
    const buttonUp = document.getElementById('button-up')

    window.onscroll = function(){scrollFunction()};

    function scrollFunction(){
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            buttonUp.style.display = "block";
        }else{
            buttonUp.style.display = "none";
        }
    }
    */

    $(document).ready(function(){

        $('.button-up').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.button-up').slideDown(300);
            } else {
                $('.button-up').slideUp(300);
            }
        });
    
    });

    /* This code it's used for animate the items of nav menu */

    let move_to = document.getElementsByClassName('item__reference')

    move_to.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.currentTarget.getAttribute('href');
            
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            })

        })
    });

    /* This code hidden the buttons when the client scroll down the page */

    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if(prevScrollPos > currentScrollPos){
            document.getElementById('buttons-header').style.top = "0";
        } else {
            document.getElementById('buttons-header').style.top = "-5rem"
        }
        prevScrollPos = currentScrollPos
    }

})