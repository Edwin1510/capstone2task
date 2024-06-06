import { Link, Outlet } from "react-router-dom"

import './Layout.css'


const Layout = () => {
    return (
        <>
            <header  >
            </header>
            <aside >
                <br/>
                  <Link to="/sentitem"><i className="fas fa-envelope fa-check-circle"></i></Link>    
                  <br/>
                  <Link to="/compose"> COMPOSE <i className="fas fa-thumbs-up"></i></Link>
                  <br/>
                  <Link to="/delete"> <i class="fas fa-trash"></i></Link>
                  <br/>
                  <Link to="/contacts"><i className="fas fa-address-book"></i></Link>
                  <br/>   
                  <Link to="/snoozed"><i className="fas fa-clock"></i></Link>  
                   
            </aside>
            <div className="main-content">
        <Outlet />
      </div>

          

        </>
    )
}

export default Layout