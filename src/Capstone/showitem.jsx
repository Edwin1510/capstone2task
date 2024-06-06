
import './Compose.css'



const Showitem=({to,subject,message})=>{
    return(
        <div className="Compose">

        <h4>to:{to}</h4>
        <h4>Subject:{subject}</h4>
        <h2>Message:{message}</h2>
        
        </div>
    )
}

export default Showitem