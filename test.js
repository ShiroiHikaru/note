function menuHover(){
    document.getElementById('mainNavList').addEventListener('mouseover', function(){
        document.getElementsByClassName('subNav').style.display = 'block';
    })
}