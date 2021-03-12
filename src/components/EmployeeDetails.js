import React from "react";

// function EmployeeDetails(props) {
//   return (
//     <div className="text-center">
//       <ul className="list-group list-group-flush list-group-horizontal-sm">
//       <li className="list-group-item"><img alt={props.name} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }} /></li>
//       <li className="list-group-item"> {props.name.first} {props.name.last}</li>
//       <li className="list-group-item"> {props.phone}</li>
//       <li className="list-group-item"> {props.email}</li> 
//       </ul>
//     </div>
//   );
// }

// export default EmployeeDetails;


import React, { useState, useEffect} from "react";

const Table = ({ users }) => {
    const [sortUsers, updateSortedUsers] = useState([]);

    useEffect(() => updateSortedUsers(users), [users]);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th
                            scope="col"
                            onClick={() => {
                                const userCopy = [...users];
                                const updateSort = userCopy.sort((a, b) => {
                                    const nameA = a.name.first;
                                    const nameB = b.name.first;

                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }

                                    return 0;
                                });

                                updateSortedUsers(updateSort);
                            }}
                            >
                            First
                        </th>
                            <th scope="col">picture</th>
                            <th scope="col">Last</th>
                            <th scope="col">email</th>
                            <th scope="col">phone</th>
                            <th scope="col">cell</th>
                        </tr>
                    </thead>

                    <tbody>
                    {sortedUsers.map(
                        ({
                            picture: { thumbnail },
                            name: { first, last },
                            phone,
                            email,
                            dob: [date]
                        }) => (
                            <tr key={email}>
                                <td>
                                    <image src {...picture.thumbnail} />
                                </td>
                                    <td {.../name.first}> </td >
                                    <td>{/name.last}</td >
                                    <td>{/phone}</td >
                                    <td>{/email}</td >
                                    <td>{/dob.date}</td >

                                    <td></td>
                            </tr>
                                            
                                            

               </tbody>
            </table>                    
        </div>                }

export default EmployeeDetails;