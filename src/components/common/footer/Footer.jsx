import React from 'react'
import { footer } from '../../data/Data'

const Footer = () => {
    return (
        <>
            <section className="footerContact">
                <div className="container">
                    <div className="send flex-sb">
                        <div className="text">
                            <h1>Do You Have Questions?</h1>
                            <p>We'll help you to grow your career and growth.</p>
                        </div>
                        <button className="btn-5">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="box">
                        <div className="logo">
                            <h1><span>O</span>urent</h1>
                            <h2>Do You Need Help With Anything?</h2>
                            <p>Receives updates, hot deals, tutorials, discounts snet straight in your inbox every month</p>
                            <div className="input flex-sb">
                                <input type="text" placeholder='Email Address' name='' id='' />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {footer.map((val, index) => (
                        <div className="box" key={index}>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items, index) => (
                                    <li key={index}>{items.list}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>

            <div className="legal">
                <span>
                    &#169; 2023 Ourent. Design By Ahmrizn.
                </span>
            </div>
        </>
    )
}

export default Footer