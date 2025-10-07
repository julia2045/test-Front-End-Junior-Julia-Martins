import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import CreateNewStudent from './components/pages/Students/CreateNewStudents/CreateNewStudent.jsx';
import TableStudents from './components/pages/Students/StudentsTable/TableStudents.jsx';
import {DataStudentsContextProvider} from './components/Hooks/DataStudentsContext.jsx';
import './App.css'
import Dashboard from './components/pages/Dashboard.jsx';
import User from './components/pages/User.jsx';
import Finance from './components/pages/Finance.jsx';
import Teacher from './components/pages/Teacher.jsx';
import Students from './components/pages/Students/StudentsTable/TableStudents.jsx';

function App() {
  return (
    <BrowserRouter>
      <DataStudentsContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Students />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="finance" element={<Finance />} />
            <Route path="user" element={<User />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="create-new-student" element={<CreateNewStudent/>} />
            <Route path='students' element={<TableStudents/>}/>
          </Route>
        </Routes>
      </DataStudentsContextProvider>
    </BrowserRouter>
  );
}

export default App;
