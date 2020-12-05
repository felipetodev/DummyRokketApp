import axios from 'axios'
import { APP_ID, dummyTagURL } from '../api'

export const loadTags = () => async (dispatch) => {
    const options = {
        headers: {
            'app-id': APP_ID
        }
    }

    const tagData = await axios.get(dummyTagURL(), options)
    
    dispatch({
        type: 'GET_TAG',
        payload: {
            tag: tagData.data.data,
        }
    })
}
