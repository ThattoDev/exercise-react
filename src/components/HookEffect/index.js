import { useState ,useEffect } from 'react'

const HookEffect = () => {
    const [stateEffect, setStateEffect] = useState(true)

useEffect(() => {
    console.log("USE EFFECT")
}, [stateEffect])

return (
    <>    
        <h1>HookEffect</h1>
        <input type="button" value="CLIQUE AQUI"  onClick={() => {
            setStateEffect(!stateEffect)
            console.log(stateEffect)
        }}/>
    </>
)
}

export default HookEffect