import React from 'react'
import PriceCard from '../home/price/PriceCard'
import img from '../images/about/pricing.jpg'
import Back from '../common/Back'

const Pricing = () => {
    return (
        <>
            <section className="services mb">
                <Back name='30 days meone back guarantee' title='No Extra fees. Friendly Support' cover={img} />
                <div className="price container">
                    <div className="container">
                        <PriceCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing