// Imports
import React from "react"
import { Square, AStyle } from "../Styles/Helpers"


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


// Rendering
const TeamRow = (props:Props) => {

    const { team } = props

    return (
        <>
            <Square>{team.name}</Square>
            <Square>{team.founded ? team.founded : '---'}</Square>
            <Square>{team.address ? team.address : '---'}</Square>
            <Square>
                <AStyle href={`/teams/${team.id}`}> view team </AStyle>
            </Square>
        </>
    )
}

export default TeamRow