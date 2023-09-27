'use client'

import TopBar from "@/componets/topbar";
import Link from "next/link";
import { useEffect } from "react"


export default function PostError({ error, reset, }: { error: Error, reset: () => void }) {
  useEffect(() => {
    console.log(error.message);
    console.log(error);
  })

  return (
    <>
      <TopBar />
      <div className="text-center">
        <h1><i className="text-danger fa-sharp fa-solid fa-bug fa-bounce"></i></h1>
        <h2 className="text-danger">Something went wrong!</h2>
        <button className="btn btn-outline-info" onClick={() => reset()}>Try again</button>
        <br />
        <Link href="/" className="nav-link text-success fw-bold m-3" >
          Home 
        </Link>
        <br />
      </div>
    </>
  )
}