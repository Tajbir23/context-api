import { createContext, useEffect, useState } from "react";

export const contextApp = createContext();


const Context = ({children}) => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/Data.json')
         .then(res => res.json())
         .then(data => {
            setData(data?.residential_estates)
         })
    },[])
    
    const testFunction = (e) => {
        switch (e) {
            case 'increase':
                setCount(count + 1);
                break;
            case 'decrement':
                setCount(count - 1);
                break;
            default:
                count
                break;
        }
    }
    
    const datas = {data, testFunction, count}
  return (
    <contextApp.Provider value={datas}>
      {children}
    </contextApp.Provider>
  )
}

export default Context