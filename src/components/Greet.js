// function Greet(){
//     return <h1>Hello React</h1>
// }

export const Greet=(props)=>{
    const {name,designation,children}=props
    console.log(name+' '+designation+' '+children)
    return (
        <div>
    <h1>Hello {name} a.k.a {designation}</h1>
    {children}
    </div>
    )
}

// export default Greet