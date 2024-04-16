import { useContext, useEffect } from "react"
import { contextApp } from "./Context"


const Data2 = () => {
  const id = "002"

  const {data} = useContext(contextApp)
  console.log(data)
  useEffect(() => {
    const details = data.find((value) => {value.id === id});
    console.log(details, 'data 2 component');
  },[data])
  return (
    <div>Data2</div>
  )
}

export default Data2