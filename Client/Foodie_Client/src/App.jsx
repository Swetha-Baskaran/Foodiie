import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Suspense} from "react";
import {Provider} from "react-redux";
import store from "../src/redux/store";
import AppRoutes from "../src/routes/config";

function App() {
	return (
		<>
			<Provider store={store}>
				<Suspense fallback={<div>Loading...</div>}>
					<Router>
						<AppRoutes />
					</Router>
				</Suspense>
			</Provider>
		</>
	);
}

export default App;
