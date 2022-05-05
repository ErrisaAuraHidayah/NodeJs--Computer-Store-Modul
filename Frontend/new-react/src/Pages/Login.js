import axios from "axios"
import { base_url } from "../Config"
import { useState } from "react"
import "../App.css"

export default function Login(){
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let loginProcess = event => {
        event.preventDefault()

        let request = {
            username: username,
            password: password
        }

        let endpoint = "http://localhost:3000/admin/auth"

        axios.post(endpoint, request)
        .then(response => {
            if (response.data.logged === true) {
                let admin = response.data.data
                let token = response.data.token
                localStorage.setItem("admin", JSON.stringify(admin))
                localStorage.setItem("token", token)
                alert('Login Berhasil, Selamat Datang Admin!');window.location='./'
            } else {
                alert(response.data.message)
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <body className="">
            <div className=" container d-flex h-100 justify-content-center align-items-center">
                <div className="col-sm-6 card my-5 background">
                    <div className="card-header text-light text-center">
                        <h1><b>Computer Store.</b></h1>
                        <strong className="text-warning">Admin Sign In</strong>
                    </div>
                    <div className="card-body text-white">
                        <form onSubmit={ev => loginProcess(ev)}>

                            Username
                            <input type="text" className="form-control text-white mt-1 mb-3" value={username} placeholder="Username Admin"
                            onChange={ev => setUsername(ev.target.value)} style={{backgroundColor:'#001233'}}/>

                            Password
                            <input type="password" className="form-control text-white mt-1 mb-4" value={password} placeholder="Masukkan Password"
                            onChange={ev => setPassword(ev.target.value)}
                            autoComplete="false" style={{backgroundColor:'#001233'}}/>
 
                            <button className="form-control btn btn-block btn-primary mb-1" type="submit">
                                <b className="text-white">Sign In</b>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </body>
    )
}