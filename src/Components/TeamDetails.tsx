// Imports
import React from 'react'


// Interfaces
interface Props {
    team: any
}


// Rendering
const TeamDetails = (props: Props) => {

    const { team } = props

    return (
        <div>
            <h1> {team.name} </h1>
        </div>
    )
}




export default TeamDetails