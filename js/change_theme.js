document.addEventListener('DOMContentLoaded', function(){

    /* This code change the theme color */

    const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('theme', 'light');
                } else {
                    document.documentElement.setAttribute('theme', 'dark');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);

})