const base_url = 'https://dummyapi.io/data/api';
export const APP_ID = '5fcbd801421b89e5061d4a28';

//ENDPOINTS
export const dummyUserURL = () => `${base_url}/user`
export const dummyPostURL = () => `${base_url}/post`
// export const dummyCommentURL = () => `${base_url}/comment`
export const dummyTagURL = () => `${base_url}/tag`

export const userPostURL = (user_id) => `${base_url}/user/${user_id}/post`
export const tagPostURL = (input_tag) => `${base_url}/tag/${input_tag}/post`