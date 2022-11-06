const x = document.getElementById('password');
const y = document.getElementById('confirm-password');
const form = document.getElementById('form');

function changeTypeX() {
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

function changeTypeY() {
  if (y.type === 'password') {
    y.type = 'text';
  } else {
    y.type = 'password';
  }
}

form.addEventListener('submit', (e) => {
  if (x.value !== y.value) {
    e.preventDefault();
    alert('Your passwords do not match!');
  }
});
