import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './dis_ban8.jpg'
import pro1 from './sun1-1.jpeg'
import pro2 from './sun2-1.jpeg'
import pro3 from './sun3-2.jpeg'
import pro4 from './sun4-1.jpeg'


function Sunglass (){
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
        <Link to="/sun-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">Carlton London</p>
                <p class="product-name">Men Polarised & UV Protected Sunglasses</p>
                <p class="bef-price">Rs.2145</p>
                <p class="discount">(62% Off)</p>
                <h4 class="price">Rs.775</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/sun-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">Voyage</p>
                <p class="product-name">UV Protected Round Sunglasses</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(48% Off)</p>
                <h4 class="price">Rs.920</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/sun-3"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">OKNO</p>
                <p class="product-name">Aviators with UV Protected Lens</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(50% Off)</p>
                <h4 class="price">Rs.999</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/sun-4"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">Eyewearlabs</p>
                <p class="product-name">Aviators with Polarised Lens</p>
                <p class="bef-price">Rs.2599</p>
                <p class="discount">(70% Off)</p>
                <h4 class="price">Rs.779</h4>
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
    
    export default Sunglass