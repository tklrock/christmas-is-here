import React, { useState, setState, state } from 'react'
import axios from 'axios';
import path from 'path';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  

export const AddItem = ({myPath, getWishlist}) => {
    const [state, setState] = React.useState({
        Name: "",
        Price: 0.00,
        Notes: "",
        Link: ""
      })

    function handleChange(evt) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }


    const submitItem = async () => {
        try {
            // console.log(state);
            const baseURL = path.join(myPath, 'api');
            // console.log(baseURL);
            await axios.post(path.join(baseURL, 'addItem'), {
                name: state.Name,
                price: state.Price,
                notes: state.Notes,
                link: state.Link,
            }).then((response) => {
                //alert(response.data.results)
            });
            setState({
                Name: "",
                Price: 0.00,
                Notes: "",
                Link: "",
                Image: ""
            });
            document.getElementById("ItemName").value = "";
            document.getElementById("Price").value = "";
            document.getElementById("Notes").value = "";
            document.getElementById("Link").value = "";
        } catch (error) {
            alert(error)
        }
        getWishlist();
    }
    

    return (
        <>
            <h2>Add Item</h2>
            <Form>
                <Label for="Name" >Item Name:</Label><br/>
                <Input type="text" id="ItemName" name="Name" onChange={handleChange}></Input><br/>
                <Label for="Price">Price ($):</Label><br/>
                <Input type="number" step=".01" min="0.00" placeholder="0.00" id="Price" name="Price" onChange={handleChange}></Input><br/>
                <Label for="Notes">Notes:</Label><br/>
                <Input type="textarea" id="Notes" name="Notes" onChange={handleChange}></Input><br/>
                <Label for="Link">Link:</Label><br/>
                <Input type="text" id="Link" name="Link" onChange={handleChange}></Input><br/>
                <Button color="success" onClick={submitItem}>Submit</Button>
            </Form>        
        </>
    )
}