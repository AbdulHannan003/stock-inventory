import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { GiExpense } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className='p-5'>
      <div className='text-white py-5 flex'>
        <div className='w-4/12 h-auto border'></div>
        <h1 className='w-8/12 text-lg font-bold px-2 flex items-center'>Stock Management</h1>
      </div>
      <div className='text-white py-5'>
        <ul className='flex flex-col space-y-5 px-5'>
          <li>
            <Link to="/" className='flex items-center gap-x-2'>
              <i className='text-secondary-light'><AiFillHome /></i> Home
            </Link>
          </li>
          <li>
            <Link to="/invoices" className='flex items-center gap-x-2'>
              <i className='text-secondary-light'><TbReportSearch /></i> Invoices
            </Link>
          </li>
          <li>
            <Link to="/expenses" className='flex items-center gap-x-2'>
              <i className='text-secondary-light'><GiExpense /></i> Expenses
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar