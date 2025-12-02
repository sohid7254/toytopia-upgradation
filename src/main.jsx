import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
// ✅ AOS import
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Initialize AOS
AOS.init({
  duration: 1000, // animation duration (ms)
  once: true,     // scroll করলে একবারই animate হবে
});
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </StrictMode>
);
