import React from "react";
import Card from "react-bootstrap/Card";
import { color, theme } from "../../constants";

const ReactStore = () => {
	return (
		<Card style={{ ...theme.dark, borderColor: color.primary }}>
			<Card.Body>
				<Card.Title>Custom React Store</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">
					custom-react-store
				</Card.Subtitle>
				<Card.Text>
					Custom Redux Store is a light-weight store provider for react apps
					like redux but using react context and reducer without any external
					dependencies. To know more, checkout the links below.
				</Card.Text>
				<Card.Link className="card-link-link-light" target="gl-crs" href="https://gitlab.com/prosperevergreen/custom-react-store">
					Gitlab
				</Card.Link>
				<Card.Link className="link-light" target="npm-crs" href="https://www.npmjs.com/package/custom-react-store">
					npm
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default ReactStore;
