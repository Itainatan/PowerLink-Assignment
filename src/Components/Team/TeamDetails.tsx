// Imports
import React from 'react'
import { useHistory } from 'react-router-dom'
import SquadTable from './SquadTable'
import '../../App.css'


interface Props {
    team: any
}


// Component - this component show the information about the team
const TeamDetails = (props: Props) => {

    const { team } = props
    const { name, crestUrl, website, squad } = team
    const history = useHistory()


    // Rendering
    return (
        <div>
            <div className='flex-div'>
                <h1> {name} </h1>
                <img alt='' src={crestUrl} width="130px" height="68px" />
            </div>
            <div className='mb10'>
                <b> founded: </b> &nbsp;
                {team.founded ? team.founded : '---'}
            </div>
            <div className='mb10'>
                <a href={website} target="_blank" rel="noopener noreferrer"> team website </a>
            </div>
            <div className='mb10'>
                <b> address: </b> &nbsp;
                {team.address ? team.address : '---'}
            </div>
            <div>
                <h3> Squad: </h3>
                <SquadTable squad={squad} />
            </div>
            <button onClick={() => history.push('/teams/')}> back </button>
        </div>

    )
}

export default TeamDetails