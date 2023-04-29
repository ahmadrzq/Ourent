import React from 'react'
import RecentCard from './RecentCard'
import Heading from '../../common/Heading'

const Recent = () => {
    return (
        <>
            <section className="recent padding">
                <div className="container">
                    <Heading title='Recent Property Listed' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quaerat harum labore deserunt soluta iste quibusdam fugiat blanditiis provident consequatur.'/>
                    <RecentCard />
                </div>
            </section>
        </>
    )
}

export default Recent