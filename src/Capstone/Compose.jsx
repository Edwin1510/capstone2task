
import { useState } from "react"
import { Createcompose } from "./router"

import './Compose.css'

const Composedata=()=> {

  const initialstate={
    to:"",
    subject:"",
    message:""
  }

  const [formdata,setformdata]=useState(initialstate)

  const[postsdata,setpostsdata]=useState([])
  
  const Handlechange=(e)=>{
    setformdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
     e.preventDefault()
  const data= await Createcompose (formdata)
  setpostsdata(data)
     setformdata(initialstate)
  }
  return (
    <>
    {console.log(postsdata)}
    <div >
    <form onSubmit={handleSubmit}>
      
      <label htmlFor="to">TO</label>
      <input id="to" type="email" name="to"
       onChange={Handlechange} value={formdata.to}/>
      <br/><br/>
     <label htmlFor="subject">Subject</label>
     <input id="subject" type="text" name="subject" 
     onChange={Handlechange} value={formdata.subject}/>
     <br/><br/>
     <label htmlFor="message">Message</label>
     <textarea id="message" rows={5}required name="message"
     onChange={Handlechange} value={formdata.message}/>
     <br/><br/>
     <input type="submit"/>
    </form>
    </div>
     
    </>
  )
}

export default  Composedata

