import React from 'react';
import { Download, Upload, Filter, Search, Building, Phone, MoreVertical, Briefcase, TrendingUp } from 'lucide-react';
import { mockEnterprises } from '../services/mockData';
import { EnterpriseCategory, Status } from '../types';

export const Enterprise: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">企业名录</h2>
          <p className="text-slate-500 mt-1 text-sm">全区入驻企业档案管理与查询。</p>
        </div>
        <div className="flex gap-3">
           <button className="inline-flex items-center px-4 py-2 border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            <Upload className="mr-2 h-4 w-4 text-slate-500" />
            导入
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-slate-200 rounded-lg shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            <Download className="mr-2 h-4 w-4 text-slate-500" />
            导出
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-md shadow-blue-500/20 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            <Building className="mr-2 h-4 w-4" />
            新增企业
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-6 text-white shadow-lg shadow-indigo-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Briefcase className="w-24 h-24" />
          </div>
          <div className="relative z-10">
             <div className="text-indigo-100 text-sm font-medium mb-1">重点监管企业</div>
             <div className="text-4xl font-bold tracking-tight">845</div>
             <div className="mt-4 flex items-center text-xs">
                <span className="bg-white/20 px-2 py-0.5 rounded text-white backdrop-blur-sm">占比 65%</span>
                <span className="ml-2 text-indigo-200">↑ 环比增长 12%</span>
             </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
           <div className="flex justify-between items-start">
             <div>
                <div className="text-slate-500 text-sm font-medium mb-1">本月新增入驻</div>
                <div className="text-3xl font-bold text-slate-800">12</div>
             </div>
             <div className="p-2 bg-green-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600" />
             </div>
           </div>
           <div className="mt-4 w-full bg-slate-100 rounded-full h-1.5">
              <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '45%' }}></div>
           </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
           <div className="flex justify-between items-start">
             <div>
                <div className="text-slate-500 text-sm font-medium mb-1">总注册资本 (亿元)</div>
                <div className="text-3xl font-bold text-slate-800">1,204.5</div>
             </div>
             <div className="p-2 bg-amber-50 rounded-lg">
                <Building className="w-5 h-5 text-amber-600" />
             </div>
           </div>
           <p className="text-xs text-slate-400 mt-4">统计截止至昨日 24:00</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
        {/* Filters */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
           <div className="flex gap-3 w-full sm:w-auto">
             <div className="relative">
                <select className="block w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option>所有产业类型</option>
                  <option>第一产业</option>
                  <option>第二产业</option>
                  <option>第三产业</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Filter className="h-3 w-3" />
                </div>
             </div>
             <div className="relative">
                <select className="block w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option>状态：全部</option>
                  <option>正常经营</option>
                  <option>经营异常</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <Filter className="h-3 w-3" />
                </div>
             </div>
           </div>
           
           <div className="relative w-full sm:w-72">
             <input
                type="text"
                placeholder="输入企业名称、统一信用代码..."
                className="block w-full rounded-lg border border-slate-200 py-2 pl-10 pr-4 text-slate-700 placeholder:text-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
           </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">企业信息</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">产业分类</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">法人代表</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">注册资本</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">联系方式</th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">经营状态</th>
                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">操作</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-50">
              {mockEnterprises.map((enterprise) => (
                <tr key={enterprise.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-sm border border-indigo-100">
                        {enterprise.name.substring(0, 1)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-semibold text-slate-800">{enterprise.name}</div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">USCC: 91500000XXXXXX</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      enterprise.category === EnterpriseCategory.Secondary 
                        ? 'bg-purple-50 text-purple-700 border-purple-100' 
                        : enterprise.category === EnterpriseCategory.Tertiary 
                        ? 'bg-blue-50 text-blue-700 border-blue-100' 
                        : 'bg-green-50 text-green-700 border-green-100'
                    }`}>
                      {enterprise.category === EnterpriseCategory.Primary ? '第一产业' : 
                       enterprise.category === EnterpriseCategory.Secondary ? '第二产业' : '第三产业'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700">{enterprise.legalPerson}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-mono">{enterprise.registeredCapital}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 flex items-center">
                     <Phone className="w-3 h-3 mr-2 text-slate-400" /> {enterprise.contactPhone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {enterprise.status === Status.Active ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>
                        正常
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5"></span>
                        已注销
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-slate-400 hover:text-blue-600 p-2 hover:bg-slate-100 rounded-full transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};