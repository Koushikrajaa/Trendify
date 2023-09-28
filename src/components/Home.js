import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Home.css'
import logo from './tr_logo_bg.png'
import banner from './dis_ban1.jpg'
import pro1 from './fm2-1.jpeg'
import pro2 from './cm3-1.jpeg'
import pro3 from './cm4-1.jpeg'
import pro4 from './sm1-1.jpeg'
import pro5 from './cm7-1.jpeg'
import pro6 from './cm6-1.jpeg'
import pro7 from './fm3-1.jpeg'
import pro8 from './cm5-1.jpeg'
import pro9 from './wc1-1.jpeg'
import pro10 from './wc2-1.jpeg'
import pro11 from './wc4-1.jpeg'
import pro12 from './wc3-1.jpeg'
import pro13 from './wc5-1.jpeg'
import pro14 from './wc6-4.jpeg'
import pro15 from './wc8-1.jpeg'
import pro16 from './wc7-2.jpeg'
import pro17 from './kid1-1.jpeg'
import pro18 from './kid2-1.jpeg'
import pro19 from './kid3-1.jpeg'
import pro20 from './kid4-1.jpeg'
import pro21 from './sun1-1.jpeg'
import pro22 from './sun2-1.jpeg'
import pro23 from './wat1-1.jpeg'
import pro24 from './wat2-1.jpeg'
import pro25 from './sh1-1.jpeg'
import pro26 from './sh2-1.jpeg'
import pro27 from './sh3-1.jpeg'
import pro28 from './sh4-1.jpeg'


function Home (){
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
                <Link to="/men-1"><a href="#">
                    <img src={pro1} alt="fm" class="view-img"></img>
                    <p class="brand">Roadster</p>
                    <p class="product-name">Slim Fit Formal Blue Shirt</p>
                    <p class="bef-price">Rs.1499</p>
                    <p class="discount">(50% Off)</p>
                    <h4 class="price">Rs.749</h4>
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
                    <p class="product-name">Men Navy Blue Solid Sweatshirt</p>
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
                    <p class="product-name">Men Navy Blue Slim Fit Casual Shirt</p>
                    <p class="bef-price">Rs.1699</p>
                    <p class="discount">(67% Off)</p>
                    <h4 class="price">Rs.560</h4>
                </a></Link>
            </div>
            <div class="homeitem7">
                <Link to="/men-7"><a href="#">
                    <img src={pro7} alt="fm" class="view-img"></img>
                    <p class="brand">FUBAR</p>
                    <p class="product-name">Mandarin Collar Cotton Plain Shirt</p>
                    <p class="bef-price">Rs.1999</p>
                    <p class="discount">(75% Off)</p>
                    <h4 class="price">Rs.459</h4>
                </a></Link>
            </div>
            <div class="homeitem8">
                <Link to="/men-8"><a href="#">
                    <img src={pro8} alt="fm" class="view-img"></img>
                    <p class="brand">HIGHLANDER</p>
                    <p class="product-name">Men Black & White Printed Casual Shirt</p>
                    <p class="bef-price">Rs.1049</p>
                    <p class="discount">(59% Off)</p>
                    <h4 class="price">Rs.430</h4>
                </a></Link>
            </div>
            <div class="homeitem9">
            <Link to="/women-1"><a href="#">
                <img src={pro9} alt="fm" class="view-img"></img>
                    <p class="brand">Vishudh</p>
                    <p class="product-name">Women Maroon & White Striped Kurta</p>
                    <p class="bef-price">Rs.1099</p>
                    <p class="discount">(66% Off)</p>
                    <h4 class="price">Rs.373</h4>
                </a></Link>
            </div>
            <div class="homeitem10">
            <Link to="/women-2"><a href="#">
                    <img src={pro10} alt="fm" class="view-img"></img>
                    <p class="brand">MIRCHI FASHION</p>
                    <p class="product-name">Sea Green & Gold-Toned Zari Saree</p>
                    <p class="bef-price">Rs.2999</p>
                    <p class="discount">(72% Off)</p>
                    <h4 class="price">Rs.839</h4>
                </a></Link>
            </div>
            <div class="homeitem11">
            <Link to="/women-3"><a href="#">
                    <img src={pro11} alt="fm" class="view-img"></img>
                    <p class="brand">HERE&NOW</p>
                    <p class="product-name">Women Yellow & Green Cotton Kurta</p>
                    <p class="bef-price">Rs.1099</p>
                    <p class="discount">(65% Off)</p>
                    <h4 class="price">Rs.384</h4>
                </a></Link>
            </div>
            <div class="homeitem12">
            <Link to="/women-4"><a href="#">
                    <img src={pro12} alt="fm" class="view-img"></img>
                    <p class="brand">MIRCHI FASHION</p>
                    <p class="product-name">Pink & Blue Floral Saree</p>
                    <p class="bef-price">Rs.2799</p>
                    <p class="discount">(76% Off)</p>
                    <h4 class="price">Rs.671</h4>
                </a></Link>
            </div>
            <div class="homeitem13">
            <Link to="/women-5"><a href="#">
                    <img src={pro13} alt="fm" class="view-img"></img>
                    <p class="brand">Vishudh</p>
                    <p class="product-name">Women Blue & White Printed Kurta</p>
                    <p class="bef-price">Rs.1149</p>
                    <p class="discount">(37% Off)</p>
                    <h4 class="price">Rs.723</h4>
                </a></Link>
            </div>
            <div class="homeitem14">
            <Link to="/women-6"><a href="#">
                    <img src={pro14} alt="fm" class="view-img"></img>
                    <p class="brand">Nayo</p>
                    <p class="product-name">Women Black & White Printed Kurta</p>
                    <p class="bef-price">Rs.1099</p>
                    <p class="discount">(40% Off)</p>
                    <h4 class="price">Rs.659</h4>
                </a></Link>
            </div>
            <div class="homeitem15">
            <Link to="/women-7"><a href="#">
                    <img src={pro15} alt="fm" class="view-img"></img>
                    <p class="brand">Libas</p>
                    <p class="product-name">Women Peach & Pink Floral Print Kurta</p>
                    <p class="bef-price">Rs.1299</p>
                    <p class="discount">(65% Off)</p>
                    <h4 class="price">Rs.454</h4>
                </a></Link>
            </div>
            <div class="homeitem16">
            <Link to="/women-8"><a href="#">
                    <img src={pro16} alt="fm" class="view-img"></img>
                    <p class="brand">Anouk</p>
                    <p class="product-name">Band Collar Floral Printed Kurta</p>
                    <p class="bef-price">Rs.1099</p>
                    <p class="discount">(65% Off)</p>
                    <h4 class="price">Rs.384</h4>
                </a></Link>
            </div>
            <div class="homeitem17">
            <Link to="/kid-1"><a href="#">
                    <img src={pro17} alt="fm" class="view-img"></img>
                    <p class="brand">A.T.U.N.</p>
                    <p class="product-name">ATUN Yellow Striped Shirt Dress</p>
                    <p class="bef-price">Rs.2499</p>
                    <p class="discount">(63% Off)</p>
                    <h4 class="price">Rs.924</h4>
                </a></Link>
            </div>
            <div class="homeitem18">
            <Link to="/kid-2"><a href="#">
                    <img src={pro18} alt="fm" class="view-img"></img>
                    <p class="brand">Pspeaches</p>
                    <p class="product-name">Girls Striped A-Line Midi Cotton Dress</p>
                    <p class="bef-price">Rs.2282</p>
                    <p class="discount">(70% Off)</p>
                    <h4 class="price">Rs.684</h4>
                </a></Link>
            </div>
            <div class="homeitem19">
            <Link to="/kid-3"><a href="#">
                    <img src={pro19} alt="fm" class="view-img"></img>
                    <p class="brand">Vishudh</p>
                    <p class="product-name">Girls Black Traditional Dress</p>
                    <p class="bef-price">Rs.999</p>
                    <p class="discount">(30% Off)</p>
                    <h4 class="price">Rs.699</h4>
                </a></Link>
            </div>
            <div class="homeitem20">
            <Link to="/kid-4"><a href="#">
                    <img src={pro20} alt="fm" class="view-img"></img>
                    <p class="brand">FASHION DREAM</p>
                    <p class="product-name">Girls Blue Western Dress</p>
                    <p class="bef-price">Rs.1999</p>
                    <p class="discount">(50% Off)</p>
                    <h4 class="price">Rs.999</h4>
                </a></Link>
            </div>
            <div class="homeitem21">
            <Link to="/sun-1"><a href="#">
                    <img src={pro21} alt="fm" class="view-img"></img>
                    <p class="brand">Carlton London</p>
                    <p class="product-name">Men Polarised & UV Protected Sunglasses</p>
                    <p class="bef-price">Rs.2145</p>
                    <p class="discount">(62% Off)</p>
                    <h4 class="price">Rs.775</h4>
                </a></Link>
            </div>
            <div class="homeitem22">
            <Link to="/sun-2"><a href="#">
                    <img src={pro22} alt="fm" class="view-img"></img>
                    <p class="brand">Voyage</p>
                    <p class="product-name">UV Protected Round Sunglasses</p>
                    <p class="bef-price">Rs.1999</p>
                    <p class="discount">(48% Off)</p>
                    <h4 class="price">Rs.920</h4>
                </a></Link>
            </div>
            <div class="homeitem23">
            <Link to="/watch-1"><a href="#">
                    <img src={pro23} alt="fm" class="view-img"></img>
                    <p class="brand">Sonata</p>
                    <p class="product-name">Volt Men Black Analogue watch</p>
                    <p class="bef-price">Rs.999</p>
                    <p class="discount">(30% Off)</p>
                    <h4 class="price">Rs.699</h4>
                </a></Link>
            </div>
            <div class="homeitem24">
            <Link to="/watch-2"><a href="#">
                    <img src={pro24} alt="fm" class="view-img"></img>
                    <p class="brand">Titan</p>
                    <p class="product-name">Titan Men Black Dial Watch</p>
                    <p class="bef-price">Rs.999</p>
                    <p class="discount">(10% Off)</p>
                    <h4 class="price">Rs.899</h4>
                </a></Link>
            </div>
            <div class="homeitem25">
            <Link to="/shoe-1"><a href="#">
                    <img src={pro25} alt="fm" class="view-img"></img>
                    <p class="brand">Mast & Harbour</p>
                    <p class="product-name">Men White Casual Sneakers</p>
                    <p class="bef-price">Rs.1999</p>
                    <p class="discount">(71% Off)</p>
                    <h4 class="price">Rs.579</h4>
                </a></Link>
            </div>
            <div class="homeitem26">
            <Link to="/shoe-2"><a href="#">
                    <img src={pro26} alt="fm" class="view-img"></img>
                    <p class="brand">Woakers</p>
                    <p class="product-name">Men Blue Colourblocked Sneakers</p>
                    <p class="bef-price">Rs.3995</p>
                    <p class="discount">(82% Off)</p>
                    <h4 class="price">Rs.719</h4>
                </a></Link>
            </div>
            <div class="homeitem27">
            <Link to="/shoe-3"><a href="#">
                    <img src={pro27} alt="fm" class="view-img"></img>
                    <p class="brand">Sir Corbett</p>
                    <p class="product-name">Men Black Solid Slip On Formal Shoes</p>
                    <p class="bef-price">Rs.2329</p>
                    <p class="discount">(72% Off)</p>
                    <h4 class="price">Rs.652</h4>
                </a></Link>
            </div>
            <div class="homeitem28">
            <Link to="/shoe-4"><a href="#">
                    <img src={pro28} alt="fm" class="view-img"></img>
                    <p class="brand">CLYMB</p>
                    <p class="product-name">Men Non-Marking Running Shoes</p>
                    <p class="bef-price">Rs.999</p>
                    <p class="discount">(46% Off)</p>
                    <h4 class="price">Rs.539</h4>
                </a></Link>
            </div>
            <div class="footer">
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

export default Home