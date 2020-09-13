// Imports
import React from "react"
import { useHistory } from "react-router-dom"
import TeamRow from "./TeamRow"
import TableHeader from "../../Helpers/TableHeader"
import { TRStyle } from "../../Styles/Helpers"


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

    const history = useHistory()

    const showTeams = () =>
        props.teams.map((team) =>
            <tbody key={team.id}>
                <TRStyle onClick={() => history.push(`/teams/${team.id}`)}>
                    <TeamRow team={team} />
                </TRStyle>
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