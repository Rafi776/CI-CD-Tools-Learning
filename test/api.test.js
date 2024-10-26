// test/api.test.js
import chai from 'chai';
import { fetchapiPosts, fetchPosts, fetchRandomDogImage, createPost } from '../src/api.js';

const { expect } = chai;

describe('Public API Integration Tests', () => {
    it('should fetch posts from JSONPlaceholder', async () => {
        const posts = await fetchPosts();
        expect(posts).to.be.an('array');
        expect(posts.length).to.be.greaterThan(0);
        expect(posts[0]).to.have.property('title');
    });

    it('should fetch a random dog image', async () => {
        const data = await fetchRandomDogImage();
        expect(data).to.have.property('message');
        expect(data.message).to.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/);
        expect(data).to.have.property('status', 'success');
    });

    it('should fetch posts from API', async () => {
        const posts = await fetchapiPosts();
        expect(posts).to.be.an('array');
        expect(posts.length).to.be.greaterThan(0);
        expect(posts[0]).to.have.property('title');
    });

    it('should create a new post', async () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        const createdPost = await createPost(newPost);

        // Verify that the created post matches the expected structure
        expect(createdPost).to.have.property('id');
        expect(createdPost.title).to.equal(newPost.title);
        expect(createdPost.body).to.equal(newPost.body);
        expect(createdPost.userId).to.equal(newPost.userId);

        it('should fetch a specific post by ID', async () => {
            const postId = 1; // Change this to a valid post ID
            const post = await fetchPostById(postId);
            
            expect(post).to.have.property('id', postId);
            expect(post).to.have.property('title');
        });

});

});
