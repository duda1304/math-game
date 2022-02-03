async function login(form) {
    const data = {
        "email" : form.elements.email.value,
        "password" : form.elements.password.value
    }
    
    const res = await fetch(process.env.REACT_APP_BASE_URL + "/server/login.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}

export default login;

