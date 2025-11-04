// your JS code here
window.addEventListener('DOMContentLoaded', () => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const existingBtn = document.getElementById('existing');
  const submit = document.getElementById('submit');

  // Check if saved credentials exist
  const saved = localStorage.getItem('savedCredentials');
  if (saved) {
    existingBtn.style.display = 'block';
  }

  // Submit button click
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert('Please enter username and password!');
      return;
    }

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      const credentials = { username, password };
      localStorage.setItem('savedCredentials', JSON.stringify(credentials));
    } else {
      // Remove saved credentials
      localStorage.removeItem('savedCredentials');
    }
  });

  // Existing user login
  existingBtn.addEventListener('click', () => {
    const saved = JSON.parse(localStorage.getItem('savedCredentials'));
    if (saved && saved.username) {
      alert(`Logged in as ${saved.username}`);
    }
  });
});
