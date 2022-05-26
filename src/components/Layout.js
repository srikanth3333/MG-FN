import { AiFillHome,AiFillProfile } from 'react-icons/ai';
import {FcStatistics} from 'react-icons/fc';
import {IoPerson,IoSearch,IoNotificationsSharp,IoSettings} from 'react-icons/io5';
import {BsFillBriefcaseFill, BsFillCalendarFill, BsLightbulbFill, } from 'react-icons/bs';
import { NavLink, useNavigate } from 'react-router-dom';

function Layout({children}) {

    const history = useNavigate();


    const handleSearch = () => {
        history("/search")
    }
    
    return (
        <div className="layout">
            <div className="wrapper">
                <div className="sidebar">
                    <div>
                        <div className="logo-box text-center">
                            <h3><b className="text-white">COMINDS</b><span className="text-primary"></span></h3>
                        </div>
                        <ul className="items__ul text-white my-5" style={{padding: '0px 1px'}}>
                            <li>
                                <NavLink to="/"  className="d-flex nav__list__item  align-items-center">
                                    <AiFillHome  className="icon__nav icon-active" />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/orders" className="d-flex nav__list__item  align-items-center">
                                    <FcStatistics className="icon__nav icon-active" />
                                    <span>Statistics</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/delivery" className="d-flex nav__list__item align-items-center">
                                    <BsFillBriefcaseFill className="icon__nav icon-active" />
                                    <span>Mailbox</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="d-flex nav__list__item align-items-center">
                                    <AiFillProfile className="icon__nav icon-active" />
                                    <span>Jobs</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/calendar" className="d-flex nav__list__item align-items-center">
                                    <BsFillCalendarFill className="icon__nav icon-active" />
                                    <span>Calender</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/payments" className="d-flex nav__list__item  align-items-center">
                                    <BsLightbulbFill className="icon__nav icon-active" />
                                    <span>Status</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profiles" className="d-flex nav__list__item align-items-center">
                                    <IoPerson className="icon__nav icon-active" />
                                    <span>My Profiles</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/searchResumes" className="d-flex nav__list__item align-items-center">
                                    <IoPerson className="icon__nav icon-active" />
                                    <span>Search Resumes</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/onboardList" className="d-flex nav__list__item align-items-center">
                                    <IoPerson className="icon__nav icon-active" />
                                    <span>Onboard List</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/upload" className="d-flex nav__list__item align-items-center">
                                    <IoPerson className="icon__nav icon-active" />
                                    <span>Upload Excel</span>
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="page">
                    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                        <div class="container">
                            <a class="navbar-brand" href="#">
                                <span className="mx-3">Dashboard</span>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ms-auto align-items-baseline mt-2">
                                    <li class="nav-item me-5">
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Profile search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            <div class="">
                                                <button style={{padding: 0,backgroundColor:'transparent',border:0}} onClick={handleSearch}>
                                                    <IoSearch size={38} color="#fff"  className="bg-secondary p-1"/>
                                                </button>
                                                
                                            </div>
                                            {/* <span class="input-group-text bg-primary" id="basic-addon2">
                                                <button class="btn btn-primary py-0" onClick={handleSearch}>
                                                    
                                                </button>
                                            </span> */}
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link"><IoNotificationsSharp size={25} /></a>
                                    </li>
                                    <li class="nav-item">
                                        <a className="nav-link"><IoSettings size={25} /></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <IoPerson size={25} />
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="#">Profile</a></li>
                                            <li>
                                                <a class="dropdown-item" href="#"
                                                    onClick={() => {
                                                        localStorage.clear()
                                                        window.location.href = "/"
                                                    }}     
                                                >Logout</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="py-3">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Layout
