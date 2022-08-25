import React from "react";
import Flogo from './assets/F.png'
import Ilogo from './assets/I.png'
import Llogo from './assets/L.png'
import Plogo from './assets/P.png'
import './Followbuttons.css'
class Follow extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="Follow">
                <img className="Follow button" src={Flogo} />
                <img className="Follow button" src={Ilogo}/>
                <img className="Follow button" src={Llogo}/>
                <img className="Follow button" src={Plogo}/>             
            </div>
        )
        
    }
}
export default Follow;