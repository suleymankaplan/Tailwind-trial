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
const slide=document.querySelectorAll(".slide")
const product1=document.querySelector(".product-page1")
const product2=document.querySelector(".product-page2")
slide.forEach(slide=>{
    slide.addEventListener('click',()=>{
        console.log(product1.classList.contains('flex'))
        console.log(product1.classList.contains('hidden'))
        if(product1.classList.contains('hidden')){
            console.log("girdi")
            product1.classList.remove('hidden')
            product1.classList.add('flex')
            product2.classList.remove('flex')
            product2.classList.add('hidden')
        }
        else if(product1.classList.contains('flex')){
            product1.classList.remove('flex')
            product1.classList.add('hidden')
            product2.classList.remove('hidden')
            product2.classList.add('flex')
        }
    })
})
const proBox=document.querySelectorAll(".product-box")
proBox.forEach(box=>{
    let src=box.children[0].getAttribute("src")
    box.addEventListener('mouseover',()=>{
        let newsrc = src.replace(/-(\d+)\.webp$/, '-2.webp');
        box.children[0].setAttribute("src",newsrc)
        box.children[2].style.display="flex"
    })
    box.addEventListener('mouseout',()=>{
        box.children[2].style.display="none"
        box.children[0].setAttribute("src",src)
    })
})
const addToCartPage=document.querySelector(".add-to-cart-page")
function cartBox(){
    addToCartPage.style.display="block"
}