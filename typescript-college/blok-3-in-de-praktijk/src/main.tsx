import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddProductForm from './customHooks/CustomHooks'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AddProductForm />
  </StrictMode>,
)
