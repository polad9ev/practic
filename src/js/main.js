var modal = document.querySelector('#modal');
var button = document.querySelector('#button');
var close = document.querySelector('#close');

function removeModal() {
  modal.classList.remove('modal_active');
};

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(removeModal, 5000);
});

close.addEventListener('click', function () {
  removeModal();
});

// clearTimeout(removeModal);