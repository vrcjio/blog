import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card border-0" style={{ width: "18rem" }}>
        {/* <img src="/error404Page.png" className="card-img-top" alt="404" /> */}
        <img src="/error404Page.png" className="card-img-top" alt="404" />
        <div className="card-body text-center">
          <h5 className="card-title">Page Not Found</h5>
          <p className="card-text">
            Oops{"!"} It seems you{"'"}ve ventured into uncharted territory. Let{"'"}s get you back on track.
            </p>

          <Link href="/" className="btn btn-success">Return Home</Link>
        </div>
      </div>
    </div>
  )
}
