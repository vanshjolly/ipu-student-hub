
export enum Page {
  Home = 'home',
  Attendance = 'attendance',
  CGPA = 'cgpa',
  PYQs = 'pyqs',
  Notes = 'notes',
  Planner = 'planner',
  Converter = 'converter'
}

export interface Resource {
  id: string;
  title: string;
  subject: string;
  semester: number;
  type: 'pyq' | 'note';
  fileUrl: string;
}

export interface PlanItem {
  id: string;
  title: string;
  date: string;
  category: 'Exam' | 'Internal' | 'Deadline' | 'Holiday';
}

export interface GradeMapping {
  range: [number, number];
  grade: string;
  point: number;
}
