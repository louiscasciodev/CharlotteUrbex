const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');

console.log(modal);

const openModalFunction = openModal.addEventListener('click', () => {
  event.preventDefault();
  modal.style.display = 'block';
})

const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', () => {
  event.preventDefault();
  modal.style.display = 'none';
})