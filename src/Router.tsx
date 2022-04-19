import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages'
import { Orders } from '@/pages/Orders'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
