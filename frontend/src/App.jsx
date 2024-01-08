import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PageLayout from "./layouts/PageLayout";
import Jobs from "./pages/Jobs";
import Employers from "./pages/Employers"
import Candidates from "./pages/Candidates";
import CandidateDetail from "./pages/CandidateDetail";
import EmployerDetails from "./pages/EmployerDetails";
import JobDetails from "./pages/JobDetails";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/" element={<PageLayout />}>
          <Route path="jobs" element={<Jobs />} />
          <Route path="employers" element={<Employers />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="candidates/:id" element={<CandidateDetail />} />
          <Route path="employers/:id" element={<EmployerDetails />} />
          <Route path="jobs/:id" element={<JobDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
