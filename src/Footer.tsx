import React from 'react';
import Follow from './Followbutons';
import './Footer.css'

class Footer extends React.Component {

    render():React.ReactNode {
        return (
            <div className="Footer">
                <span style={{fontSize: "10px",}}>Follow us</span>
                <Follow></Follow>
                <p className="Footer Link">www.tikitoro.com</p>
            </div>
        )
    }
}

export default Footer;
