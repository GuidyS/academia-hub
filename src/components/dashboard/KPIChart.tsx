import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend } from "recharts";

interface ChartProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ChartCard({ title, description, children }: ChartProps) {
  return (
    <Card className="border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {description && (
          <CardDescription>{description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

// Student KPI Bar Chart
const studentKPIData = [
  { month: "ม.ค.", registered: 120, graduated: 45, dropped: 5 },
  { month: "ก.พ.", registered: 125, graduated: 48, dropped: 3 },
  { month: "มี.ค.", registered: 130, graduated: 50, dropped: 4 },
  { month: "เม.ย.", registered: 128, graduated: 52, dropped: 2 },
  { month: "พ.ค.", registered: 135, graduated: 55, dropped: 6 },
  { month: "มิ.ย.", registered: 140, graduated: 58, dropped: 3 },
];

export function StudentKPIChart() {
  return (
    <ChartCard title="KPI นักศึกษา" description="จำนวนนักศึกษาลงทะเบียน/จบการศึกษา/ออกกลางคัน">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={studentKPIData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Bar dataKey="registered" fill="hsl(var(--primary))" name="ลงทะเบียน" radius={[4, 4, 0, 0]} />
            <Bar dataKey="graduated" fill="hsl(var(--success))" name="จบการศึกษา" radius={[4, 4, 0, 0]} />
            <Bar dataKey="dropped" fill="hsl(var(--destructive))" name="ออกกลางคัน" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

// Teacher KPI Line Chart
const teacherKPIData = [
  { month: "ม.ค.", fullTime: 45, partTime: 20, visiting: 8 },
  { month: "ก.พ.", fullTime: 46, partTime: 22, visiting: 7 },
  { month: "มี.ค.", fullTime: 48, partTime: 21, visiting: 9 },
  { month: "เม.ย.", fullTime: 47, partTime: 23, visiting: 8 },
  { month: "พ.ค.", fullTime: 50, partTime: 22, visiting: 10 },
  { month: "มิ.ย.", fullTime: 52, partTime: 24, visiting: 9 },
];

export function TeacherKPIChart() {
  return (
    <ChartCard title="KPI อาจารย์" description="จำนวนอาจารย์ประจำ/พิเศษ/เยี่ยมเยือน">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={teacherKPIData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Line type="monotone" dataKey="fullTime" stroke="hsl(var(--primary))" strokeWidth={2} name="อาจารย์ประจำ" dot={{ fill: 'hsl(var(--primary))' }} />
            <Line type="monotone" dataKey="partTime" stroke="hsl(var(--secondary-foreground))" strokeWidth={2} name="อาจารย์พิเศษ" dot={{ fill: 'hsl(var(--secondary-foreground))' }} />
            <Line type="monotone" dataKey="visiting" stroke="hsl(var(--accent-foreground))" strokeWidth={2} name="อาจารย์เยี่ยมเยือน" dot={{ fill: 'hsl(var(--accent-foreground))' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

// Retention Ratio Chart
const retentionData = [
  { year: "ปี 1", students: 100, retained: 95 },
  { year: "ปี 2", students: 95, retained: 90 },
  { year: "ปี 3", students: 90, retained: 87 },
  { year: "ปี 4", students: 87, retained: 85 },
];

export function RetentionChart() {
  return (
    <ChartCard title="สัดส่วนนักศึกษาคงอยู่" description="อัตราการคงอยู่ของนักศึกษาแต่ละชั้นปี">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={retentionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" className="text-xs" />
            <YAxis dataKey="year" type="category" className="text-xs" width={50} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }} 
            />
            <Bar dataKey="students" fill="hsl(var(--muted))" name="เริ่มต้น" radius={[0, 4, 4, 0]} />
            <Bar dataKey="retained" fill="hsl(var(--primary))" name="คงอยู่" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

// Exit Reasons Pie Chart
const exitReasonsData = [
  { name: "เรียนไม่จบ", value: 35, color: "hsl(var(--destructive))" },
  { name: "ปัญหาการเงิน", value: 25, color: "hsl(var(--warning))" },
  { name: "ย้ายสถาบัน", value: 20, color: "hsl(var(--primary))" },
  { name: "ปัญหาสุขภาพ", value: 12, color: "hsl(var(--secondary-foreground))" },
  { name: "อื่นๆ", value: 8, color: "hsl(var(--muted-foreground))" },
];

export function ExitReasonsChart() {
  return (
    <ChartCard title="สาเหตุการออกกลางคัน" description="สัดส่วนสาเหตุที่นักศึกษาออกกลางคัน">
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={exitReasonsData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {exitReasonsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [`${value}%`, 'สัดส่วน']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
