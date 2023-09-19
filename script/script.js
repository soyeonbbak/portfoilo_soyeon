$('.sns_design:nth-child(1)').on('click',function(){
    $('.sns_img').removeClass();
    $('.sns_img:nth-child(1)').show()
})
// sns 클릭 시 이미지 보이기
const snsDs = document.querySelectorAll('.sns_design > a')
const snsImg = document.querySelectorAll('.sns_img > img')
console.log(snsDs, snsImg)
// snsDs.forEach(function(target, index){
//     target.addEventListener('click', function(e){
//         e.preventDefault();
//         modal_sns[index].classList.add('active')
//     })
//     for(let i of modal_sns){i.addEventListener('click', function(){
//         i.classList.remove('active')
//     })}
// })