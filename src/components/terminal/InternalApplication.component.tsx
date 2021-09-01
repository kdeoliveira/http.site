import { useState } from "react"


const InternalApplication = (props : any) => {

    const [state, setstate] = useState<number>(0)

    return (
        <div>
            Test
            <button onClick={() => setstate(state => state + 1)}>Click here</button>
            <button onClick={() => {
                console.log("reset")
                props.onCompleted()
                }}>Reset {state}</button>
        </div>
    )
}

export default InternalApplication;