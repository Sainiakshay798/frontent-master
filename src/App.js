import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Women from './Components/Women/Women';
import Needledust from './Components/Needledust/Needledust';
import Purses from './Components/Purses/Purses';
import Man from './Components/Man/Man';
import Kids from './Components/Kids/Kids';
import Gifting from './Components/Gifting/Gifting';
import Celebrities from './Components/Celebrities/Celebrities';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Juttis from './Components/Women/Juttis';
import Heels from './Components/Women/Heels';
import Kolhaparis from './Components/Women/Kolhaparis';
import Sandals from './Components/Women/Sandals';
import Mules from './Components/Women/Mules';
import ViewAll from './Components/Needledust/ViewAll';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Header />
        <Carousel />
        <Routes>
      
          <Route path="/women" element={<Women />} />
          <Route path="/needledust-x-abhinav-mishra" element={<Needledust />} />
          <Route path="/purses" element={<Purses />} />
          <Route path="/man" element={<Man />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/celebrities" element={<Celebrities />} />

          <Route path="/juttis" element={<Juttis></Juttis>} />
          <Route path="/heels" element={<Heels></Heels>} />
          <Route path="/kolha" element={<Kolhaparis></Kolhaparis>} />
          <Route path="/sandals" element={<Sandals></Sandals>} />
          <Route path="/mules" element={<Mules></Mules>} />
          <Route path="/view" element={<ViewAll></ViewAll>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
