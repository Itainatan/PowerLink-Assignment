// Imports
import React from 'react'


// Interfaces
interface Props {
    team: any
}


// Component
const TeamDetails = (props: Props) => {

    const { team } = props
    
// Rendering
    return (
        <div>
            <h1> {team.name} </h1>
        </div>
    )
}




export default TeamDetails