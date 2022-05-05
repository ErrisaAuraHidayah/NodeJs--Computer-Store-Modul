import React from "react"
import {Link} from "react-router-dom"
import "../App.css"

export default function Navbar(props){
    let Logout = () =>{
        localStorage.removeItem("token")
        localStorage.removeItem("admin")
        window.location = "/login"
    }

    // let link = (ket) =>{
    //     let endpoint = 'http://localhost:4000'
    //     if(endpoint+ket === 'http://localhost:4000/'){
    //         if(endpoint+ket === 'http://localhost:4000/'){
    //             return 'nav-link active'
    //         }else{
    //             return 'nav-link'
    //         }
    //     }else if(endpoint+ket === 'http://localhost:4000/product'){
    //         if(endpoint+ket === 'http://localhost:4000/product'){
    //             return 'nav-link active'
    //         }else{
    //             return 'nav-link'
    //         }
    //     }
        
    // }
    return(
        <div className="navbar navbar-expand-lg bg-transparent navbar-dark" style={{fontFamily:"poppins"}}>
            <div className="container" style={{background:"023e8a"}}>
            <div className="col-4 mx-2">
                    <a className="navbar-brand">
                        <b>Computer Store.</b>
                    </a>
            </div>

            <div className="col-6 d-flex justify-content-center">
                    
                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
 
                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link id="home" to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  id="product" to="/product" className="nav-link">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link  id="customer" to="/customer" className="nav-link">
                                Customers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="transaction" to="/transaction" className="nav-link">
                                Transactions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="admin" to="/admin" className="nav-link">
                                Administrator
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-2">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                            <button className="btn btn-primary text-white bg-transparent" type="submit" onClick={() => Logout()}>
                                <span className="fa-solid fa-right-from-bracket"></span> Logout
                            </button>
                        </li>
                </ul>
            </div>
            </div>        
        </div>
    )
}