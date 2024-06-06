import { useEffect, useState } from "react"
import { Getdatas, replacedata } from "./router"
import { Link } from "react-router-dom"


const Forgot = () => {

    const initialstate = {
        email: "",
        newpassword: "",
        confirmpassword: "",
    }

    const [formdata, setformdata] = useState(initialstate)
    const [postdata,setpostdata]=useState([])

    const Apiget=async()=>{
       const data= await Getdatas()
       setpostdata(data)
    }

    useEffect(()=>{
        Apiget()
    },[])

    const Handlechange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formdata.newpassword !== formdata.confirmpassword) {
            alert("Passwords do not match");
        } else {
            try {
                const user = postdata.find((user) => user.email === formdata.email);
                if (!user) {
                    alert("Email not found");
                } else {
                    const userdata = postdata.map((item) =>
                        item.email === formdata.email ? { ...item, password: formdata.newpassword } : item
                    );
                    await replacedata(userdata,user.id);
                    setpostdata(userdata);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to update password. Please try again later.");
            }
        }
    };

    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <form onSubmit={handleSubmit}>
            {console.log(postdata)} 
            <div className="row mb-2 mt-5">
            <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
            <div className="col">
            <input id="email" 
            name="email" type="email" 
            value={formdata.email} 
            onChange={Handlechange}
            className="form-control" />
            </div>
            </div>
            <br /><br />
            <div className="row mb-2" >
            <label htmlFor="newpassword" className="col-sm-4 col-form-label" >Newpassword</label>
            <div className="col">
            <input id="newpassword" 
            name="newpassword" 
            type="password" 
            value={formdata.newpassword} onChange={Handlechange} 
            className="form-control"/>
            </div>
            </div>  
            <br /><br />
            <div className="row mb-2 ">
            <label htmlFor="confirmpassword" className="col-sm-4 col-form-label">confirmpassword</label>
            <div className="col">
            <input id="confirmpassword" name="confirmpassword" type="password"
                value={formdata.confirmpassword} onChange={Handlechange} className="form-control" />
            </div>
            </div>
            
            <br /><br />
            <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">Forgotpassword</button>
            </div>
           
        </form>

                </div>
            </div>
        </div>
       

        <div className="text-center mt-3">
        <Link to="/" className="d-block">Signin</Link>
        <br/>
        <Link to="/signup" className="d-block">Signup</Link>
        </div>
        
            
        </>
    )
}

export default Forgot