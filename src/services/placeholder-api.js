import wretch from 'wretch'

const setUpApi = wretch().url('https://jsonplaceholder.typicode.com/')

export const fetchPosts = handler => {
  setUpApi
    .url('posts/')
    .get()
    .json(handler)
}

export default setUpApi
