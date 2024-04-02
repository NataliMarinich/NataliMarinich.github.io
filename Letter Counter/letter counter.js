let inP = document.querySelector('input');
let out = document.querySelector('.out');
let a = 0;
function inp(event){
   console.log(event.code)
   if(event.code !== 'Backspace'){
      a++;   
   }
   else{
      a--; 
      if(inP.value<= 0){
         inP.value = 0;
         return a=0;
         }   
   }
   out.innerHTML = 'Letter Count' + ':' +a;
}
inP.onkeydown = inp;