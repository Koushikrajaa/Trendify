import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men.css'

import logo from './tr_logo_bg.png'
import banner from './dis_ban11.jpg'
import pro1 from './wc1-1.jpeg'
import pro2 from './wc2-1.jpeg'
import pro3 from './wc3-1.jpeg'
import pro4 from './wc4-1.jpeg'
import pro5 from './wc5-1.jpeg'
import pro6 from './wc6-4.jpeg'
import pro7 from './wc7-2.jpeg'
import pro8 from './wc8-1.jpeg'
import pro9 from './wc9-3.jpeg'
import pro10 from './wc10-1.jpeg'
import pro11 from './wc11-1.jpeg'
import pro12 from './wc12-1.jpeg'


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
        <Link to="/women-1"><a href="#">
                <img src={pro1} alt="fm" class="view-img"></img>
                <p class="brand">Vishudh</p>
                <p class="product-name">Women Maroon & White Striped Kurta</p>
                <p class="bef-price">Rs.1099</p>
                <p class="discount">(66% Off)</p>
                <h4 class="price">Rs.373</h4>
            </a></Link>
        </div>
        <div class="homeitem2">
        <Link to="/women-2"><a href="#">
                <img src={pro2} alt="fm" class="view-img"></img>
                <p class="brand">MIRCHI FASHION</p>
                <p class="product-name">Sea Green & Gold-Toned Zari Saree</p>
                <p class="bef-price">Rs.2999</p>
                <p class="discount">(72% Off)</p>
                <h4 class="price">Rs.839</h4>
            </a></Link>
        </div>
        <div class="homeitem3">
        <Link to="/women-3"><a href="#">
                <img src={pro4} alt="fm" class="view-img"></img>
                <p class="brand">HERE&NOW</p>
                <p class="product-name">Women Yellow & Green Cotton Kurta</p>
                <p class="bef-price">Rs.1099</p>
                <p class="discount">(65% Off)</p>
                <h4 class="price">Rs.384</h4>
            </a></Link>
        </div>
        <div class="homeitem4">
        <Link to="/women-4"><a href="#">
                <img src={pro3} alt="fm" class="view-img"></img>
                <p class="brand">MIRCHI FASHION</p>
                <p class="product-name">Pink & Blue Floral Saree</p>
                <p class="bef-price">Rs.2799</p>
                <p class="discount">(76% Off)</p>
                <h4 class="price">Rs.671</h4>
            </a></Link>
        </div>
        <div class="homeitem5">
        <Link to="/women-5"><a href="#">
                <img src={pro5} alt="fm" class="view-img"></img>
                <p class="brand">Vishudh</p>
                <p class="product-name">Women Blue & White Printed Kurta</p>
                <p class="bef-price">Rs.1149</p>
                <p class="discount">(37% Off)</p>
                <h4 class="price">Rs.723</h4>
            </a></Link>
        </div>
        <div class="homeitem6">
        <Link to="/women-6"><a href="#">
                <img src={pro6} alt="fm" class="view-img"></img>
                <p class="brand">Nayo</p>
                <p class="product-name">Women Black & White Printed Kurta</p>
                <p class="bef-price">Rs.1099</p>
                <p class="discount">(40% Off)</p>
                <h4 class="price">Rs.659</h4>
            </a></Link>
        </div>
        <div class="homeitem7">
        <Link to="/women-7"><a href="#">
                <img src={pro7} alt="fm" class="view-img"></img>
                <p class="brand">Libas</p>
                <p class="product-name">Women Peach & Pink Floral Print Kurta</p>
                <p class="bef-price">Rs.1299</p>
                <p class="discount">(65% Off)</p>
                <h4 class="price">Rs.454</h4>
            </a></Link>
        </div>
        <div class="homeitem8">
        <Link to="/women-8"><a href="#">
                <img src={pro8} alt="fm" class="view-img"></img>
                <p class="brand">Anouk</p>
                <p class="product-name">Band Collar Floral Printed Kurta</p>
                <p class="bef-price">Rs.1099</p>
                <p class="discount">(65% Off)</p>
                <h4 class="price">Rs.384</h4>
            </a></Link>
        </div>
        <div class="homeitem9">
        <Link to="/women-9"><a href="#">
                <img src={pro9} alt="fm" class="view-img"></img>
                <p class="brand">Biba</p>
                <p class="product-name">Women Pink & White Printed Kurta</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(60% Off)</p>
                <h4 class="price">Rs.799</h4>
            </a></Link>
        </div>
        <div class="homeitem10">
        <Link to="/women-10"><a href="#">
                <img src={pro10} alt="fm" class="view-img"></img>
                <p class="brand">Biba</p>
                <p class="product-name">Women Grey & Pink Floral Print Kurta</p>
                <p class="bef-price">Rs.2499</p>
                <p class="discount">(70% Off)</p>
                <h4 class="price">Rs.820</h4>
            </a></Link>
        </div>
        <div class="homeitem11">
        <Link to="/women-11"><a href="#">
                <img src={pro11} alt="fm" class="view-img"></img>
                <p class="brand">Pistaa</p>
                <p class="product-name">Ethnic Motifs Embroidered Kurti</p>
                <p class="bef-price">Rs.1999</p>
                <p class="discount">(62% Off)</p>
                <h4 class="price">Rs.849</h4>
            </a></Link>
        </div>
        <div class="homeitem12">
        <Link to="/women-12"><a href="#">
                <img src={pro12} alt="fm" class="view-img"></img>
                <p class="brand">Anouk</p>
                <p class="product-name">Ethnic Motifs Mirror Work Pleated Kurti</p>
                <p class="bef-price">Rs.1699</p>
                <p class="discount">(66% Off)</p>
                <h4 class="price">Rs.577</h4>
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