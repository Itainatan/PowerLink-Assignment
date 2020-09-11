// Import
import React from "react"
import { SquareHedear } from "../Styles/Helpers"


// Consts
const titles = ['Name', 'Founded', 'Address']


// Rendering
const TableHeader = () =>
    <tbody>
        <tr>
            {
                titles.map((value, index) =>
                    <SquareHedear key={index}>{value}</SquareHedear>
                )
            }
        </tr>
    </tbody>

export default TableHeader