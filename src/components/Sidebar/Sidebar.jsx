import { AttachMoneyOutlined, BarChartOutlined, ChatBubbleOutlineOutlined, Home, MailOutlined, ManageAccountsOutlined, PersonOutline, RecyclingOutlined, Settings, Storefront, Timeline, TrendingUp } from "@mui/icons-material";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Sidebar() {
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log me out!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Add your logout logic here (e.g., clear session, redirect)
                Swal.fire(
                    'Logged out!',
                    'You have been logged out successfully.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Dashboard</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link className="siderListLink" to="/">
                                <Home className="listItemIcon" /> Home
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Quick Menu</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/users">
                                <PersonOutline className="listItemIcon" /> Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/products">
                                <Storefront className="listItemIcon" /> Products
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/transactions">
                                <AttachMoneyOutlined className="listItemIcon" /> Transactions
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/reports">
                                <BarChartOutlined className="listItemIcon" /> Reports
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Notifications</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/mails">
                                <MailOutlined className="listItemIcon" /> Mail
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link className="siderListLink" to="/feedback">
                                <RecyclingOutlined className="listItemIcon" /> Feedback
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">Settings</h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem" onClick={handleLogout}>
                            <Settings className="listItemIcon" /> Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
