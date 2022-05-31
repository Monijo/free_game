import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_HOST, API_KEY} from "../components/constants/constants";

function useFetchGame(id) {

    const [game, setGame] = useState({})

    useEffect(() => {
        getData(id)
    }, [])

    const getData = (id) => {
        axios.get(`/game`, {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Host': API_HOST,
                'X-RapidAPI-Key': API_KEY
            },
            params: {
                id,
            }
        }).then(resp => {
            if (resp.data.status !== 0) {

                setGame(resp.data)
            } else {

                setGame([])
            }
        }).catch(err => setGame({}))
    }

    return {game}
}

export default useFetchGame;
