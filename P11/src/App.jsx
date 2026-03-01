import React, { useState } from 'react'
import SearchBar from './Compartment/SearchBar';
import UserList from './Compartment/UserList';
import Data from './Compartment/Data';


const App = () => {



  
  {
    const [searchBar, setSearchBar] = useState("");

    const dataFromSearchBar = (value) => {
      // console.log(value);
      setSearchBar(value);
    };

    const filteredData = Data
      .filter((item) => {
        return item.first_name.toLowerCase()
          .includes(searchBar.toLowerCase());
      });
    // console.log(filteredData);

    <UserList users={searchBar} />
    return (
      <>
        <SearchBar onChange={dataFromSearchBar} />
        <h2>Value: {searchBar}</h2>
        <table >
          <thead>
            <tr>
              <th>Name  </th>
              <th>Last  </th>
              <th>Email  </th>
              <th>Phone  </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.Phone}</td>
              </tr>
            ))}
          </tbody>
        </table >
      </>
    )
  }

}

export default App