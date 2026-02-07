import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Admin
import Dashboard from "./pages/Dashboard";
import UsersManagement from "./pages/admin/UsersManagement";
import RolesManagement from "./pages/admin/RolesManagement";
import ImportData from "./pages/admin/ImportData";
import ExportData from "./pages/admin/ExportData";
import AuditLog from "./pages/admin/AuditLog";
import Reports from "./pages/admin/Reports";
import Approvals from "./pages/admin/Approvals";

// Student
import Portfolio from "./pages/student/Portfolio";
import Transcript from "./pages/student/Transcript";

// Dean
import DeanDashboard from "./pages/DeanDashboard";
import Retention from "./pages/Retention";

// Instructor
import Students from "./pages/teacher/Students";
import Grades from "./pages/teacher/Grades";
import PLOYLOReport from "./pages/teacher/PLOYLOReport";
import Documents from "./pages/teacher/Documents";

// Course Instructor
import MyCourses from "./pages/teacher/MyCourses";
import CLOManagement from "./pages/teacher/CLOManagement";
import CourseStudents from "./pages/teacher/CourseStudents";
import CourseReports from "./pages/teacher/CourseReports";

// Project Manager
import MyProjects from "./pages/teacher/MyProjects";
import ProjectDocs from "./pages/teacher/ProjectDocs";
import ProjectLinks from "./pages/teacher/ProjectLinks";
import ProjectReports from "./pages/teacher/ProjectReports";

// Program Manager
import ProgramReports from "./pages/teacher/ProgramReports";
import CLOMap from "./pages/teacher/CLOMap";
import FiveYearSummary from "./pages/teacher/FiveYearSummary";
import AssignInstructors from "./pages/teacher/AssignInstructors";

// Advisor
import Advisees from "./pages/teacher/Advisees";
import AdviceNotes from "./pages/teacher/AdviceNotes";
import AdvisorNotifications from "./pages/teacher/AdvisorNotifications";
import TransferRequests from "./pages/teacher/TransferRequests";

// Practical Instructor
import PracticalStudents from "./pages/teacher/PracticalStudents";
import Performance from "./pages/teacher/Performance";
import ScheduleTasks from "./pages/teacher/ScheduleTasks";
import Evidence from "./pages/teacher/Evidence";

// Dummy
import PublicInfo from "./pages/teacher/PublicInfo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home - Role Selection */}
          <Route path="/" element={<Home />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<UsersManagement />} />
          <Route path="/admin/roles" element={<RolesManagement />} />
          <Route path="/admin/import" element={<ImportData />} />
          <Route path="/admin/export" element={<ExportData />} />
          <Route path="/admin/audit-log" element={<AuditLog />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/approvals" element={<Approvals />} />

          {/* Student Routes */}
          <Route path="/student/portfolio" element={<Portfolio />} />
          <Route path="/student/transcript" element={<Transcript />} />

          {/* Dean Routes */}
          <Route path="/dean/dashboard" element={<DeanDashboard />} />
          <Route path="/dean/retention" element={<Retention />} />

          {/* Instructor Routes */}
          <Route path="/instructor/students" element={<Students />} />
          <Route path="/instructor/grades" element={<Grades />} />
          <Route path="/instructor/plo-ylo" element={<PLOYLOReport />} />
          <Route path="/instructor/documents" element={<Documents />} />

          {/* Course Instructor Routes */}
          <Route path="/course-instructor/courses" element={<MyCourses />} />
          <Route path="/course-instructor/clo" element={<CLOManagement />} />
          <Route path="/course-instructor/students" element={<CourseStudents />} />
          <Route path="/course-instructor/reports" element={<CourseReports />} />

          {/* Project Manager Routes */}
          <Route path="/project-manager/projects" element={<MyProjects />} />
          <Route path="/project-manager/docs" element={<ProjectDocs />} />
          <Route path="/project-manager/links" element={<ProjectLinks />} />
          <Route path="/project-manager/reports" element={<ProjectReports />} />

          {/* Program Manager Routes */}
          <Route path="/program-manager/reports" element={<ProgramReports />} />
          <Route path="/program-manager/clo-map" element={<CLOMap />} />
          <Route path="/program-manager/five-year" element={<FiveYearSummary />} />
          <Route path="/program-manager/assign" element={<AssignInstructors />} />

          {/* Advisor Routes */}
          <Route path="/advisor/advisees" element={<Advisees />} />
          <Route path="/advisor/notes" element={<AdviceNotes />} />
          <Route path="/advisor/notifications" element={<AdvisorNotifications />} />
          <Route path="/advisor/transfers" element={<TransferRequests />} />

          {/* Practical Instructor Routes */}
          <Route path="/practical/students" element={<PracticalStudents />} />
          <Route path="/practical/performance" element={<Performance />} />
          <Route path="/practical/schedule" element={<ScheduleTasks />} />
          <Route path="/practical/evidence" element={<Evidence />} />

          {/* Dummy Routes */}
          <Route path="/dummy/public-info" element={<PublicInfo />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
