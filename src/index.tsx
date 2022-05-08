import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './styles/main.css';
import './styles/boostrap-utilities.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import Article from './components/Gallery/Article/Article';
import Gallery from './components/Gallery/Gallery';

ReactDOM.render(
	<BrowserRouter>
		<nav>
			<Link to='/'>home</Link>
			<Link to='/gallery'>gallery</Link>
			<a className='button'>contact</a>
		</nav>
		<Routes>
			<Route path='/' element={<Home />} />

			<Route path='/gallery' element={<Gallery />} />
			<Route path='/gallery/*' element={<Article />} />
		</Routes>
		<p className='footer'>
			Copyright © 2021 - 2022 Katto Studios. All Rights Reserved
		</p>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
