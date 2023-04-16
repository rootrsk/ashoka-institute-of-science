import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from "./components/Homepage";
import Videos from './components/Videos';
import AdminRoutes from './routes/AdminRoutes';
// import './styles/style.css'	
// import './App.scss'
// import Result from './components/Result';
function App() {
	const [model, setModel] = useState(true)
	return(
		<div>
			<BrowserRouter>
			<div>
				{/* <Header /> */}
				<Routes>
					<Route path='/' element={<Homepage />} exact />
					<Route path='/videos' element={<Videos />} /> 
					<Route path='/admin/*' element={<AdminRoutes />} />
					{/* <Route path='/result' element={<Result />} /> */}
					
				</Routes>
			</div>
				
			</BrowserRouter>
		</div>
	)
}
export default App;

