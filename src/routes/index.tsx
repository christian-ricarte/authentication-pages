import { Routes, Route, Navigate } from 'react-router-dom'

const Router = () => (
    <Routes>
        <Route path='/' element={<Navigate to="/sign-in"/>}/>
        {/* Rota de Acesso */}
        <Route path='/sign-in' element={<></>}/>
        {/* Rota de Cadastro */}
        <Route path='/sign-up' element={<></>}/>
        {/* Rota de Exceção */}
        <Route path='/*' element={<></>}/>
    </Routes>
)

export default Router