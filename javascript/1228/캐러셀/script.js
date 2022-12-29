let no = 1; // html연관된건 없음 걍 번호임
const carousel = $('.carousel');

$('.previous').on('click', function() {
  
  if(no > 1) {
    carousel.css('transform', `translateX(-${no-2}00vw)`);
    no--;
  }
  console.log(no);

});


$('.next').on('click', function() {

  if(no < 3) {
    carousel.css('transform', `translateX(-${no}00vw)`);
    no++;
  }
  // if(no === 1) {
  //   $('.carousel').css('transform', 'translateX(-' + no + '00vw)');
  //   no++;
  // } else if(no === 2) {
  //   $('.carousel').css('transform', `translateX(-${no}00vw)`);
  //   no++;
  // } 

});

document.querySelector('.btn1').addEventListener('click', function() {

  document.querySelector('.carousel').style.transform = 'translateX(0)';
  no = 1;
});

$('.btn2').on('click', function() {
  $('.carousel').css('transform', 'translateX(-100vw)');
  no = 2;
});

$('.btn3').on('click', function() {
  $('.carousel').css('transform', 'translateX(-200vw)');
  no = 3;
});