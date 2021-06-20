import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Info from "./components/Info";

function App() {
	return (
		<div className="dark-theme vh-100">
			<Container className="py-5">
				<Info />
			</Container>
		</div>
	);
}

export default App;
