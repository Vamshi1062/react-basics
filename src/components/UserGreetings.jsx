import React from 'react'

export const UserGreetings = () => {

    const isLoggedIn=true

    return (
        <div>
            {/* <h1>Welcome {isLoggedIn?'CGG':'Guest'}</h1> */}

            <h1>Welcome {isLoggedIn&&'CGG'}</h1>
        </div>
    )
}
