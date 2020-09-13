// Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TeamDetails from './TeamDetails'
import { Container } from '../../Styles/Helpers'
import { Loader } from '../../Styles/Loader'
import { Params } from '../../Helpers/ApiParams'
import { useLocation } from 'react-router-dom'


// Consts
const MODE = {
    LOADING: 'loading',
    DEFAULT: 'default',
    ERROR: 'error'
}

const API = 'https://api.football-data.org/v2/teams/'


// Component - this component is to show the page of uniqe team 
const TeamPage = () => {
    const [team, setTeam] = useState([])
    const [mode, setMode] = useState(MODE.LOADING)
    const pathParams = useLocation().pathname.split('/')
    const id = pathParams[2] ? pathParams[2] : ''

    // Lifecycle
    useEffect(() => {

        // Actions
        const fetchTeam = async () => {
            try {
                const { data } = await axios.get(API + id, Params)
                setTeam(data)
                setMode(MODE.DEFAULT)
            } catch (error) {
                setMode(MODE.ERROR)
            }
        }

        fetchTeam()
    }, [id])


    // Rendring
    const renderTeam = () => {
        switch (mode) {
            case MODE.ERROR:
                return (
                    <div>
                        error, please check if the path include a valid id team or try refresh the page again.
                    </div>
                )
            case MODE.DEFAULT:
                return (
                    <Container>
                        <TeamDetails team={team} />
                    </Container>
                )
            default:
                return <Loader />
        }
    }

    return renderTeam()
}

export default TeamPage