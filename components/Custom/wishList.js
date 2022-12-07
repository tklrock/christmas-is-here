import React, { useState } from 'react'
import { Button } from 'reactstrap';
import axios from 'axios';
import path from 'path';

export const WishList = ({myPath, getWishlist, items}) => {

    React.useEffect(() => {
        getWishlist();
      }, []);


    const deleteItem = async (itemId) => {
        const baseURL = path.join(myPath, 'api');
        await axios.post(path.join(baseURL, 'deleteItem'), {
            Id: itemId,
        })
        console.log("Item Deleted");
        getWishlist();
    }

    return (
        <>
            <h2>Items</h2>
            {items?.length > 0  
            ? (
                <>
                    <div class="container">
                        <div class="row">
                            <div class="col-6"><h4>Total Items: {items.length}</h4></div>
                            <div class="col-6"><h4>Total Price: ${items.reduce((partialSum, item) => partialSum + parseFloat(item.price), 0).toFixed(2)}</h4></div>
                        </div>
                    </div>
                    <table className="w-100 table table-hover border border-dark border-2 rounded-5">
                        <thead className="h5 font-weight-bold" style={{height:'20px'}}>
                            <th style={{width:'25%', margin:'1%'}}>Name</th>
                            <th style={{width:'15%', margin:'1%'}}>Price</th>
                            <th style={{width:'50%', margin:'1%'}}>Notes</th>
                            <th style={{width:'5%', margin:'1%'}}>Link</th>
                            <th style={{width:'5%', margin:'1%'}}>Delete</th>
                        </thead>
                        <tbody>                    
                    {items.map((item, index) => (
                        <tr key={item.item_id} className={parseInt(index) % 2 === 0 ?("table-success"): ("table-danger")}>
                            <td style={{width:'20%', margin:'1%'}} className="h5">{item.name}</td>
                            <td style={{width:'15%', margin:'1%'}}>${item.price}</td>
                            <td style={{width:'50%', margin:'1%'}}>{item.notes}</td>
                            <td style={{width:'8%', margin:'1%'}} className="text-center h4">
                                {item.link !== "" && item.link !== null
                                ? (
                                    <a href={item.link} target="_blank" rel="noreferrer" style={{fontWeight:'bold'}}><i className="bi bi-box-arrow-up-right w-100"></i></a>
                                ):
                                    <>
                                        -
                                    </>
                                }
                            </td>
                            <td style={{width:'8%', margin:'1%', fontWeight:'bold'}} className="font-weight-bold h3 text-center"><Button color="danger" onClick={() => deleteItem(item.item_id)}>X</Button></td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </>
                
            ): <>
                {items === null
                ? (
                    <div className="d-flex">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                ):
                <p>No items to display</p>
                }
            </>
            }
            
        </>
    )
}