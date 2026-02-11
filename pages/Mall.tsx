import React from 'react';
import { ShoppingBag, Star, MoreHorizontal, Briefcase, Plus } from 'lucide-react';

const services = [
  { id: 1, title: '企业财税代理服务', provider: '金算盘财务咨询', price: '¥2000/年起', rating: 4.8, category: '财税金融' },
  { id: 2, title: '常年法律顾问服务', provider: '中豪律师事务所', price: '¥5000/年起', rating: 4.9, category: '法律服务' },
  { id: 3, title: '人力资源招聘托管', provider: '两江人才网', price: '面议', rating: 4.6, category: '人力资源' },
  { id: 4, title: '高企申报全程辅导', provider: '科创服务中心', price: '¥10000/次', rating: 4.7, category: '科技咨询' },
  { id: 5, title: '办公设备租赁', provider: '易租赁', price: '¥100/月', rating: 4.5, category: '行政办公' },
];

export const Mall: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">服务商城</h2>
          <p className="text-slate-500 mt-1 text-sm">优选第三方专业服务，助力企业降本增效。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          上架服务
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
             <div className="h-32 bg-slate-100 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                <Briefcase className="w-10 h-10 text-slate-300 group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded text-slate-600 border border-slate-100">
                   {service.category}
                </span>
             </div>
             <div className="p-5">
                <h3 className="text-base font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{service.provider}</p>
                
                <div className="flex items-center justify-between mb-4">
                   <span className="text-red-600 font-bold text-sm">{service.price}</span>
                   <div className="flex items-center text-xs text-amber-500 font-medium">
                      <Star className="w-3 h-3 fill-current mr-1" />
                      {service.rating}
                   </div>
                </div>
                
                <button className="w-full py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                   查看详情
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};