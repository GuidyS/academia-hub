import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, FileText } from "lucide-react";

interface FinancialSummary {
  category: string;
  budget: number;
  actual: number;
  variance: number;
  status: "positive" | "negative" | "neutral";
}

const financialData: FinancialSummary[] = [
  { category: "รายได้ค่าเล่าเรียน", budget: 15000000, actual: 14500000, variance: -3.3, status: "negative" },
  { category: "เงินอุดหนุนจากรัฐ", budget: 8000000, actual: 8500000, variance: 6.3, status: "positive" },
  { category: "รายได้จากการวิจัย", budget: 3000000, actual: 3200000, variance: 6.7, status: "positive" },
  { category: "รายได้อื่นๆ", budget: 2000000, actual: 1800000, variance: -10, status: "negative" },
  { category: "ค่าใช้จ่ายบุคลากร", budget: 12000000, actual: 11500000, variance: 4.2, status: "positive" },
  { category: "ค่าใช้จ่ายดำเนินการ", budget: 5000000, actual: 5200000, variance: -4, status: "negative" },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
  }).format(value);
};

export function FinancialReport() {
  const totalBudget = financialData.reduce((sum, item) => sum + item.budget, 0);
  const totalActual = financialData.reduce((sum, item) => sum + item.actual, 0);

  return (
    <Card className="border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              รายงานการเงินระดับบริหาร
            </CardTitle>
            <CardDescription>สรุปรายรับ-รายจ่ายประจำปีงบประมาณ 2568</CardDescription>
          </div>
          <Badge variant="secondary" className="gap-1">
            <FileText className="h-3 w-3" />
            ข้อมูลล่าสุด: 3 ก.พ. 2569
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>หมวดหมู่</TableHead>
              <TableHead className="text-right">งบประมาณ</TableHead>
              <TableHead className="text-right">ยอดจริง</TableHead>
              <TableHead className="text-right">ผลต่าง (%)</TableHead>
              <TableHead className="text-center">สถานะ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {financialData.map((item) => (
              <TableRow key={item.category}>
                <TableCell className="font-medium">{item.category}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.budget)}</TableCell>
                <TableCell className="text-right">{formatCurrency(item.actual)}</TableCell>
                <TableCell className="text-right">
                  <span className={item.status === "positive" ? "text-success" : item.status === "negative" ? "text-destructive" : ""}>
                    {item.variance > 0 ? "+" : ""}{item.variance}%
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  {item.status === "positive" ? (
                    <TrendingUp className="h-4 w-4 text-success mx-auto" />
                  ) : item.status === "negative" ? (
                    <TrendingDown className="h-4 w-4 text-destructive mx-auto" />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-muted/50 font-semibold">
              <TableCell>รวมทั้งสิ้น</TableCell>
              <TableCell className="text-right">{formatCurrency(totalBudget)}</TableCell>
              <TableCell className="text-right">{formatCurrency(totalActual)}</TableCell>
              <TableCell className="text-right">
                <span className={totalActual >= totalBudget ? "text-success" : "text-destructive"}>
                  {((totalActual - totalBudget) / totalBudget * 100).toFixed(1)}%
                </span>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

// Executive Summary Component
const executiveSummaryData = [
  { metric: "อัตราการสำเร็จการศึกษา", value: "92%", target: "90%", status: "success" as const },
  { metric: "คะแนนความพึงพอใจนักศึกษา", value: "4.2/5", target: "4.0/5", status: "success" as const },
  { metric: "อัตราการได้งานทำ", value: "87%", target: "85%", status: "success" as const },
  { metric: "จำนวนผลงานวิจัยตีพิมพ์", value: "45", target: "50", status: "warning" as const },
  { metric: "งบประมาณที่ใช้", value: "78%", target: "80%", status: "success" as const },
];

export function ExecutiveSummary() {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle>ผลสรุประดับบริหาร</CardTitle>
        <CardDescription>ตัวชี้วัดสำคัญเทียบกับเป้าหมาย</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {executiveSummaryData.map((item) => (
            <div key={item.metric} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div>
                <p className="text-sm font-medium text-foreground">{item.metric}</p>
                <p className="text-xs text-muted-foreground">เป้าหมาย: {item.target}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">{item.value}</span>
                <Badge variant={item.status === "success" ? "default" : "secondary"} className={item.status === "success" ? "bg-success" : "bg-warning"}>
                  {item.status === "success" ? "บรรลุ" : "ใกล้เป้า"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
