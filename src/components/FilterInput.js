import React, { useEffect, useState } from "react";
import Table from './Table';

const FilterInput = ({ users, updateUsers }) => {
    const [inputValue, updateInput] = useState("");
    const [filteredUsers, setFilteredUsers] = useState()
    const [initialUsers, setInitialUsers] = useState();

    useEffect(() => {
        setInitialUsers(users)
    }, [users]);

    const filter = (inputValue) => {
        const filterUsers =
        inputValue === ""
            ? users 
            : users.filter(
                ({ name: { first } }) => 
                    first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            );
        setFilteredUsers(filterUsers);
        // console.log(filteredUsers)
    }
            
    return (
        <div>
            <input value={inputValue} onChange={e => updateInput(e.target.value)} />
            <div>
                <Table users={initialUsers} />
            </div>
        </div>
    );
 };
            

 export default FilterInput;