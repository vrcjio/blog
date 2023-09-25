'use client';

import { setLoading } from "@/lib/Redux/systemSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const LoadingInit = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setLoading(false));
    },[]);
    return <></>;
}

export default LoadingInit;