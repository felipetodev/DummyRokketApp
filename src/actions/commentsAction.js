import axios from 'axios'
import { dummyCommentURL } from '../api'

const loadComments = (id) => async (dispatch) => {
    const options = {
        headers: {
            'app-id': APP_ID
        }
    }

    const commentData = await axios.get(dummyCommentURL(id), options)
    
    dispatch({
        type: 'GET_COMMENT',
        payload: {
            comment: commentData.data.data,
        }
    })
}
