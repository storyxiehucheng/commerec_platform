import React from 'react';
import { Building, MapPin, Phone, Mail, Globe, Save, Award, Users, Calendar } from 'lucide-react';

export const OrganizationOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">组织概况</h2>
          <p className="text-slate-500 mt-1 text-sm">商会基础档案信息管理与维护。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Save className="w-4 h-4 mr-2" />
          保存更改
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Basic Info Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              <Building className="w-5 h-5 mr-2 text-blue-600" />
              基本信息
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">商会名称</label>
                <input 
                  type="text" 
                  defaultValue="重庆两江新区总商会"
                  className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">统一社会信用代码</label>
                  <input 
                    type="text" 
                    defaultValue="51500000MJXXXXXX"
                    className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">成立日期</label>
                  <input 
                    type="date" 
                    defaultValue="2016-06-18"
                    className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">商会简介</label>
                <textarea 
                  rows={6}
                  className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50 resize-none"
                  defaultValue="重庆两江新区总商会是由两江新区管委会主管，由新区内非公有制企业和非公有制经济人士自愿组成的联合性、非营利性社会团体。商会致力于搭建政企沟通桥梁，服务会员企业发展，推动区域经济繁荣。"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              联系方式
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">办公地址</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-4 w-4 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    defaultValue="重庆市两江新区金山大道1号商会大厦"
                    className="block w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
               </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">联系电话</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    defaultValue="023-67891234"
                    className="block w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
               </div>
               <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">电子邮箱</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <input 
                    type="email" 
                    defaultValue="contact@liangjiang.org.cn"
                    className="block w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
               </div>
               <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">官方网站</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Globe className="h-4 w-4 text-slate-400" />
                  </div>
                  <input 
                    type="text" 
                    defaultValue="https://www.liangjiang.org.cn"
                    className="block w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm bg-slate-50/50"
                  />
                </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Logo & Stats */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center">
             <div className="w-32 h-32 rounded-full bg-slate-100 mb-4 flex items-center justify-center border-4 border-white shadow-lg shadow-slate-200 overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-white text-xs font-medium">更换 Logo</span>
                </div>
                <Award className="w-16 h-16 text-blue-600" />
             </div>
             <h3 className="text-xl font-bold text-slate-800">两江新区总商会</h3>
             <p className="text-sm text-slate-500 mt-1">创建于 2016 年</p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
             <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">关键指标</h4>
             <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                   <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                         <Users className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium">会员总数</div>
                         <div className="text-lg font-bold text-slate-800">3,502</div>
                      </div>
                   </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl">
                   <div className="flex items-center">
                      <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 mr-3">
                         <Building className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium">分会数量</div>
                         <div className="text-lg font-bold text-slate-800">12</div>
                      </div>
                   </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-xl">
                   <div className="flex items-center">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600 mr-3">
                         <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium">成立年限</div>
                         <div className="text-lg font-bold text-slate-800">9 年</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};