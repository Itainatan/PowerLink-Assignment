// Import
import React from "react"
import TeamRow from "./TeamRow"
import TableHeader from "./TableHeader"

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


// Rendering
const TeamsTable = (props: Props) => {

    const showTeams = () =>
        props.teams.map((team, index) =>
            <tbody key={index}>
                <tr>
                    <TeamRow key={index} team={team} />
                </tr>
            </tbody>
        );

    return (
        <table>
            <TableHeader titles={titles} />
            {showTeams()}
        </table>
    )
}

export default TeamsTable