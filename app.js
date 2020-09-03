const express = require('express');
const path = require('path');
const { v4 } = require('uuid');
let products = require('./products.json')
const app = express();

app.use(express.json());
  
app.get('/api/products', (req, res)=>{
    res.status(200).json(products);
});

app.post('/api/products', (req, res)=>{
    //need to add data validation
    const product = {...req.body, id:v4()};
    products.push(product);
    res.status(201).json(product);
});

app.delete('/api/products/:id', (req, res)=>{ // in progress
  products = products.filter(p => p.id !== req.param.id);
  res.status(200).json({message: 'The product was deleted'});
});    
   
app.put('/api/product/:id', (req, res)=>{ // in progress
  const idx = products.findIndex(p => p.id === req.param.id);
  products[idx] = req.body;
  res.status(200).json(products[idx]);
});

app.post('/api/order', (req, res)=>{
  //need to add data validation
  console.log(JSON.parse(req.query[0], true));
  res.status(200).json({message: 'success'});
});
    
app.use(express.static(path.resolve(__dirname, 'client/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client/dist', 'index.html'));
});

app.listen(3000, ()=>{
    console.log('Listening ...');
});