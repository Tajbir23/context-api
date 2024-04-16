import { useContext } from "react"
import { contextApp } from "./Context"



const Data = () => {
  const {data} = useContext(contextApp)
  console.log(data, 'data component')
  return (
    <div>
        
        data 
    </div>
  )
}

export default Data