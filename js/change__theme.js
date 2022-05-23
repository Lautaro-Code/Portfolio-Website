document.addEventListener('DOMContentLoaded', function(){

    /* This code change the theme color */

    const changeDM = document.getElementById('change-dk-mode'),
          changeLM = document.getElementById('change-lg-mode'),

    const body = document.querySelector('body'),
          initialTheme = 'light'

    const setTheme = (theme) => {
        localStorage.setItem('theme', theme)
        body.setAttribute('data-theme', theme)
    }

    const toggleTheme = () => {
        const activeTheme = localStorage.getItem('theme');

        if (activeTheme === 'light'){
            setTheme('dark')
            changeDM.classList.add('remove-theme-toggle')
            changeLM.classList.remove('show-theme-toggle')
        }
        else{
            setTheme('light');
            changeLM.classList.add('remove-theme-toggle')
            changeDM.classList.remove('show-theme-toggle')
        }
    }

    const setThemeOnInit = () => {
        const savedTheme = localStorage.getItem('theme');
        savedTheme
            ? body.setAttribute('data-theme', savedTheme)
            : setTheme(initialTheme);
    }

    setThemeOnInit()

    if(changeDM || changeLM){
        changeDM.addEventListener('click', () => toggleTheme())
        changeLM.addEventListener('click', () => toggleTheme())
    }



})