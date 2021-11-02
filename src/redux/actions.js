import { ADD_POST } from './types';

export function createPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  };
}
