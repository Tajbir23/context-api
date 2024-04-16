import { useContext } from "react"
import { contextApp } from "./Context"


const IncreaseCount = () => {
    const {testFunction, count} = useContext(contextApp)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => testFunction('increase')}>Increase</button>
    </div>
  )
}

export default IncreaseCount