kishaprudente
/
employee-directory-react
1
0
0
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
employee-directory-react/src/components/Table.js /
@kishaprudente
kishaprudente added sort function
Latest commit f31708b on Jun 3, 2020
 History
 1 contributor
23 lines (22 sloc)  574 Bytes
  
import React from "react";
import ListItem from "./ListItem";

export default ({ employees, handleSortButton, sort }) => {
	return (
		<table className="table table-striped">
			<thead>
				<tr>
					<th scope="col">Image</th>
					<th scope="col">Name 
						<span>
							<i className={sort ? "fa fa-sort-alpha-asc" : "fa fa-sort-alpha-desc"} onClick={handleSortButton}></i>
						</span>
					</th>
					<th scope="col">Phone</th>
					<th scope="col">Email</th>
					<th scope="col">DOB</th>
				</tr>
			</thead>
			<ListItem employees={employees} />
		</table>
	);
};



