import React from 'react'
import PriceCard from './PriceCard'
import Heading from '../../common/Heading'

const Price = () => {
    return (
        <>
            <section className="price padding">
                <div className="container">
                    <Heading title='Select Your Package' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore quod sunt assumenda fuga, aperiam repudiandae perferendis eveniet, porro, quas odit asperiores incidunt dolorem distinctio ullam doloremque.' />
                    <PriceCard />
                </div>
            </section>
        </>
    )
}

export default Price