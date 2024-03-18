
// import './App.css'
// import Navbar from './Components/Navbar/Navbar'

// import Header from './Components/Header/Header';

// import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import Women from './Components/Women/Women';
// import Needledust from './Components/Needledust/Needledust';
// import Purses from './Components/Purses/Purses';
// import Man from './Components/Man/Man';
// import Kids from './Components/Kids/Kids';
// import Gifting from './Components/Gifting/Gifting';
// import Celebrities from './Components/Celebrities/Celebrities';

// function App() {
//   return (
//     <div >
//      <Navbar/>
//      <Header/>
//      <BrowserRouter>
//      <Routes>
//      <Route path="/women" component={Women} />
//      <Route path="/needledust-x-abhinav-mishra" component={Needledust} />
//      <Route path="/purses" component={Purses} />
//      <Route path="/man" component={Man} />
//      <Route path="/kids" component={Kids} />
//      <Route path="/gifting" component={Gifting} />
//      <Route path="/celebrities" component={Celebrities} />
     
     
     
     
//      </Routes>
     
//      </BrowserRouter>
 
//     </div>
//   )
// }

// export default App;




import React from 'react'
import Header from './Components/Header/Header'
import Carousel from './Components/Carousel/Carousel'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Header></Header>
    <Carousel></Carousel>
    </div>
  )
}

export default App
