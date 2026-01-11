
import React, { useState } from 'react';
import { GRADES, SUBJECT_OPTIONS } from '../constants';

interface SubjectRow {
  id: string;
  name: string;
  marks: number;
}

const CGPACalc: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectRow[]>([
    { id: '1', name: '', marks: 0 }
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), name: '', marks: 0 }]);
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const updateSubject = (id: string, field: keyof SubjectRow, value: string | number) => {
    setSubjects(subjects.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const calculateGradeInfo = (marks: number) => {
    const grade = GRADES.find(g => marks >= g.range[0] && marks <= g.range[1]);
    return grade || { grade: 'F', point: 0 };
  };

  const calculateResults = () => {
    const gradedSubjects = subjects.filter(s => s.name && s.marks >= 0);
    if (gradedSubjects.length === 0) return null;

    let totalPoints = 0;
    gradedSubjects.forEach(s => {
      totalPoints += calculateGradeInfo(s.marks).point;
    });

    const cgpa = totalPoints / gradedSubjects.length;
    return {
      cgpa: cgpa.toFixed(2),
      percentage: (cgpa * 9.5).toFixed(2),
      details: gradedSubjects.map(s => ({
        ...s,
        ...calculateGradeInfo(s.marks)
      }))
    };
  };

  const results = calculateResults();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">CGPA Calculator</h2>
          <button
            onClick={addSubject}
            className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Subject
          </button>
        </div>

        <div className="space-y-4">
          {subjects.map((s, idx) => (
            <div key={s.id} className="flex flex-col md:flex-row gap-4 items-end animate-fadeIn">
              <div className="flex-grow w-full">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Subject Name</label>
                <input
                  list="subjects-list"
                  type="text"
                  value={s.name}
                  onChange={(e) => updateSubject(s.id, 'name', e.target.value)}
                  placeholder="e.g. Mathematics"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="w-full md:w-32">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Marks (0-100)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={s.marks || ''}
                  onChange={(e) => updateSubject(s.id, 'marks', parseInt(e.target.value) || 0)}
                  placeholder="Marks"
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="flex items-center space-x-2 pb-1">
                 <div className="w-16 text-center">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{calculateGradeInfo(s.marks).grade}</span>
                 </div>
                 <button
                   onClick={() => removeSubject(s.id)}
                   className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                 >
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                   </svg>
                 </button>
              </div>
            </div>
          ))}
        </div>

        <datalist id="subjects-list">
          {SUBJECT_OPTIONS.map(opt => <option key={opt} value={opt} />)}
        </datalist>

        {results && (
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-600 dark:bg-blue-700 p-6 rounded-2xl text-white shadow-lg shadow-blue-200 dark:shadow-none">
                <p className="text-blue-100 text-sm font-medium uppercase tracking-wider mb-1">Calculated CGPA</p>
                <h3 className="text-5xl font-black">{results.cgpa}</h3>
                <p className="mt-4 text-blue-100 text-xs">Equivalent to {results.percentage}% as per IPU norms</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-y-auto max-h-48 transition-colors">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Grade Summary</p>
                <div className="space-y-2">
                  {results.details.map((d, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300 truncate mr-2">{d.name || `Subject ${i+1}`}</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{d.grade} ({d.point})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start">
        <svg className="w-5 h-5 text-amber-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div className="text-xs text-amber-800 dark:text-amber-300">
          <p className="font-bold mb-1">Grading System Info:</p>
          <ul className="grid grid-cols-2 gap-x-4">
            <li>90-100: O (10)</li>
            <li>75-89: A+ (9)</li>
            <li>65-74: A (8)</li>
            <li>55-64: B+ (7)</li>
            <li>50-54: B (6)</li>
            <li>45-49: C (5)</li>
            <li>40-44: P (4)</li>
            <li>&lt; 40: F (0)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CGPACalc;
