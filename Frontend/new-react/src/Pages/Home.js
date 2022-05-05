import Navbar from "../component/Navbar"
import axios from "axios"
// import { base_url } from "../Config"
import { useState } from "react"

export default function Home(){
    let [product, setProduct] = useState(0)
    let [customer, setCustomer] = useState(0)
    let [admin, setAdmin] = useState(0)
    let [admName, setAdmName] = useState("")
    let [transaction, setTransaction] = useState(0)

    if(!localStorage.getItem("token")){
        window.location ="/login"
    }
    let token = localStorage.getItem(`token`);
    let authorization = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    let getProduct = () =>{
        let endpoint = "http://localhost:3000/product/"
        axios.get(endpoint, authorization)
        .then(response => {
            setProduct(response.data.length)
        })
        .catch(error => console.log(error))
    }

    let getCustomer = () =>{
        let endpoint = "http://localhost:3000/customer/"
        axios.get(endpoint, authorization)
        .then(response => {
            setCustomer(response.data.length)
        })
        .catch(error => console.log(error))
    }

    let getTransaction = () =>{
        let endpoint = "http://localhost:3000/transaksi/"
        axios.get(endpoint, authorization)
        .then(response => {
            setTransaction(response.data.length)
        })
        .catch(error => console.log(error))
    }

    let getAdmin = () =>{
        let adm = JSON.parse(localStorage.getItem('admin'))
        setAdmName({admName : adm.name})
       
        // let endpoint = base_url+"/admin"
        // axios.get(endpoint, authorization)
        // .then(response => {
        //     setAdmin(response.data.count)
        // })
        // .catch(error => console.log(error))
    }
    return(
        <div style={{background:"linear-gradient(to right, #03045e, #023e8a)"}}>
            <div>
                <Navbar />
            </div>
            <div>
                <div className="container mt-5">
                    <h3 className="my-2 text-info">
                        <strong onLoad={() => getAdmin()}>Welcome back, {admName}</strong>
                    </h3>
                    <div className="row">
                        {/* products count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-success">
                                    <h4 className="text-dark">
                                        <strong>Products Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong onLoad={() => getProduct()}>{product}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
 
                        {/* customer count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-info">
                                    <h4 className="text-dark">
                                        <strong>Customers Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong onLoad={() => getCustomer()}>{customer}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
 
                        {/* transactions count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-warning">
                                    <h4 className="text-dark">
                                        <strong>Transactions Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong onLoad={() => getTransaction()}>{transaction}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
 
                        {/* admins count */}
                        <div className="col-lg-4 col-md-6 col-sm-12 mt-2">
                            <div className="card">
                                <div className="card-body bg-danger">
                                    <h4 className="text-dark">
                                        <strong>Admins Count</strong>
                                    </h4>
                                    <h1 className="text-white">
                                        <strong onLoad={() => getAdmin()}>{admin}</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}