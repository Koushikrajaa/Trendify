import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './men_ban4.jpg'
import pro1 from './fm2-1.jpeg'
import pro2 from './cm3-1.jpeg'
import pro3 from './cm4-1.jpeg'
import pro4 from './sm1-1.jpeg'
import pro5 from './cm7-1.jpeg'
import pro6 from './cm6-1.jpeg'
import pro7 from './fm3-1.jpeg'
import pro8 from './cm5-1.jpeg'
import pro9 from './cm8-1.jpeg'
import pro10 from './cm9-1.jpeg'
import pro11 from './cm1-2.jpeg'
import pro12 from './sm2-3.jpeg'


function Men (){
    const location=useLocation()

    return (
        <div class="home">
        <nav>
            <ul>
                <Link to="/home" ><img src={logo} alt="logo" class="n1"></img></Link>
                <li class="nav-items n2"><Link to="/men" >Men</Link></li>
                <li class="nav-items n3"><Link to="/women" >Women</Link></li>
                <li class="nav-items n4"><Link to="/kids" >Kids</Link></li>
                <li class="nav-items n5"><Link to="/sunglasses" >Sunglasses</Link></li>
                <li class="nav-items n6"><Link to="/watches" >Watches</Link></li>
                <li class="nav-items n7"><Link to="/shoes" >Shoes</Link></li>
            </ul>
        </nav>

        <img src={banner} alt="banner" class="banner1"></img>
        <div class="homeitem1">
        <Link to="/men-10"><a href="#">
                <img src={pro10} alt="fm" class="view-img"></img>
                <p class="brand">Levis</p>
                <p class="product-name">Men Slim Fit Checked Casual Shirt</p>
                <p class="bef-price">Rs.1799</p>
                <p class="discount">(50% Off)</p>
                <h4 class="price">Rs.910</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/men-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">The Bear House</p>
                <p class="product-name">Slim Fit Casual White Shirt</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(50% Off)</p>
                <h4 class="price">Rs.999</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/men-3"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">Roadster</p>
                <p class="product-name">Men Navy & Grey Checked Casual Shirt</p>
                <p class="bef-price">Rs.1499</p>
                <p class="discount">(65% Off)</p>
                <h4 class="price">Rs.524</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/men-4"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">HIGHLANDER</p>
                <p class="product-name">Men Navy Blue Solid Sweatshirt </p>
                <p class="bef-price">Rs.1199</p>
                <p class="discount">(60% Off)</p>
                <h4 class="price">Rs.719</h4>
            </a></Link>
        </div>
        <div class="homeitem5">
        <Link to="/men-5"><a href="#">
                <img src={pro5} alt="fm" class="view-img"></img>
                <p class="brand">Highstar</p>
                <p class="product-name">Mens Washed Denim Jacket</p>
                <p class="bef-price">Rs.2299</p>
                <p class="discount">(58% Off)</p>
                <h4 class="price">Rs.999</h4>
            </a></Link>
        </div>
        <div class="homeitem6">
        <Link to="/men-6"><a href="#">
                <img src={pro6} alt="fm" class="view-img"></img>
                <p class="brand">HERE&NOW</p>
                <p class="product-name">Men Navy Blue Slim Fit Casual
                    Shirt</p>
                <p class="bef-price">Rs.1699</p>
                <p class="discount">(67% Off)</p>
                <h4 class="price">Rs.560</h4>
            </a></Link>
        </div>
        <div class="homeitem7">
        <Link to="/men-7"><a href="#">
                <img src={pro7} alt="fm" class="view-img"></img>
                <p class="brand">FUBAR</p>
                <p class="product-name">Mandarin Collar Cotton Casual
                    Shirt</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(75% Off)</p>
                <h4 class="price">Rs.459</h4>
            </a></Link>
        </div>
        <div class="homeitem8">
        <Link to="/men-8"><a href="#">
                <img src={pro8} alt="fm" class="view-img"></img>
                <p class="brand">HIGHLANDER</p>
                <p class="product-name">Men Black & White Printed Casual
                    Shirt</p>
                <p class="bef-price">Rs.1049</p>
                <p class="discount">(59% Off)</p>
                <h4 class="price">Rs.430</h4>
            </a></Link>
        </div>
        <div class="homeitem9">
        <Link to="/men-9"><a href="#">
                <img src={pro9} alt="fm" class="view-img"></img>
                <p class="brand">Levis</p>
                <p class="product-name">Men Slim Fit Cotton Casual Shirt</p>
                <p class="bef-price">Rs.1000</p>
                <p class="discount">(21% Off)</p>
                <h4 class="price">Rs.799</h4>
            </a></Link>
        </div>
        <div class="homeitem10">
        <Link to="/men-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">Roadster</p>
                <p class="product-name">Slim Fit Formal Blue Shirt</p>
                <p class="bef-price">Rs.1499</p>
                <p class="discount">(50% Off)</p>
                <h4 class="price">Rs.749</h4>
            </a></Link>
        </div>
        <div class="homeitem11">
        <Link to="/men-11"><a href="#">
                <img src={pro11} alt="fm" class="view-img"></img>
                <p class="brand">Highstar</p>
                <p class="product-name">Olive Green Checked Casual Shirt</p>
                <p class="bef-price">Rs.1099</p>
                <p class="discount">(35% Off)</p>
                <h4 class="price">Rs.784</h4>
            </a></Link>
        </div>
        <div class="homeitem12">
        <Link to="/men-12"><a href="#">
                <img src={pro12} alt="fm" class="view-img"></img>
                <p class="brand">Roadster</p>
                <p class="product-name">Men Yellow Hooded Sweatshirt</p>
                <p class="bef-price">Rs.1799</p>
                <p class="discount">(46% Off)</p>
                <h4 class="price">Rs.671</h4>
            </a></Link>
        </div>
        
        <div class="footer-men">
            <Link to="/home" ><img src={logo} alt="logo" class="foo-img"></img></Link>

            <ul class="cato">
                <li class="cat-a c2"><Link to="/men" >Men</Link></li>
                <li class="cat-a c3"><Link to="/women" >Women</Link></li>
                <li class="cat-a c4"><Link to="/kids" >Kids</Link></li>
                <li class="cat-a c5"><Link to="/sunglasses" >Sunglasses</Link></li>
                <li class="cat-a c6"><Link to="/watches" >Watches</Link></li>
                <li class="cat-a c7"><Link to="/shoes" >Shoes</Link></li>
            </ul>
            <p class="mail">Contact : koushikrajaa7@gmail.com</p>
        </div>
    </div>
        )
    }
    
    export default Men