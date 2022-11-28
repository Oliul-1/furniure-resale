import React from 'react';
import Navbar from '../Common/Navbar/Navbar';
import DashboardTable from './DashboardTable';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-3 gap-1">
                <div className="col-span-2">
                    <DashboardTable></DashboardTable>
                </div>
                <div className="col-span-1">
                        <ul className="menu p-4 w-80 bg-slate-200 text-base-content">
                            <li><button>Admin</button></li>
                            <li><button>Buyer</button></li>
                            <li><button>Seller</button></li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;