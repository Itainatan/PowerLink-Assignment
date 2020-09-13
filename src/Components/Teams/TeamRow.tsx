// Imports
import React from "react"
import { useHistory } from "react-router-dom"
import { Square, AStyle } from "../../Styles/Helpers"


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


// Component
const TeamRow = (props:Props) => {

    const { team } = props
    const History = useHistory()

// Rendering
    return (
        <>
            <Square>{team.name}</Square>
            <Square>{team.founded ? team.founded : '---'}</Square>
            <Square>{team.address ? team.address : '---'}</Square>
            <Square>
                <AStyle onClick={() => History.push(`/teams/${team.id}`)}> view team </AStyle>
            </Square>
        </>
    )
}

export default TeamRow