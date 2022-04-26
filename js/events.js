document.addEventListener('DOMContentLoaded', function(){

    /* This code it's used to animate scroll button up */
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#button-up').fadeIn(); 
        } else { 
            $('#button-up').fadeOut(); 
        } 
    });

    $('#button-up').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
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