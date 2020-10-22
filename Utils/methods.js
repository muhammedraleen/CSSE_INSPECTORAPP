const { URL } = require("../constants/texts");

//validating the inspector
exports.login = async (username, password) => {
    try{
        await fetch('http://192.168.8.101:8000/api/authenticate-inspector', {
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

//geting halts
exports.gethalts = async (route) => {
    try{
        await fetch('http://192.168.8.101:8000/api/viewInspectorRouteHalts', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ route }),
        })
        .then((res) => res.json())
        .then((response) => {
            console.log(response);
            if (!response.isError) {
                return (Object.values(response.halts));
            } else {
                alert('Please retry with correct route');
            }
        })
    } catch (error) {
        alert('Error when authenticating, Please try again later');
        console.log(error);
    }
};

//adding badCustomer
exports.addBadCustomer = async (badCustomer,props) => {
    try{
        await fetch('http://192.168.8.101:8000/api/createBadCustomer', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ badCustomer }),
        })
        {props.navigation.navigate('Home')};
    } catch (error) {
        alert('Error when authenticating, Please try again later');
        console.log(error);
    }
};