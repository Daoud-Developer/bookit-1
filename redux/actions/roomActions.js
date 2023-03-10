import axios from "axios";
import { getAbsoluteUrl } from 'next-absolute-url'

import {
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS

} from '../constants/roomConstants'

// Get all rooms
export const getRooms = (req) => async (dispatch) => {

    try {

        const {origin} = getAbsoluteUrl(req)

        const {data} = await axios.get(`${origin}/api/rooms`)

        dispatch({
            type: ALL_ROOMS_SUCCESS,
            payload: data
        })

    } 
    catch (error) {
        dispatch({
            type: ALL_ROOMS_FAIL,
            payload: error.response
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}




