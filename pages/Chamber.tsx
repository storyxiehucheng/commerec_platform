import React from 'react';
import { Building2, Search, Filter, MoreHorizontal, User, Calendar } from 'lucide-react';

const chambers = [
  { id: 1, name: '两江新区汽车产业分会', president: '朱华荣', members: 156, established: '2017-03-12', status: 'active' },
  { id: 2, name: '数字经济产业联盟', president: '李某某', members: 230, established: '2018-05-20', status: 'active' },
  { id: 3, name: '青年企业家委员会', president: '王强', members: 89, established: '2019-09-10', status: 'active' },
  { id: 4, name: '智能制造行业分会', president: '张兴海', members: 112, established: '2017-11-05', status: 'active' },
  { id: 5, name: '金融服务专业委员会', president: '赵钱', members: 65, established: '2020-01-15', status: 'review' },
];

export const Chamber: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">商会管理</h2>
          <p className="text-slate-500 mt-1 text-sm">下属分会、专业委员会及团体会员管理。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Building2 className="w-4 h-4 mr-2" />
          成立新分会
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
           <div className="relative w-full sm:w-80">
             <input
                type="text"
                placeholder="搜索分会名称、负责人..."
                className="block w-full rounded-lg border border-slate-200 py-2 pl-10 pr-4 text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
           </div>
           <button className="flex items-center px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50">
             <Filter className="w-4 h-4 mr-2" />
             筛选状态
           </button>
        </div>

        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">分会名称</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">会长/负责人</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">会员规模</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">成立日期</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">状态</th>
              <th className="relative px-6 py-4"><span className="sr-only">操作</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 bg-white">
            {chambers.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">ID: {item.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   <div className="flex items-center text-sm text-slate-700">
                      <User className="w-4 h-4 mr-2 text-slate-400" />
                      {item.president}
                   </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                   <span className="font-semibold">{item.members}</span> 家企业
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                   <div className="flex items-center text-sm text-slate-500">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                      {item.established}
                   </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.status === 'active' ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                      正常运营
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                      筹备中
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};