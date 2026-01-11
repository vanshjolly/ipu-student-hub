
import React, { useState } from 'react';
import { Resource } from '../types';

interface ResourceSectionProps {
  type: 'pyq' | 'note';
  items: Resource[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ type, items }) => {
  const [semesterFilter, setSemesterFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = items.filter(item => {
    const matchesType = item.type === type;
    const matchesSemester = semesterFilter === 'all' || item.semester.toString() === semesterFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSemester && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{type === 'pyq' ? 'Previous Year Questions' : 'Course Notes'}</h2>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search subjects..."
              className="pl-10 pr-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-64 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <select
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-all"
          >
            <option value="all">All Semesters</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num.toString()}>Semester {num}</option>
            ))}
          </select>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-md dark:hover:border-blue-500/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${type === 'pyq' ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400' : 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {type === 'pyq' ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    )}
                  </svg>
                </div>
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded">Sem {item.semester}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{item.subject}</p>
              
              <div className="flex space-x-3 mt-auto">
                <button 
                  className="flex-1 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all text-center"
                  onClick={() => alert(`Preview for ${item.title} (Dummy)`)}
                >
                  Preview
                </button>
                <button 
                  className="px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  onClick={() => alert(`Downloading ${item.title} (Dummy)`)}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-20 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800 text-center">
          <div className="mx-auto bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-slate-300 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">No resources found</h3>
          <p className="text-slate-500 dark:text-slate-400">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
};

export default ResourceSection;
