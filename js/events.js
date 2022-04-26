document.addEventListener('DOMContentLoaded', function(){

    /* This code it's used to animate scroll button up */

    const buttonUp = document.getElementById('button_up')

    buttonUp.addEventListener('click', (i) =>{
        i.preventDefault();
        let home = i.currentTarget.getElementById('home')
        
        document.querySelector(home).scrollIntoView({
            behavior: 'smooth'
        })
    })

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