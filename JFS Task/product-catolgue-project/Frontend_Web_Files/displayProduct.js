import React from 'react'

const displayProduct = ({ items }) => {
    return (
        <div className='table table-responsive'>
            <table>
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.productId}>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default displayProduct