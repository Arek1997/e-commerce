import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/UI/layout/Layout';
import Loading from './components/loading/Loading';

const Home = lazy(() => import('./pages/home'));
const Aboutus = lazy(() => import('./pages/aboutus'));
const Products = lazy(() => import('./pages/product'));
const ProductDetails = lazy(() => import('./pages/product-details'));

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
