import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const getPosts = () => {
    return async (dispatch) => {
        return await axios.get('http://localhost:3000/posts').then((res) => {
            dispatch ({type: GET_POSTS, payload: res.data});
        });
    };
};

export const ADD_POST = 'ADD_POST';

export const addPost = (data) => {
    return async (dispatch) => {
        return await axios.get('http://localhost:3000/posts', data).then((res) => {
            dispatch ({type: ADD_POST, payload: res.data});
        });
    };
};