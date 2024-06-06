
import { Link } from 'react-router-dom'
import './Firstpage.css'

const Firstpage=()=>{
    return(
        <div className="main">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBSkh5o3XlJ_NKpbIZV1HwmLo0mGWtUyEXp0IJChj-w&s"/>
       <button><Link to="/signin">SIGNIN</Link></button>
        </div>
    )
}

export default Firstpage