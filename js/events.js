document.addEventListener('DOMContentLoaded', function(){

    /* This code it's used to animate scroll button up */
    
    //Get the button:
    buttonUp = document.getElementById("button-up");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            buttonUp.style.display = "block";
        } else {
            buttonUp.style.display = "none";
        }
    }

    buttonUp.addEventListener('click', () =>{
        topFunction()
    })

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

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
})