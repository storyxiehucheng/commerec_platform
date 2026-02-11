import React from 'react';
import { Users, User, ChevronRight, Briefcase, Plus } from 'lucide-react';

const departments = [
  { id: 1, name: '秘书处', desc: '负责商会日常行政事务、文档管理及对外联络。', staff: 12, head: '张伟' },
  { id: 2, name: '会员发展部', desc: '负责会员吸纳、服务及会籍管理工作。', staff: 8, head: '李娜' },
  { id: 3, name: '党建办公室', desc: '负责商会及会员企业党组织建设工作。', staff: 5, head: '王建国' },
  { id: 4, name: '宣传信息部', desc: '负责新闻宣传、自媒体运营及品牌推广。', staff: 6, head: '赵敏' },
  { id: 5, name: '法律服务中心', desc: '为会员企业提供法律咨询及维权服务。', staff: 4, head: '刘律师' },
  { id: 6, name: '财务部', desc: '负责商会财务核算及资产管理。', staff: 3, head: '陈会计' },
];

export const OrganizationStructure: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">组织架构</h2>
          <p className="text-slate-500 mt-1 text-sm">商会内部部门设置及人员编制管理。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          新增部门
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((dept) => (
          <div key={dept.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full group">
             <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                   <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex -space-x-2">
                   {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-500">
                         <User className="w-4 h-4" />
                      </div>
                   ))}
                   <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-500">
                      +{dept.staff - 3}
                   </div>
                </div>
             </div>
             
             <h3 className="text-lg font-bold text-slate-800 mb-2">{dept.name}</h3>
             <p className="text-sm text-slate-500 mb-6 flex-1">{dept.desc}</p>
             
             <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs mr-2">
                      {dept.head[0]}
                   </div>
                   <div className="text-xs">
                      <div className="text-slate-400">负责人</div>
                      <div className="font-medium text-slate-700">{dept.head}</div>
                   </div>
                </div>
                <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                   <ChevronRight className="w-5 h-5" />
                </button>
             </div>
          </div>
        ))}
        
        {/* Add New Placeholder */}
        <button className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all min-h-[240px]">
           <Plus className="w-8 h-8 mb-3" />
           <span className="font-medium">创建新部门</span>
        </button>
      </div>
    </div>
  );
};