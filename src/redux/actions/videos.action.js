import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionType"
import request from '../../api'

export const getPopularVideos = () => async dispatch => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST,
        })
        const { data } = await request.get("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "IN",
                maxResults: 20,
                pageToken: '',
            }
        })
        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
            },
        })
    } catch (err) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: err.message
        })
    }
}