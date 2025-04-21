function openModal() {
  document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function (event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
};
