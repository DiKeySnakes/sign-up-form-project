function changeTypeX() {
  const x = document.getElementById('password');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}

function changeTypeY() {
  const y = document.getElementById('confirm-password');
  if (y.type === 'password') {
    y.type = 'text';
  } else {
    y.type = 'password';
  }
}
