// Imports
import React from "react"
import TeamRow from "./TeamRow"
import TableHeader from "../../Helpers/TableHeader"


// Interfaces
interface TeamType {
    name: string,
    founded: string,
    address: string,
    id: string
}

interface Props {
    teams: Array<TeamType>
}


// Consts
const titles = ['Name', 'Founded', 'Address']


// Component - this component show the teams table
const TeamsTable = (props: Props) => {

    const showTeams = () =>
        props.teams.map((team, index) =>
            <tbody key={index}>
                <tr>
                    <TeamRow team={team} />
                </tr>
            </tbody>
        );


    // Rendering
    return (
        <table>
            <TableHeader titles={titles} />
            {showTeams()}
        </table>
    )
}

export default TeamsTable