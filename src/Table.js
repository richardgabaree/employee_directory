import React, { useEffect, useState }  from "react";

const Table = ({ users }) => {
  const [userCopy, setUserCopy] = useState([]);
  const [sortedUsers, updateSortedUsers] = useState([]);

    useEffect(() => {
      // console.log(users)
      // setUserCopy(users)
    }, [users])

    const sortUsers = () => {
      const updateSort = users.sort((a, b) => {
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
        console.log(sortedUsers);
    } 
    
    return (
        <div>
          <table className="table">
            <thead>
              <tr>
                {/* <th scope="col">title</th> */}
                <th
                  scope="col"
                  onClick={sortUsers}
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
              {sortedUsers.map (
                (user) => (
                  <tr key={user.email}>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.cell}</td>
                    <td>
                      <img src={user.picture.thumbnail} alt={""}/>
                    </td>
    
                    <td></td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      );
    };
    
    export default Table;


