import { handleError, handleResponse } from "./apiUtils";

const api = 'http://localhost:9000/tags';

export const fetchTags = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.error);
    }
    return data;
};

export const getArticlesByTag = tagId => {
    // todo get articles by tag name
};