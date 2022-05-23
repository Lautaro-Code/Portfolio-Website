document.addEventListener('DOMContentLoaded', function(){

    /* This code change the theme color */

    const changeDM = document.getElementById('change-dk-mode'),
          changeLM = document.getElementById('change-lg-mode')

    if (changeDM){
            setTheme('dark')
            changeDM.classList.add('remove-theme-toggle')
            changeLM.classList.remove('show-theme-toggle')
    }
    else{
            setTheme('light');
            changeLM.classList.add('remove-theme-toggle')
            changeDM.classList.remove('show-theme-toggle')
    }

    setTheme(theme) = () => {
        if(theme === 'dark'){
            document.documentElement.style.setproperty('--main-bg', 'rgb(45, 37, 50)');
            document.documentElement.style.setproperty('--main-text', '#f5f5f5');
        }else{
            document.documentElement.style.setproperty('--main-text', 'rgb(45, 37, 50)');
            document.documentElement.style.setproperty('--main-bg', '#f5f5f5');
        }
    }

})