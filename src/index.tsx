import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './styles/main.css';
import './styles/boostrap-utilities.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Gallery from './pages/Gallery';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />}>
				<Route path=':pageNumber' element={<Home />} />
			</Route>
			<Route path='/gallery' element={<Gallery />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
