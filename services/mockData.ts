import { 
  NewsItem, 
  NewsCategory, 
  PublishStatus, 
  Enterprise, 
  EnterpriseCategory, 
  Status,
  Activity,
  ActivityStatus,
  SupplyDemand,
  SupplyDemandType
} from '../types';

export const mockNews: NewsItem[] = [
  { id: 1, title: '两江新区总商会召开2025年第一季度理事会', category: NewsCategory.Headline, author: '秘书处', publishAt: '2025-02-10', status: PublishStatus.Published, views: 1240 },
  { id: 2, title: '深入学习贯彻重要讲话精神，推动民营经济高质量发展', category: NewsCategory.Party, author: '党建办', publishAt: '2025-02-08', status: PublishStatus.Published, views: 856 },
  { id: 3, title: '关于组织企业参加"一带一路"国际经贸洽谈会的通知', category: NewsCategory.Business, author: '联络部', publishAt: '2025-02-05', status: PublishStatus.Draft, views: 0 },
  { id: 4, title: '两江新区发布惠企政策"三十条"解读', category: NewsCategory.Headline, author: '政策室', publishAt: '2025-02-01', status: PublishStatus.Published, views: 3421 },
  { id: 5, title: '某某科技股份有限公司成功上市', category: NewsCategory.Business, author: '会员部', publishAt: '2025-01-28', status: PublishStatus.Published, views: 1099 },
];

export const mockEnterprises: Enterprise[] = [
  { id: 101, name: '重庆长安汽车股份有限公司', category: EnterpriseCategory.Secondary, legalPerson: '朱华荣', registeredCapital: '76.3亿', contactPhone: '023-67591234', status: Status.Active },
  { id: 102, name: '赛力斯集团股份有限公司', category: EnterpriseCategory.Secondary, legalPerson: '张兴海', registeredCapital: '15.1亿', contactPhone: '023-65178888', status: Status.Active },
  { id: 103, name: '重庆两江新区产业发展集团', category: EnterpriseCategory.Tertiary, legalPerson: '李某某', registeredCapital: '100亿', contactPhone: '023-63012345', status: Status.Active },
  { id: 104, name: '某某生态农业科技有限公司', category: EnterpriseCategory.Primary, legalPerson: '王五', registeredCapital: '500万', contactPhone: '13800138000', status: Status.Active },
  { id: 105, name: '猪八戒股份有限公司', category: EnterpriseCategory.Tertiary, legalPerson: '朱明跃', registeredCapital: '3.6亿', contactPhone: '023-88888888', status: Status.Inactive },
];

export const mockActivities: Activity[] = [
  { id: 201, title: '2025年春季政企对接交流会', location: '两江新区金山大厦会议中心', startTime: '2025-03-15 14:00', status: ActivityStatus.Upcoming, participants: 45, maxParticipants: 100 },
  { id: 202, title: '数字经济产业发展论坛', location: '悦来国际会议中心', startTime: '2025-02-20 09:00', status: ActivityStatus.Ongoing, participants: 280, maxParticipants: 300 },
  { id: 203, title: '企业税务合规专题培训', location: '商会大厦3楼培训室', startTime: '2025-01-10 14:30', status: ActivityStatus.Ended, participants: 88, maxParticipants: 100 },
];

export const mockSupplyDemand: SupplyDemand[] = [
  { id: 301, type: SupplyDemandType.Demand, title: '寻求新能源汽车零部件精密加工合作伙伴', publisher: '长安汽车', date: '2025-02-11', status: 'active' },
  { id: 302, type: SupplyDemandType.Supply, title: '提供高端数字化工厂解决方案', publisher: '忽米网', date: '2025-02-09', status: 'active' },
  { id: 303, type: SupplyDemandType.Demand, title: '采购办公用品一批', publisher: '秘书处', date: '2025-02-01', status: 'closed' },
];