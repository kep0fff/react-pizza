import React from 'react';

import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
	const dispatch = useDispatch();
	
	React.useEffect(() => {
		 dispatch(fetchPizzas());
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
