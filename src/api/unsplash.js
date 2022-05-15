import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID qvrk66JXba23gONZ2SfqBHXXA0mZyIicudLwNXxDUb0',
        'Cache-Control': 'No-Cache'
    }
    
});