import React from 'react'
import Heading from '../../common/Heading'
import { team } from '../../data/Data'

const Team = () => {
    return (
        <>
            <section className="team background">
                <div className="container">
                    <Heading title='Our Feature Agents' subtitle='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, sit! Quas officia quae, itaque nulla debitis qui rem odio dignissimos, vitae nihil possimus sit!' />
                    <div className="content mtop grid-3">
                        {team.map((val, index) => {
                            return (
                                <div className="box" key={index}>
                                    <button className="btn3">{val.list} Listings</button>
                                    <div className="details">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                            <i className="fa fa-circle-check"></i>
                                        </div>
                                        <i className="fa fa-location-dot"></i>
                                        <label htmlFor="">{val.address}</label>
                                        <h4>{val.name}</h4>
                                        <ul>
                                            {val.icon.map((icon, index) => (
                                                <li key={index}> {icon}</li>
                                            ))}
                                        </ul>
                                        <div className="button flex-sb">
                                            <button>
                                                <i className='fa fa-envelope'>
                                                </i>
                                                Message
                                            </button>
                                            <button className="btn4">
                                                <i className='fa fa-phone-alt'></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team