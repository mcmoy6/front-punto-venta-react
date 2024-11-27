import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../../dashboard/pages/DashboardPage"
import { ReporteVentasPage } from "../../modulos/ventas/reporte-ventas/pages/ReporteVentasPage"





export const PuntoVentaRoutes = () => {
  return (
    
    <Routes>
        <Route path="dashboard" element={ <DashboardPage /> } />
        <Route path="reporteventas" element={ <ReporteVentasPage /> } />

        <Route path="/*" element={ <Navigate to="/dashboard" />} />
    </Routes>

  )
}
