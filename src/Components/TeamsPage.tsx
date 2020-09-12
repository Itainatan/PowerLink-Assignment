// Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamsTable from './TeamsTable'
import { Container } from '../Styles/Helpers'
import { Loader } from '../Styles/Loader'
import { Params } from '../Helpers/ApiParams'


// Consts
const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const API = 'https://api.football-data.org/v2/competitions/2021/teams'

const TeamsPage = () => {
    const [teams, setTeams] = useState([])
    const [mode, setMode] = useState(MODE.LOADING)


    // Lifecycle
    useEffect(() => {
        fetchTeams()
    }, [])


    // Actions
    const fetchTeams = async () => {
        try {
            const { data } = await axios.get(API, Params)
            if (data.teams) {
                setTeams(data.teams)
                setMode(MODE.DEFAULT)
            }
        } catch (error) {
            setMode(MODE.ERROR)
        }
    }


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
                    <Container>
                        <TeamsTable teams={teams} />
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

    return renderTeams()

}

export default TeamsPage