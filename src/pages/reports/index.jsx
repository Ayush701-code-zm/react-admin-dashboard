import { DeleteOutline, EditNote } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample report data
const reportRows = [
    { id: 1, title: 'Monthly Sales', date: '2023-09-01', status: 'Completed' },
    { id: 2, title: 'Yearly Growth', date: '2023-09-15', status: 'Pending' },
    { id: 3, title: 'Customer Feedback', date: '2023-09-20', status: 'Completed' },
    { id: 4, title: 'Market Analysis', date: '2023-09-22', status: 'In Progress' },
    { id: 5, title: 'Competitor Review', date: '2023-09-25', status: 'Completed' },
];

export default function ReportList() {
    const [reports, setReports] = useState(reportRows);

    const handleReportDelete = (id) => {
        setReports(reports.filter(report => report.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Report Title', width: 250 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
            return (
                <div className="reportTableAction">
                    <Link to={"report/edit/" + params.row.id}>
                        <EditNote className="reportListIcon edit" style={{ color: 'green' }} />
                    </Link>
                    <DeleteOutline className="reportListIcon delete" 
                        onClick={() => handleReportDelete(params.row.id)} 
                        style={{ color: 'red' }} 
                    />
                </div>
            );
        }},
    ];

    return (
        <div className="reportList">
            <style>
                {`
                    .reportList {
                        padding: 20px;
                        background-color: white; /* White background */
                    }
                    .reportListTop {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .reportListTitle {
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .reportListCreateBtn {
                        padding: 10px 15px;
                        background-color: #007BFF; /* Blue background */
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    .reportListContent {
                        margin-top: 20px;
                        height: 400px;
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .reportTableAction {
                        display: flex;
                        gap: 10px;
                    }
                    .reportListIcon {
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="reportListTop">
                <h3 className="reportListTitle">Report List</h3>
                <Link to="/newReport">
                    <button className="reportListCreateBtn">Create</button>
                </Link>
            </div>
            <div className="reportListContent">
                <DataGrid
                    rows={reports}
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
