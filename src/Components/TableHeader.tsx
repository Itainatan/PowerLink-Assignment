// Import
import React from "react"
import { SquareHedear } from "../Styles/Helpers"


// Interfaces
interface Props {
    titles: Array<string>
}


// Rendering
const TableHeader = (props: Props) =>
    <tbody>
        <tr>
            {
                props.titles.map((value, index) =>
                    <SquareHedear key={index}>{value}</SquareHedear>
                )
            }
        </tr>
    </tbody>

export default TableHeader