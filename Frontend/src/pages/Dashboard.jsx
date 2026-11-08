import { useState, useEffect } from "react";

function Dashboard() {

    const [activePage, setActivePage] = useState('Dashboard')


    const [totalusers, setTotalUsers] = useState(0)
    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch("http://127.0.0.1:8000/dashboard/users");
            const result = await response.json()
            setTotalUsers(result.total_users)
        }
        fetchUsers();
    }, [])

    const [inv_count, setInvCount] = useState(0)
    useEffect(() => {
        async function fetch_inventory_count() {
            const response = await fetch('http://127.0.0.1:8000/dashboard/inventory_count')
            const result = await response.json()
            setInvCount(result.total)
        }
        fetch_inventory_count();
    }, [])

    const [req_count, setReqCount] = useState(0)
    useEffect(() => {
        async function fetch_request_count() {
            const response = await fetch('http://127.0.0.1:8000/dashboard/requests')
            const result = await response.json()
            setReqCount(result.total)
        }
        fetch_request_count();
    }, [])

    const [total_loans, setTotalLoans] = useState(0)
    useEffect(() => {
        async function fetch_total_loans() {
            const response = await fetch('http://127.0.0.1:8000/dashboard/loans')
            const result = await response.json()
            setTotalLoans(result.total)
        }
        fetch_total_loans();
    }, [])
    return (
        <div className="min-h-screen flex bg-slate-100">
            <nav className=" w-64 bg-slate-900 text-white p-6 flex flex-col gap-15">
                <h1 className="pt-5 text-2xl font-bold">
                    Lab Manager
                </h1>
                <ul className="space-y-4">
                    <li
                        onClick={() => setActivePage("Dashboard")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Dashboard"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Dashboard
                    </li>
                    <li
                        onClick={() => setActivePage("Inventory")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Inventory"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Inventory
                    </li>
                    <li
                        onClick={() => setActivePage("Users")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Users"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Users
                    </li>
                    <li
                        onClick={() => setActivePage("Borrow Requests")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Borrow Requests"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Borrow Requests
                    </li>
                    <li
                        onClick={() => setActivePage("Active Loans")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Active Loans"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Active Loans
                    </li>
                    <li
                        onClick={() => setActivePage("Reports")}
                        className={`cursor-pointer p-2 rounded-lg transition ${activePage === "Reports"
                            ? "bg-slate-700 text-amber-400"
                            : "hover:bg-slate-800 hover:text-amber-400"}`}>
                        Reports
                    </li>
                </ul>
            </nav>
            <main className="flex-1 p-8 w-dvw h-dvh">
                <p className="mt-2 text-slate-500">
                    Welcome to your Lab Borrowing Management System.
                </p>
                <h1 className="text-3xl font-bold text-slate-800">
                    {activePage}
                </h1>
                {activePage === "Dashboard" && (


                    <div className=" mt-15 grid grid-cols-2 grid-rows-2 gap-5 max-w-150 min-h-100">
                        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                            <h2 className="text-slate-500 text-sm">
                                Total Inventory
                            </h2>
                            <p className="text-4xl font-bold text-amber-800 mt-2">
                                {inv_count}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                            <h2 className="text-slate-500 text-sm">
                                Registered users
                            </h2>
                            <p className="text-4xl font-bold text-slate-800 mt-2">
                                {totalusers}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                            <h2 className="text-slate-500 text-sm">
                                Pending requests
                            </h2>
                            <p className="text-4xl font-bold text-slate-800 mt-2">
                                {req_count}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow flex flex-col justify-between">
                            <h2 className="text-slate-500 text-sm">
                                Active Loans
                            </h2>
                            <p className="text-4xl font-bold text-slate-800 mt-2">
                                {total_loans}
                            </p>
                        </div>
                    </div>
                )}
            </main>
        </div >
    );
}

export default Dashboard;