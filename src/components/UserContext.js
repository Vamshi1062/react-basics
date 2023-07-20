//1. creating context
import React from "react"
const UserContext=React.createContext('Hello All')

const UserProvider=UserContext.Provider

const UserConsumer=UserContext.Consumer





export{UserProvider,UserConsumer}

export default UserContext