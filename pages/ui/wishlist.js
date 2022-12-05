import { AddItem } from '../../components/Custom/addItem';
import { WishList } from '../../components/Custom/wishList';
import React, { useState } from 'react'
import axios from 'axios';
import path from 'path';

const Wishlist = () => {

    const [items, setItems] = useState(null);

    const getWishlist = () => {
        const baseURL = path.join(process.cwd(), 'api');
        axios.get(path.join(baseURL, 'wishlist')).then((response) => {
            setItems(response.data.results)  
        });
    }

    return (
        <>
            
            <div className="container">
                <div className="row">
                    <h1>Wishlist</h1>
                </div>
                <div className="row">
                    <div className="col-4">
                        <AddItem myPath={process.cwd()} getWishlist={getWishlist} />
                    </div>
                    <div className="col-8">
                        <WishList myPath={process.cwd()} getWishlist={getWishlist} items={items}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist;