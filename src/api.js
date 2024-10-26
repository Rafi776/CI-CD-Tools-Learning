import axios from 'axios';

const API_URLS = {
    jsonPlaceholder: 'https://jsonplaceholder.typicode.com';
    dogApi: 'https://dog.ceo/api/breeds/image/random';
};

export const fetchPosts = async() => {
    const response = await axios.get(`${API_URLS.jsonPlaceholder}/posts`);
    return response.data;
};

export const fetchRandomDogImage = async () => {
    const response = await axios.get(API_URLS.dogApi);
    return response.data;
};