document.addEventListener('DOMContentLoaded', function(){

    const DarkMode = document.getElementById('button--dark-mode'),
          LightMode = document.getElementById('button--light-mode'),
          Body = document.getElementById('body')

    if(DarkMode){
        DarkMode.addEventListener('click', () =>{
            Body.classList.add('dark-mode')
            LightMode.classList.add('show-icon')
            DarkMode.classList.add('remove-icon')
        })
    }

    if(LightMode){
        LightMode.addEventListener('click', () =>{
            Body.classList.remove('dark-mode')
            LightMode.classList.remove('show-icon')
            DarkMode.classList.remove('remove-icon')
        })
    }

})