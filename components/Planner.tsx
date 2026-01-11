
import React from 'react';
import { SEMESTER_PLAN } from '../constants';

const Planner: React.FC = () => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Exam': return 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-400 dark:border-rose-800/50';
      case 'Internal': return 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800/50';
      case 'Deadline': return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800/50';
      default: return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Semester Planner</h2>
        <div className="flex space-x-2">
           <span className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400">2024 Session</span>
        </div>
      </div>

      <div className="space-y-4">
        {SEMESTER_PLAN.map((item) => (
          <div 
            key={item.id} 
            className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between hover:shadow-sm transition-all"
          >
            <div className="flex items-center space-x-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl text-center min-w-[70px]">
                <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                  {new Date(item.date).toLocaleString('default', { month: 'short' })}
                </span>
                <span className="block text-2xl font-black text-slate-800 dark:text-slate-100">
                  {new Date(item.date).getDate()}
                </span>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{item.title}</h3>
                <span className={`inline-block mt-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center text-slate-400 dark:text-slate-500">
               <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <span className="text-xs font-medium">Coming soon</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-8 border border-blue-100 dark:border-blue-900/30">
        <h4 className="font-bold text-blue-900 dark:text-blue-300 mb-2">Academic Calendar Tip</h4>
        <p className="text-sm text-blue-800 dark:text-blue-400 leading-relaxed">
          The dates above are tentative and based on the official GGSIPU notification. Always double-check with your respective college notice board for the latest updates on internals and practical dates.
        </p>
      </div>
    </div>
  );
};

export default Planner;
