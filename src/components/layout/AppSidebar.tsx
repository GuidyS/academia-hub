import { 
  Users, 
  FolderKanban, 
  BookOpen, 
  FileText, 
  Bell, 
  LogOut,
  LayoutDashboard,
  Upload,
  Download,
  Shield,
  ClipboardList,
  GraduationCap,
  ChevronLeft,
  TrendingUp,
  UserCheck,
  CalendarDays,
  MessageSquare,
  CheckSquare,
  Home
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
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

interface RoleConfig {
  label: string;
  prefix: string;
  items: MenuItem[];
}

const roleConfigs: RoleConfig[] = [
  {
    label: 'ผู้ดูแลระบบ',
    prefix: '/admin',
    items: [
      { title: 'แดชบอร์ด', url: '/admin/dashboard', icon: LayoutDashboard },
      { title: 'จัดการผู้ใช้', url: '/admin/users', icon: Users },
      { title: 'จัดการ Role', url: '/admin/roles', icon: Shield },
      { title: 'นำเข้าข้อมูล', url: '/admin/import', icon: Upload },
      { title: 'ส่งออกข้อมูล', url: '/admin/export', icon: Download },
      { title: 'Audit Log', url: '/admin/audit-log', icon: ClipboardList },
      { title: 'รายงาน', url: '/admin/reports', icon: FileText },
      { title: 'อนุมัติคำขอ', url: '/admin/approvals', icon: CheckSquare },
    ],
  },
  {
    label: 'นักศึกษา',
    prefix: '/student',
    items: [
      { title: 'Portfolio', url: '/student/portfolio', icon: FolderKanban },
      { title: 'Transcript', url: '/student/transcript', icon: FileText },
    ],
  },
  {
    label: 'คณบดี',
    prefix: '/dean',
    items: [
      { title: 'แดชบอร์ด KPI', url: '/dean/dashboard', icon: LayoutDashboard },
      { title: 'อัตราคงอยู่', url: '/dean/retention', icon: UserCheck },
    ],
  },
  {
    label: 'อาจารย์ประจำ',
    prefix: '/instructor',
    items: [
      { title: 'รายชื่อนักศึกษา', url: '/instructor/students', icon: Users },
      { title: 'บันทึกเกรด', url: '/instructor/grades', icon: FileText },
      { title: 'รายงาน PLO/YLO', url: '/instructor/plo-ylo', icon: TrendingUp },
      { title: 'อัปโหลดเอกสาร', url: '/instructor/documents', icon: Upload },
    ],
  },
  {
    label: 'อาจารย์ประจำหลักสูตร',
    prefix: '/course-instructor',
    items: [
      { title: 'รายวิชาที่รับผิดชอบ', url: '/course-instructor/courses', icon: BookOpen },
      { title: 'กำหนด CLO', url: '/course-instructor/clo', icon: FileText },
      { title: 'รายชื่อนักศึกษา', url: '/course-instructor/students', icon: Users },
      { title: 'รายงานรายวิชา', url: '/course-instructor/reports', icon: FileText },
    ],
  },
  {
    label: 'อาจารย์รับผิดชอบโครงการ',
    prefix: '/project-manager',
    items: [
      { title: 'โครงการของฉัน', url: '/project-manager/projects', icon: FolderKanban },
      { title: 'สร้างเอกสาร', url: '/project-manager/docs', icon: FileText },
      { title: 'เชื่อมโยง PLO/YLO/CLO', url: '/project-manager/links', icon: TrendingUp },
      { title: 'รายงานสรุปโครงการ', url: '/project-manager/reports', icon: FileText },
    ],
  },
  {
    label: 'อาจารย์รับผิดชอบหลักสูตร',
    prefix: '/program-manager',
    items: [
      { title: 'รายงาน PLO/YLO/CLO', url: '/program-manager/reports', icon: TrendingUp },
      { title: 'CLO Map', url: '/program-manager/clo-map', icon: FileText },
      { title: 'ผลสรุป 5 ปี', url: '/program-manager/five-year', icon: FileText },
      { title: 'มอบหมาย Course Instructor', url: '/program-manager/assign', icon: Users },
    ],
  },
  {
    label: 'อาจารย์ที่ปรึกษา',
    prefix: '/advisor',
    items: [
      { title: 'นักศึกษาในที่ปรึกษา', url: '/advisor/advisees', icon: Users },
      { title: 'Advice Notes', url: '/advisor/notes', icon: MessageSquare },
      { title: 'การแจ้งเตือน', url: '/advisor/notifications', icon: Bell },
      { title: 'ร้องขอรับมอบ', url: '/advisor/transfers', icon: UserCheck },
    ],
  },
  {
    label: 'อาจารย์ภาคปฏิบัติ',
    prefix: '/practical',
    items: [
      { title: 'นักศึกษาฝึกปฏิบัติ', url: '/practical/students', icon: GraduationCap },
      { title: 'ประเมิน Performance', url: '/practical/performance', icon: TrendingUp },
      { title: 'Schedule Task', url: '/practical/schedule', icon: CalendarDays },
      { title: 'หลักฐานการปฏิบัติ', url: '/practical/evidence', icon: CheckSquare },
    ],
  },
  {
    label: 'อาจารย์สมมติ',
    prefix: '/dummy',
    items: [
      { title: 'ข้อมูลสาธารณะ', url: '/dummy/public-info', icon: FileText },
    ],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Detect current role from URL path
  const currentRole = roleConfigs.find((r) =>
    location.pathname.startsWith(r.prefix)
  );

  const menuItems = currentRole?.items ?? [];
  const roleLabel = currentRole?.label ?? '';

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

      <SidebarContent className="p-2">
        {!collapsed && roleLabel && (
          <div className="px-3 py-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {roleLabel}
            </span>
          </div>
        )}
        <SidebarMenu>
          {menuItems.map(renderMenuItem)}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <NavLink to="/">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <Home className="h-4 w-4" />
            {!collapsed && <span>เปลี่ยน Role</span>}
          </Button>
        </NavLink>
      </SidebarFooter>
    </Sidebar>
  );
}
