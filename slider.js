let allItems=$('#menu>ul>.menuItem')
let count=allItems.length
highLight()
console.log(allItems.length)
function highLight(){
  let s=0;
  for(let i=0;i<count;i++){
    $(allItems[i]).on('click',function(x){
      let index=$(x.currentTarget).index()-1
      let m=index*-920
      $('#slides').css({
        'margin-left':m+'px'
      })
      allItems.eq(index).addClass('active').siblings().removeClass('active');
    }) 
  } 
}


function setTimer(){
  let n=0
  return setInterval(function(){
    n=n+1
    console.log(n%count)
    allItems.eq(n%count).trigger('click')
    
  },2000)
}

let timer = setTimer()
$('#wrapper').on('mouseleave', function () {
  timer = setTimer() 
})

$('#wrapper').on('mouseenter', function () {
  window.clearInterval(timer)
})