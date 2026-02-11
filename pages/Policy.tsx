import React from 'react';
import { FileText, Download, Search, Tag, ExternalLink } from 'lucide-react';

const policies = [
  { id: 1, title: '两江新区支持市场主体高质量发展三十条政策（2025版）', dept: '两江新区管委会', date: '2025-01-01', tags: ['综合', '高质量发展'], type: 'PDF' },
  { id: 2, title: '关于申报2024年度工业互联网创新发展专项资金的通知', dept: '产业促进局', date: '2024-12-15', tags: ['数字化', '专项资金'], type: 'DOC' },
  { id: 3, title: '两江新区科技型中小企业贷款贴息实施细则', dept: '科技创新局', date: '2024-11-20', tags: ['金融', '中小企业'], type: 'PDF' },
  { id: 4, title: '优化营商环境条例解读', dept: '政务服务中心', date: '2024-10-10', tags: ['营商环境'], type: 'PDF' },
  { id: 5, title: '关于进一步促进服务业恢复发展的若干措施', dept: '现代服务业局', date: '2024-09-05', tags: ['服务业', '纾困'], type: 'DOC' },
];

export const Policy: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">惠企政策库</h2>
          <p className="text-slate-500 mt-1 text-sm">汇集国家、市级及新区最新惠企政策文件。</p>
        </div>
        <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="搜索政策关键词..." 
              className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            />
            <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {/* Sidebar Filter */}
         <div className="md:col-span-1 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
               <h3 className="font-bold text-slate-800 mb-3 flex items-center">
                  <Tag className="w-4 h-4 mr-2" />
                  政策分类
               </h3>
               <div className="space-y-2">
                  {['全部政策', '财税金融', '科技创新', '人才引育', '土地规划', '市场监管', '其他'].map((cat, i) => (
                     <button key={cat} className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i === 0 ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                        {cat}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         {/* Document List */}
         <div className="md:col-span-3 space-y-4">
            {policies.map(policy => (
               <div key={policy.id} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow group flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs ${
                     policy.type === 'PDF' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-blue-50 text-blue-600 border border-blue-100'
                  }`}>
                     {policy.type}
                  </div>
                  <div className="flex-1">
                     <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors cursor-pointer mb-2">
                        {policy.title}
                     </h3>
                     <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                        <span className="bg-slate-100 px-2 py-1 rounded">{policy.dept}</span>
                        <span>发布于 {policy.date}</span>
                     </div>
                     <div className="flex gap-2">
                        {policy.tags.map(tag => (
                           <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-slate-200 text-slate-500">#{tag}</span>
                        ))}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <button className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors" title="下载">
                        <Download className="w-5 h-5" />
                     </button>
                     <button className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors" title="查看">
                        <ExternalLink className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};