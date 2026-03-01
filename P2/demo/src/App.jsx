import React from 'react'
import ClockColor from './Componount/ClockColor'

const App = () => {
  const Data = [{
    "id": 1,
    "first_name": "Bax",
    "last_name": "Wilstead",
    "city": "Yopal",
    "student": {
      "id": 10,
      "first_name": "Desmond",
      "last_name": "Milmith",
      "city": "Vári"
    }
  }, {
    "id": 2,
    "first_name": "Quintilla",
    "last_name": "Chevis",
    "city": "Xingshou",
    "student": {
      "id": 9,
      "first_name": "Celestyn",
      "last_name": "Alexandrou",
      "city": "Tsuma"
    }
  }, {
    "id": 3,
    "first_name": "Sibeal",
    "last_name": "Huard",
    "city": "Baloc",
    "student": {
      "id": 8,
      "first_name": "Lacey",
      "last_name": "Dawley",
      "city": "Gorbatovka"
    }
  }, {
    "id": 4,
    "first_name": "Margareta",
    "last_name": "Lansly",
    "city": "San Jose",
    "student": {
      "id": 7,
      "first_name": "Christos",
      "last_name": "Chidwick",
      "city": "Jiaoxiyakou"
    }
  }, {
    "id": 5,
    "first_name": "Lizabeth",
    "last_name": "Macellar",
    "city": "Mýrina",
    "student": {
      "id": 6,
      "first_name": "Kristofer",
      "last_name": "Gulland",
      "city": "Shu"
    }
  }]
  return (
    <>
      <div>Code </div>
      {
        Data.map((data, index) => (
          <div key={index}>
            <ClockColor data={data} />
            <br />
          </div>
        ))
      }
      {/* {
        studentData.map((Data, index)=>(
          <h3>ID: {studentData.id}</h3> 
          <h3>FName: {studentData.first_name}</h3> 
          <h3>LName: {studentData.last_name}</h3> 
          <h3>City: {studentData.city}</h3> 
          <h3>Student: {
          <h3>ID: {studentData.id}</h3> 
          <h3>FName: {studentData.first_name}</h3> 
          <h3>LName: {studentData.last_name}</h3> 
          <h3>City: {studentData.city}</h3> 
          }
          </h3> 
        ))
      } */}

    </>
  )
}

export default App