import './App.css';
import Layout from './components/Layout/Layout';
import UserList from './pages/UserList/UserList';
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserEdit from './pages/UserEdit/UserEdit';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import NewProduct from './pages/NewProduct/NewProduct';
import Transiction from './pages/Transiction/index';
import Reports from './pages/reports/index';
import Mails from './pages/Mails/index';
import Feedback from './pages/Feedback/index';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/users',
          element: <UserList />,
        },
        {
          path: '/newUser',
          element: <NewUser />,
        },
        {
          path: '/user/:userId',
          element: <UserEdit />,
        },
        {
          path: '/products',
          element: <ProductList />,
        },
        {
          path: '/newProduct',
          element: <NewProduct />,
        },
        {
          path: '/transactions',
          element: <Transiction />,
        },
        {
          path: '/reports',
          element: <Reports />,
        },
        {
          path: '/mails',
          element: <Mails />,
        },
        {
          path: '/feedback',
          element: <Feedback />,
        },

      ]
    },
  ]);
  return (
    <>
    <RouterProvider router={router} />
      {/* <TopBar />
      <div className='container'>
        <Sidebar/>
        <div className="mainContentWrapper">
          <Home />
        </div>
      </div> */}

    </>
  );
}

export default App;
