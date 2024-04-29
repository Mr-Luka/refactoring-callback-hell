// Change the text to Go when clicked DONE
// Make it a circle after 2 seconds
// make i red after 0.5s

// make it square after 0.25s
// make it purple after 0.3s
// fade out after 0.5s
// finish!

const go = document.querySelector(".go");

go.addEventListener("click", function(e){
    const target = e.currentTarget;
    target.textContent = "Go!"
    setTimeout (function (){
        go.classList.add("circle");
        setTimeout(function(){
            go.classList.add("red")
            setTimeout(function(){
                go.classList.remove("circle");
                setTimeout(function(){
                    go.classList.remove("red")
                    go.classList.add("purple");
                    setTimeout(function(){
                        go.classList.add("timeOut")
                    },500)
                }, 300)
            },250)
        },500)
    },1000)

});