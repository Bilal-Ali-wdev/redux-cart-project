import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
function App(){
    return(
        <Provider store={store}>
            <Router>
                <div className="app-container">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}
export default App;