import React, { Fragment } from 'react'
import { Columns } from './Columns'

export const Table = () => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <Columns/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
