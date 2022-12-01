const Wishlist = () => {

    const displayWishlist = () => {
            item = document.querySelector('#ItemName').value
            price = document.querySelector('#Price').value
            link = document.querySelector('#Link').value
            notes = document.querySelector('#Notes').value

            alert("Item: " + item + "Price: " + price + "Link: " + link + "Notes: " + notes)
    }

    document.querySelector('button').addEventListener('click', displayWishlist)

    return (
        <>
            <h1>Wishlist</h1>

            <form>
                <label for="ItemName">Item Name:</label><br/>
                <input type="text" id="ItemName" name="ItemName"></input><br/>
                <label for="Price">Price:</label><br/>
                <input type="text" id="Price" name="Price"></input><br/>
                <label for="Link">Link:</label><br/>
                <input type="text" id="Link" name="Link"></input><br/>
                <label for="Notes">Notes:</label><br/>
                <input type="text" id="Notes" name="Notes"></input><br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Wishlist;