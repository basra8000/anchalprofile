let pageForm = document.querySelector("form");
let inputHidden = document.getElementById("inputBox")

pageForm.elements.whatabout[0].addEventListener("click" , function(){
    inputHidden.style.display = "none"
})

pageForm.elements.whatabout[1].addEventListener("click" , function(){
    inputHidden.style.display = "none"
})

pageForm.elements.whatabout[2].addEventListener("click" , function(){
    inputHidden.style.display = "block"
})