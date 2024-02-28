import React from 'react'

const addProduct = ({ submitHandler, name, setName, price, setPrice, category, setCategory }) => {
    return (
        <div className='addForm'>
            <form method='post' onSubmit={(e) => submitHandler(e)}>
                <h3>Add Product</h3>
                <input type='text' placeholder='Name of the Product' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type='text' placeholder='Price of the Product' className='form-control' value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type='text' placeholder='Category of the Product' className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} required />
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default addProduct