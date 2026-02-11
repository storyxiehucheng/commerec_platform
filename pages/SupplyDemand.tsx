import React, { useState } from 'react';
import { ArrowLeftRight, Search, Calendar, User, Briefcase, Box } from 'lucide-react';
import { mockSupplyDemand } from '../services/mockData';
import { SupplyDemandType } from '../types';

export const SupplyDemandPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'supply' | 'demand'>('all');

  const filteredData = mockSupplyDemand.filter(item => {
    if (activeTab === 'all') return true;
    return item.type === (activeTab === 'supply' ? SupplyDemandType.Supply : SupplyDemandType.Demand);
  });

  return (
    <div className="space-y-6">
       <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">供需对接大厅</h2>
          <p className="text-slate-500 mt-1 text-sm">高效连接企业资源，促进会员间业务合作。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 shadow-md shadow-indigo-500/20 transition-all">
          <ArrowLeftRight className="w-4 h-4 mr-2" />
          发布供需
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[600px] flex flex-col">
        {/* Tabs Header */}
        <div className="border-b border-slate-200 px-6 pt-2">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'all', label: '全部信息' },
              { id: 'supply', label: '产品/服务供应' },
              { id: 'demand', label: '采购/合作需求' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Filter Bar (Optional addition for future) */}
        <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
           <div className="text-sm text-slate-500">
             共找到 <span className="font-semibold text-slate-900">{filteredData.length}</span> 条匹配信息
           </div>
           <div className="relative">
              <input 
                type="text" 
                placeholder="搜索关键词..." 
                className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2" />
           </div>
        </div>

        {/* Content List */}
        <div className="p-6 bg-slate-50/30 flex-1">
           <div className="space-y-4">
             {filteredData.map(item => (
               <div key={item.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-5">
                     <div className={`mt-1 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm ${
                       item.type === SupplyDemandType.Supply 
                         ? 'bg-blue-50 border-blue-100 text-blue-600' 
                         : 'bg-amber-50 border-amber-100 text-amber-600'
                     }`}>
                       {item.type === SupplyDemandType.Supply ? <Box className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                     </div>
                     <div>
                       <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                            item.type === SupplyDemandType.Supply 
                              ? 'bg-blue-100 text-blue-700 border-blue-200' 
                              : 'bg-amber-100 text-amber-700 border-amber-200'
                          }`}>
                            {item.type === SupplyDemandType.Supply ? '供应' : '需求'}
                          </span>
                          <span className="text-xs text-slate-400">ID: {item.id}</span>
                       </div>
                       <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-700 transition-colors mb-2">
                         {item.title}
                       </h3>
                       <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                          <span className="flex items-center bg-slate-100 px-2 py-1 rounded">
                            <User className="w-3 h-3 mr-1.5 text-slate-400" /> {item.publisher}
                          </span>
                          <span className="flex items-center bg-slate-100 px-2 py-1 rounded">
                            <Calendar className="w-3 h-3 mr-1.5 text-slate-400" /> {item.date}
                          </span>
                       </div>
                     </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6 flex items-center justify-between md:justify-end gap-4 min-w-[200px] border-t md:border-t-0 border-slate-100 pt-4 md:pt-0">
                     <div className="flex flex-col items-start md:items-end">
                        <span className="text-xs text-slate-400 mb-1">状态</span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.status === 'active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                          item.status === 'expired' ? 'bg-slate-100 text-slate-600 border border-slate-200' :
                          'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${item.status === 'active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                          {item.status === 'active' ? '对接中' : item.status === 'expired' ? '已过期' : '已关闭'}
                        </span>
                     </div>
                     <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors">
                       查看详情
                     </button>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};