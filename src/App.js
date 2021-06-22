import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Info from "./components/Info";
import CustomReactStore from "./components/ReactStore";

function App() {
	return (
		<div className="dark-theme vh-100">
			<Container className="py-5">
				<Info />
				<CustomReactStore />
			</Container>
		</div>
	);
}

export default App;
