import axios from 'axios'
import { APP_ID, dummyUserURL } from '../api'

export const loadDummy = () => async (dispatch) => {
    const param = {
        headers: {
            'app-id': APP_ID
        },
    }

    const userData = await axios.get(dummyUserURL(), param)
    // console.log('usuarios', userData.data.data)

    dispatch({
        type: 'FETCH_DUMMY',
        payload: {
            user: userData.data.data,
        }
    })
}