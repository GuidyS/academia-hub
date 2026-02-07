import { MainLayout } from '@/components/layout/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import type { Database } from '@/integrations/supabase/types';

type AppRole = Database['public']['Enums']['app_role'];
type TeacherSubRole = Database['public']['Enums']['teacher_sub_role'];

const roleDisplayNames: Record<AppRole, string> = {
  admin: 'ผู้ดูแลระบบ',
  student: 'นักศึกษา',
  teacher: 'อาจารย์',
};

const teacherSubRoleDisplayNames: Record<TeacherSubRole, string> = {
  dean: 'คณบดี',
  instructor: 'อาจารย์ประจำ',
  course_instructor: 'อาจารย์ประจำหลักสูตร',
  project_manager: 'อาจารย์รับผิดชอบโครงการ',
  program_manager: 'อาจารย์รับผิดชอบหลักสูตร',
  advisor: 'อาจารย์ที่ปรึกษา',
  practical_instructor: 'อาจารย์ภาคปฏิบัติ',
  dummy: 'อาจารย์สมมติ',
};

export default function Dashboard() {
  const { user, role, teacherSubRole } = useAuth();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-muted-foreground mb-4">
            ยินดีต้อนรับ
          </h1>
          <p className="text-lg text-foreground mb-2">
            {user?.email}
          </p>
          {role && (
            <p className="text-primary font-medium">
              {roleDisplayNames[role]}
              {teacherSubRole && ` - ${teacherSubRoleDisplayNames[teacherSubRole]}`}
            </p>
          )}
          {!role && (
            <p className="text-muted-foreground">
              ยังไม่ได้รับ Role - กรุณาติดต่อผู้ดูแลระบบ
            </p>
          )}
          <p className="mt-8 text-muted-foreground">
            กรุณาเลือกเมนูจากแถบด้านข้าง
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
