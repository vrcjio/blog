
import React from 'react'
import Aos from './Aos'
export default function UserArticals () {

  const date = new Date();
  const user = {
    name: "abcd",
    title: "My artical",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    date: date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear(),
  }

  return (
    <>
      <Aos animation="fade-up">
        <div className='d-flex flex-wrap justify-content-center'>

          {Array(8).fill(0).map((item:any, index:any) =>
            <div key={index} className="shadow m-1" style={{ width: "18rem" }} data-aos="fade-up">
              <div className="card-body">
                <div className="mb-3 text-secondary text-capitalize">
                  <span className="fst-italic">Date of publication </span>
                  <span className="float-end">{user?.date}</span>
                </div>
                <h5 className="card-title">{user.title}</h5>
                <p className="card-text">{
                  (user.text?.length > 50) ? user.text.substring(0, 50) + '...' : user.text
                }</p>
                <a href="#" className="nav-link text-secondary float-start ps-0 text-capitalize">See More...</a>
                <br />
                <span className="float-end text-capitalize fst-italic">Author: <a href="#" className="text-secondary">{user.name}</a>
                </span>
                <br />
              </div>
            </div>
          )}

        </div>
      </Aos>
    </>
  )
}