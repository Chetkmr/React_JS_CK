import React from 'react'

const ClockColor = ({ data }) => {
  // const studentData = [{
  //   "id": 1,
  //   "first_name": "Bax",
  //   "last_name": "Wilstead",
  //   "city": "Yopal",
  //   "student": {
  //     "id": 10,
  //     "first_name": "Desmond",
  //     "last_name": "Milmith",
  //     "city": "Vári"
  //   }
  // }, {
  //   "id": 2,
  //   "first_name": "Quintilla",
  //   "last_name": "Chevis",
  //   "city": "Xingshou",
  //   "student": {
  //     "id": 9,
  //     "first_name": "Celestyn",
  //     "last_name": "Alexandrou",
  //     "city": "Tsuma"
  //   }
  // }, {
  //   "id": 3,
  //   "first_name": "Sibeal",
  //   "last_name": "Huard",
  //   "city": "Baloc",
  //   "student": {
  //     "id": 8,
  //     "first_name": "Lacey",
  //     "last_name": "Dawley",
  //     "city": "Gorbatovka"
  //   }
  // }, {
  //   "id": 4,
  //   "first_name": "Margareta",
  //   "last_name": "Lansly",
  //   "city": "San Jose",
  //   "student": {
  //     "id": 7,
  //     "first_name": "Christos",
  //     "last_name": "Chidwick",
  //     "city": "Jiaoxiyakou"
  //   }
  // }, {
  //   "id": 5,
  //   "first_name": "Lizabeth",
  //   "last_name": "Macellar",
  //   "city": "Mýrina",
  //   "student": {
  //     "id": 6,
  //     "first_name": "Kristofer",
  //     "last_name": "Gulland",
  //     "city": "Shu"
  //   }
  // }]

  return (
    <>
      <h2>Name: {data.first_name}</h2>
      <ul>
        <li>
          <h3>ID: {data.id}</h3>
        </li>
        <li>
          <h3>Name: {data.first_name}</h3>
        </li>
        <li>
          <h3>Last Name: {data.last_name}</h3>
        </li>
        <li>
          <h3>City Name: {data.city}</h3>
        </li>
        <li>
          <h2>Student: </h2>
          {
            data.student((student, index) => (
              <div key={student}>
                <h3>Student: {data.student.id}</h3>
                <h3>Student: {data.student.first_name}</h3>
                <h3>Student: {data.student.last_name}</h3>
                <h3>Student: {data.student.city}</h3>
              </div>
            ))
          }
        </li>
      </ul>
      <br />
      <br />
    </>
  )
}

export default ClockColor