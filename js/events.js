document.addEventListener('DOMContentLoaded', function(){
    const buttonUp = document.getElementById('button_up')



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