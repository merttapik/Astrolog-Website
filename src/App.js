import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link ,} from "react-router-dom";
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import BiographyScreen from './screens/BiographyScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import ContactScreen from './screens/ContactScreen';
import ServicesScreen from './screens/ServicesScreen';
import CourseScreen from './screens/CourseScreen';
import ProductScreen from './screens/ProductScreen';
import BlogScreen from './screens/BlogScreen';
import BlogPartScreen from './screens/BlogPartScreen';
import ProductidScreen from './screens/ProductidScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import Profile from './screenComponent/Usercomponent/Profile';
import Basket from './screenComponent/Usercomponent/Basket';
import AppoitmentUser from './screenComponent/Usercomponent/AppoitmentUser';
import CommentUser from './screenComponent/Usercomponent/CommentUser';
import AdminScreen from './screens/AdminScreen';
import Orders from './screenComponent/AdminComponent/Orders';
import AppoitmentFollow from './screenComponent/AdminComponent/AppoitmentFollow';
import CourseYoutube from './screenComponent/AdminComponent/CourseYoutube';
import BlogAdmin from './screenComponent/AdminComponent/BlogAdmin';
import ProductAdmin from './screenComponent/AdminComponent/ProductAdmin';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
     <Routes>
       
       <Route exact path='/' element={<HomeScreen />} ></Route>
       <Route exact path='/Biyografi' element={<BiographyScreen />} ></Route>
       <Route exact path='/Uyeol' element={<RegisterScreen /> } ></Route>
       <Route exact path='/Girisyap' element={<LoginScreen />} ></Route>
       <Route exact path='/Iletisim' element={<ContactScreen />} ></Route>
       <Route exact path='/Hizmetler' element={<ServicesScreen />} ></Route>
       <Route exact path='/Egitimlerim' element={<CourseScreen />} ></Route>
       <Route exact path='/Urunlerim' element={<ProductScreen />} ></Route>
       <Route exact path='/Blog' element={<BlogScreen />} ></Route>
       <Route exact path='/Blog/id' element={<BlogPartScreen />} ></Route>
       <Route exact path='/Urunlerim/id' element={<ProductidScreen />} ></Route>
       <Route exact path='/Profil/id' element={<UserProfileScreen />} ></Route>
       <Route exact path='/Profil/id/ProfilDuzenle' element={<Profile />} ></Route>
       <Route exact path='/Profil/id/Sepetim' element={<Basket />} ></Route>
       <Route exact path='/Profil/id/Randevularim' element={<AppoitmentUser />} ></Route>
       <Route exact path='/Profil/id/Yorumum' element={<CommentUser />} ></Route>
       <Route exact path='/Admin/id' element={<AdminScreen />} ></Route>
       <Route exact path='/Admin/id/Siparis' element={<Orders />} ></Route>
       <Route exact path='/Admin/id/Randevular' element={<AppoitmentFollow />} ></Route>
       <Route exact path='/Admin/id/YoutubeCourse' element={<CourseYoutube />} ></Route>
       <Route exact path='/Admin/id/Blog' element={<BlogAdmin />} ></Route>
       <Route exact path='/Admin/id/Urun' element={<ProductAdmin />} ></Route>
     </Routes>
     
    <Footer />
  </div></Router>
    
  );
}

export default App;
