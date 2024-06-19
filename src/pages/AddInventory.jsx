// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddInventory = () => {
//     const [name, setName] = useState('');
//     const [category, setCategory] = useState('');
//     const [quantity, setQuantity] = useState('');
//     const [price, setPrice] = useState('');
//     const navigate = useNavigate();
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const newItem = {
//             name,
//             category,
//             quantity: parseInt(quantity, 10),
//             price: parseFloat(price),
//         };

//         axios.post('https://jsonplaceholder.typicode.com/posts', newItem)
//             .then(response => {
//                 console.log('New item added:', response.data);
//                 navigate('/inventory'); // Updated to use navigate
//             })
//             .catch(error => console.error('Error adding new item:', error));
//     };

//     return (
//         <div className='w-2/4 p-4 bg-white rounded-lg shadow-lg'>
//             <div className='mb-4'>
//                 <h1 className='text-3xl font-semibold text-center text-primary-dark'>Add New Inventory Item</h1>
//             </div>
//             <form onSubmit={handleSubmit} className='space-y-4'>
//                 <div>
//                     <label className='block text-sm font-medium text-gray-700'>Name</label>
//                     <input
//                         type='text'
//                         className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className='block text-sm font-medium text-gray-700'>Category</label>
//                     <input
//                         type='text'
//                         className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className='block text-sm font-medium text-gray-700'>Quantity</label>
//                     <input
//                         type='number'
//                         className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
//                         value={quantity}
//                         onChange={(e) => setQuantity(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label className='block text-sm font-medium text-gray-700'>Price</label>
//                     <input
//                         type='number'
//                         step='0.01'
//                         className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className='flex justify-end'>
//                     <button type='submit' className='bg-secondary text-white p-2 rounded-lg'>Add Item</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddInventory;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateForm from '../components/CreateForm';

const AddInventory = () => {
    const navigate = useNavigate();

    const formFields = [
        { name: 'name', label: 'Name', type: 'text', initialValue: '' },
        { name: 'category', label: 'Category', type: 'text', initialValue: '' },
        { name: 'quantity', label: 'Quantity', type: 'number', initialValue: '' },
        { name: 'price', label: 'Price', type: 'number', step: '0.01', initialValue: '' },
    ];

    const handleSubmit = (formData) => {
        const newItem = {
            name: formData.name,
            category: formData.category,
            quantity: parseInt(formData.quantity, 10),
            price: parseFloat(formData.price),
        };

        axios.post('https://jsonplaceholder.typicode.com/posts', newItem)
            .then(response => {
                console.log('New item added:', response.data);
                navigate('/inventory');
            })
            .catch(error => console.error('Error adding new item:', error));
    };

    return (
        <CreateForm
            formTitle="New Inventory Item"
            formFields={formFields}
            onSubmit={handleSubmit}
        />
    );
};

export default AddInventory;
