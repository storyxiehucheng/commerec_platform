import React from 'react';
import { Sidebar } from './Sidebar';
import { Bell, Search, ChevronDown, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-[#F8FAFC]"> {/* Slate-50 background */}
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 z-10 sticky top-0 border-b border-slate-200/60">
          <div className="flex items-center">
             {/* Global Search */}
             <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                </div>
                <input
                  name="search"
                  id="search"
                  className="block w-80 bg-slate-100/50 border border-transparent hover:border-slate-200 rounded-full py-2 pl-10 pr-4 text-sm text-slate-700 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all placeholder-slate-400"
                  placeholder="搜索全局资源..."
                />
             </div>
          </div>

          <div className="flex items-center space-x-5">
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            
            <div className="h-6 w-px bg-slate-200"></div>
            
            <div className="flex items-center gap-3 cursor-pointer group">
               <div className="flex flex-col items-end">
                 <span className="text-sm font-semibold text-slate-700">管理员</span>
                 <span className="text-xs text-slate-500">超级权限</span>
               </div>
               <div className="h-9 w-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm ring-2 ring-transparent group-hover:ring-blue-200">
                  A
               </div>
               <button className="text-slate-400 hover:text-red-500 transition-colors ml-1 p-1 hover:bg-red-50 rounded" title="退出登录">
                 <LogOut className="w-4 h-4" />
               </button>
            </div>
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};