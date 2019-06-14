var modal = document.querySelector('#modal');
var button = document.querySelector('#button');
var close = document.querySelector('#close')

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});