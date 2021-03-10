import React, { useState, useEffect }  from "react";

const Table = ({ users }) => {
    const [sortedUsers, udateSortedUser] = useState([]);

    useEffect(() => updateSortedUsers(users), [users]);
}

