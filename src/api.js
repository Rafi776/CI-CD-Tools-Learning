// src/api.js
import axios from 'axios';

const API_URLS = {
    jsonPlaceholder: 'https://jsonplaceholder.typicode.com',
    dogApi: 'https://dog.ceo/api/breeds/image/random',
    apiPosts: 'https://jsonplaceholder.typicode.com/posts'
};

export const fetchPosts = async () => {
    const response = await axios.get(`${API_URLS.jsonPlaceholder}/posts`);
    return response.data;
};

export const fetchRandomDogImage = async () => {
    const response = await axios.get(API_URLS.dogApi);
    return response.data;
};

export const fetchapiPosts = async () => {
    const response = await axios.get(API_URLS.apiPosts);
    return response.data;
};


export const createPost = async (postData) => {
    const response = await axios.post(API_URLS.apiPosts, postData);
    return response.data;
};

export const fetchPostById = async (id) => {
    const response = await axios.get(`${API_URLS.apiPosts}/${id}`);
    return response.data;
};