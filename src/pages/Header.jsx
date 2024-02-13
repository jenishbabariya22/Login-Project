import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    const [islogin, setlogin] = useState({})

    const logout = () => {
        localStorage.removeItem("userlogin")
        toast.success("user Logout Success")
    }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("userlogin"))
        setlogin(user)
    }, [])

    return (
        <>
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
                        <div className="container-xl">
                            {/* Logo */}
                            <a className="navbar-brand" href="#">
                                <img src="https://preview.webpixels.io/web/img/logos/clever-light.svg" className="h-8" alt="..." />
                            </a>
                            {/* Navbar toggle */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            {/* Collapse */}
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                {/* Nav */}
                                <div className="navbar-nav mx-lg-auto">
                                    <a className="nav-item nav-link active" href="#" aria-current="page">Home</a>
                                    <a className="nav-item nav-link" href="#">Product</a>
                                    <a className="nav-item nav-link" href="#">Features</a>
                                    <a className="nav-item nav-link" href="#">Pricing</a>
                                </div>
                                {
                                    (!islogin) ? (
                                        <>
                                            {/* Right navigation */}
                                            <div className="navbar-nav ms-lg-4">
                                                <Link to={"/login"} className="nav-item nav-link" href="#">Login</Link>
                                            </div>
                                            {/* Action */}
                                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                                <Link to={"/"} className="btn btn-sm btn-primary w-full w-lg-auto">
                                                    Register
                                                </Link>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                                                <button className="btn btn-sm btn-danger ms-2 w-full w-lg-auto" onClick={logout}>
                                                    Logout
                                                </button>
                                            </div>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>

    )
}

export default Header