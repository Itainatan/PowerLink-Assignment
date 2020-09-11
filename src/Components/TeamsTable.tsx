// Import
import React from "react"
import Team from "./Team"
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


// Rendering
const TeamsTable = (props:Props) => {

    const showTeams = () =>
        props.teams.map((team, index) =>
            <tbody key={index}>
                <tr>
                    <Team key={index} team={team} />
                </tr>
            </tbody>
        );

    return (
        <table>
            <TableHeader />
            {showTeams()}
        </table>
    )
}

export default TeamsTable