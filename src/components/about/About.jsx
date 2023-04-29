import React from 'react'
import img from '../images/about/about.jpg'
import Back from '../common/Back'
import Heading from '../common/Heading'

const About = () => {
    return (
        <>
            <section className="about">
                <Back name="About Us" title="About Us - Who We Are?" cover={img} />
                <div className="container flex-sb mtop">
                    <div className="left row">
                        <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum iusto praesentium ad quas libero dolor reiciendis nulla exercitationem optio commodi molestiae quo fugiat doloremque voluptatibus animi, illo nisi iure sapiente.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio magnam magni eum necessitatibus consequuntur natus sequi aut, sunt corporis quos ducimus voluptate veritatis eius ipsa quo! Libero rem placeat doloribus officia nobis nemo quas totam quidem ea, nulla porro!</p>
                        <button className="btn2">More About Us</button>
                    </div>
                    <div className="right row">
                        <img src="../images/banner.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About