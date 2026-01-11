
import React from 'react';
import { GradeMapping, PlanItem, Resource } from './types';

export const GRADES: GradeMapping[] = [
  { range: [90, 100], grade: 'O', point: 10 },
  { range: [75, 89], grade: 'A+', point: 9 },
  { range: [65, 74], grade: 'A', point: 8 },
  { range: [55, 64], grade: 'B+', point: 7 },
  { range: [50, 54], grade: 'B', point: 6 },
  { range: [45, 49], grade: 'C', point: 5 },
  { range: [40, 44], grade: 'P', point: 4 },
  { range: [0, 39], grade: 'F', point: 0 },
];

export const DUMMY_RESOURCES: Resource[] = [
  { id: '1', title: 'Data Structures 2023', subject: 'Data Structures', semester: 3, type: 'pyq', fileUrl: '#' },
  { id: '2', title: 'Mathematics-I 2022', subject: 'Applied Mathematics', semester: 1, type: 'pyq', fileUrl: '#' },
  { id: '3', title: 'DBMS Full Notes', subject: 'DBMS', semester: 4, type: 'note', fileUrl: '#' },
  { id: '4', title: 'Java Unit 1-4', subject: 'Java Programming', semester: 5, type: 'note', fileUrl: '#' },
  { id: '5', title: 'OS Previous Papers', subject: 'Operating Systems', semester: 4, type: 'pyq', fileUrl: '#' },
  { id: '6', title: 'Python Handouts', subject: 'Python Programming', semester: 2, type: 'note', fileUrl: '#' },
];

export const SEMESTER_PLAN: PlanItem[] = [
  { id: '1', title: 'End Term Practical Exams', date: '2024-05-15', category: 'Exam' },
  { id: '2', title: 'Mid-Sem Internal Viva', date: '2024-04-10', category: 'Internal' },
  { id: '3', title: 'Minor Project Submission', date: '2024-04-25', category: 'Deadline' },
  { id: '4', title: 'Holi Break', date: '2024-03-25', category: 'Holiday' },
];

export const SUBJECT_OPTIONS = [
  "Applied Mathematics",
  "Applied Physics",
  "Applied Chemistry",
  "Communication Skills",
  "Data Structures",
  "Computer Graphics",
  "Java Programming",
  "Operating Systems",
  "DBMS",
  "Networking"
];
