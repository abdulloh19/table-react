// import React from "react";
// import "./App.css";

// class App extends React.Component {
//   state = {
//     Users: [
//       {
//         FirstName: "John",
//         LastNmae: "Smith",
//         Age: "4",
//         number: "7",
//         city: "Toshkent",
//         state: "IL",
//         salary: "7000",
//       },
//       {
//         FirstName: "Jane",
//         LastNmae: "Doe",
//         Age: "15",
//         number: "10",
//         city: "Buxoro",
//         state: "ID",
//         salary: "5000",
//       },
//       {
//         FirstName: "Mary",
//         LastNmae: "Smith",
//         Age: "25",
//         number: "100",
//         city: "Samarqand",
//         state: "IZ",
//         salary: "3500",
//       },
//       {
//         FirstName: "George",
//         LastNmae: "Edwerds",
//         Age: "18",
//         number: "7",
//         city: "Termiz",
//         state: "IL",
//         salary: "3000",
//       },
//     ],
//   };

//   addUsers = () => {
//     const users = this.state.Users;
//     const a = users.filter((item, index) => {
//       if (item.Age >= 18) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     this.setState({
//       users: a,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <button className="table-btn" onClick={this.addUsers}>
//           Armiyaga qabul qilsih
//         </button>
//         <table>
//           <tr>
//             <th>No</th>
//             <th>FirstName</th>
//             <th>LastName</th>
//             <th>Age</th>
//             <th>Dept_number</th>
//             <th>City</th>
//             <th>State</th>
//             <th>Salary</th>
//           </tr>
//           <tbody>
//             {this.state.Users.map(function (item, index) {
//               return (
//                 <tr>
//                   <td>{index + 1}</td>
//                   <td>{item.FirstName}</td>
//                   <td>{item.LastNmae}</td>
//                   <td>{item.Age}</td>
//                   <td>{item.number}</td>
//                   <td>{item.city}</td>
//                   <td>{item.state}</td>
//                   <td>{item.salary}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default App;
