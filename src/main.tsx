import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import './styles/app.css'
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConvexProvider client={convex}>
      <Home />
    </ConvexProvider>
  </React.StrictMode>,
)
