import React from "react";
import "./cars.css";

class Cars extends React.Component {
  render() {
    const carsArray = [
      {
        name: "nexia",
        year: 2010,
        color: "white",
      },
      {
        name: "Cobalt",
        year: 2015,
        color: "black",
      },
      {
        name: "spark",
        year: 2020,
        color: "red",
      },
      {
        name: "tracker",
        year: 2022,
        color: "black",
      },
      {
        name: "malibu",
        year: 2021,
        color: "white",
      },
    ];
    return (
      <table>
        <tr>
          <th>No_</th>
          <th>Name</th>
          <th>Year</th>
          <th>Color</th>
        </tr>
        {carsArray.map(function (item, index) {
          return (
            <tbody>
              <tr>
                <td>{index + 1})</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td>{item.color}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    );
  }
}

export default Cars;
  
