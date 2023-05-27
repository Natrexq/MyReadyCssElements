
// ! IMPORTANT! It's first version of script. It must only work. Soon i will update it

let faqButton1 = document.getElementById("faq-but1");
let faqDetails1 = document.getElementById("faq-del1");

let faqButton2 = document.getElementById("faq-but2");
let faqDetails2 = document.getElementById("faq-del2");

let faqButton3 = document.getElementById("faq-but3");
let faqDetails3 = document.getElementById("faq-del3");


faqButton1.addEventListener("click", () => {
    faqDetails1.classList.toggle("faq-details-showed");
})
faqButton2.addEventListener("click", () => {
    faqDetails2.classList.toggle("faq-details-showed");
})
faqButton3.addEventListener("click", () => {
    faqDetails3.classList.toggle("faq-details-showed");
})
