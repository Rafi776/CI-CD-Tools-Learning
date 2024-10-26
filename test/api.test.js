import chai from 'chai';
import { fetchPosts, fetchRandomDogImage } from '../src/api';

const {expect} = chai;

describe('Public API Integration Tests', () => {
    it('should fetch posts from JSONPlaceholder', async () => {
        const posts = await fetchPosts();
        expect(posts).to.be.an('array');
        expect(posts.length).to.be.greaterThan(0);
        expect(posts[0]).to.have.property('title');
    });

    it ('should fetch a random dog image', async () => {
        const data = await fetchRandomDogImage();
        expect (data).to.have.property('message');
        expect(data.message).to.match(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/);
        expect (data).to.have.property('status', 'success');
    })

});