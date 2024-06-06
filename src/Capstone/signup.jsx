import { useState } from "react"
import { Createdata } from "./router"
import { Link } from "react-router-dom"


const Signup = () => {
    const initialstate = {
        name: "",
        email: "",
        password: "",
        confirmpassword: "",

    }

    const [formdata, setformdata] = useState(initialstate)
    const [postdata,setpostdata]=useState([])
    const Handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })

    }

    const Handlesubmit=async(e)=>{
       e.preventDefault()
       if(formdata.password !==formdata.confirmpassword){
        alert("ENTER CORRECT PASSWORD")
       }else{
    const data= await Createdata(formdata)
    setpostdata([...postdata,data])

       setformdata(initialstate)
       }
       
    }

    return (
        <>
       <div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-6">
      <form onSubmit={Handlesubmit}>
        {console.log(postdata)}

        <div className="row mb-4 mt-5">
          <label htmlFor="name" className="col-sm-4 col-form-label">Name:</label>
          <div className="col">
            <input id="name" name="name" onChange={Handlechange} 
              className="form-control" value={formdata.name} />
          </div>
        </div>

        <div className="row mb-5">
          <label htmlFor="email" className="col-sm-4 col-form-label">Email:</label>
          <div className="col">
            <input id="email" name="email" type="email" onChange={Handlechange}
              value={formdata.email} className="form-control" />
          </div>
        </div>

        <div className="row mb-5">
          <label htmlFor="password" className="col-sm-4 col-form-label">Password:</label>
          <div className="col">
            <input id="password" name="password" type="password" onChange={Handlechange} 
              value={formdata.password} className="form-control"/>
          </div>
        </div> 

        <div className="row mb-5">
          <label htmlFor="confirmpassword" className="col-sm-4 col-form-label">Confirm Password:</label>
          <div className="col">
            <input id="confirmpassword" name="confirmpassword" type="password" onChange={Handlechange} 
              value={formdata.confirmpassword} className="form-control"/>  
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">SIGNUP</button>
        </div>
      </form>
    </div>
  </div>

  <div className="text-center mt-3">
    <Link to="/" className="d-block">Signin</Link>
    <br/>
    <Link to="/forgot" className="d-block">Forgot Password</Link>
    <br/>
  </div>
</div>

        </>
    )
}

export default Signup