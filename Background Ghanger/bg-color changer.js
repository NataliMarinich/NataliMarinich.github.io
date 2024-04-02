let color = ['red', 'blue', 'yellow','green','brown'];
let i=0;
function chcolor(){
     i++;  
     if(i>color.length) {
        i = 0;
     } 
        document.querySelector('.color-block').style.backgroundColor = color[i];
    }
document.querySelector('.changer').onclick = chcolor;