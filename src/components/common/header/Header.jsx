import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { nav } from '../../data/Data';
const Header = () => {
    const [NavList, setNavList] = useState(false);

    return (
        <>
            <header className='flex-c'>
                <div className="container flex-sb">

                    <div className="logo">
                        <h1><span>O</span>urent</h1>
                    </div>

                    <div className="nav">
                        <ul className={NavList ? "small" : "flex-sb"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link to={list.path}>{list.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="button flex-sb">
                        <h4>
                            <span>2</span> My List
                        </h4>
                        <button className="btn1">
                            <i className="fa fa-sign-out"></i>Sign In
                        </button>
                    </div>

                    <div className="toggle">
                        <button onClick={() => setNavList(!NavList)}>
                            {NavList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header