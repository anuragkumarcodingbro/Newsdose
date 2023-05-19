import React, { Component } from 'react'
import loading from './loading.gif.gif'
const Spinner=()=>
   {
    return (
      <div className="text-center" my="10">
        <img src={loading} alt="loading"/>
      </div>
    )
  }


export default Spinner
