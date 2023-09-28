import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './dis_ban4.jpg'
import pro1 from './kid1-1.jpeg'
import pro2 from './kid2-1.jpeg'
import pro3 from './kid3-1.jpeg'
import pro4 from './kid4-1.jpeg'
import pro5 from './kid5-1.jpeg'
import pro6 from './kid6-1.jpeg'
import pro7 from './kid7-1.jpeg'
import pro8 from './kid8-1.jpeg'


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
        <Link to="/kid-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">A.T.U.N.</p>
                <p class="product-name">ATUN Yellow Striped Shirt Dress</p>
                <p class="bef-price">Rs.2499</p>
                <p class="discount">(63% Off)</p>
                <h4 class="price">Rs.924</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/kid-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">Pspeaches</p>
                <p class="product-name">Girls Striped A-Line Midi Cotton Dress</p>
                <p class="bef-price">Rs.2282</p>
                <p class="discount">(70% Off)</p>
                <h4 class="price">Rs.684</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/kid-4"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">FASHION DREAM</p>
                <p class="product-name">Girls Blue Western Dress</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(50% Off)</p>
                <h4 class="price">Rs.999</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/kid-3"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">Vishudh</p>
                <p class="product-name">Girls Black Traditional Dress</p>
                <p class="bef-price">Rs.999</p>
                <p class="discount">(30% Off)</p>
                <h4 class="price">Rs.699</h4>
            </a></Link>
        </div>
        <div class="homeitem5">
        <Link to="/kid-5"><a href="#">
                <img src={pro5} alt="fm" class="view-img"></img>
                <p class="brand">Vishudh</p>
                <p class="product-name">Girls Pale Orange Ethinic Dress</p>
                <p class="bef-price">Rs.1499</p>
                <p class="discount">(40% Off)</p>
                <h4 class="price">Rs.899</h4>
            </a></Link>
        </div>
        <div class="homeitem6">
        <Link to="/kid-6"><a href="#">
                <img src={pro6} alt="fm" class="view-img"></img>
                <p class="brand">Nayo</p>
                <p class="product-name">Gilrs Black Floral Printed Dress</p>
                <p class="bef-price">Rs.1299</p>
                <p class="discount">(52% Off)</p>
                <h4 class="price">Rs.610</h4>s
            </a></Link>
        </div>
        <div class="homeitem7">
        <Link to="/kid-7"><a href="#">
                <img src={pro7} alt="fm" class="view-img"></img>
                <p class="brand">Libas</p>
                <p class="product-name">Girls Floral Printed Western Dress</p>
                <p class="bef-price">Rs.1299</p>
                <p class="discount">(65% Off)</p>
                <h4 class="price">Rs.454</h4>
            </a></Link>
        </div>
        <div class="homeitem8">
        <Link to="/kid-8"><a href="#">
                <img src={pro8} alt="fm" class="view-img"></img>
                <p class="brand">Anouk</p>
                <p class="product-name">Girls Yellow Casual Kurta</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(55% Off)</p>
                <h4 class="price">Rs.985</h4>
            </a></Link>
        </div>
        
        
        <div class="footer-kid">
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