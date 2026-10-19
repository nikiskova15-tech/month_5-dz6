
import { createBrowserRouter } from "react-router-dom";
import ProductsPage from "./pages/Products";
import { AddProductForm } from "./pages/AddProductForm";
import MainLayout from "./MainLayout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <ProductsPage /> },
            { path: 'create', element: <AddProductForm /> }
        ]
    }
])