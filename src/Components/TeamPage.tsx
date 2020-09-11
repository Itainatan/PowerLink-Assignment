// Imports
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Team = () => {
    const [team, setTeam] = useState([])


    // Lifecycle
    useEffect(() => {
        fetchTeam()
    }, [])


    // Actions
    const fetchTeam = async () => {
        let params = {
            headers: {
                "X-Auth-Token": "104b49bdab0c4562960e71ae37c1dd33",
                "content-type": "application/json"
            }
        };

        try {
            const { data } = await axios.get('http://api.football-data.org/v2/teams/57', params)
            console.log(data);
            data.teams && setTeam(data.teams)
        } catch (error) {
            console.log(error)
        }
    };


    // Rendering
    return (
        <div>
            team
        </div>
    )
}

export default Team



