import React from 'react';
import { Folder, Plus, Edit, Trash2 } from 'lucide-react';

const categories = [
  { id: 1, name: '财税金融', count: 12, status: 'active' },
  { id: 2, name: '法律服务', count: 8, status: 'active' },
  { id: 3, name: '人力资源', count: 15, status: 'active' },
  { id: 4, name: '科技咨询', count: 6, status: 'active' },
  { id: 5, name: '行政办公', count: 20, status: 'active' },
  { id: 6, name: '营销推广', count: 5, status: 'disabled' },
];

export const MallCategories: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">商城分类</h2>
          <p className="text-slate-500 mt-1 text-sm">管理服务商城的分类标签。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          新增分类
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden max-w-3xl">
         <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
               <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">分类名称</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">关联服务数</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">状态</th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase">操作</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
               {categories.map((cat) => (
                  <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                     <td className="px-6 py-4">
                        <div className="flex items-center">
                           <Folder className="w-4 h-4 text-blue-500 mr-3" />
                           <span className="font-medium text-slate-700">{cat.name}</span>
                        </div>
                     </td>
                     <td className="px-6 py-4 text-sm text-slate-600">{cat.count}</td>
                     <td className="px-6 py-4">
                        {cat.status === 'active' ? (
                           <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full font-medium">已启用</span>
                        ) : (
                           <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">已停用</span>
                        )}
                     </td>
                     <td className="px-6 py-4 text-right space-x-2">
                        <button className="text-slate-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                        <button className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
    </div>
  );
};