import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DeanDashboard from "./pages/DeanDashboard";
import Retention from "./pages/Retention";
import UsersManagement from "./pages/admin/UsersManagement";
import RolesManagement from "./pages/admin/RolesManagement";
import ImportData from "./pages/admin/ImportData";
import ExportData from "./pages/admin/ExportData";
import AuditLog from "./pages/admin/AuditLog";
import Reports from "./pages/admin/Reports";
import Approvals from "./pages/admin/Approvals";
import Portfolio from "./pages/student/Portfolio";
import Transcript from "./pages/student/Transcript";
import Students from "./pages/teacher/Students";
import Grades from "./pages/teacher/Grades";
import PLOYLOReport from "./pages/teacher/PLOYLOReport";
import Documents from "./pages/teacher/Documents";
import MyCourses from "./pages/teacher/MyCourses";
import CLOManagement from "./pages/teacher/CLOManagement";
import CourseStudents from "./pages/teacher/CourseStudents";
import CourseReports from "./pages/teacher/CourseReports";
import MyProjects from "./pages/teacher/MyProjects";
import ProjectDocs from "./pages/teacher/ProjectDocs";
import ProjectLinks from "./pages/teacher/ProjectLinks";
import ProjectReports from "./pages/teacher/ProjectReports";
import ProgramReports from "./pages/teacher/ProgramReports";
import CLOMap from "./pages/teacher/CLOMap";
import FiveYearSummary from "./pages/teacher/FiveYearSummary";
import AssignInstructors from "./pages/teacher/AssignInstructors";
import Advisees from "./pages/teacher/Advisees";
import AdviceNotes from "./pages/teacher/AdviceNotes";
import AdvisorNotifications from "./pages/teacher/AdvisorNotifications";
import TransferRequests from "./pages/teacher/TransferRequests";
import PracticalStudents from "./pages/teacher/PracticalStudents";
import Performance from "./pages/teacher/Performance";
import ScheduleTasks from "./pages/teacher/ScheduleTasks";
import Evidence from "./pages/teacher/Evidence";
import PublicInfo from "./pages/teacher/PublicInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dean-dashboard" element={<DeanDashboard />} />
          <Route path="/retention" element={<Retention />} />
          <Route path="/users" element={<UsersManagement />} />
          <Route path="/roles" element={<RolesManagement />} />
          <Route path="/import" element={<ImportData />} />
          <Route path="/export" element={<ExportData />} />
          <Route path="/audit-log" element={<AuditLog />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/approvals" element={<Approvals />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/students" element={<Students />} />
          <Route path="/grades" element={<Grades />} />
          <Route path="/plo-ylo" element={<PLOYLOReport />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/clo" element={<CLOManagement />} />
          <Route path="/course-students" element={<CourseStudents />} />
          <Route path="/course-reports" element={<CourseReports />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/project-docs" element={<ProjectDocs />} />
          <Route path="/project-links" element={<ProjectLinks />} />
          <Route path="/project-reports" element={<ProjectReports />} />
          <Route path="/program-reports" element={<ProgramReports />} />
          <Route path="/clo-map" element={<CLOMap />} />
          <Route path="/five-year-summary" element={<FiveYearSummary />} />
          <Route path="/assign-instructors" element={<AssignInstructors />} />
          <Route path="/advisees" element={<Advisees />} />
          <Route path="/advice-notes" element={<AdviceNotes />} />
          <Route path="/advisor-notifications" element={<AdvisorNotifications />} />
          <Route path="/transfer-requests" element={<TransferRequests />} />
          <Route path="/practical-students" element={<PracticalStudents />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/schedule-tasks" element={<ScheduleTasks />} />
          <Route path="/evidence" element={<Evidence />} />
          <Route path="/public-info" element={<PublicInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
