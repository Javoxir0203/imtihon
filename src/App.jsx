import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accessories from './pages/Accessories';
import Clothes from './pages/Clothes';
import Shoes from './pages/Shoes';
import Header from './components/Header';
import Home from './pages/home';
import LoginPage from './pages/LoginPage';
import AccountInformation from './pages/AccountInformation';
import LoginLayouts from './layouts/LoginLayouts';
import Cart from './pages/Cart';
import CartComp from './components/CartComp';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/clothes' element={<Clothes />} />
				<Route path='/shoes' element={<Shoes />} />
				<Route path='/accessories' element={<Accessories />} />
				<Route path='/login' element={<LoginLayouts />}>
					<Route index element={<LoginPage />} />
					<Route path='account-information' element={<AccountInformation />} />
				</Route>
				<Route path='/cart' element={<Cart />} />
				<Route path='/Cartcomp' element={<CartComp />} />
			</Routes>
		</Router>
	);
}

export default App;
