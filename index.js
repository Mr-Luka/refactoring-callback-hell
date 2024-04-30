// Change the text to Go when clicked DONE
// Make it a circle after 2 seconds
// make i red after 0.5s

// make it square after 0.25s
// make it purple after 0.3s
// fade out after 0.5s
// finish!

const go = document.querySelector(".go");



const wait = (ms= 0)=> new Promise(resolve => setTimeout(resolve, ms))

wait(2000).then(()=>console.log(`Done!`))

function animate(e){
    const el = e.currentTarget;
    el.textContent = "Go!"

    wait(200)
    .then(()=>{
        el.classList.add("circle");
        return wait(500)
    })
    .then(()=>{
        el.classList.add("red")
        return wait(250)
    })
    .then(()=>{
        el.classList.remove("circle");
        return wait(500);
    })
    .then(()=>{
        el.classList.remove("red")
        el.classList.add("purple");
        return wait(500)
    })
    .then(()=>{
        el.classList.add("timeOut")
    })
    
}
go.addEventListener("click", animate)
// go.addEventListener("clickxxx", function(e){
//     const el = e.currentTarget;
//     el.textContent = "Go!"
//     setTimeout (function (){
//         el.classList.add("circle");
//         setTimeout(function(){
//             el.classList.add("red")
//             setTimeout(function(){
//                 el.classList.remove("circle");
//                 setTimeout(function(){
//                     el.classList.remove("red")
//                     el.classList.add("purple");
//                     setTimeout(function(){
//                         el.classList.add("timeOut")
//                     },500)
//                 }, 300)
//             },250)
//         },500)
//     },1000)
// });