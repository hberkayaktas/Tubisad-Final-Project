import React from 'react'
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogoutAsync } from '../../Redux/AuthSlice';
import toast, { Toaster } from 'react-hot-toast';

function NavTabs({ login, register, setlogin, setregister }) {
      const dispatch = useDispatch();
      const ProfileState = useSelector((state) => state.auth.ProfileData);
      const showLogin = () => {
            if (login === "none") {
                  setlogin("block");
            } else {
                  setlogin("none")
            }
      }
      const showRegister = () => {
            if (register === "none") {
                  setregister("block");
            } else {
                  setregister("none")
            }
      }
      const HandleLogout = () =>{
            dispatch(fetchLogoutAsync());
            toast.success('Çıkış yapıldı')
      }
      return (
            <nav className="navbar fixed-top  navbar-expand-lg navbar-dark bg-dark" id="navId" >
                  {/* Navbar start */}
                  {/* Container wrapper */}
                  <div className="container" id="navbar-example" >
                        {/* Navbar brand */}
                        <div id="logo_div" >
                              <Link to="/" >
                                    <span className="navbar-brand  logo" href="#">
                                          <img src="/berkayaktas-removebg-preview.png" height="40" alt="MDB Logo" className="logo" loading="lazy" />
                                    </span>
                              </Link>
                              {/* Toggle button */}
                              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_id" aria-controls="navbar_id" aria-expanded="false" aria-label="Toggle navigation" >
                                    <i className="fas fa-bars" />
                              </button>
                        </div>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbar_id" >
                              {/* Left links */}
                              <ul className="navbar-nav me-auto ms-3 mb-2 mb-lg-0" >

                                    <li className="nav-item">
                                          <Link to="/" ><span className="nav-link" href="#!"  ><i className="fa-solid fa-house"></i> Anasayfa</span></Link>
                                    </li>
                              
                                    <li className="nav-item">
                                          <Link to="/todo" ><span className="nav-link" ><i className="fa-solid fa-circle-check" /> Todo </span></Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to="/aboutme" ><span className="nav-link" ><i className="fa-solid fa-user"></i> Hakkımızda</span></Link>
                                    </li>

                                    
                              </ul>
                              {/* Left links */}
                              <div className="d-flex align-items-center" >
                                    <SearchBar />
                                    <button type="button" className="btn btn-outline-success me-2 px-2 py-1">
                                          <i className="fa-solid fa-magnifying-glass" />
                                    </button>
                                    {!ProfileState && (
                                          <>
                                                <button onClick={() => showLogin()} type="button" className="btn btn-outline-success me-2 px-2 py-1">
                                                      <i className="fa-solid fa-user-large" />
                                                </button>
                                                <button onClick={() => showRegister()} type="button" className="btn btn-success btn-sm me-3 py-1">
                                                      Register
                                                </button>
                                                <a className="btn btn-dark border px-3" href="https://github.com/hberkayaktas" role="button"><i className="fab fa-github" /></a>
                                          </>
                                    )}
                                    {ProfileState && (
                                          <>    
                                                <Link to="/profile" >
                                                      <button className="btn btn-outline-success me-2 px-2 py-1">
                                                            <i class="fa-solid fa-id-card"></i>
                                                      </button>
                                                </Link>
                                                <button onClick={() => {HandleLogout();}}  className="btn btn-danger btn-sm me-3 py-1">
                                                      <i class="fa-solid fa-door-open"></i>
                                                </button>
                                          </>
                                    )}
                              </div >
                        </div>
                        {/* Collapsible wrapper */}
                  </div >
                  {/* Container wrapper */}
                  {/* Navbar ends */}
                  <Toaster />
            </nav>
      )
}

export default NavTabs