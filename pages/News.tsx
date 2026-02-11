import React, { useState } from 'react';
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, FileText, Filter, CheckSquare, X } from 'lucide-react';
import { mockNews } from '../services/mockData';
import { PublishStatus } from '../types';

export const News: React.FC = () => {
  const [newsList, setNewsList] = useState(mockNews);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // 筛选数据
  const filteredNews = newsList.filter(news => {
    const matchesFilter = filter === 'all' || news.category === filter;
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // 全选逻辑
  const isAllSelected = filteredNews.length > 0 && filteredNews.every(n => selectedIds.includes(n.id));
  const isIndeterminate = selectedIds.length > 0 && !isAllSelected;

  const handleSelectAll = () => {
    if (isAllSelected) {
      // 取消全选（只取消当前筛选列表中的选中项，或者简单清空所有）
      // 这里简单处理：清空选中项，或者更精细地只移除当前视图的ID
      // 为了用户体验，通常点全选复选框取消时，是取消当前页所有选中
      const currentIds = filteredNews.map(n => n.id);
      setSelectedIds(prev => prev.filter(id => !currentIds.includes(id)));
    } else {
      // 全选当前筛选结果
      const currentIds = filteredNews.map(n => n.id);
      const newSelected = Array.from(new Set([...selectedIds, ...currentIds]));
      setSelectedIds(newSelected);
    }
  };

  const handleSelectOne = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(prev => prev.filter(i => i !== id));
    } else {
      setSelectedIds(prev => [...prev, id]);
    }
  };

  // 删除逻辑
  const handleDelete = (id: number) => {
    if (window.confirm('确定要删除这条新闻吗？')) {
      setNewsList(prev => prev.filter(n => n.id !== id));
      setSelectedIds(prev => prev.filter(i => i !== id));
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`确定要删除选中的 ${selectedIds.length} 条新闻吗？此操作无法恢复。`)) {
      setNewsList(prev => prev.filter(n => !selectedIds.includes(n.id)));
      setSelectedIds([]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">新闻中心</h2>
          <p className="text-slate-500 mt-1 text-sm">管理和发布商会动态、政策解读及通知公告。</p>
        </div>
        <div className="flex items-center gap-3">
          {selectedIds.length > 0 && (
            <button 
              onClick={handleBulkDelete}
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all animate-in fade-in zoom-in duration-200"
            >
              <Trash2 className="-ml-1 mr-2 h-4 w-4" />
              批量删除 ({selectedIds.length})
            </button>
          )}
          <button className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-lg shadow-md shadow-blue-500/20 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
            <Plus className="-ml-1 mr-2 h-4 w-4" />
            发布新闻
          </button>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Segmented Control */}
        <div className="flex p-1 bg-slate-100 rounded-lg w-full sm:w-auto">
           {[
             { id: 'all', label: '全部' },
             { id: 'headline', label: '新闻头条' },
             { id: 'party', label: '党建引领' },
             { id: 'business', label: '商会商机' }
           ].map((tab) => (
             <button
               key={tab.id}
               onClick={() => setFilter(tab.id)}
               className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 flex-1 sm:flex-none ${
                 filter === tab.id
                   ? 'bg-white text-blue-600 shadow-sm' 
                   : 'text-slate-500 hover:text-slate-700'
               }`}
             >
               {tab.label}
             </button>
           ))}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto pr-2">
           <div className="relative flex-1 sm:flex-none">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
               <Search className="h-4 w-4 text-slate-400" />
             </div>
             <input
               type="text"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="block w-full sm:w-64 pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
               placeholder="搜索新闻标题..."
             />
           </div>
           <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors">
             <Filter className="w-4 h-4" />
           </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-slate-100">
          <thead className="bg-slate-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    ref={input => {
                      if (input) {
                        input.indeterminate = isIndeterminate;
                      }
                    }}
                    onChange={handleSelectAll}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                  />
                </div>
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                内容摘要
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                发布人
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                所属栏目
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                状态
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                时间
              </th>
              <th scope="col" className="relative px-6 py-4">
                <span className="sr-only">操作</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            {filteredNews.length > 0 ? (
              filteredNews.map((news) => {
                const isSelected = selectedIds.includes(news.id);
                return (
                  <tr 
                    key={news.id} 
                    className={`hover:bg-slate-50/80 transition-colors group ${isSelected ? 'bg-blue-50/30' : ''}`}
                    onClick={(e) => {
                      // Allow clicking row to select, but avoid conflict with action buttons
                      if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('input')) return;
                      handleSelectOne(news.id);
                    }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectOne(news.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-start cursor-pointer">
                        <div className="h-10 w-10 flex-shrink-0 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 mt-0.5">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4 max-w-sm">
                          <div className={`text-sm font-semibold line-clamp-1 transition-colors ${isSelected ? 'text-blue-700' : 'text-slate-800 group-hover:text-blue-700'}`}>
                            {news.title}
                          </div>
                          <div className="flex items-center mt-1 space-x-3">
                             <div className="text-xs text-slate-400 flex items-center">
                                <Eye className="w-3 h-3 mr-1" /> {news.views}
                             </div>
                             <div className="text-xs text-slate-400">ID: #{news.id}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">
                      {news.author}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium border ${
                         news.category === 'headline' ? 'bg-purple-50 text-purple-700 border-purple-100' : 
                         news.category === 'party' ? 'bg-red-50 text-red-700 border-red-100' : 
                         'bg-amber-50 text-amber-700 border-amber-100'
                      }`}>
                        {news.category === 'headline' ? '头条' : news.category === 'party' ? '党建' : '商机'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {news.status === PublishStatus.Published ? (
                        <div className="flex items-center">
                           <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                           <span className="text-sm text-slate-600">已发布</span>
                        </div>
                      ) : (
                        <div className="flex items-center">
                           <div className="h-2 w-2 rounded-full bg-slate-300 mr-2"></div>
                           <span className="text-sm text-slate-500">草稿</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 font-mono">
                      {news.publishAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-blue-600 p-1.5 hover:bg-blue-50 rounded-md transition-colors" title="编辑">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(news.id)}
                          className="text-slate-400 hover:text-red-600 p-1.5 hover:bg-red-50 rounded-md transition-colors" 
                          title="删除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                  <div className="flex flex-col items-center">
                    <Search className="w-10 h-10 text-slate-300 mb-3" />
                    <p>暂无相关新闻数据</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {/* Footer / Pagination */}
      <div className="flex items-center justify-between px-4">
         <p className="text-sm text-slate-500">
            显示 <span className="font-medium text-slate-900">{filteredNews.length}</span> 条，共 <span className="font-medium text-slate-900">{newsList.length}</span> 条记录
         </p>
         <div className="flex gap-2">
            <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-white disabled:opacity-50">上一页</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm">1</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-white hover:text-blue-600">2</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-white hover:text-blue-600">3</button>
            <button className="px-3 py-1 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-white">下一页</button>
         </div>
      </div>
    </div>
  );
};