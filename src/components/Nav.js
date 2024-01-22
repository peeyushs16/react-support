import React from 'react'
import PropTypes from 'prop-types'
import '../App.css';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
    return(<>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/TextForm">Text Utils</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/NewsFunc">News List Func Base</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/NewsScroll">News List Scroll</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News List Pagination
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/news">General</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/news/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/news/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/news/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="/news/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/news/sports">Sports</Link></li>
                        <li><Link className="dropdown-item" to="/news/technology">Technology</Link></li>

                    </ul>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link disabled" href="/" aria-disabled="true">Disabled</a>
                </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
        </div>
        </nav>
    </>
    ) 
}



export const Footer = () => {
    return(<>
    <div className="footer">
        <div className="float-right">
            10GB of <strong>250GB</strong> Free.
        </div>
        <div>
            <strong>Copyright</strong> Example Company &copy; 2014-2018
        </div>
    </div>
    </>
    ) 
}



Nav.propTypes = {
    title : PropTypes.string.isRequired
};


Nav.defaultProps = {
    title : "Exact Default"
}