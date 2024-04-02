// window.addEventListener('scroll',()=>{
//     let ScrollDistance = window.scrollY;
//       document.querySelectorAll('section').forEach((el,i) => {
//         if(el.offSetTop - document.querySelector('.navbar').clientHeight <= ScrollDistance){
//             document.querySelectorAll('.nav-link').forEach((el=>{
//             if(el.classList.contains('active')){
//                 el.classList.remove('active');
//             }
//             }))
//             document.querySelectorAll('.nav-item')[i].querySelector('.nav-link').classList.add('active')
            
//         }
//     });;
// } )
let a = [];
a = document.querySelectorAll('.nav-link');
console.log(a);
function activeNav(){
    a.forEach(el,i => {
        if(el.classList.contains('active')){
            el.classList.remove('active');
        }
        else{
            el.classList.add('active')
        };
    });
}
a.onclick = activeNav();