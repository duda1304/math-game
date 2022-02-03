async function checkUser() {
    const data = {
        "auth_key" : localStorage.getItem("token")
    }
    
    const res = await fetch(process.env.REACT_APP_BASE_URL + "/server/checkUser.php", {
            method: 'POST', 
            body: JSON.stringify(data) 
        })

    const response = await res.json();

    return response;
}

export default checkUser;

