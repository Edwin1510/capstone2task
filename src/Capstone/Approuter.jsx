import { BrowserRouter, Route, Routes } from "react-router-dom"
import Appsignin from "./signin"
import Signup from "./signup"
import Forgot from "./forgot"
import Layout from "./Layout"
import Sentinput from "./Sentitem"
import Composedata from "./Compose"
import Delete from "./Delete"
import Contacts from "./Contacts"
import Snoozed from "./Snoozed"
import Firstpage from "./Firstpage"



const Approuter = () => {
    return (
        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Firstpage/>}/>
              <Route path="/signin" element={<Appsignin/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot" element={<Forgot />} />

                <Route path="/" element={<Layout />}>
                    <Route path="/sentitem" element={<Sentinput />} />
                    <Route path="/compose" element={<Composedata/>}/>
                    <Route path="/delete" element={<Delete/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/snoozed" element={<Snoozed/>}/>
                </Route>

            </Routes>


        </BrowserRouter>
    )
}

export default Approuter