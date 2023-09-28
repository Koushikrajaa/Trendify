import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './sale_banner15.jpg'
import pro1 from './sh1-1.jpeg'
import pro2 from './sh2-1.jpeg'
import pro3 from './sh3-1.jpeg'
import pro4 from './sh4-1.jpeg'


function Shoe (){
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
        <Link to="/shoe-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">Mast & Harbour</p>
                <p class="product-name">Men White Casual Sneakers</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(71% Off)</p>
                <h4 class="price">Rs.579</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/shoe-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">Woakers</p>
                <p class="product-name">Men Blue Colourblocked Sneakers</p>
                <p class="bef-price">Rs.3995</p>
                <p class="discount">(82% Off)</p>
                <h4 class="price">Rs.719</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/shoe-3"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">Sir Corbett</p>
                <p class="product-name">Men Black Solid Slip On Formal Shoes</p>
                <p class="bef-price">Rs.2329</p>
                <p class="discount">(72% Off)</p>
                <h4 class="price">Rs.652</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/shoe-4"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">CLYMB</p>
                <p class="product-name">Men Non-Marking Running Shoes</p>
                <p class="bef-price">Rs.999</p>
                <p class="discount">(46% Off)</p>
                <h4 class="price">Rs.539</h4>
            </a></Link>
        </div>
        
        
        <div class="footer-sun">
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
    
    export default Shoe