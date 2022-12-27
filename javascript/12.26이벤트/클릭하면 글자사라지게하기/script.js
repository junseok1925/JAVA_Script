//js
document.querySelector('#btn').addEventListener('click',function(){
  document.querySelector('#text').style.display='none';
});

//jQuery
$('#btn').on('click',function(){
  $('#text').css('display','none');
});
