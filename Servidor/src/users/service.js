const axios = require("axios")

const DataUsers = async(iduser) => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    let { data } = response;

    let users = data.find((user) => {
        if (iduser == user.id) {
            console.log("estoy en el if del service");
            return user
        }
    })
    return users
}

module.exports.UserService = {
    DataUsers
}