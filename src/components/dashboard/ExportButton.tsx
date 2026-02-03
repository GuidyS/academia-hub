import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, FileSpreadsheet, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExportButtonProps {
  reportName: string;
}

export function ExportButton({ reportName }: ExportButtonProps) {
  const { toast } = useToast();

  const handleExport = (format: "pdf" | "excel") => {
    // Simulate export functionality
    toast({
      title: "กำลังส่งออกรายงาน",
      description: `กำลังสร้างไฟล์ ${format.toUpperCase()} สำหรับ ${reportName}...`,
    });

    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "ส่งออกสำเร็จ",
        description: `ดาวน์โหลด ${reportName}.${format} เรียบร้อยแล้ว`,
      });
    }, 1500);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          ส่งออกรายงาน
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleExport("pdf")} className="gap-2">
          <FileText className="h-4 w-4" />
          ส่งออกเป็น PDF
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport("excel")} className="gap-2">
          <FileSpreadsheet className="h-4 w-4" />
          ส่งออกเป็น Excel
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
