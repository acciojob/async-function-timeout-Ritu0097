function handleSubmit() {
  const text = document.getElementById('text').value;
  const delay = parseInt(document.getElementById('delay').value);

  if (isNaN(delay) || delay < 0) {
    alert('Invalid delay value. Please enter a positive number.');
    return;
  }

  displayText(text, delay);
}

function displayText(text, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.getElementById('output').textContent = text;
      resolve();
    }, delay);
  });
}