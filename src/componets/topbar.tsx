import React from 'react'
import NavLink from './NavLink'

const TopBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Blog Now</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink />
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
  )
}

export default TopBar