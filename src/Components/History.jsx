import { useEffect, useState } from "react"

export const History = ({country})=>{

    const [history, setHistory] = useState([])

useEffect
if (country)



    return<>
    <h1>Historial</h1>
    {history.map((element,index)=>{
        return <div key={index}>
            <h4>{element.name.common}</h4>
        </div>
    })}
    </>
}