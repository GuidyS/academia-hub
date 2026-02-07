import { MainLayout } from '@/components/layout/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-muted-foreground mb-4">
            ยินดีต้อนรับ
          </h1>
          <p className="text-lg text-foreground mb-2">
            Faculty Management System
          </p>
          <p className="mt-4 text-muted-foreground">
            กรุณาเลือกเมนูจากแถบด้านข้าง
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
