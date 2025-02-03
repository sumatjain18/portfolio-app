import { Card, CardContent } from "@mui/material";
import { CheckCircle2 } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  universityName: string;
  dateRange: string;
  description: string;
  index: number;
}

export function CareerCard({ title, universityName, dateRange, description, index }: ExperienceCardProps) {
  return (
    <div className="flex gap-4 relative" data-aos="fade-up" data-aos-duration="1500">
      <div className="flex flex-col items-center">
        <CheckCircle2 className="w-6 h-6 text-sky-400 bg-slate-900 rounded-full z-10" />
        <div className="w-0.5 h-full bg-sky-400/20 absolute top-6" />
      </div>
      <Card className="flex-1 mb-8 bg-slate-900/50 border-slate-800">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-1">{title}</h3>
          <p className="text-gray-500 mb-1">{dateRange}</p>
          <p className="text-sky-500 mb-3">{universityName}</p>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
