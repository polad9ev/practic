var modal = document.querySelector('#modal');
var button = document.querySelector('#button');
var close = document.querySelector('#close');
var t;

function removeModal() {
  modal.classList.remove('modal_active');
};

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  t = setTimeout(removeModal, 5000);
});

close.addEventListener('click', function () {
  clearTimeout(t);
  removeModal();
});
