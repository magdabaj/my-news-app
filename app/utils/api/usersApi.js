import { handleError, handleResponse } from "./apiUtils";

// const api = 'http://localhost:9000/users';
const api = 'http://localhost:51044/api/users';

export const fetchUsers = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.error);
    }
    return data;
};

export const loginUser = async (email,password) => {
    return fetch(`${api}/authenticate`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({"email": email, "password": password})
    })
        .then(handleResponse)
        .catch(handleError)
};