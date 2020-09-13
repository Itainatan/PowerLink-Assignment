// Imports
import React from "react"
import { Square } from "../../Styles/Helpers"


// Interfaces
interface Player {
    name: string,
    position: string
}

interface Props {
    player: Player
}


// Component
const PlayerRow = (props: Props) => {

    const { player } = props

    // Rendering
    return (
        <>
            <Square>{player.name}</Square>
            <Square>{player.position ? player.position : '---'}</Square>
        </>
    )
}

export default PlayerRow