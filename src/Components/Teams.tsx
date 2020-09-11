// Imports
import React, { useEffect, useState, FunctionComponent } from 'react'
import axios from 'axios'

const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const Teams = () => {
    const [teams, setTeams] = useState([])
    const [mode, setMode] = useState(MODE.LOADING)


    // Lifecycle
    useEffect(() => {
        fetchTeams()
    }, [])


    // Actions
    const fetchTeams = async () => {
        let params = {
            headers: {
                "X-Auth-Token": "104b49bdab0c4562960e71ae37c1dd33",
                "content-type": "application/json"
            }
        };

        try {
            const { data } = await axios.get('http://api.football-data.org/v2/competitions/2021/teams', params)
            if (data.teams) {
                setTeams(data.teams)
                setMode(MODE.DEFAULT)
            }
        } catch (error) {
            setMode(MODE.ERROR)
        }
    };


    // Rendring
    const renderTeams = () => {
        switch (mode) {
            case MODE.ERROR:
                return (
                    <div>
                        error
                    </div>
                )
            case MODE.DEFAULT:
                return (
                    <div>
                        default
                    </div>
                )
            case MODE.LOADING:
                return (
                    <div>
                        loading
                    </div>
                )
            default:
                return (
                    <div>
                        DEFAULT
                    </div>
                )
        }
    }

    return renderTeams()

}

export default Teams