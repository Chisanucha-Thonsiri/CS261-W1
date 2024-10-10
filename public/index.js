document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    try {

        const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'  
            },
            body: JSON.stringify(data)  
        });
        const result = await response.json();

        if (response.ok) {
            console.log('Login successful:', result);
            alert('Login successful');
        } else {
            console.log('Error:', result);
            alert('Login failed: ' + result.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});