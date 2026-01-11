
import React, { useState, useEffect } from 'react';

const AttendanceCalc: React.FC = () => {
  const [total, setTotal] = useState<string>('');
  const [attended, setAttended] = useState<string>('');
  const [result, setResult] = useState<{
    percentage: number;
    status: 'green' | 'red' | null;
    needed: number;
  } | null>(null);

  useEffect(() => {
    const t = parseInt(total);
    const a = parseInt(attended);

    if (isNaN(t) || isNaN(a) || t === 0 || a > t) {
      setResult(null);
      return;
    }

    const percentage = (a / t) * 100;
    const status = percentage >= 75 ? 'green' : 'red';
    
    let needed = Math.ceil(3 * t - 4 * a);
    needed = needed > 0 ? needed : 0;

    setResult({ percentage, status, needed });
  }, [total, attended]);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">Attendance Calculator</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Total Classes Conducted</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            placeholder="e.g. 50"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Classes Attended</label>
          <input
            type="number"
            value={attended}
            onChange={(e) => setAttended(e.target.value)}
            placeholder="e.g. 40"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        {result && (
          <div className={`p-6 rounded-2xl ${result.status === 'green' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50' : 'bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-400 border border-rose-100 dark:border-rose-800/50'} transition-all duration-300`}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Your Attendance</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${result.status === 'green' ? 'bg-emerald-200 dark:bg-emerald-800/50' : 'bg-rose-200 dark:bg-rose-800/50'}`}>
                {result.percentage.toFixed(1)}%
              </span>
            </div>
            
            <p className="text-sm opacity-90">
              {result.status === 'green' 
                ? "Excellent! You are safe. You've cleared the 75% threshold." 
                : `You need to attend ${result.needed} more consecutive classes to reach 75%.`}
            </p>

            <div className="mt-4 w-full bg-white/50 dark:bg-slate-900/50 rounded-full h-2.5 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${result.status === 'green' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                style={{ width: `${Math.min(result.percentage, 100)}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttendanceCalc;
