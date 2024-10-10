function TU_REST_API(){
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault(); 
      
    
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = {
            UserName: username,
            PassWord: password
        };
    
        try {
            const applicationKey = 'TUd8d8ba4c157081a816c3b4cd5af7282b9380df4a4988a2bba327a9d6f71a61e845bf92ce3cd5e6187ecfb50173242dd3';  // Application Key, which is also the access token
        
            const response = await fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json', 
                    'Application-Key': applicationKey
                },
                body: JSON.stringify(data) 
            });
        
            const result = await response.json();  
        
            if (response.ok) {
                console.log('Login successful:', result);
                document.getElementById("display-rp").innerText = `User Name: ${result.displayname_th}`
                alert('Login successful');
            } else {
                console.log('Error:', result);
                alert('Login failed: ' + result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

