import axios from 'axios';

function getUsers() {
    return axios.get("users");
}
export {
    getUsers
}