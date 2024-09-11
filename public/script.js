const menuElement=document.querySelectorAll(".menu-text")
console.log(menuElement)
menuElement.forEach(text => {
    text.addEventListener('mouseover',function(){
        //console.log(text.parentElement.children[1])
        text.parentElement.children[1].classList.remove("hidden")
    })
    text.addEventListener('mouseout',function(){
        text.parentElement.children[1].classList.add("hidden")
    })
});