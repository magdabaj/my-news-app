import { handleError, handleResponse } from "./apiUtils";

// const api = 'http://localhost:9000/articles';
const api = 'http://localhost:51044/api/articles';
const addArticleApi = 'http://localhost:51044/api/users';

export const fetchArticles = async () => {
    const response = await fetch(api);
    const data = await response.json();
    if(response.status >= 400){
        throw new Error(data.error);
    }
    return data;
};

export const addArticle = async (article, user, tagId) => {
    return fetch(`${addArticleApi}/${user.id}/articles/${tagId}`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/jon',
            Accept: 'application/json',
            'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(article),
    })
        .then(handleResponse)
        .catch(handleError);
}