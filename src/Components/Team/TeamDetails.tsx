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
        <div style={{display: 'flex'}}>
            <h1> {team.name} </h1>
            <img alt='' src={team.crestUrl} width="130px" height="68px" />
        </div>
    )
}




export default TeamDetails