import React from 'react'
import FeaturedCard from './FeaturedCard'
import Heading from '../../common/Heading'

const Featured = () => {
    return (
        <>
            <section className="featured background">
                <div className="container">
                    <Heading title='Featured Property Types' subtitle='Find All Type of Property' className='heading'/>
                    <FeaturedCard />
                </div>
            </section>
        </>
    )
}

export default Featured