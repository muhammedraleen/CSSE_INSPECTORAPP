const { URL } = require("../constants/texts");

//validating the inspector
exports.login = async (username, password) => {
    try{
        await fetch('http://192.168.8.102:8000/api/authenticate-inspector', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username,password }),
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            if (!response.isError) {
                alert(response.msg);
            } else {
                alert(response.msg,'Please retry with correct credentials');
            }
        })
    } catch (error) {
        alert('Error when authenticating, Please try again later');
        console.log(error);
    }
};


