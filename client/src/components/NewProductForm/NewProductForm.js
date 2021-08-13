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
    const [productToCreate, setProductToCreate] = useState({ ownerId: props.userId, name: '', categoryId: '', quantity: '', price: '',imageUrl:''});

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
        setProductToCreate({...productToCreate, name: '', categoryId: '', quantity: '', price: ''})
        setSelectedCategory("Select Category")
        
    }

    return (
      <Paper className="new-product-form-container">
        <form autoComplete="off"  onSubmit={handleSubmit}>
          <h3>Add Product</h3>
          <TextField name="name" className="one-entry-container" required label="name" fullWidth value={productToCreate.name} onChange={(e) =>setProductToCreate ({ ...productToCreate, name: e.target.value })} />
          <TextField name="price" className="one-entry-container" required  label="price" fullWidth value={productToCreate.price} onChange={(e) => setProductToCreate({ ...productToCreate, price: e.target.value })} />
          <TextField name="quantity" className="one-entry-container"required label="quantity" fullWidth value={productToCreate.quantity} onChange={(e) => setProductToCreate({ ...productToCreate, quantity: e.target.value })} />
         
          <div className="one-entry-container"  > <p>Add Product Photo</p><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductToCreate({ ...productToCreate, imageUrl: base64 })} /></div>
          <Select required  label="category"
        value={productToCreate.categoryId}
        placeholder={selectedCategory} 
        onChange={(e)=>{setSelectedCategory(e.label); setProductToCreate ({ ...productToCreate,categoryId:e.value})}}  
        options={cateogries}/>
         <Button  variant="contained" color="primary" fullWidth type="submit" >Submit</Button> 
        </form>
      </Paper>
    );
};



export default NewProductFrom;

