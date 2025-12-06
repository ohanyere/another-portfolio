// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import CaseStudy from "./pages/CaseStudy";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-gray-200 min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/case-study" element={<CaseStudy />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// src/App.tsx
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-background-light dark:bg-background-dark font-display text-[#111827] dark:text-gray-200 min-h-screen">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
