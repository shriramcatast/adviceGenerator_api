var actual_advice=document.querySelector('.actual-advice');
var header=document.querySelector('.header');
var cube=document.querySelector('.cube');
cube.addEventListener("click",function(){
    fetch("https://api.adviceslip.com/advice").then(function(response){ response.json().then(function(data){
    header.textContent=`ADVICE #${data["slip"].id}`;
    actual_advice.textContent=data["slip"].advice;
})});
});