import { DeleteOutline, EditNote } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample feedback data
const feedbackRows = [
    { id: 1, user: 'John Doe', feedback: 'Great service!', date: '2023-09-01', status: 'Reviewed' },
    { id: 2, user: 'Jane Smith', feedback: 'Could be better.', date: '2023-09-02', status: 'Pending' },
    { id: 3, user: 'Alice Johnson', feedback: 'Loved the experience!', date: '2023-09-03', status: 'Reviewed' },
    { id: 4, user: 'Bob Brown', feedback: 'Not satisfied.', date: '2023-09-04', status: 'Pending' },
    { id: 5, user: 'Charlie Davis', feedback: 'Excellent!', date: '2023-09-05', status: 'Reviewed' },
];

export default function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState(feedbackRows);

    const handleFeedbackDelete = (id) => {
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 250 },
        { field: 'feedback', headerName: 'Feedback', width: 300 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
            return (
                <div className="feedbackTableAction">
                    <Link to={"feedback/edit/" + params.row.id}>
                        <EditNote className="feedbackListIcon edit" style={{ color: 'green' }} />
                    </Link>
                    <DeleteOutline className="feedbackListIcon delete" 
                        onClick={() => handleFeedbackDelete(params.row.id)} 
                        style={{ color: 'red' }} 
                    />
                </div>
            );
        }},
    ];

    return (
        <div className="feedbackList">
            <style>
                {`
                    .feedbackList {
                        padding: 20px;
                        background-color: white; /* White background */
                    }
                    .feedbackListTop {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .feedbackListTitle {
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .feedbackListCreateBtn {
                        padding: 10px 15px;
                        background-color: #007BFF; /* Blue background */
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    .feedbackListContent {
                        margin-top: 20px;
                        height: 400px;
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .feedbackTableAction {
                        display: flex;
                        gap: 10px;
                    }
                    .feedbackListIcon {
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="feedbackListTop">
                <h3 className="feedbackListTitle">Feedback List</h3>
                <Link to="/newFeedback">
                    <button className="feedbackListCreateBtn">Create</button>
                </Link>
            </div>
            <div className="feedbackListContent">
                <DataGrid
                    rows={feedbacks}
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
