import React from "react"
import {Navigate, useLocation} from 'react-router-dom';
import { useNavigate, Link } from "react-router-dom"
import './Men-1.css'
import { useState } from 'react';
import { useEffect } from 'react';
import StripeCheckout from "react-stripe-checkout"; 

import logo from './tr_logo_bg.png'
import MenSh1 from './wc12-1.jpeg'
import MenSh2 from './wc12-2.jpeg'
import MenSh3 from './wc12-3.jpeg'
import MenSh4 from './wc12-4.jpeg'
import sale1 from './sale_banner6.jpg'
import sale2 from './sale_banner5.jpg'


function Women12 (){
    const location=useLocation()
    
    var [quantity, setQuantity] = useState(1);
    var [total, setTotal] = useState(577);
    
    var increment = () => {
        setQuantity(quantity + 1);
        setTotal(577 * (quantity + 1))
        setfinalPrice((577*100)*(quantity+1))
      };

    var decrement = () => {
        if(quantity>1){
            setQuantity(quantity -1 )
            setTotal(total-577)
            setfinalPrice((577*100)*(quantity-1))
        };
      };
    
    var [finalPrice, setfinalPrice] = useState(total*100);

    var [product, setproduct] = useState({
        name:"Trendify Fashion Hub",
        price: product*100,
        productBy:"Koushik"
    })

    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const makePayment = (token)=> {
        const body = {
            token,
            finalPrice
        }
        const headers ={
            "Content-Type":"application/json"
        }
        return fetch("http://localhost:8000/payment1",{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

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

        <div class="main-sec">
            <img src={MenSh1} alt="product1" class="men-pro-1"></img>
            <img src={MenSh2} alt="product2" class="men-pro-2"></img>
            <img src={MenSh3} alt="product3" class="men-pro-3"></img>
            <img src={MenSh4} alt="product4" class="men-pro-4"></img>

            <p class="brand-name">Anouk</p>
            <p class="shirt-name">Ethnic Motifs Mirror Work Pleated Kurti</p>
            <p class="ratings">4.8 | 892 Ratings</p>
            <hr class="hr-line"></hr>
            <p class="dis-price">₹577</p>
            <p class="base-price">₹1699</p>
            <p class="dis-available">(66% Off)</p>
            <p class="taxes">inclusive of all taxes</p>

            <p class="sel-size">Select Size</p>
            <div class="size-sec">
                <input type="radio" class="size-s" name="size" value="small"></input>
                <label for="small" class="S">S</label>

                <input type="radio" class="size-m" name="size" value="medium"></input>
                <label for="small" class="M">M</label>

                <input type="radio" class="size-l" name="size" value="large"></input>
                <label for="small" class="L">L</label>

                <input type="radio" class="size-xl" name="size" value="X-large"></input>
                <label for="small" class="XL">XL</label>

                <input type="radio" class="size-xxl" name="size" value="XX-large"></input>
                <label for="small" class="XXL">XXL</label>
            </div>

            <p class="Quantity">Quantity</p>

            <button class="q-plus" onClick={increment}>+</button>
            <p class="q-quan" id="quan-id">{quantity}</p>
            <button class="q-minus" onClick={decrement}>-</button>
            <p class="tot-val">Total Price : ₹{total}</p>
            
            <StripeCheckout 
            stripeKey="pk_test_51NsSByAWvvJ0dOVUKWWRvg8rU3LPuuA5ai5w0vSfYqPFaFVHJs7fMMOompLUrOXRssEKk89ZtmDe1DnrB7RGERPb00FyGgfryt"
            token={makePayment}
            name="Trendify Fashion Hub" 
            amount= {finalPrice}
            currency="INR"
            >
            <button class="payment-bn">Order Now</button>
            </StripeCheckout>
        </div>
        
        <img src={sale1} alt="saleBan1" class="sale-ban1"></img>
        <img src={sale2} alt="saleBan2" class="sale-ban2"></img>

        <div class="footer-men1">
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
    
    export default Women12