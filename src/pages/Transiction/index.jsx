import { DeleteOutline, EditNote } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample transaction data
const transactionRows = [
    { id: 1, user: 'John Doe', date: '2023-09-01', amount: 150, status: 'Completed' },
    { id: 2, user: 'Jane Smith', date: '2023-09-02', amount: 200, status: 'Pending' },
    { id: 3, user: 'Alice Johnson', date: '2023-09-03', amount: 300, status: 'Failed' },
    { id: 4, user: 'Bob Brown', date: '2023-09-04', amount: 250, status: 'Completed' },
    { id: 5, user: 'Charlie Davis', date: '2023-09-05', amount: 400, status: 'Pending' },
];

export default function TransactionList() {
    const [transactions, setTransactions] = useState(transactionRows);

    const handleTransactionDelete = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 250 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'amount', headerName: 'Amount', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
            return (
                <div className="transactionTableAction">
                    <Link to={"transaction/edit/" + params.row.id}>
                        <EditNote className="transactionListIcon edit" style={{ color: 'green' }} />
                    </Link>
                    <DeleteOutline className="transactionListIcon delete" 
                        onClick={() => handleTransactionDelete(params.row.id)} 
                        style={{ color: 'red' }} 
                    />
                </div>
            );
        }},
    ];

    return (
        <div className="transactionList">
            <style>
                {`
                    .transactionList {
                        padding: 20px;
                        background-color: white; /* White background */
                    }
                    .transactionListTop {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .transactionListTitle {
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .transactionListCreateBtn {
                        padding: 10px 15px;
                        background-color: #007BFF; /* Blue background */
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    .transactionListContent {
                        margin-top: 20px;
                        height: 400px;
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .transactionTableAction {
                        display: flex;
                        gap: 10px;
                    }
                    .transactionListIcon {
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="transactionListTop">
                <h3 className="transactionListTitle">Transaction List</h3>
                <Link to="/newTransaction">
                    <button className="transactionListCreateBtn">Create</button>
                </Link>
            </div>
            <div className="transactionListContent">
                <DataGrid
                    rows={transactions}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
