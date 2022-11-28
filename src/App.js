import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/UI/layout/Layout';
import Loadingspinner from './assets/loadingspinner.gif';

const Home = lazy(() => import('./pages/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

const App = () => {
	return (
		<Layout>
			<Suspense
				fallback={
					<img
						src={Loadingspinner}
						alt='Loading spinner'
						style={{ display: 'block', margin: '0 auto' }}
					/>
				}
			>
				<Routes>
					<Route path='home' element={<Home />} />
					<Route path='products' element={<Products />} />
					<Route path='products/:productId' element={<ProductDetails />} />
					<Route path='aboutus' element={<Aboutus />} />
					<Route path={'*' || '/'} element={<Navigate to={'home'} replace />} />
				</Routes>
			</Suspense>
		</Layout>
	);
};

export default App;
