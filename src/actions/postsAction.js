import axios from 'axios'
import { APP_ID, userPostURL } from '../api'

export const loadPosts = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_DETAIL",
    })

    const options = {
        headers: {
            'app-id': APP_ID
        }
    }

    const postData = await axios.get(userPostURL(id), options)
    
    dispatch({
        type: 'GET_POST',
        payload: {
            post: postData.data.data,
        }
    })
}
