let t = 5;

setInterval(() => {
  t--;
  document.querySelector('.time').innerHTML = t;
}, 1000);

// setInterval(function() {

// }, 1000);

setTimeout(none, 5000);

function none() {
  document.querySelector('.alert').style.display = 'none';
}