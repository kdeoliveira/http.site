import { useEffect, useState } from "react"

const useLoad = () => {
    const [load, setLoad] = useState<boolean>(false);


    useEffect(() => {


        window.addEventListener("load", () => {
            setLoad(true)
        })
        return () => {
            window.removeEventListener("load", () => {
                setLoad(true)
            })
            
        }
    }, [load])

    return load;
    
}

export default useLoad;