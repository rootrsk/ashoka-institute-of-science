import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Answer from './components/Answers';
// import Demo from './components/Demo2';
import Header from './components/Header';
import Homepage from "./components/Homepage";
// import Result from './components/Result';
import Videos from './components/Videos';
import './styles/style.css'
function App() {
	const [model, setModel] = useState(true)
	return(
		<div>
			<BrowserRouter>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} exact />
					<Route path='/videos' element={<Videos />} /> 
					{/* <Route path='/result' component={Result} /> */}
					{/* <Route path='/answer-keys' component={Answer}  /> */}
					{/* <Route path='/demo' component={Demo}  /> */}
				</Routes>
			</div>
				
			</BrowserRouter>
		</div>
	)
}
export default App;

