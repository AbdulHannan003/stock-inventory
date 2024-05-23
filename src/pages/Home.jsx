import React from 'react'
import Card from '../components/Card'
import { PiChartLineUpThin, PiChartLineDownThin } from "react-icons/pi";
import rec from "../assets/rec.png"
import dol from "../assets/dollar.png"
import exp from "../assets/expense.png"
import sent from "../assets/sent.png"
import Barchart from '../components/Barchart';
import Piechart from '../components/Piechart';

const Home = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex justify-around gap-x-4 p-4'>
                <Card title={"Total Sales"} value={"$12,345"} icon={<PiChartLineUpThin />} num={25} svg={dol} />
                <Card title={"Total Expense"} value={"$3,213"} icon={<PiChartLineUpThin />} num={25} svg={exp} />
                <Card title={"Payment Sent"} value={"$65,920"} icon={<PiChartLineUpThin />} num={25} svg={sent} />
                <Card title={"Payment Received"} value={"$72,840"} icon={<PiChartLineDownThin />} num={25} svg={rec} />
            </div>
            <hr className='mx-4' />
            <div className='p-4 gap-x-3 flex'>
                <div className='w-8/12'>
                    <Barchart />
                </div>
                <div className='w-4/12'>
                    <Piechart />
                </div>
            </div>
        </div>
    )
}

export default Home