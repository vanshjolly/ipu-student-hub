
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  setActivePage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  const tools = [
    {
      id: Page.Attendance,
      title: 'Attendance Calculator',
      desc: 'Check if you are above the 75% mark and see how many classes you need.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
    },
    {
      id: Page.CGPA,
      title: 'CGPA Calculator',
      desc: 'Calculate your CGPA using IPU specific grading logic and convert to percentage.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      id: Page.PYQs,
      title: 'Previous Papers',
      desc: 'Access semester-wise previous year question papers for all subjects.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
    },
    {
      id: Page.Notes,
      title: 'Course Notes',
      desc: 'Get high-quality study notes organized by subject and semester.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
    }
  ];

  return (
    <div className="space-y-12">
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          Your All-in-One <span className="text-blue-600 dark:text-blue-500">IPU Dashboard</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate utility toolkit for students of GGSIPU. Manage your attendance, calculate grades, and access resources in seconds.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
           <button 
             onClick={() => setActivePage(Page.Attendance)}
             className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-700 hover:-translate-y-1 transition-all"
           >
             Start Calculating
           </button>
           <button 
             onClick={() => setActivePage(Page.Notes)}
             className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
           >
             Explore Resources
           </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <div 
            key={tool.id}
            onClick={() => setActivePage(tool.id)}
            className="group bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl hover:shadow-blue-50 dark:hover:shadow-blue-900/10 transition-all cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {tool.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{tool.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm">
              Try Tool 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-slate-900 dark:bg-blue-900/20 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden border border-slate-800 dark:border-blue-800/50">
        <div className="relative z-10 md:w-2/3">
           <h2 className="text-3xl font-bold mb-4">Upcoming: Exams & Deadlines</h2>
           <p className="text-slate-400 dark:text-slate-300 mb-8">Never miss a deadline again. Check the semester planner for internal marks dates and end-term exams.</p>
           <button 
             onClick={() => setActivePage(Page.Planner)}
             className="px-6 py-3 bg-white dark:bg-blue-500 text-slate-900 dark:text-white rounded-xl font-bold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 transition-all"
           >
             View Planner
           </button>
        </div>
        <div className="absolute top-0 right-0 h-full opacity-10 hidden lg:block pointer-events-none">
           <svg className="h-full" viewBox="0 0 200 200" fill="none">
             <path d="M0 0h200v200H0z" fill="currentColor"/>
           </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
