import React from 'react';


// import React, {useEffect} from 'react';
import './App.css';
import { AuthPage } from './pages/auth-page';
// import { signUp } from './signUp'
// import WeatherPage from "./modules/weather/presentation/pages/WeatherPage";
// import {Route, Routes, useLocation} from "react-router";
// import NavigationRow from "./general/components/navigation/NavigationRow";
// import NewsletterSubscribe from "./general/components/newsletter_subscribe/NewsletterSubscribe";
// import Footer from "./general/components/footer/Footer";
// import ShopPage from "./modules/shop-page/presentation/pages/ShopPage";
// import Blog from "./modules/blog/page/Blog";
// import CartPage from "./modules/cart/pages/cart-page";
// import CheckoutPage from "./modules/cart/pages/checkout-page";
// import CompletePage from "./modules/cart/pages/complete-page";
// import HomePage from './modules/home_page/presentation/page/HomePage';
// import SignUp from "./modules/signup/SignUp";

function App() {
    // const { pathname } = useLocation();
    // useEffect(() => {
    //     window.scrollTo(0, 0); // Перемещение скролла в верхнюю часть страницы при изменении пути
    // }, [pathname]);

//     return (
//         <div className={"wrapper"}>
//             <NavigationRow/>
//                 <Routes>
//                     {/* <Route path="/home" element={<HomePage/>}/>
//                     <Route path="/shop" element={<ShopPage/>}/>
//                     <Route path="/cart" element={<CartPage/>}/>
//                     <Route path="/cart/checkout" element={<CheckoutPage/>}/>
//                     <Route path="/cart/checkout/complete" element={<CompletePage/>}/>
//                     <Route path="/blog" element={<Blog/>}/> */}
//                     <Route path="/signup" element={<SignUp />}/>
//                     {/* {/* <Route path="*" element={<HomePage/>}/> */}
//                 </Routes> 
//             {/* {!pathname.includes('cart') && <NewsletterSubscribe/>}
//             <Footer/> */}
//         </div>
//     );
// }
return (
    <div className="App">
    <AuthPage />
    {/* <signUp /> */}
    </div>
  );
}

export default App;

