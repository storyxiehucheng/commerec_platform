import React, { useState } from 'react';
import { Settings, Shield, Bell, Users, Save } from 'lucide-react';

export const SystemSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">系统设置</h2>
        <p className="text-slate-500 mt-1 text-sm">配置平台的基础参数、安全策略及通知选项。</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row min-h-[600px]">
         {/* Sidebar Tabs */}
         <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-slate-100 p-2 space-y-1">
            <button 
               onClick={() => setActiveTab('general')}
               className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'general' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
               <Settings className="w-4 h-4 mr-3" />
               通用设置
            </button>
            <button 
               onClick={() => setActiveTab('security')}
               className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'security' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
               <Shield className="w-4 h-4 mr-3" />
               安全设置
            </button>
            <button 
               onClick={() => setActiveTab('notifications')}
               className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
               <Bell className="w-4 h-4 mr-3" />
               通知管理
            </button>
            <button 
               onClick={() => setActiveTab('users')}
               className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${activeTab === 'users' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
            >
               <Users className="w-4 h-4 mr-3" />
               管理员权限
            </button>
         </div>

         {/* Content Area */}
         <div className="flex-1 p-8">
            {activeTab === 'general' && (
               <div className="space-y-6 max-w-xl">
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6">通用参数</h3>
                  
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">平台名称</label>
                     <input type="text" defaultValue="重庆两江新区总商会管理平台" className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </div>
                  
                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">备案号</label>
                     <input type="text" defaultValue="渝ICP备16000000号" className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-700 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                  </div>
                  
                  <div className="pt-4">
                     <button className="flex items-center px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm transition-colors">
                        <Save className="w-4 h-4 mr-2" /> 保存更改
                     </button>
                  </div>
               </div>
            )}
            
            {activeTab !== 'general' && (
               <div className="flex items-center justify-center h-full text-slate-400 flex-col">
                  <Settings className="w-12 h-12 mb-4 opacity-20" />
                  <p>该设置模块暂未开放演示</p>
               </div>
            )}
         </div>
      </div>
    </div>
  );
};