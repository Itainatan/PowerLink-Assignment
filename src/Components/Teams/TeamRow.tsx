// Imports
import React from "react"
import { Square } from "../../Styles/Helpers"


// Interfaces
interface Team {
    name: string,
    founded: string,
    address: string,
    id: string
}

interface Props {
    team: Team
}


// Component - this component show the squrares information for the teams table
const TeamRow = (props: Props) => {

    const { team } = props


    // Rendering
    return (
        <>
            <Square>{team.name}</Square>
            <Square>{team.founded ? team.founded : '---'}</Square>
            <Square>{team.address ? team.address : '---'}</Square>
        </>
    )
}

export default TeamRow