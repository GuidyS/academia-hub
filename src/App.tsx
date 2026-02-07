import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Auth from "./pages/Auth";
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

const P = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<P><Dashboard /></P>} />
            <Route path="/dean-dashboard" element={<P><DeanDashboard /></P>} />
            <Route path="/retention" element={<P><Retention /></P>} />
            <Route path="/users" element={<P><UsersManagement /></P>} />
            <Route path="/roles" element={<P><RolesManagement /></P>} />
            <Route path="/import" element={<P><ImportData /></P>} />
            <Route path="/export" element={<P><ExportData /></P>} />
            <Route path="/audit-log" element={<P><AuditLog /></P>} />
            <Route path="/reports" element={<P><Reports /></P>} />
            <Route path="/approvals" element={<P><Approvals /></P>} />
            <Route path="/portfolio" element={<P><Portfolio /></P>} />
            <Route path="/transcript" element={<P><Transcript /></P>} />
            <Route path="/students" element={<P><Students /></P>} />
            <Route path="/grades" element={<P><Grades /></P>} />
            <Route path="/plo-ylo" element={<P><PLOYLOReport /></P>} />
            <Route path="/documents" element={<P><Documents /></P>} />
            <Route path="/my-courses" element={<P><MyCourses /></P>} />
            <Route path="/clo" element={<P><CLOManagement /></P>} />
            <Route path="/course-students" element={<P><CourseStudents /></P>} />
            <Route path="/course-reports" element={<P><CourseReports /></P>} />
            <Route path="/my-projects" element={<P><MyProjects /></P>} />
            <Route path="/project-docs" element={<P><ProjectDocs /></P>} />
            <Route path="/project-links" element={<P><ProjectLinks /></P>} />
            <Route path="/project-reports" element={<P><ProjectReports /></P>} />
            <Route path="/program-reports" element={<P><ProgramReports /></P>} />
            <Route path="/clo-map" element={<P><CLOMap /></P>} />
            <Route path="/five-year-summary" element={<P><FiveYearSummary /></P>} />
            <Route path="/assign-instructors" element={<P><AssignInstructors /></P>} />
            <Route path="/advisees" element={<P><Advisees /></P>} />
            <Route path="/advice-notes" element={<P><AdviceNotes /></P>} />
            <Route path="/advisor-notifications" element={<P><AdvisorNotifications /></P>} />
            <Route path="/transfer-requests" element={<P><TransferRequests /></P>} />
            <Route path="/practical-students" element={<P><PracticalStudents /></P>} />
            <Route path="/performance" element={<P><Performance /></P>} />
            <Route path="/schedule-tasks" element={<P><ScheduleTasks /></P>} />
            <Route path="/evidence" element={<P><Evidence /></P>} />
            <Route path="/public-info" element={<P><PublicInfo /></P>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
