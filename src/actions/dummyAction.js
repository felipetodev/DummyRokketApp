import axios from 'axios'
import { APP_ID, dummyUserURL } from '../api'

export const loadDummy = () => async (dispatch) => {
    const options = {
        headers: {
            'app-id': APP_ID
        }
    }

    const userData = await axios.get(dummyUserURL(), options)

    // console.log('ACTION >>', userData.data)

    dispatch({
        type: 'FETCH_DUMMY',
        payload: {
            user: userData.data.data,
        }
    })
}