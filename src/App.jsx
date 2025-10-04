import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import NewStudent from './NewStudent';
import Students from './Students';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="NewStudent" element={<NewStudent />} />
        <Route path='Students' element={<Students/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
