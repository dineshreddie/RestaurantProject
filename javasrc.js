
let menu=document.querySelector("#bars");
let nabar=document.querySelector(".navbar");
menu.onclick=()=>{
  menu.classList.toggle("fa-times");
  nabar.classList.toggle('active');
}