import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditInvoice = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [invoice, setInvoice] = useState({
        invoiceNumber: '',
        date: '',
        customer: '',
        amount: '',
        paid: '',
        status: '',
        product: '',
        quantity: ''
    });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const invoiceData = {
                    invoiceNumber: response.data.id,
                    date: new Date().toLocaleDateString(),
                    customer: `Customer ${response.data.userId}`,
                    amount: parseFloat((Math.random() * 1000).toFixed(2)),
                    paid: parseFloat((Math.random() * 500).toFixed(2)),
                    status: ['paid', 'pending', 'overdue'][Math.floor(Math.random() * 3)],
                    product: `Product${Math.floor(Math.random() * 10) + 1}`,
                    quantity: Math.floor(Math.random() * 100)
                };
                setInvoice(invoiceData);
            })
            .catch(error => console.error('Error fetching invoice:', error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInvoice(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated invoice data to the server
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, invoice)
            .then(response => {
                console.log('Invoice updated:', response.data);
                navigate(`/invoices`);
            })
            .catch(error => console.error('Error updating invoice:', error));
    };

    return (
        <div className='p-4 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
            <h1 className='text-2xl font-semibold text-center mb-4'>Edit Invoice</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='invoiceNumber'>Invoice Number</label>
                    <input
                        type='text'
                        name='invoiceNumber'
                        id='invoiceNumber'
                        value={invoice.invoiceNumber}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        disabled
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='date'>Date</label>
                    <input
                        type='text'
                        name='date'
                        id='date'
                        value={invoice.date}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='customer'>Customer</label>
                    <input
                        type='text'
                        name='customer'
                        id='customer'
                        value={invoice.customer}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='amount'>Amount</label>
                    <input
                        type='text'
                        name='amount'
                        id='amount'
                        value={invoice.amount}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='paid'>Paid</label>
                    <input
                        type='text'
                        name='paid'
                        id='paid'
                        value={invoice.paid}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='status'>Status</label>
                    <select
                        name='status'
                        id='status'
                        value={invoice.status}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    >
                        <option value='paid'>Paid</option>
                        <option value='pending'>Pending</option>
                        <option value='overdue'>Overdue</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='product'>Product</label>
                    <input
                        type='text'
                        name='product'
                        id='product'
                        value={invoice.product}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='quantity'>Quantity</label>
                    <input
                        type='text'
                        name='quantity'
                        id='quantity'
                        value={invoice.quantity}
                        onChange={handleChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Save
                    </button>
                    <button
                        type='button'
                        onClick={() => navigate('/invoices')}
                        className='bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditInvoice;
