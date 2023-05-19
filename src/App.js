import React, { useState } from 'react'
import Navbar from './component/Navbar'
import { Routes,Route } from 'react-router-dom'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar' 
const App=()=>{
 
  const pageSize=5;
  //const[progress,setProgress]=useState(0)
  
    return (
      <div>
        <Navbar/>
     
     {/* <LoadingBar
      height={3}
        color='#f11946'
    progress={progress}/>*/}
        
        <Routes>
     <Route exact path='/' element={<News   key="general" pageSize={6}  country="in" category="general"/>}/>
     <Route exact path="/business" element={<News   key="business" pageSize={6}  country="in" category="business"/>}/>
     <Route exact path="/health" element={<News   key="health" pageSize={6}  country="in" category="health"/>}/>
     <Route exact path="/science" element={<News   key="science" pageSize={6}  country="in" category="science"/>}/>
     <Route exact path="/sports" element={<News   key="sports" pageSize={6}  country="in" category="sports"/>}/>
     <Route exact path="/technology" element={<News   key="technology" pageSize={6}  country="in" category="technology"/>}/>
     <Route exact path="/entertainment"element={<News   key="entertainment" pageSize={6}  country="in" category="/entertainment"/>}/>
     <Route exact path="/general" element={<News   key="ge" pageSize={6}  country="in" category="general"/>}/>
</Routes>

      </div>
    )
  }



export default App;
