import React from 'react'
import Aos from './Aos'

export default function Carousel(){
    return (
        <>
            <Aos animation='fade-up'>
                <div className="container mb-3 bg-light p-3 ">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Welcome to <span className='text-primary'>Blog Now</span></h1>
                                <p className="lead">
                                    Discover, Explore, Enlighten
                                </p>
                                <p>
                                    Dive into a world of captivating stories, insightful articles, and expert advice that will enrich your mind and ignite your passion.
                                </p>
                                <p>
                                    Unearth hidden gems, unravel the mysteries, and embark on a journey of discovery with our diverse range of topics. Whether you're a curious explorer or a seasoned connoisseur, our blog is your trusted companion on the quest for knowledge.
                                </p>
                                <p>
                                    Join our community of like-minded individuals who share your thirst for wisdom and your love for storytelling. Together, we'll explore the depths of human experience, celebrate creativity, and inspire each other to reach new heights.
                                </p>
                                <p>
                                    It's time to embark on a new adventure. Are you ready to start your journey with us?
                                </p>
                                <button className='btn btn-outline-dark'>Join Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aos>
        </>
    )
}
