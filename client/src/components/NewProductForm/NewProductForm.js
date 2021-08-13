import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper } from '@material-ui/core';
import Select from 'react-select';
import FileBase from 'react-file-base64';
import { createProduct } from '../../Api/products';
import {getCategories} from '../../Api/categories'
import './NewProductForm.css'
const NewProductFrom = (props) => {

    const [cateogries,setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState("Select Category")
    const [productToCreate, setProductToCreate] = useState({ ownerId: '', name: '', categoryId: '', quantity: '', price: '',imageUrl:''});

    useEffect(async() => {
        var tempCategories = await getCategories()
        var newCatrgories = tempCategories.map((t) => ({ value: t._id, label: t.name}));

        console.log(newCatrgories)
        setCategories(newCatrgories)
        
      }, []);
    

    const handleSubmit= async (e)=>{
        e.preventDefault();
        createProduct(productToCreate)
        alert("product created successfully")
        setProductToCreate({...productToCreate, ownerId: '', name: '', categoryId: '', quantity: '', price: ''})
        setSelectedCategory("Select Category")

    }

    return (
      <Paper>
        <form autoComplete="off"  onSubmit={handleSubmit}>
          <h3>Product</h3>
          <TextField name="name" variant="outlined" label="name" fullWidth value={productToCreate.name} onChange={(e) =>setProductToCreate ({ ...productToCreate, name: e.target.value })} />
          <TextField name="price" variant="outlined" label="price" fullWidth value={productToCreate.price} onChange={(e) => setProductToCreate({ ...productToCreate, price: e.target.value })} />
          <TextField name="quantity" variant="outlined" label="quantity" fullWidth value={productToCreate.quantity} onChange={(e) => setProductToCreate({ ...productToCreate, quantity: e.target.value })} />
          <Select  label="category"
        value={productToCreate.categoryId}
        placeholder={selectedCategory} 
        onChange={(e)=>{setSelectedCategory(e.label); setProductToCreate ({ ...productToCreate,categoryId:e.value})}}  
        options={cateogries}/>
          <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductToCreate({ ...productToCreate, imageUrl: base64 })} /></div>
          <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        </form>
      </Paper>
    );
};



export default NewProductFrom;

