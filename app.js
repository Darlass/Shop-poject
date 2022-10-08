// add to cart
let productsCount = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".two");
addToCartBtns.forEach((item) => {
    item.addEventListener("click",function () {
        let pCount = productsCount.textContent;
        productsCount.textContent = +pCount + 1;
        
    });
});
//like
let like = document.querySelectorAll(".like");
like.forEach((item) => {
    item.addEventListener("click", function() {
       item.classList.toggle("liked")
    })
})
// button more info
let modal = document.querySelector(".modal");
let moreDetails = document.querySelectorAll(".more-details")
let btnClose = document.querySelector(".btn-close");
function showModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
};
function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
};
moreDetails.forEach((item) => {
item.addEventListener("click", showModal)
})
btnClose.addEventListener("click", closeModal);
//click modal
modal.addEventListener("click", function(event){
    console.log(event)
    console.log(event.target) 
    if(event.target === modal){
        closeModal();
    }
})
//slide
$(".slide").slick({
        dots: true
});
//scroll
let scrollHeight = document.documentElement.clientHeight;
let skroll = window.pageYOffset;

function scrollFunction() {
    if (
      document.body.scrollTop > scrollHeight / 2 || document.documentElement.scrollTop > scrollHeight / 2)
    { 
      modal.classList.add("show");
      modal.classList.remove("hide");
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  
 




   


