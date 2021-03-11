import React from "react";

export default () => {
	return (
		<div style={styles.header} className="jumbotron jumbotron-fluid bg-info">
			<div className="container">
				<h1 className="display-4">Employee Directory</h1>
				<p>Get to know your team</p>
			</div>
		</div>
	);
};

const styles = {
	header: {
		marginBottom: 0,
		color: "white",
		display: "flex",
		textAlign: "center",
	},
};