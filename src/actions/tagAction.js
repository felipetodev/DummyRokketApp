import axios from 'axios'
import { APP_ID, tagPostURL } from '../api'

export const loadPostsByTag = (id) => async (dispatch) => {
    const options = {
        headers: {
            'app-id': APP_ID
        }
    }

    const tagData = await axios.get(tagPostURL(id), options)
    console.log(tagData)
    
    dispatch({
        type: 'GET_TAG',
        payload: {
            tag: tagData.data.data,
        }
    })
}
