import React from 'react'
import CreateBlog from './CreateBlog'
import ShowBlogs from './ShowBlogs'

export default function BlogSettings() {
    return (
        <>
            <div className='col-md-10 mx-auto border my-3'>
                <div className="accordion accordion-flush" id="BlogSettings">
                    {/* blog create */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="blog-create">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#Blog-Creation" aria-expanded="false" aria-controls="Blog-Creation">
                                Create a Blog
                            </button>
                        </h2>
                        <div id="Blog-Creation" className="accordion-collapse collapse" aria-labelledby="blog-create" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <CreateBlog />
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                My Blogs
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <ShowBlogs />
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Edit Blog
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            Hello user
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

