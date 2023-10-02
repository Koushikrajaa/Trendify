const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

var Secret_Key = 'sk_test_51NsSByAWvvJ0dOVURcTsMw498brzXiOAG17Yt7QasLorvRuBdFTCayETJcTlcGfIzlArbLMZXG2ZfOXpJP7g3C2i00IZcVTWvG'

const {v4:uuidv4} = require("uuid")
const stripe = require('stripe')(Secret_Key);

const bodyparser = require('body-parser')
const { type } = require("@testing-library/user-event/dist/type")
app.use(express.static("./src/components"))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/Trendify",cors(),(req,res)=>{
    
})

app.post("/Trendify",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/payment1",(req,res)=>{

    const {finalPrice,token} = req.body;
    
    const transactionKey = uuidv4();
    return stripe.customers.create({
        email: token.email,
    
    }).then((customer)=>{

        stripe.paymentIntents.create({
            amount:finalPrice,
            currency:"inr", 
            customer: customer.id,


            payment_method_types: ["card"], // Specify the payment method type
            payment_method_data: {
                type: "card",
                card: {
                    token: token.id, 
                    
                },
            },

            receipt_email:token.email,
            confirm:true
            
        })
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err);
        })
    })
})
app.listen(8000,()=>{
    console.log("port connected");
})



