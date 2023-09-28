import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './dis_ban9.jpg'
import pro1 from './wat1-1.jpeg'
import pro2 from './wat2-1.jpeg'
import pro3 from './wat4-1.jpeg'
import pro4 from './wat5-1.jpeg'


function Watch (){
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
        <Link to="/watch-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">Sonata</p>
                <p class="product-name">Volt Men Black Analogue watch</p>
                <p class="bef-price">Rs.999</p>
                <p class="discount">(30% Off)</p>
                <h4 class="price">Rs.699</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/watch-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">Titan</p>
                <p class="product-name">Titan Men Black Dial Watch</p>
                <p class="bef-price">Rs.999</p>
                <p class="discount">(10% Off)</p>
                <h4 class="price">Rs.899</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/watch-3"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">Fire-Boltt</p>
                <p class="product-name">Smartwatch With Full Touch Display</p>
                <p class="bef-price">Rs.3999</p>
                <p class="discount">(25% Off)</p>
                <h4 class="price">Rs.999</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/watch-4"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">boAt</p>
                <p class="product-name">Wave Beat M Smartwatch</p>
                <p class="bef-price">Rs.2599</p>
                <p class="discount">(60% Off)</p>
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
    
    export default Watch