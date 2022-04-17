document.addEventListener('DOMContentLoaded', function() {
    const closebtn = document.querySelector('.closebtn');
    const opennav = document.querySelector('.opennav');
    opennav.addEventListener('click', openNav);
    closebtn.addEventListener('click', closeNav);

    function openNav() {
        document.querySelector('#myNav').style = 'hight: 100%; width: 100%;';
        document.querySelector('html').classList.add('lock');
    }

    function closeNav() {
        document.querySelector('#myNav').style = 'hight: 0%; width: 0%;';
        document.querySelector('html').classList.remove('lock');
    }
})