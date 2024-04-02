let a = 0;
function Pl(){
    a++;
    document.querySelector('input').value = a;
}
function Min(){
    a--;
    document.querySelector('input').value = a;
    if(document.querySelector('input').value<= 0){
        document.querySelector('input').value = 0;
        return a=0;
    }
}
document.querySelector('.plus').onclick = Pl;
document.querySelector('.minus').onclick = Min;
