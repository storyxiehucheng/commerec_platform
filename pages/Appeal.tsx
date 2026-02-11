import React, { useState } from 'react';
import { MessageSquare, Filter, Clock, CheckCircle, XCircle } from 'lucide-react';

const appeals = [
  { id: 101, subject: '关于工业园区停车难问题的反映', sender: '重庆某某机械制造有限公司', date: '2025-02-14', status: 'pending', desc: '园区内部停车位严重不足，建议协调周边空地临时停车。' },
  { id: 102, subject: '咨询高新技术企业申报流程', sender: '某某科技创新公司', date: '2025-02-12', status: 'processing', desc: '希望商会能组织相关培训或提供申报指导。' },
  { id: 103, subject: '关于减免中小微企业房租的建议', sender: '个体工商户代表', date: '2025-02-05', status: 'resolved', desc: '建议参照市级政策，对承租国有资产类经营用房的给予减免。' },
];

export const Appeal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">意见诉求</h2>
          <p className="text-slate-500 mt-1 text-sm">倾听会员心声，解决企业困难。</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm min-h-[500px] flex flex-col">
         <div className="border-b border-slate-200 px-6">
            <nav className="-mb-px flex space-x-6">
               <button 
                  onClick={() => setActiveTab('pending')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'pending' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
               >
                  待处理 (1)
               </button>
               <button 
                  onClick={() => setActiveTab('processing')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'processing' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
               >
                  处理中 (1)
               </button>
               <button 
                  onClick={() => setActiveTab('resolved')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'resolved' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
               >
                  已办结 (1)
               </button>
            </nav>
         </div>

         <div className="p-6 space-y-4">
            {appeals.filter(a => activeTab === 'all' || a.status === activeTab).map(appeal => (
               <div key={appeal.id} className="border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                     <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                           appeal.status === 'pending' ? 'bg-red-50 text-red-700 border-red-100' :
                           appeal.status === 'processing' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                           'bg-emerald-50 text-emerald-700 border-emerald-100'
                        }`}>
                           {appeal.status === 'pending' ? '待处理' : appeal.status === 'processing' ? '处理中' : '已办结'}
                        </span>
                        <span className="text-xs text-slate-400">编号: #{appeal.id}</span>
                     </div>
                     <span className="text-xs text-slate-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {appeal.date}
                     </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{appeal.subject}</h3>
                  <p className="text-sm text-slate-600 mb-4 bg-slate-50 p-3 rounded-lg">
                     {appeal.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                     <div className="text-sm font-medium text-slate-700">
                        提交人: {appeal.sender}
                     </div>
                     <div className="flex gap-2">
                        {appeal.status !== 'resolved' && (
                           <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                              {appeal.status === 'pending' ? '受理' : '反馈进度'}
                           </button>
                        )}
                        <button className="px-4 py-2 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                           查看详情
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};