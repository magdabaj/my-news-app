import { handleError, handleResponse } from "./apiUtils";

const api = 'http://localhost:9000/articles';

export const fetchArticles = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.error);
    }
    return data;
};
