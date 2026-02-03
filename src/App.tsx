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
// Teacher - Instructor
import Students from "./pages/teacher/Students";
import Grades from "./pages/teacher/Grades";
import PLOYLOReport from "./pages/teacher/PLOYLOReport";
import Documents from "./pages/teacher/Documents";
// Teacher - Course Instructor
import MyCourses from "./pages/teacher/MyCourses";
import CLOManagement from "./pages/teacher/CLOManagement";
import CourseStudents from "./pages/teacher/CourseStudents";
import CourseReports from "./pages/teacher/CourseReports";
// Teacher - Project Manager
import MyProjects from "./pages/teacher/MyProjects";
import ProjectDocs from "./pages/teacher/ProjectDocs";
import ProjectLinks from "./pages/teacher/ProjectLinks";
import ProjectReports from "./pages/teacher/ProjectReports";
// Teacher - Program Manager
import ProgramReports from "./pages/teacher/ProgramReports";
import CLOMap from "./pages/teacher/CLOMap";
import FiveYearSummary from "./pages/teacher/FiveYearSummary";
import AssignInstructors from "./pages/teacher/AssignInstructors";
// Teacher - Advisor
import Advisees from "./pages/teacher/Advisees";
import AdviceNotes from "./pages/teacher/AdviceNotes";
import AdvisorNotifications from "./pages/teacher/AdvisorNotifications";
import TransferRequests from "./pages/teacher/TransferRequests";
// Teacher - Practical Instructor
import PracticalStudents from "./pages/teacher/PracticalStudents";
import Performance from "./pages/teacher/Performance";
import ScheduleTasks from "./pages/teacher/ScheduleTasks";
import Evidence from "./pages/teacher/Evidence";
// Teacher - Dummy
import PublicInfo from "./pages/teacher/PublicInfo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dean-dashboard"
              element={
                <ProtectedRoute>
                  <DeanDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/retention"
              element={
                <ProtectedRoute>
                  <Retention />
                </ProtectedRoute>
              }
            />
            {/* Admin Routes */}
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UsersManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roles"
              element={
                <ProtectedRoute>
                  <RolesManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/import"
              element={
                <ProtectedRoute>
                  <ImportData />
                </ProtectedRoute>
              }
            />
            <Route
              path="/export"
              element={
                <ProtectedRoute>
                  <ExportData />
                </ProtectedRoute>
              }
            />
            <Route
              path="/audit-log"
              element={
                <ProtectedRoute>
                  <AuditLog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/approvals"
              element={
                <ProtectedRoute>
                  <Approvals />
                </ProtectedRoute>
              }
            />
            {/* Student Routes */}
            <Route
              path="/portfolio"
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transcript"
              element={
                <ProtectedRoute>
                  <Transcript />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Instructor Routes */}
            <Route
              path="/students"
              element={
                <ProtectedRoute>
                  <Students />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grades"
              element={
                <ProtectedRoute>
                  <Grades />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plo-ylo"
              element={
                <ProtectedRoute>
                  <PLOYLOReport />
                </ProtectedRoute>
              }
            />
            <Route
              path="/documents"
              element={
                <ProtectedRoute>
                  <Documents />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Course Instructor Routes */}
            <Route
              path="/my-courses"
              element={
                <ProtectedRoute>
                  <MyCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clo"
              element={
                <ProtectedRoute>
                  <CLOManagement />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-students"
              element={
                <ProtectedRoute>
                  <CourseStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/course-reports"
              element={
                <ProtectedRoute>
                  <CourseReports />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Project Manager Routes */}
            <Route
              path="/my-projects"
              element={
                <ProtectedRoute>
                  <MyProjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project-docs"
              element={
                <ProtectedRoute>
                  <ProjectDocs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project-links"
              element={
                <ProtectedRoute>
                  <ProjectLinks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/project-reports"
              element={
                <ProtectedRoute>
                  <ProjectReports />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Program Manager Routes */}
            <Route
              path="/program-reports"
              element={
                <ProtectedRoute>
                  <ProgramReports />
                </ProtectedRoute>
              }
            />
            <Route
              path="/clo-map"
              element={
                <ProtectedRoute>
                  <CLOMap />
                </ProtectedRoute>
              }
            />
            <Route
              path="/five-year-summary"
              element={
                <ProtectedRoute>
                  <FiveYearSummary />
                </ProtectedRoute>
              }
            />
            <Route
              path="/assign-instructors"
              element={
                <ProtectedRoute>
                  <AssignInstructors />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Advisor Routes */}
            <Route
              path="/advisees"
              element={
                <ProtectedRoute>
                  <Advisees />
                </ProtectedRoute>
              }
            />
            <Route
              path="/advice-notes"
              element={
                <ProtectedRoute>
                  <AdviceNotes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/advisor-notifications"
              element={
                <ProtectedRoute>
                  <AdvisorNotifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transfer-requests"
              element={
                <ProtectedRoute>
                  <TransferRequests />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Practical Instructor Routes */}
            <Route
              path="/practical-students"
              element={
                <ProtectedRoute>
                  <PracticalStudents />
                </ProtectedRoute>
              }
            />
            <Route
              path="/performance"
              element={
                <ProtectedRoute>
                  <Performance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/schedule-tasks"
              element={
                <ProtectedRoute>
                  <ScheduleTasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/evidence"
              element={
                <ProtectedRoute>
                  <Evidence />
                </ProtectedRoute>
              }
            />
            {/* Teacher - Dummy Routes */}
            <Route
              path="/public-info"
              element={
                <ProtectedRoute>
                  <PublicInfo />
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
