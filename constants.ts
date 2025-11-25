import { NavItem, ProductCategory, CaseStudy, Milestone } from './types';

export const COMPANY_NAME = "光华创世";
export const COMPANY_FULL_NAME = "北京光华创世科技有限责任公司";
export const SLOGAN_MAIN = "专注蓄冰 实践创新";
export const SLOGAN_SUB = "因为专注 所以专业";

export const NAVIGATION: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '关于我们', path: '/about' },
  { label: '核心技术', path: '/technology' },
  { label: '产品中心', path: '/products' },
  { label: '典型案例', path: '/cases' },
  { label: '联系我们', path: '/contact' },
];

export const INTRO_TEXT = `光华创世专注于蓄冰产品研发、生产及服务，光华专业技术人员以“蓄冰盘管标准实验检测平台”及“高效冰蓄冷系统实验测试中心”为依托，进行高效蓄冰盘管及高效冰蓄冷系统的研发测试、实践及创新。工厂拥有20000㎡以上的生产面积，拥有碳钢镀锌、不锈钢、复合蓄冰盘管等多条专业生产线。`;

export const FEATURES = [
  { title: "生产规模 行业领先", desc: "研发生产面积2万余平方米，多条自动化生产线。" },
  { title: "蓄冰盘管能效保障", desc: "拥有蓄冰盘管标准实验检测平台（国检联合）。" },
  { title: "冰蓄冷系统高效保障", desc: "高效冰蓄冷系统实验测试中心。" },
  { title: "使用寿命有效保障", desc: "蓄冰盘管耐腐蚀检测实验室。" },
  { title: "专业铸就品质", desc: "精细酸洗钝化生产线及金属表面处理技术。" },
];

// ==========================================
// 图片配置区域 (在此处替换图片链接)
// ==========================================

// 1. 首页轮播图 (建议尺寸: 1920x1080 像素)
export const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070", // Slide 1
  "https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=80&w=2070", // Slide 2
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070", // Slide 3
  "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2070", // Slide 4
  "https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&fit=crop&q=80&w=2070"  // Slide 5
];

// 2. 关于我们版块图片
export const ABOUT_IMAGES = {
  // 首页左侧竖长图 (建议尺寸: 800x1000 竖向)
  factory: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=800", 
  // 首页右侧上小图 (建议尺寸: 800x600 横向)
  lab: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800", 
  // 首页右侧下小图 (建议尺寸: 800x600 横向)
  quality: "https://images.unsplash.com/photo-1531297461136-82lw9z2c2b3e?auto=format&fit=crop&q=80&w=800", 
  // 关于我们页面主图 (建议尺寸: 1200x800 横向)
  introMain: "https://images.unsplash.com/photo-1664447972836-97996f8623ba?auto=format&fit=crop&q=80&w=2070" 
};

// 3. 核心技术页面图片
export const TECH_IMAGES = {
  softwareBg: "https://www.transparenttextures.com/patterns/cubes.png", // 背景纹理
  softwareInterface: "https://picsum.photos/seed/software/600/400" 
};

// 4. 荣誉与专利 (建议尺寸: 600x800 竖向证书，或 800x600 横向证书)
export const HONORS_LIST = [
  { title: "高新技术企业证书", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" },
  { title: "ISO9001质量管理体系认证", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400" },
  { title: "科技型中小企业创新基金立项证书", image: "https://images.unsplash.com/photo-1607237138151-4758f4d96e12?auto=format&fit=crop&q=80&w=400" },
  { title: "中国制冷学会会员单位", image: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?auto=format&fit=crop&q=80&w=400" },
];

export const PATENTS_LIST = [
  { title: "实用新型专利证书", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
  { title: "外观设计专利证书", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
  { title: "一种高效蓄冰盘管装置", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400" },
  { title: "产品质量检测报告", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400" },
  { title: "性能测试合格证", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" },
];

// 5. 产品图片 (建议尺寸: 800x600 或 1200x900，白色背景为佳)
export const PRODUCTS: ProductCategory[] = [
  {
    id: 'stainless-internal',
    title: '不锈钢内融冰蓄冰盘管',
    description: '采用优质不锈钢制造，耐腐蚀性强，适用于对水质要求较高的系统。内融冰技术成熟，控制简单。',
    features: ['高耐腐蚀性', '换热效率高', '使用寿命长', '食品级材质可选'],
    image: 'https://picsum.photos/seed/steel1/800/600',
    specs: [
      { model: 'ISC-275-SS-16', capacity: 275, flowRate: 33.4, pressureDrop: 43.7, volume: 629, dimensions: '5848*1506*1660', connection: 'DN80' },
      { model: 'ISC-366-SS-16', capacity: 366, flowRate: 44.5, pressureDrop: 44.2, volume: 839, dimensions: '5848*1506*2172', connection: 'DN80' },
      { model: 'ISC-423-SS-16', capacity: 423, flowRate: 51.4, pressureDrop: 43.8, volume: 976, dimensions: '5868*1730*2172', connection: 'DN100' },
      { model: 'ISC-528-SS-16', capacity: 528, flowRate: 64.1, pressureDrop: 44.1, volume: 1220, dimensions: '5868*1730*2684', connection: 'DN100' },
    ]
  },
  {
    id: 'stainless-external',
    title: '不锈钢外融冰蓄冰盘管',
    description: '外融冰系统可提供更低的冷水温度（<1.5℃），适合大温差供冷，降低输送能耗。',
    features: ['低温供水', '大温差运行', '适合区域供冷', '瞬间取冷能力强'],
    image: 'https://picsum.photos/seed/steel2/800/600',
    specs: [
      { model: 'ISC-233W-SS-16', capacity: 233, flowRate: 28.3, pressureDrop: 0, volume: 541, dimensions: '5848*1471*1660', connection: 'DN80' },
      { model: 'ISC-338W-SS-16', capacity: 338, flowRate: 41.1, pressureDrop: 0, volume: 784, dimensions: '5848*1601*2172', connection: 'DN80' },
      { model: 'ISC-458W-SS-16', capacity: 458, flowRate: 55.6, pressureDrop: 0, volume: 1074, dimensions: '5868*1731*2684', connection: 'DN100' },
    ]
  },
  {
    id: 'hdpe',
    title: 'HDPE 复合蓄冰盘管',
    description: '采用高密度聚乙烯材料，耐腐蚀，重量轻，寿命长，且导热性能经过特殊优化。',
    features: ['超强耐腐蚀', '柔韧性好', '抗冻胀', '维护成本低'],
    image: 'https://picsum.photos/seed/hdpe/800/600',
    specs: [
      { model: 'ISC-350-P', capacity: 350, flowRate: 0, pressureDrop: 0, volume: 1323, dimensions: '5887*1510*2030', connection: 'DN90' },
      { model: 'ISC-389-P', capacity: 389, flowRate: 0, pressureDrop: 0, volume: 1468, dimensions: '5887*1670*2030', connection: 'DN90' },
      { model: 'ISC-409-P', capacity: 409, flowRate: 0, pressureDrop: 0, volume: 1540, dimensions: '5887*1750*2030', connection: 'DN110' },
    ]
  },
   {
    id: 'galvanized',
    title: '镀锌钢蓄冰盘管',
    description: '传统成熟工艺，机械强度高，热传导性能优异，性价比高。',
    features: ['机械强度高', '导热性能好', '技术成熟', '经济实惠'],
    image: 'https://picsum.photos/seed/galv/800/600',
    specs: [
      { model: 'ICE-300-GS-26.7', capacity: 300, flowRate: 37.6, pressureDrop: 0, volume: 1231, dimensions: '5863*1508*1812', connection: 'DN65' },
      { model: 'ICE-340-GS-26.7', capacity: 340, flowRate: 42.6, pressureDrop: 0, volume: 1407, dimensions: '5863*1712*1812', connection: 'DN65' },
    ]
  }
];

// 6. 案例图片 (建议尺寸: 1200x800 像素)
export const CASES: CaseStudy[] = [
  {
    id: 'sz-qianhai',
    title: '深圳前海区域集中供冷5号供冷站二期',
    location: '深圳',
    description: '全框承重结构设计（结构计算安全）、低流阻高效设计。',
    stats: { area: '区域供冷', capacity: '52,800 RTh', thickness: '25mm' },
    image: 'https://picsum.photos/seed/shenzhen/800/600'
  },
  {
    id: 'sz-liuxian',
    title: '深圳留仙洞总部基地集中冷站',
    location: '深圳',
    description: '供冷面积100多万平方米，采用光华创世高效蓄冰盘管。',
    stats: { area: '100万+ ㎡', capacity: '98,784 RTh', thickness: '25mm' },
    image: 'https://picsum.photos/seed/liuxian/800/600'
  },
  {
    id: 'sh-region',
    title: '上海区域集中供冷站',
    location: '上海',
    description: '总建筑面积二百多万平方米，采用安全高效蓄冰盘管。',
    stats: { area: '200万+ ㎡', capacity: '>100,000 RTh', thickness: '25mm' },
    image: 'https://picsum.photos/seed/shanghai/800/600'
  },
  {
    id: 'bj-ants',
    title: '北京丽金智地中心（蚂蚁金融集团）',
    location: '北京',
    description: '7A超甲写字楼，全框架结构设计，结构安全不变形。',
    stats: { area: '7A 写字楼', capacity: '16,016 RTh', thickness: '25mm' },
    image: 'https://picsum.photos/seed/ant/800/600'
  },
  {
    id: 'xp-motors',
    title: '小鹏汽车广州智能研发智造中心',
    location: '广州',
    description: '建筑面积360000㎡，采用光华创世安全高效蓄冰盘管。',
    stats: { area: '360,000 ㎡', capacity: '15,542 RTh', thickness: '25mm' },
    image: 'https://picsum.photos/seed/xiaopeng/800/600'
  }
];

export const CONTACT_INFO = {
  address: "北京市丰体北路5号国丰大厦4层",
  phone: "010-63840061",
  zip: "100166",
  email: "office@ghcs.cn",
  website: "www.ghcs.cn",
  // 微信二维码 (建议尺寸: 300x300 正方形)
  wechatQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://www.ghcs.cn" 
};