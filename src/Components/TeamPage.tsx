// Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamDetails from './TeamDetails'
import { Container } from '../Styles/Helpers'
import { Loader } from '../Styles/Loader'


// Consts
const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const API = 'https://api.football-data.org/v2/teams/57'

const TeamPage = () => {
    const [team, setTeam] = useState([])
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
        }

        try {
            const { data } = await axios.get(API, params)
            setTeam(data)
            setMode(MODE.DEFAULT)
        } catch (error) {
            setMode(MODE.ERROR)
        }
    }


    // Rendring
    const renderTeam = () => {
        switch (mode) {
            case MODE.ERROR:
                return (
                    <div>
                        error
                    </div>
                )
            case MODE.DEFAULT:
                return (
                    <Container>
                        <TeamDetails team={team} />
                    </Container>
                )
            case MODE.LOADING:
                return <Loader />
            default:
                return (
                    <div>
                        fd
                    </div>
                )
        }
    }

    return renderTeam()

}

export default TeamPage