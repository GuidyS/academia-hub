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
  ChevronLeft
} from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
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
import type { Database } from '@/integrations/supabase/types';

type AppRole = Database['public']['Enums']['app_role'];

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuGroup {
  group: string;
  items: MenuItem[];
}

// Menu items based on roles
const adminMenuItems: MenuItem[] = [
  { title: 'แดชบอร์ด', url: '/dashboard', icon: LayoutDashboard },
  { title: 'จัดการผู้ใช้', url: '/users', icon: Users },
  { title: 'จัดการ Role', url: '/roles', icon: Shield },
  { title: 'นำเข้าข้อมูล', url: '/import', icon: Upload },
  { title: 'ส่งออกข้อมูล', url: '/export', icon: Download },
  { title: 'Audit Log', url: '/audit-log', icon: ClipboardList },
  { title: 'รายงาน', url: '/reports', icon: FileText },
];

const studentMenuItems: MenuItem[] = [
  { title: 'โปรไฟล์', url: '/profile', icon: User },
  { title: 'Portfolio', url: '/portfolio', icon: FolderKanban },
  { title: 'Transcript', url: '/transcript', icon: FileText },
];

const teacherMenuItems: MenuGroup[] = [
  { group: 'อาจารย์ประจำ', items: [
    { title: 'รายชื่อนักศึกษา', url: '/students', icon: Users },
  ]},
  { group: 'โครงการ', items: [
    { title: 'จัดการโครงการ', url: '/projects', icon: FolderKanban },
  ]},
  { group: 'หลักสูตร', items: [
    { title: 'รายวิชาที่สอน', url: '/courses', icon: BookOpen },
    { title: 'กำหนด CLO', url: '/clo', icon: FileText },
  ]},
  { group: 'การปฏิบัติ', items: [
    { title: 'นักศึกษาฝึกปฏิบัติ', url: '/practical-students', icon: GraduationCap },
  ]},
];

const commonMenuItems: MenuItem[] = [
  { title: 'การแจ้งเตือน', url: '/notifications', icon: Bell },
  { title: 'ข้อมูลส่วนตัว', url: '/profile', icon: User },
  { title: 'ตั้งค่า', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const { user, role, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const getMenuItems = (): MenuItem[] => {
    switch (role) {
      case 'admin':
        return adminMenuItems;
      case 'student':
        return studentMenuItems;
      case 'teacher':
        return teacherMenuItems.flatMap(group => group.items);
      default:
        return [];
    }
  };

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

  const renderGroupedMenu = () => {
    if (role === 'teacher') {
      return teacherMenuItems.map((group) => (
        <div key={group.group} className="mb-4">
          {!collapsed && (
            <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-sidebar-muted">
              {group.group}
            </p>
          )}
          <SidebarMenu>
            {group.items.map(renderMenuItem)}
          </SidebarMenu>
        </div>
      ));
    }

    return (
      <SidebarMenu>
        {getMenuItems().map(renderMenuItem)}
      </SidebarMenu>
    );
  };

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
        {renderGroupedMenu()}
        
        {/* Common menu items */}
        <div className="mt-auto pt-4 border-t border-sidebar-border">
          <SidebarMenu>
            {commonMenuItems.map(renderMenuItem)}
          </SidebarMenu>
        </div>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="" />
            <AvatarFallback className="bg-warning text-warning-foreground text-sm">
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {user?.email || 'ผู้ใช้'}
              </p>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={signOut}
            className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
