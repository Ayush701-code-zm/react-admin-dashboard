import { DeleteOutline, EditNote } from "@mui/icons-material";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample mail data
const mailRows = [
    { id: 1, sender: 'john.doe@example.com', subject: 'Meeting Reminder', date: '2023-09-01', status: 'Unread' },
    { id: 2, sender: 'jane.smith@example.com', subject: 'Project Update', date: '2023-09-02', status: 'Read' },
    { id: 3, sender: 'alice.johnson@example.com', subject: 'Invoice', date: '2023-09-03', status: 'Unread' },
    { id: 4, sender: 'bob.brown@example.com', subject: 'Feedback Request', date: '2023-09-04', status: 'Read' },
    { id: 5, sender: 'charlie.davis@example.com', subject: 'Newsletter', date: '2023-09-05', status: 'Unread' },
];

export default function MailList() {
    const [mails, setMails] = useState(mailRows);

    const handleMailDelete = (id) => {
        setMails(mails.filter(mail => mail.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'sender', headerName: 'Sender', width: 250 },
        { field: 'subject', headerName: 'Subject', width: 250 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 130, renderCell: (params) => {
            return (
                <div className="mailTableAction">
                    <Link to={"mail/edit/" + params.row.id}>
                        <EditNote className="mailListIcon edit" style={{ color: 'green' }} />
                    </Link>
                    <DeleteOutline className="mailListIcon delete" 
                        onClick={() => handleMailDelete(params.row.id)} 
                        style={{ color: 'red' }} 
                    />
                </div>
            );
        }},
    ];

    return (
        <div className="mailList">
            <style>
                {`
                    .mailList {
                        padding: 20px;
                        background-color: white; /* White background */
                    }
                    .mailListTop {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .mailListTitle {
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .mailListCreateBtn {
                        padding: 10px 15px;
                        background-color: #007BFF; /* Blue background */
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    .mailListContent {
                        margin-top: 20px;
                        height: 400px;
                        background-color: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    .mailTableAction {
                        display: flex;
                        gap: 10px;
                    }
                    .mailListIcon {
                        cursor: pointer;
                    }
                `}
            </style>
            <div className="mailListTop">
                <h3 className="mailListTitle">Mail List</h3>
                <Link to="/newMail">
                    <button className="mailListCreateBtn">Create</button>
                </Link>
            </div>
            <div className="mailListContent">
                <DataGrid
                    rows={mails}
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
