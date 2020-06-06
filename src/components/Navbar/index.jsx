import React, {useState} from 'react'
import Link from "react-router-dom/Link"
import "./index.css"

export default function Navbar() {

    const [text, setText] = useState(false)

    const textDropdown = () => {
        setText(!text)
    }
    
    return (
        <div className="navbar">
            <Link className="navbar-title" to="/"><h1>Swiss Army App</h1></Link>

            <div className="navbar-categories">
                <div className="navbar-category">
                    <div className="navbar-category-main" onClick={textDropdown}>
                        <p className="navbar-category-text">Text</p>
                    </div>
                    <div className={"navbar-dropdown " + (text ? "":"hide")}>
                        <Link to="/text/case" className="link"><div className="navbar-dropdown-text">Case</div></Link>
                        <Link to="/text/random" className="link"><div className="navbar-dropdown-text">Random</div></Link>
                    </div>
                </div>
                <div className="navbar-category">
                    <div className="navbar-category-main">
                        <p className="navbar-category-text">Math</p>
                    </div>
                </div>
                <div className="navbar-category">
                    <div className="navbar-category-main">
                        <p className="navbar-category-text">Misc</p>
                    </div>
                </div>
            </div>
            <div className="navbar-footer">
                <p className="navbar-footer-text">Ben Magill 2020</p>
                <p>Version: 0.1.1</p>
            </div>
        </div>
    )
}
