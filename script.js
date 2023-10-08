//your JS code here. If required.
if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
            const existingButton = document.createElement('button');
            existingButton.id = 'existing';
            existingButton.textContent = 'Login as existing user';

            existingButton.addEventListener('click', () => {
                const savedUsername = localStorage.getItem('savedUsername');
                alert(`Logged in as ${savedUsername}`);
            });

            document.body.appendChild(existingButton);
        }

        // Form submit event
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            if (remember) {
                localStorage.setItem('savedUsername', username);
                localStorage.setItem('savedPassword', password);
            } else {
                localStorage.removeItem('savedUsername');
                localStorage.removeItem('savedPassword');
            }

            alert(`Logged in as ${username}`);
        });
