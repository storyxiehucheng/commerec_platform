import React from 'react';
import { Megaphone, Search, Bell, AlertCircle, FileText } from 'lucide-react';

const notices = [
  { id: 1, title: '关于缴纳2025年度会费的通知', target: '全体会员', priority: 'high', date: '2025-02-15' },
  { id: 2, title: '2025年春节放假安排', target: '全体会员', priority: 'medium', date: '2025-01-20' },
  { id: 3, title: '关于开展会员企业信用等级评价工作的通知', target: '企业会员', priority: 'normal', date: '2025-02-10' },
  { id: 4, title: '关于召开第三届理事会第二次会议的预通知', target: '理事会成员', priority: 'high', date: '2025-02-01' },
  { id: 5, title: '商会秘书处内部考勤管理制度更新', target: '秘书处工作人员', priority: 'normal', date: '2025-01-15' },
];

export const Notice: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">通知公告</h2>
          <p className="text-slate-500 mt-1 text-sm">发布内部通知及面向会员的重要公告。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Megaphone className="w-4 h-4 mr-2" />
          发布通知
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {notices.map((notice) => (
            <div key={notice.id} className="p-5 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer">
               <div className="flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-lg ${
                    notice.priority === 'high' ? 'bg-red-50 text-red-600' :
                    notice.priority === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                  }`}>
                     <Bell className="w-5 h-5" />
                  </div>
                  <div>
                     <h3 className="text-base font-semibold text-slate-800 group-hover:text-blue-700 transition-colors mb-1">{notice.title}</h3>
                     <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center bg-slate-100 px-2 py-0.5 rounded text-xs">
                           <FileText className="w-3 h-3 mr-1" />
                           {notice.target}
                        </span>
                        <span>{notice.date}</span>
                     </div>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 pl-14 sm:pl-0">
                  {notice.priority === 'high' && (
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        紧急
                     </span>
                  )}
                  <button className="text-sm font-medium text-slate-400 hover:text-blue-600 border border-slate-200 hover:border-blue-200 px-3 py-1.5 rounded-lg transition-colors bg-white">
                     查看详情
                  </button>
               </div>
            </div>
          ))}
        </div>
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-slate-100 text-center">
           <button className="text-sm text-slate-500 hover:text-blue-600 font-medium">加载更多历史通知</button>
        </div>
      </div>
    </div>
  );
};