import { useEffect, useState } from "react"
import { Getcompose } from "./router"
import Showitem from "./showitem"


const Sentinput=()=>{

    const [postdata,setpostsdata]=useState([])

  const Getapi=async()=>{
    const data= await Getcompose()
    setpostsdata(data)
  }

  useEffect(()=>{
    Getapi()
  },[])


    return(
        <>
       {postdata.map((p)=>{
           return(
            <Showitem  {...p} key={p.id} />
           )
       })}
       {postdata.length}
        
        </>
    )
}

export default Sentinput