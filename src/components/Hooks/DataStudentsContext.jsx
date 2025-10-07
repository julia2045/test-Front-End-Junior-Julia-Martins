import React, { createContext, useState } from 'react'

export const DataStudentsContext = createContext()

export const DataStudentsContextProvider = ({ children }) => {
  const [dataStudents, setDataStudents] = useState([
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    {
      name: 'Samanta William',
      id: Math.floor(Math.random() * 1000000000),
      date: '2021-03-01',
      parentName: 'Mana William',
      city: 'Jakarta',
      contact: {
        email: 'email@emal.com',
        phone: '+123456789',
      },
    },
    
  ])

  const [msg, setMsg] = useState('')

  function addStudent(student) {
    setDataStudents((prev) => [...prev, student])

    const studentSave = localStorage.getItem('newStudent')
    const studentArray = studentSave ? JSON.parse(studentSave) : []
    studentArray.push(student)
    localStorage.setItem('newStudent', JSON.stringify(studentArray))

    setMsg('Novo Aluno adicionado!')
    setTimeout(() => setMsg(''), 3000)
  }

  return (
    <DataStudentsContext.Provider
      value={{ dataStudents, setDataStudents, addStudent, msg }}
    >
      {children}
    </DataStudentsContext.Provider>
  )
}
