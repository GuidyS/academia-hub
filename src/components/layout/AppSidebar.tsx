import { 
  Users, 
  FolderKanban, 
  BookOpen, 
  FileText, 
  Settings, 
  Bell, 
  User, 
  LogOut,
  LayoutDashboard,
  Upload,
  Download,
  Shield,
  ClipboardList,
  GraduationCap,
  ChevronLeft,
  DollarSign,
  TrendingUp,
  UserCheck,
  CalendarDays,
  MessageSquare,
  CheckSquare
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from '@/components/ui/sidebar';

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// All menu items grouped
const adminMenuItems: MenuItem[] = [
  { title: 'แดชบอร์ด', url: '/dashboard', icon: LayoutDashboard },
  { title: 'จัดการผู้ใช้', url: '/users', icon: Users },
  { title: 'จัดการ Role', url: '/roles', icon: Shield },
  { title: 'นำเข้าข้อมูล', url: '/import', icon: Upload },
  { title: 'ส่งออกข้อมูล', url: '/export', icon: Download },
  { title: 'Audit Log', url: '/audit-log', icon: ClipboardList },
  { title: 'รายงาน', url: '/reports', icon: FileText },
  { title: 'อนุมัติคำขอ', url: '/approvals', icon: CheckSquare },
];

const studentMenuItems: MenuItem[] = [
  { title: 'Portfolio', url: '/portfolio', icon: FolderKanban },
  { title: 'Transcript', url: '/transcript', icon: FileText },
];

const deanMenuItems: MenuItem[] = [
  { title: 'แดชบอร์ด KPI', url: '/dean-dashboard', icon: LayoutDashboard },
  { title: 'อัตราคงอยู่', url: '/retention', icon: UserCheck },
];

const instructorMenuItems: MenuItem[] = [
  { title: 'รายชื่อนักศึกษา', url: '/students', icon: Users },
  { title: 'บันทึกเกรด', url: '/grades', icon: FileText },
  { title: 'รายงาน PLO/YLO', url: '/plo-ylo', icon: TrendingUp },
  { title: 'อัปโหลดเอกสาร', url: '/documents', icon: Upload },
];

const courseInstructorMenuItems: MenuItem[] = [
  { title: 'รายวิชาที่รับผิดชอบ', url: '/my-courses', icon: BookOpen },
  { title: 'กำหนด CLO', url: '/clo', icon: FileText },
  { title: 'รายชื่อนักศึกษา', url: '/course-students', icon: Users },
  { title: 'รายงานรายวิชา', url: '/course-reports', icon: FileText },
];

const projectManagerMenuItems: MenuItem[] = [
  { title: 'โครงการของฉัน', url: '/my-projects', icon: FolderKanban },
  { title: 'สร้างเอกสาร', url: '/project-docs', icon: FileText },
  { title: 'เชื่อมโยง PLO/YLO/CLO', url: '/project-links', icon: TrendingUp },
  { title: 'รายงานสรุปโครงการ', url: '/project-reports', icon: FileText },
];

const programManagerMenuItems: MenuItem[] = [
  { title: 'รายงาน PLO/YLO/CLO', url: '/program-reports', icon: TrendingUp },
  { title: 'CLO Map', url: '/clo-map', icon: FileText },
  { title: 'ผลสรุป 5 ปี', url: '/five-year-summary', icon: FileText },
  { title: 'มอบหมาย Course Instructor', url: '/assign-instructors', icon: Users },
];

const advisorMenuItems: MenuItem[] = [
  { title: 'นักศึกษาในที่ปรึกษา', url: '/advisees', icon: Users },
  { title: 'Advice Notes', url: '/advice-notes', icon: MessageSquare },
  { title: 'การแจ้งเตือน', url: '/advisor-notifications', icon: Bell },
  { title: 'ร้องขอรับมอบ', url: '/transfer-requests', icon: UserCheck },
];

const practicalInstructorMenuItems: MenuItem[] = [
  { title: 'นักศึกษาฝึกปฏิบัติ', url: '/practical-students', icon: GraduationCap },
  { title: 'ประเมิน Performance', url: '/performance', icon: TrendingUp },
  { title: 'Schedule Task', url: '/schedule-tasks', icon: CalendarDays },
  { title: 'หลักฐานการปฏิบัติ', url: '/evidence', icon: CheckSquare },
];

const dummyMenuItems: MenuItem[] = [
  { title: 'ข้อมูลสาธารณะ', url: '/public-info', icon: FileText },
];

interface MenuSection {
  label: string;
  items: MenuItem[];
}

const allMenuSections: MenuSection[] = [
  { label: 'ผู้ดูแลระบบ', items: adminMenuItems },
  { label: 'นักศึกษา', items: studentMenuItems },
  { label: 'คณบดี', items: deanMenuItems },
  { label: 'อาจารย์ประจำ', items: instructorMenuItems },
  { label: 'อาจารย์ประจำหลักสูตร', items: courseInstructorMenuItems },
  { label: 'อาจารย์รับผิดชอบโครงการ', items: projectManagerMenuItems },
  { label: 'อาจารย์รับผิดชอบหลักสูตร', items: programManagerMenuItems },
  { label: 'อาจารย์ที่ปรึกษา', items: advisorMenuItems },
  { label: 'อาจารย์ภาคปฏิบัติ', items: practicalInstructorMenuItems },
  { label: 'อาจารย์สมมติ', items: dummyMenuItems },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const renderMenuItem = (item: MenuItem) => (
    <SidebarMenuItem key={item.url}>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.url}
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors',
            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            isActive(item.url) && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
          )}
        >
          <item.icon className="h-5 w-5" />
          {!collapsed && <span>{item.title}</span>}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar className={cn(
      'border-r border-sidebar-border bg-sidebar sidebar-transition',
      collapsed ? 'w-16' : 'w-64'
    )}>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-sm font-semibold text-foreground">Faculty</h1>
                <p className="text-xs text-muted-foreground">Management System</p>
              </div>
            )}
          </div>
          <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
            <ChevronLeft className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')} />
          </SidebarTrigger>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 overflow-y-auto">
        {allMenuSections.map((section) => (
          <div key={section.label} className="mb-3">
            {!collapsed && (
              <div className="px-3 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.label}
                </span>
              </div>
            )}
            <SidebarMenu>
              {section.items.map(renderMenuItem)}
            </SidebarMenu>
          </div>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" />
            <AvatarFallback className="bg-warning text-warning-foreground text-sm">
              U
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                ผู้ใช้ทดสอบ
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
