import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Building2, Users, FileText, Activity as ActivityIcon, ArrowUpRight, ArrowDownRight, MoreHorizontal } from 'lucide-react';
import { mockNews } from '../services/mockData';

// Mock chart data
const industryData = [
  { name: '第一产业', value: 15 },
  { name: '第二产业', value: 45 },
  { name: '第三产业', value: 40 },
];

const activityData = [
  { name: '1月', visits: 400, events: 2 },
  { name: '2月', visits: 300, events: 4 },
  { name: '3月', visits: 550, events: 5 },
  { name: '4月', visits: 450, events: 3 },
  { name: '5月', visits: 700, events: 6 },
  { name: '6月', visits: 850, events: 8 },
];

const COLORS = ['#10b981', '#3b82f6', '#6366f1'];

const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  trend?: string;
  trendUp?: boolean;
}> = ({ title, value, icon: Icon, color, bgGradient, trend, trendUp = true }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-2">{title}</p>
        <h3 className="text-3xl font-bold text-slate-800 tracking-tight">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${bgGradient} text-white shadow-sm`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
    
    <div className="mt-4 flex items-center text-sm">
      <span className={`flex items-center font-semibold px-2 py-0.5 rounded-full text-xs ${trendUp ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {trendUp ? <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> : <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
        {trend}
      </span>
      <span className="text-slate-400 ml-2 text-xs">较上月</span>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">工作台概览</h2>
          <p className="text-slate-500 mt-1 text-sm">欢迎回来，以下是今日的核心数据指标。</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 shadow-sm hover:border-blue-400 transition-colors">
            <option>近 7 天</option>
            <option>近 30 天</option>
            <option>本季度</option>
          </select>
          <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 shadow-lg shadow-blue-500/30 transition-all active:scale-95">
            下载报表
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="入驻企业总数" 
          value="1,248" 
          icon={Building2} 
          color="text-white"
          bgGradient="bg-gradient-to-br from-blue-500 to-blue-600"
          trend="12.5%"
          trendUp={true}
        />
        <StatCard 
          title="注册会员" 
          value="3,502" 
          icon={Users} 
          color="text-white"
          bgGradient="bg-gradient-to-br from-indigo-500 to-indigo-600"
          trend="5.2%"
          trendUp={true}
        />
        <StatCard 
          title="信息发布" 
          value="486" 
          icon={FileText} 
          color="text-white"
          bgGradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          trend="2.1%"
          trendUp={true}
        />
        <StatCard 
          title="待办事项" 
          value="12" 
          icon={ActivityIcon} 
          color="text-white" 
          bgGradient="bg-gradient-to-br from-amber-500 to-amber-600"
          trend="3"
          trendUp={false}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-800">平台活跃度趋势</h3>
              <p className="text-xs text-slate-500 mt-1">访问量与活动参与度数据统计</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 p-2 hover:bg-slate-50 rounded-full transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                  dy={10} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)' }}
                  itemStyle={{ color: '#1e293b', fontWeight: 600 }}
                  cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="visits" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorVisits)" 
                  activeDot={{ r: 6, fill: '#2563eb', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-1">产业结构分布</h3>
          <p className="text-xs text-slate-500 mb-6">入驻企业产业类别占比</p>
          
          <div className="flex-1 min-h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={industryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  cornerRadius={6}
                >
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} strokeWidth={0} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-bold text-slate-800">100%</span>
              <span className="text-xs text-slate-400">总分布</span>
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            {industryData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm group cursor-default">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full mr-3 transition-transform group-hover:scale-125" style={{ backgroundColor: COLORS[index] }}></span>
                  <span className="text-slate-600 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-slate-800 mr-2">{item.value}%</span>
                  <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${item.value}%`, backgroundColor: COLORS[index] }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-800">最新动态</h3>
            <p className="text-xs text-slate-500 mt-0.5">实时更新商会及企业相关资讯</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium hover:underline">查看全部</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 text-slate-500 text-xs uppercase font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4 border-b border-slate-100 first:rounded-tl-lg">资讯标题</th>
                <th className="px-6 py-4 border-b border-slate-100">分类</th>
                <th className="px-6 py-4 border-b border-slate-100">发布日期</th>
                <th className="px-6 py-4 border-b border-slate-100 text-right last:rounded-tr-lg">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {mockNews.slice(0, 5).map((news) => (
                <tr key={news.id} className="hover:bg-blue-50/30 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 max-w-md">
                    <div className="truncate group-hover:text-blue-700 transition-colors">{news.title}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      {news.category === 'headline' ? '头条' : news.category === 'party' ? '党建' : '商机'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-mono">{news.publishAt}</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                      news.status === 1 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${news.status === 1 ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      {news.status === 1 ? '已发布' : '草稿箱'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};