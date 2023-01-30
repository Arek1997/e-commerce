import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/UI/layout/Layout';
import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));

const App = () => {
	return (
		<Layout>
			<Suspense fallback={<Loading />}>
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
