function menu(){
    document.getElementById('mainli').addEventListener('mouseover', function(){
        document.getElementById('sub').style.display = 'block';
    }) 
    document.getElementById('mainli').addEventListener('mouseout', function(){
        document.getElementById('sub').style.display = 'none';
    })    
}