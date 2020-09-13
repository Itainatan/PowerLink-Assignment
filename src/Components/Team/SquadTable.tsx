// Imports
import React from "react"
import PlayerRow from "./PlayerRow"
import TableHeader from "../../Helpers/TableHeader"


// Interfaces
interface Player {
    name: string,
    position: string
}

interface Props {
    squad: Array<Player>
}


// Consts
const titles = ['Name', 'Position']


// Component - this component show the players table
const SquadTable = (props: Props) => {

    const showPlayers = () =>
        props.squad.map((player, index) =>
            <tbody key={index}>
                <tr>
                    <PlayerRow key={index} player={player} />
                </tr>
            </tbody>
        );


    // Rendering
    return (
        <table>
            <TableHeader titles={titles} />
            {showPlayers()}
        </table>
    )
}

export default SquadTable