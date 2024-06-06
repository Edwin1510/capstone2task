import { useEffect, useState } from "react"
import { Getdatas } from "./router"
import { Link } from "react-router-dom"
import Layout from "./Layout"


const Appsignin = () => {
    const initialstate = {
        email: "",
        password: "",
    }


    const [formdata, setformdata] = useState(initialstate)

    const [postdata, setpostdata] = useState([])

    const [layoutShow, setlayoutshow] = useState(false)
   
    const [error,seterror]=useState("")



    const HandleChange = (e) => {
        setformdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const getApidata = async () => {
        const data = await Getdatas()
        setpostdata(data)

    }

    useEffect(() => {
        getApidata()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = postdata.find((user) => user.email === formdata.email && user.password === formdata.password)
        if (!user) {
            seterror("Mismatch email & password")
            setformdata(initialstate)
        } else {
            setlayoutshow(true)
        }

    }

    return (
        <>
            {layoutShow ? (<Layout />) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <form onSubmit={handleSubmit}>
                                {console.log(postdata)}
                                <div className="row mb-3 mt-5">
                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email :</label>
                                    <div className="col">
                                        <input id="email" name="email" type="email" value={formdata.email}
                                            onChange={HandleChange} className="form-control" />
                                    </div>
                                </div>
                                <br /><br />
                                <div className="row mb-5">
                                    <label htmlFor="password" className="col-sm-2 col-form-label" >Password :</label>
                                    <div className="col">
                                        <input id="password" name="password" type="password"
                                            value={formdata.password} onChange={HandleChange} className="form-control" />
                                    </div>
                                </div>
                                <br /><br />
                                {error && (
                                    <div className="row mb-3">
                                        <div className="col">
                                            <div className="alert alert-danger">{error}</div>
                                        </div>
                                    </div>
                                )}
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary">SIGNIN</button>
                                </div>

                            </form>
                            <div className="text-center mt-3">
                                <Link to="/signup" className="d-block">SIGNUP</Link>
                                <br />
                                <Link to="/forgot" className="d-block">FORGOT</Link>
                                <br />
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Appsignin