import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from "../pages/Home/Home.jsx"
import NotFound from '../pages/NotFound/notFound.jsx';

export default function AppRouting() {
    
    const Employes = React.lazy(() => import("../pages/Employees/ListEmployees.jsx"));
    const AddEmploye = React.lazy(() => import("../components/Form/CreateEmployeeForm.jsx"));
 

    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/list" element={<Suspense fallback={<>...</>}><Employes /></Suspense>} />
                <Route path="/form" element={<Suspense fallback={<>...</>}><AddEmploye /></Suspense>} />
            </Routes>
        </>
    )
}
