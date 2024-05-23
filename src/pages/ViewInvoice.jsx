import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlinePrinter } from "react-icons/ai";

const ViewInvoice = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const invoiceData = {
                    id: response.data.id,
                    invoiceNumber: response.data.id,
                    date: new Date().toLocaleDateString(),
                    customer: `Customer ${response.data.userId}`,
                    amount: parseFloat((Math.random() * 1000).toFixed(2)),
                    paid: parseFloat((Math.random() * 500).toFixed(2)),
                    status: ['paid', 'pending', 'overdue'][Math.floor(Math.random() * 3)],
                    product: [
                        'Product1', 'Product2', 'Product3', 'Product4', 'Product5', 'Product6',
                        'Product7', 'Product8', 'Product9', 'Product10', 'Product11', 'Product12'
                    ][Math.floor(Math.random() * 3)],
                    quantity: Math.floor(Math.random() * 100),
                    // Add more properties as needed
                };
                setInvoice(invoiceData);
            })
            .catch(error => console.error('Error fetching invoice:', error));
    }, [id]);

    if (!invoice) {
        return <div>Loading...</div>;
    }

    return (
        <div className='p-4 bg-white rounded-lg shadow-md w-2/3 mx-auto'>
            <h1 className='text-2xl font-semibold text-center mb-4'>Invoice Details</h1>
            <div className='border p-4 rounded-lg'>
                <p className='text-lg'><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
                <p className='text-lg'><strong>Date:</strong> {invoice.date}</p>
                <p className='text-lg'><strong>Customer:</strong> {invoice.customer}</p>
                <p className='text-lg'><strong>Amount:</strong> ${invoice.amount.toFixed(2)}</p>
                <p className='text-lg'><strong>Paid:</strong> ${invoice.paid.toFixed(2)}</p>
                <p className='text-lg'><strong>Status:</strong> {invoice.status}</p>
                <p className='text-lg'><strong>Product:</strong> {invoice.product}</p>
                <p className='text-lg'><strong>Quantity:</strong> {invoice.quantity}</p>
                {/* Add more properties as needed */}
            </div>
            <div className='mt-4 flex justify-between'>
                <Link to='/invoices' className='text-sm px-2 items-center rounded text-white bg-secondary border-secondary-dark flex w-auto'><i className='pr-1'><AiOutlineArrowLeft /></i>Back to Invoices</Link>
                <Link className='text-sm px-2 items-center rounded text-white bg-secondary border-secondary-dark flex w-auto'> <i className='pr-1'><AiOutlinePrinter /></i> Print</Link>
            </div>
        </div>
    );
};

export default ViewInvoice;
