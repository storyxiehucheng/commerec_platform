import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Newspaper, 
  Building2, 
  Users, 
  Megaphone, 
  FileText, 
  Activity, 
  ArrowLeftRight, 
  MessageSquare, 
  ShoppingBag, 
  Settings,
  ChevronDown,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to?: string;
  active?: boolean;
  children?: { label: string; to: string }[];
  isOpen: boolean;
  onToggle: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to, active, children, isOpen, onToggle }) => {
  const hasChildren = children && children.length > 0;

  return (
    <div className="mb-1 px-3">
      {to && !hasChildren ? (
        <Link
          to={to}
          className={`flex items-center w-full px-3 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group relative overflow-hidden ${
            active 
              ? 'bg-blue-50 text-blue-700' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-r-full"></div>}
          <Icon className={`w-5 h-5 mr-3 transition-colors ${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
          <span className="relative z-10">{label}</span>
        </Link>
      ) : (
        <button
          onClick={onToggle}
          className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg group ${
             isOpen ? 'bg-slate-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
          }`}
        >
          <div className="flex items-center">
            <Icon className={`w-5 h-5 mr-3 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
            <span>{label}</span>
          </div>
          {hasChildren && (
            isOpen ? <ChevronDown className="w-4 h-4 text-blue-500" /> : <ChevronRight className="w-4 h-4 text-slate-400" />
          )}
        </button>
      )}

      {hasChildren && isOpen && (
        <div className="mt-1 space-y-0.5">
          {children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              className={`flex items-center w-full pl-11 pr-3 py-2 text-sm transition-colors rounded-lg ${
                window.location.hash.includes(child.to) 
                  ? 'text-blue-600 font-medium bg-blue-50/50' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className={`w-1.5 h-1.5 rounded-full mr-2.5 ${window.location.hash.includes(child.to) ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    org: true,
    mall: false
  });

  const toggleMenu = (key: string) => {
    setOpenMenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white flex flex-col h-screen border-r border-slate-200/60 shadow-[4px_0_24px_-4px_rgba(0,0,0,0.02)]">
      {/* Brand / Logo Area */}
      <div className="flex items-center h-16 px-6 bg-white border-b border-slate-100 shrink-0">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-500/20">
          <ShieldCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-800 tracking-tight leading-none">两江总商会</h1>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">L.J. Chamber</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 space-y-1 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        <div className="px-6 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest scale-90 origin-left">
          运营中心
        </div>
        
        <SidebarItem 
          icon={LayoutDashboard} 
          label="工作台" 
          to="/" 
          active={isActive('/')} 
          isOpen={false} 
          onToggle={() => {}} 
        />
        
        <SidebarItem 
          icon={Newspaper} 
          label="新闻管理" 
          to="/news" 
          active={isActive('/news')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={Users} 
          label="组织管理" 
          isOpen={openMenus['org']} 
          onToggle={() => toggleMenu('org')}
          children={[
            { label: '组织概况', to: '/organization/overview' },
            { label: '组织架构', to: '/organization/structure' }
          ]}
        />

        <SidebarItem 
          icon={Building2} 
          label="商会管理" 
          to="/chamber" 
          active={isActive('/chamber')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={Building2} 
          label="企业管理" 
          to="/enterprise" 
          active={isActive('/enterprise')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <div className="px-6 mt-8 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest scale-90 origin-left">
          会员服务
        </div>

        <SidebarItem 
          icon={Megaphone} 
          label="通知公告" 
          to="/notice" 
          active={isActive('/notice')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={FileText} 
          label="惠企政策" 
          to="/policy" 
          active={isActive('/policy')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={Activity} 
          label="会务活动" 
          to="/activity" 
          active={isActive('/activity')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={ArrowLeftRight} 
          label="供需对接" 
          to="/supply-demand" 
          active={isActive('/supply-demand')} 
          isOpen={false} 
          onToggle={() => {}} 
        />

        <SidebarItem 
          icon={MessageSquare} 
          label="意见诉求" 
          to="/appeal" 
          active={isActive('/appeal')} 
          isOpen={false} 
          onToggle={() => {}} 
        />
        
        <SidebarItem 
          icon={ShoppingBag} 
          label="服务商城" 
          isOpen={openMenus['mall']}
          onToggle={() => toggleMenu('mall')}
          children={[
            { label: '商城概览', to: '/mall' },
            { label: '分类管理', to: '/mall/categories' }
          ]}
        />

        <div className="px-6 mt-8 mb-2 text-xs font-bold text-slate-400 uppercase tracking-widest scale-90 origin-left">
          系统配置
        </div>

        <SidebarItem 
          icon={Settings} 
          label="系统设置" 
          to="/system" 
          active={isActive('/system')} 
          isOpen={false} 
          onToggle={() => {}} 
        />
      </nav>

      {/* User Mini Profile */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex items-center p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-100">
          <div className="relative">
            <img 
              src="https://picsum.photos/40/40" 
              alt="Admin" 
              className="w-9 h-9 rounded-full border border-slate-200 group-hover:border-blue-200 transition-colors"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full shadow-sm"></span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">系统管理员</p>
            <p className="text-xs text-slate-400">admin@liangjiang.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};