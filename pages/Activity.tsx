import React from 'react';
import { MapPin, Users, Clock, Plus, Calendar, ChevronRight } from 'lucide-react';
import { mockActivities } from '../services/mockData';
import { ActivityStatus } from '../types';

export const Activity: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">会务活动</h2>
          <p className="text-slate-500 mt-1 text-sm">会议预告、报名管理与签到统计。</p>
        </div>
        <button className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all">
          <Plus className="w-4 h-4 mr-2" />
          创建活动
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            {/* Image Area */}
            <div className="h-40 bg-slate-200 relative overflow-hidden">
               <img 
                 src={`https://picsum.photos/seed/${activity.id}/600/300`} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                 alt="activity cover" 
               />
               <div className="absolute top-0 inset-x-0 p-4 flex justify-between items-start bg-gradient-to-b from-black/50 to-transparent">
                  <span className={`px-2.5 py-1 rounded backdrop-blur-md text-xs font-semibold tracking-wide shadow-sm
                    ${activity.status === ActivityStatus.Upcoming ? 'bg-blue-500/90 text-white' : 
                      activity.status === ActivityStatus.Ongoing ? 'bg-emerald-500/90 text-white' : 'bg-slate-600/90 text-white'
                    }`}>
                    {activity.status === ActivityStatus.Upcoming ? 'UPCOMING' : activity.status === ActivityStatus.Ongoing ? 'ONGOING' : 'ENDED'}
                  </span>
               </div>
            </div>
            
            {/* Content Area */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 leading-tight group-hover:text-blue-700 transition-colors">
                  {activity.title}
                </h3>
                
                <div className="space-y-2.5">
                  <div className="flex items-start text-sm text-slate-600">
                    <Calendar className="w-4 h-4 mr-2.5 mt-0.5 text-slate-400 shrink-0" />
                    <span className="font-medium">{activity.startTime.split(' ')[0]}</span>
                    <span className="text-slate-400 mx-2">|</span>
                    <span>{activity.startTime.split(' ')[1]}</span>
                  </div>
                  <div className="flex items-start text-sm text-slate-600">
                    <MapPin className="w-4 h-4 mr-2.5 mt-0.5 text-slate-400 shrink-0" />
                    <span className="line-clamp-1">{activity.location}</span>
                  </div>
                </div>
              </div>

              {/* Progress & Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">报名进度</span>
                   <span className="text-xs font-bold text-slate-700">{activity.participants} / {activity.maxParticipants}</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4">
                   <div 
                     className={`h-1.5 rounded-full ${activity.status === ActivityStatus.Ended ? 'bg-slate-400' : 'bg-blue-600'}`}
                     style={{ width: `${(activity.participants / activity.maxParticipants) * 100}%` }}
                   ></div>
                </div>

                <div className="flex gap-2">
                   <button className="flex-1 flex items-center justify-center px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-colors">
                      查看详情
                   </button>
                   <button className="flex items-center justify-center p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-slate-400 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 min-h-[360px] group">
           <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-white group-hover:shadow-md transition-all">
             <Plus className="w-6 h-6" />
           </div>
           <span className="text-base font-semibold">发布新活动</span>
           <p className="text-xs text-slate-400 mt-2 text-center max-w-[200px]">
             创建新的商务会议、培训或考察活动，并配置报名通道。
           </p>
        </button>
      </div>
    </div>
  );
};