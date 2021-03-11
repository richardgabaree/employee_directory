import React, { useState, useEffect } from "react";
import FilterInput from "./FilterInput";
// import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";

function App() {
    const [initialUsers, updateAvailableUsers] = useState({});
    // const [usersToRender, updateUsersToRender] = useState({});

    useEffect(() => {
        getUsers()
            .then(({ data: {results } }) => {
                updateAvailableUsers(results);
                // updateUsersToRender(results)
        });
    }, [initialUsers]);

    return (
        <div className="App">
            <h1>Employee Directory</h1>
            <p> 
                To begin your search, enter a first name inthe user input below
            </p>
            <FilterInput users={initialUsers} updateUsers={updateAvailableUsers} />
        </div>
    );
}

export default App;