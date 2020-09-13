// Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamDetails from './TeamDetails'
import { Container } from '../../Styles/Helpers'
import { Loader } from '../../Styles/Loader'
import { Params } from '../../Helpers/ApiParams'


// Consts
const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const API = 'https://api.football-data.org/v2/teams/'


// Component
const TeamPage = (props: any) => {
    const [team, setTeam] = useState([])
    const [mode, setMode] = useState(MODE.LOADING)


    // Lifecycle
    useEffect(() => {
        fetchTeams()
    }, [])


    // Actions
    const fetchTeams = async () => {
        const pathParams = props.history.location.pathname.split('/')

        if (pathParams[2]) {
            const id = pathParams[2]

            try {
                const { data } = await axios.get(API + id, Params)
                setTeam(data)
                setMode(MODE.DEFAULT)
            } catch (error) {
                setMode(MODE.ERROR)
            }
        } else {
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
                return <Loader />
        }
    }

    return renderTeam()

}

export default TeamPage