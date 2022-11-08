import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

import Layout from './components/UI/layout/Layout';

const App = () => {
	return (
		<Layout>
			<Routes>
				<Route path='home' element={<Home />} />
				<Route path='products' element={<Products />} />
				<Route path='products/:productId' element={<ProductDetails />} />
				<Route path='aboutus' element={<Aboutus />} />
				<Route path={'*' || '/'} element={<Navigate to={'home'} replace />} />
			</Routes>
		</Layout>
	);
};

export default App;
