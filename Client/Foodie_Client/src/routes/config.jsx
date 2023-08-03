import React from "react";
import {Route, Navigate, Routes} from "react-router-dom";
import Home from "../pages/Landing";
import About from "../pages/About";
import Dishes from "../pages/Dishes";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/login";
import Signup from "../pages/Auth/signup";
import ForgotPassword from "../pages/Auth/forgotpassword";
import OTPVerification from "../pages/Auth/OTPVerification";
import Order from "../pages/Order";
import Payment from "../pages/Payment";
const Layout = React.lazy(() => import("../components/layout/layout"));

// Replace this with your actual authentication logic (e.g., check for a valid JWT token)
const isLoggedIn = () => {
	// const token = localStorage.getItem("jwtToken");
	const token = "test";
	return !!token; // Return true if the token exists; otherwise, false
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({element}) => {
	return isLoggedIn() ? <Layout>{element}</Layout> : <Navigate to='/login' />;
};

const AppRoutes = () => {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={
						route.private ? <PrivateRoute {...route} /> : route.element
					}
				/>
			))}
			<Route
				path='/*'
				element={
					isLoggedIn() ? <Navigate to='/' /> : <Navigate to='/login' />
				}
			/>
		</Routes>
	);
};

const routes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/OTP",
		element: <OTPVerification />,
	},
	{
		path: "/",
		element: <Home />,
		private: true,
	},
	{
		path: "/about",
		element: <About />,
		private: true,
	},
	{
		path: "/dishes",
		element: <Dishes />,
		private: true,
	},
	{
		path: "/contact",
		element: <Contact />,
		private: true,
	},
	{
		path: "/orders",
		element: <Order />,
		private: true,
	},
	{
		path: "/payment",
		element: <Payment />,
		private: true,
	},
];

export default AppRoutes;
