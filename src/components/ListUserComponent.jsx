// import React, { Component } from "react";
// import DriverService from "../Service/UserService";

// export default class ListUserComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       users: [],
//     };
//   }

//   componentDidMount() {
//     DriverService.getUsers().then((res) => {
//       this.setUsers({ users: res.data });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2 className="text-center">Vehicle List</h2>
//         <div className="row">
//           <table className="table table-striped table-bordered">
//             <thead>
//               {/* <tr>
//                 <th>Vehicle Id</th>
//                 <th>Vehicle No.</th>
//                 <th>Insuarence No.</th>
//                 <th>Max_Passengers</th>
//                 <th>Max_Days</th>
//                 <th>Max_Length</th>
//               </tr> */}
//               <tr>
//                 <th>id</th>
//                 <th>name</th>
//                 <th>pwd</th>
//                 <th>role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.state.users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.name}</td>
//                   <td>{user.password}</td>
//                   <td>{user.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
