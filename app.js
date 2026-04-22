// =========================================
// 完整建议数据（每种人格的详细路线图）
// =========================================
const FULL_ADVICES = {
  seller: {
    roadmap: [
      { step: 1, title: '选择细分赛道', desc: '找到你有热情且需求明确的领域，小而美优先' },
      { step: 2, title: '打造引流产品', desc: '设计一款低于29元的入门产品，快速验证需求' },
      { step: 3, title: '7天测试模型', desc: '发布内容+销售动作，记录数据找到最优路径' },
      { step: 4, title: '复制放大', desc: '跑通后批量复制，日出10单稳定收入' }
    ],
    actions: [
      '明确定立你的第一个细分赛道',
      '找到该赛道Top3的竞品，分析他们的卖点',
      '设计一款低于29元的引流产品',
      '发布内容预热，收集第一批意向用户',
      '正式开卖，边卖边优化'
    ],
    personalPitfalls: [
      '你容易冲动选品，建议先做3天市场调研再决定',
      '不要追热点追到没沉淀，每做一个产品要想清楚积累了什么',
      '收入忽高忽低是正常的，但要有存钱意识'
    ]
  },
  content: {
    roadmap: [
      { step: 1, title: '确定内容方向', desc: '选择1个细分领域，持续深耕不要换赛道' },
      { step: 2, title: '建立内容模板', desc: '找到适合你的内容形式，形成可复制的模板' },
      { step: 3, title: '积累1000粉丝', desc: '前3个月专注涨粉，不要急着变现' },
      { step: 4, title: '产品化变现', desc: '用粉丝信任做知识付费或带货' }
    ],
    actions: [
      '确定一个你喜欢且有市场的内容领域',
      '分析5个同领域头部账号，记录他们的爆款规律',
      '制作你的内容模板库（封面、标题、正文结构）',
      '坚持日更或隔天更21天，养成发布习惯',
      '第22天开始植入变现产品，边测试边调整'
    ],
    personalPitfalls: [
      '只发内容不敢卖是最大的坑，粉丝多了就要勇敢变现',
      '数据差的时候不要自我怀疑，坚持发才能看到规律',
      '追求完美会让你发得不够频繁，先完成再完美'
    ]
  },
  tool: {
    roadmap: [
      { step: 1, title: '找到用户痛点', desc: '通过调研或观察确定一个具体可解决的问题' },
      { step: 2, title: '快速出MVP', desc: '先做1.0版本上线，不要过度打磨' },
      { step: 3, title: '测试销售转化', desc: '上架平台测试，收集真实用户反馈' },
      { step: 4, title: '迭代优化版本', desc: '根据反馈快速迭代，形成可复购的产品' }
    ],
    actions: [
      '列出你能想到的3个工具型产品方向',
      '每个方向做简单的用户调研（问10个人愿不愿意用）',
      '选择最被需要的方向，快速出1.0版本',
      '上架小红书或有赞，定价19-49元测试转化',
      '根据用户反馈迭代，边卖边完善'
    ],
    personalPitfalls: [
      '过度打磨是最大的坑，先上线再优化是正确姿势',
      '会做不会卖是常见问题，要花50%时间在营销上',
      '不要等到"完美"才上线，用户反馈比完美更重要'
    ]
  },
  service: {
    roadmap: [
      { step: 1, title: '明确服务定位', desc: '确定你能解决的具体问题，不要什么都做' },
      { step: 2, title: '设计服务产品', desc: '把服务标准化，定价不要低于市场价' },
      { step: 3, title: '建立信任背书', desc: '用案例和口碑积累信任，高客单价需要强背书' },
      { step: 4, title: '做复购和转介绍', desc: '服务好每一个客户，让他们帮你介绍新客户' }
    ],
    actions: [
      '明确你的前3个核心服务项目和定价',
      '整理你过去的成功案例，形成可展示的案例库',
      '设计一个低价的体验服务，用来获取第一批客户',
      '用心服务每一个客户，超出预期才能有复购',
      '每月主动要1个转介绍，形成转介绍漏斗'
    ],
    personalPitfalls: [
      '不好意思提价是最大的坑，你的价值被严重低估了',
      '交付太重会把自己累死，要学会设置边界',
      '时间换钱有上限，要想着怎么让服务规模化'
    ]
  },
  observer: {
    roadmap: [
      { step: 1, title: '深度市场调研', desc: '用1-2周时间全面了解目标市场的需求和空缺' },
      { step: 2, title: '验证需求真伪', desc: '通过小范围测试验证你的判断是否准确' },
      { step: 3, title: '精准切入市场', desc: '需求验证后快速入场，抢占先发优势' },
      { step: 4, title: '建立竞争壁垒', desc: '快速积累第一批用户，形成自己的护城河' }
    ],
    actions: [
      '选定一个你想进入的细分市场',
      '做一次完整的市场调研：用户是谁、痛点是什么、竞品有哪些',
      '设计一个最小化产品去验证需求（问卷/小范围测试）',
      '需求验证通过后，立刻入场不要犹豫',
      '快速积累第一批种子用户，建立自己的社群'
    ],
    personalPitfalls: [
      '研究太久不动手是最危险的，机会窗口不等人',
      '过度分析会导致决策瘫痪，70%把握就可以行动了',
      '先发优势很重要，不要等100%准备好了才入场'
    ]
  },
  system: {
    roadmap: [
      { step: 1, title: '明确核心目标', desc: '确定你的第一个赚钱目标，不要什么都想做' },
      { step: 2, title: '搭建最小系统', desc: '先跑通一个闭环，不需要完美但要能跑通' },
      { step: 3, title: '优化流程效率', desc: '跑通后逐步优化每个环节的效率' },
      { step: 4, title: '复制放大规模', desc: '系统稳定后批量复制，扩大收入' }
    ],
    actions: [
      '设定你的第一个可量化目标（如：第一个月收入3000元）',
      '设计最简单的赚钱闭环：获客→转化→交付→复购',
      '先跑通闭环，不要一开始就追求完美流程',
      '跑通后，用Excel记录每个环节的数据',
      '找到瓶颈环节优化，然后批量复制'
    ],
    personalPitfalls: [
      '起步太慢是最大问题，不要还没卖就先搭全套系统',
      '过度优化是另一个极端，系统能跑就行，后续慢慢优化',
      '快速验证阶段的反馈很宝贵，要尽早拿到真实市场反馈'
    ]
  }
};

// =========================================
// 全局配置
// =========================================
const CONFIG = {
  BRAND: '赚钱人格测试',
  SUBTITLE: '测出你最适合的搞钱路径',
};

// 当前测试结果类型
let currentResultType = null;

// =========================================
// 题目数据（12道题）
// =========================================
const QUESTIONS = [
  {
    id: 1,
    question: '你看到别人靠副业赚钱，第一反应更像是：',
    options: [
      { text: '先试试，能不能马上卖出第一单', type: 'seller' },
      { text: '研究一下别人是怎么表达和吸粉的', type: 'content' },
      { text: '我能不能做个更好用的版本', type: 'tool' },
      { text: '这类用户到底最缺什么', type: 'observer' }
    ]
  },
  {
    id: 2,
    question: '如果给你一周时间做个副业，你更愿意：',
    options: [
      { text: '直接做个能卖的产品先挂出去', type: 'seller' },
      { text: '先发内容，看看大家对什么最感兴趣', type: 'content' },
      { text: '先找3个真实用户聊聊需求', type: 'service' },
      { text: '先设计一个稳定执行的计划', type: 'system' }
    ]
  },
  {
    id: 3,
    question: '你更容易因为哪件事拖延？',
    options: [
      { text: '总想等一个更好的机会再上', type: 'observer' },
      { text: '担心发出去没人看', type: 'content' },
      { text: '觉得产品还不够完善', type: 'tool' },
      { text: '计划还没理清楚', type: 'system' }
    ]
  },
  {
    id: 4,
    question: '你最希望别人因为你而愿意付费的是：',
    options: [
      { text: '你能帮他快速拿到结果', type: 'seller' },
      { text: '你很懂他，能给他支持和建议', type: 'service' },
      { text: '你做的工具真的省时间', type: 'tool' },
      { text: '你能发现他没说出口的需求', type: 'observer' }
    ]
  },
  {
    id: 5,
    question: '如果让你长期做一件事，你更能接受：',
    options: [
      { text: '每天冲销量、盯转化', type: 'seller' },
      { text: '持续发内容、积累粉丝', type: 'content' },
      { text: '持续服务客户、经营关系', type: 'service' },
      { text: '不断复盘和调整流程', type: 'system' }
    ]
  },
  {
    id: 6,
    question: '遇到一个新项目时，你通常会先：',
    options: [
      { text: '看能不能立刻上线试卖', type: 'seller' },
      { text: '想它适合怎么包装传播', type: 'content' },
      { text: '想怎么把它做成工具或模板', type: 'tool' },
      { text: '先看用户缺口和竞品空位', type: 'observer' }
    ]
  },
  {
    id: 7,
    question: '你更擅长哪种状态下赚钱？',
    options: [
      { text: '快节奏、边做边改', type: 'seller' },
      { text: '靠稳定流程、持续优化', type: 'system' },
      { text: '靠产品本身好用', type: 'tool' },
      { text: '靠信任、靠长期关系', type: 'service' }
    ]
  },
  {
    id: 8,
    question: '你最怕哪种赚钱方式？',
    options: [
      { text: '看了很久，还是判断错需求', type: 'observer' },
      { text: '一直要硬着头皮成交', type: 'content' },
      { text: '交付太重，把自己绑死', type: 'service' },
      { text: '整体太乱，越做越失控', type: 'system' }
    ]
  },
  {
    id: 9,
    question: '别人夸你时，哪句你最常听到？',
    options: [
      { text: '你行动真的很快', type: 'seller' },
      { text: '你眼光挺准，总能看到机会', type: 'observer' },
      { text: '你整理得好清楚', type: 'tool' },
      { text: '你做事很稳，很有条理', type: 'system' }
    ]
  },
  {
    id: 10,
    question: '如果第一次尝试没赚到钱，你更可能：',
    options: [
      { text: '马上换个方式再试', type: 'seller' },
      { text: '去研究是不是表达没打中人', type: 'content' },
      { text: '继续和用户聊，找到真实顾虑', type: 'service' },
      { text: '复盘整个路径哪里出问题', type: 'system' }
    ]
  },
  {
    id: 11,
    question: '你更喜欢哪种产品？',
    options: [
      { text: '能切中小众痛点的细分产品', type: 'observer' },
      { text: '能持续吸引人的内容产品', type: 'content' },
      { text: '能反复售卖的工具型产品', type: 'tool' },
      { text: '能让用户一直留下来的服务', type: 'service' }
    ]
  },
  {
    id: 12,
    question: '现在最阻碍你赚钱的，最像哪一种？',
    options: [
      { text: '总想先看清市场，不敢先试', type: 'observer' },
      { text: '不好意思收费，也怕交付不够好', type: 'service' },
      { text: '会做东西，但不会卖', type: 'tool' },
      { text: '想得多，起步慢', type: 'system' }
    ]
  }
];

// =========================================
// 结果数据（6种赚钱人格）
// =========================================
const RESULTS = {
  seller: {
    id: 'seller',
    name: '爆发卖货型',
    emoji: '🚀',
    tagline: '你的赚钱开关：先开枪，再瞄准',
    keywords: ['行动快', '敢开卖', '高反馈'],
    path: '低价引流品 / 热点带货 / 虚拟产品',
    description: '你是天生的行动派，看到别人赚钱第一反应是"我也能卖"。你擅长快速验证、快速试错、快速迭代。对你来说，最好的学习方式是直接开干，在卖的过程里找感觉。你适合虚拟产品、热点带货、低价引流品，用高频率换高反馈。',
    strengths: [
      '行动力超强，想到就干，不会想太多',
      '对市场和机会敏感，能快速响应热点',
      '擅长用销量和数据验证想法'
    ],
    pitfalls: [
      '容易冲动，追热点追到最后没沉淀',
      '产品打磨不够，口碑容易崩',
      '缺乏长期规划，收入忽高忽低'
    ],
    color: '#FF6B6B'
  },
  content: {
    id: 'content',
    name: '内容吸粉型',
    emoji: '🎨',
    tagline: '你的赚钱开关：用表达换信任',
    keywords: ['会表达', '能种草', '攒信任'],
    path: '小红书图文 / 短视频 / 个人IP',
    description: '你擅长用内容建立影响力，你的价值在于"说得清楚、写得动人"。你适合小红书图文、短视频、个人IP、知识型产品。对你来说，粉丝和信任是最值钱的资产，内容是杠杆，一个人也能撬动大生意。',
    strengths: [
      '表达能力强，能把复杂的事讲明白',
      '擅长用内容建立信任和影响力',
      '能持续产出，有内容敏感度'
    ],
    pitfalls: [
      '只发内容不敢卖，粉丝多了变不了现',
      '数据差的时候容易自我怀疑',
      '追求完美，发得不够频繁'
    ],
    color: '#4ECDC4'
  },
  tool: {
    id: 'tool',
    name: '工具生产型',
    emoji: '🔧',
    tagline: '你的赚钱开关：一次制作，无限售卖',
    keywords: ['结构化', '可复用', '有复利'],
    path: '模板资料 / 提示词包 / 自动发货产品',
    description: '你是天生的产品经理，擅长把知识、流程、经验变成可复用的工具。模板、提示词、资料包、自动发货的数字产品都是你的菜。你适合"睡后收入"模式，一份时间卖出无限份，规模效应是你的朋友。',
    strengths: [
      '擅长把零散知识结构化、产品化',
      '能做出好用、易用的工具和模板',
      '一次投入，长期复利的思维强'
    ],
    pitfalls: [
      '过度打磨，产品没上线就优化了十版',
      '会做不会卖，工具做完了不知道给谁',
      '上线太慢，错过最佳窗口期'
    ],
    color: '#45B7D1'
  },
  service: {
    id: 'service',
    name: '陪伴服务型',
    emoji: '💝',
    tagline: '你的赚钱开关：用共情换深度信任',
    keywords: ['懂用户', '会陪跑', '高信任'],
    path: '咨询陪跑 / 社群运营 / 高客单服务',
    description: '你擅长理解人、支持人，你的价值在于"你很懂我"。咨询、陪跑、社群运营、情绪价值类服务都是你的优势领域。高客单价、长期关系、复购和转介绍是你的增长引擎。',
    strengths: [
      '共情力强，能准确理解别人的需求',
      '擅长建立深度信任和长期关系',
      '高客单价服务是你的舒适区'
    ],
    pitfalls: [
      '容易把自己做累，时间换钱上限低',
      '不好意思提价，价值被低估',
      '交付太重，规模化困难'
    ],
    color: '#96CEB4'
  },
  observer: {
    id: 'observer',
    name: '观察选品型',
    emoji: '🔍',
    tagline: '你的赚钱开关：先看清，再出手',
    keywords: ['看得准', '会选品', '重验证'],
    path: '细分赛道 / 痛点资料 / 需求验证产品',
    description: '你对需求和市场缺口有天生的敏感度，擅长在别人还没看到的时候发现机会。你适合细分赛道产品、痛点型资料、需求验证后再投入。你的优势是"看得准"，一旦出手胜率很高。',
    strengths: [
      '对市场需求敏感，能发现别人看不到的机会',
      '擅长调研和分析，决策质量高',
      '谨慎但精准，出手一次比得上别人十次'
    ],
    pitfalls: [
      '研究太久不动手，机会窗口过了',
      '过度分析导致决策瘫痪',
      '错失先发优势，被行动派抢先'
    ],
    color: '#FFEAA7'
  },
  system: {
    id: 'system',
    name: '系统运营型',
    emoji: '⚙️',
    tagline: '你的赚钱开关：搭好系统，自动运转',
    keywords: ['有流程', '能复盘', '稳增长'],
    path: '内容矩阵 / 自动化流程 / 长期小生意',
    description: '你擅长搭流程、做优化、让项目稳定运转。你适合多产品组合、内容矩阵、自动化流程、小而稳的长期生意。你的优势不是爆发，而是持续、稳定、可复制，时间是你的朋友。',
    strengths: [
      '擅长设计流程和系统，做事有条理',
      '优化能力强，能让项目越来越顺',
      '稳健风格，适合做长期生意'
    ],
    pitfalls: [
      '起步太慢，还没卖就先搭了全套系统',
      '过度优化，过早追求自动化',
      '错过快速验证阶段的宝贵反馈'
    ],
    color: '#DDA0DD'
  }
};

// =========================================
// 状态管理
// =========================================
let currentQuestion = 0;
let answers = []; // 存储每个答案对应的人格类型
let history = []; // 存储每道题的选择索引，用于返回上一题
let previewImageUrl = null;
let previewImageBlob = null;
let previewImageFilename = '';

// =========================================
// DOM 元素
// =========================================
const pages = {
  home: document.getElementById('home-page'),
  quiz: document.getElementById('quiz-page'),
  result: document.getElementById('result-page'),
  fullAdvice: document.getElementById('full-advice-page')
};

const elements = {
  startBtn: document.getElementById('start-btn'),
  backBtn: document.getElementById('back-btn'),
  progressFill: document.getElementById('progress-fill'),
  progressText: document.getElementById('progress-text'),
  questionNumber: document.getElementById('question-number'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  restartBtn: document.getElementById('restart-btn'),
  savePosterBtn: document.getElementById('save-poster-btn'),
  saveCardBtn: document.getElementById('save-card-btn'),
  otherTypesContainer: document.getElementById('other-types'),
  viewFullBtn: document.getElementById('view-full-btn'),
  fullAdviceBackBtn: document.getElementById('full-advice-back-btn'),
  adviceRestartBtn: document.getElementById('advice-restart-btn'),
  adviceTypeEmoji: document.getElementById('advice-type-emoji'),
  adviceTypeName: document.getElementById('advice-type-name'),
  adviceRoadmap: document.getElementById('advice-roadmap'),
  adviceActions: document.getElementById('advice-actions'),
  advicePitfalls: document.getElementById('advice-pitfalls'),
  posterCard: document.getElementById('poster-card'),
  posterEmoji: document.getElementById('poster-emoji'),
  posterTitle: document.getElementById('poster-title'),
  posterTagline: document.getElementById('poster-tagline'),
  posterKeywords: document.getElementById('poster-keywords'),
  posterPath: document.getElementById('poster-path'),
  typeModal: document.getElementById('type-modal'),
  typeModalClose: document.getElementById('type-modal-close'),
  typeModalEmoji: document.getElementById('type-modal-emoji'),
  typeModalTitle: document.getElementById('type-modal-title'),
  typeModalTagline: document.getElementById('type-modal-tagline'),
  typeModalKeywords: document.getElementById('type-modal-keywords'),
  typeModalDescription: document.getElementById('type-modal-description'),
  typeModalPath: document.getElementById('type-modal-path'),
  imagePreviewModal: document.getElementById('image-preview-modal'),
  imagePreviewClose: document.getElementById('image-preview-close'),
  generatedImage: document.getElementById('generated-image'),
  downloadImageBtn: document.getElementById('download-image-btn')
};

// =========================================
// 工具函数
// =========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function switchPage(pageName) {
  Object.values(pages).forEach(page => page.classList.remove('active'));
  pages[pageName].classList.add('active');
  window.scrollTo(0, 0);
}

function setButtonLoading(button, text) {
  const originalHtml = button.innerHTML;
  button.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 6v6l4 2"></path>
    </svg>
    ${text}
  `;
  button.disabled = true;
  return () => {
    button.innerHTML = originalHtml;
    button.disabled = false;
  };
}

function canvasToBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(blob => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error('无法生成图片'));
      }
    }, 'image/png', 0.95);
  });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

function showImagePreview(blob, filename) {
  if (previewImageUrl) {
    URL.revokeObjectURL(previewImageUrl);
  }
  previewImageBlob = blob;
  previewImageFilename = filename;
  previewImageUrl = URL.createObjectURL(blob);
  elements.generatedImage.src = previewImageUrl;
  elements.imagePreviewModal.hidden = false;
}

function closeImagePreview() {
  elements.imagePreviewModal.hidden = true;
}

async function shareOrDownloadImage(blob, filename, title) {
  const file = new File([blob], filename, { type: 'image/png' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title,
        files: [file]
      });
      showToast('✅ 已打开系统保存面板');
      return;
    } catch (err) {
      if (err.name === 'AbortError') {
        showImagePreview(blob, filename);
        showToast('图片已生成');
        return;
      }
    }
  }

  downloadBlob(blob, filename);
  showImagePreview(blob, filename);
  showToast('✅ 图片已生成，请查看下载');
}

async function captureElementAsImage(element, filename, title) {
  if (typeof html2canvas !== 'function') {
    throw new Error('图片生成资源未加载');
  }

  const canvas = await html2canvas(element, {
    scale: Math.min(window.devicePixelRatio || 2, 3),
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    windowWidth: document.documentElement.scrollWidth
  });
  const blob = await canvasToBlob(canvas);
  await shareOrDownloadImage(blob, filename, title);
}

// =========================================
// 测试逻辑
// =========================================
function startQuiz() {
  currentQuestion = 0;
  answers = [];
  history = [];
  switchPage('quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQuestion];

  // 更新进度
  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  elements.progressFill.style.width = `${progress}%`;
  elements.progressText.textContent = `${currentQuestion + 1}/${QUESTIONS.length}`;

  // 更新题目
  elements.questionNumber.textContent = `Q${q.id}`;
  elements.questionText.textContent = q.question;

  // 更新选项
  elements.optionsContainer.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = `${String.fromCharCode(65 + index)}. ${opt.text}`;
    btn.addEventListener('click', () => selectOption(index));
    elements.optionsContainer.appendChild(btn);
  });

  // 显示/隐藏返回按钮
  elements.backBtn.style.visibility = currentQuestion > 0 ? 'visible' : 'hidden';

  // 添加动画
  elements.optionsContainer.style.animation = 'none';
  setTimeout(() => {
    elements.optionsContainer.style.animation = 'fadeIn 0.4s ease-out';
  }, 10);
}

function selectOption(index) {
  const q = QUESTIONS[currentQuestion];
  const selectedType = q.options[index].type;

  // 保存答案
  answers.push(selectedType);
  history.push(index);

  // 进入下一题或显示结果
  if (currentQuestion < QUESTIONS.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    answers.pop();
    history.pop();
    renderQuestion();
  }
}

// =========================================
// 计算结果
// =========================================
function calculateResult() {
  // 统计各类型出现次数
  const counts = Object.keys(RESULTS).reduce((acc, type) => {
    acc[type] = 0;
    return acc;
  }, {});
  answers.forEach(type => {
    counts[type] = (counts[type] || 0) + 1;
  });

  // 找出最高分的类型
  let maxCount = 0;
  let candidates = [];

  Object.entries(counts).forEach(([type, count]) => {
    if (count > maxCount) {
      maxCount = count;
      candidates = [type];
    } else if (count === maxCount) {
      candidates.push(type);
    }
  });

  // 如果有并列，按优先级选择
  if (candidates.length === 1) {
    return candidates[0];
  }

  // 并列时，选择用户最近一次明确选择过的候选人格，避免固定优先级造成偏向
  for (let i = answers.length - 1; i >= 0; i--) {
    if (candidates.includes(answers[i])) {
      return answers[i];
    }
  }

  return 'seller';
}

// =========================================
// 显示结果
// =========================================
function showResult() {
  const resultType = calculateResult();
  const result = RESULTS[resultType];

  // 保存当前结果类型
  currentResultType = resultType;

  // 填充结果数据
  document.getElementById('result-title').textContent = result.name;
  document.getElementById('result-tagline').textContent = result.tagline;
  document.getElementById('result-emoji').textContent = result.emoji;
  document.getElementById('result-description').textContent = result.description;

  // 填充优势
  const strengthsList = document.getElementById('result-strengths');
  strengthsList.innerHTML = result.strengths.map(s => `<li>${s}</li>`).join('');

  // 填充坑点
  const pitfallsList = document.getElementById('result-pitfalls');
  pitfallsList.innerHTML = result.pitfalls.map(p => `<li>${p}</li>`).join('');

  // 渲染其他类型卡片
  renderOtherTypes(resultType);
  renderPoster(result);

  // 切换页面
  switchPage('result');

  // 滚动到顶部
  window.scrollTo(0, 0);
}

function renderOtherTypes(currentType) {
  const otherTypes = Object.values(RESULTS).filter(r => r.id !== currentType);

  elements.otherTypesContainer.innerHTML = otherTypes.map(type => `
    <button class="type-card" type="button" data-type="${type.id}" aria-label="查看${type.name}说明">
      <div class="emoji">${type.emoji}</div>
      <div class="name">${type.name}</div>
    </button>
  `).join('');
}

function renderKeywords(container, keywords) {
  container.innerHTML = keywords.map(keyword => `<span>${keyword}</span>`).join('');
}

function renderPoster(result) {
  elements.posterEmoji.textContent = result.emoji;
  elements.posterTitle.textContent = result.name;
  elements.posterTagline.textContent = result.tagline;
  elements.posterPath.textContent = result.path;
  renderKeywords(elements.posterKeywords, result.keywords);
}

function showTypeModal(typeId) {
  const type = RESULTS[typeId];
  if (!type) return;

  elements.typeModalEmoji.textContent = type.emoji;
  elements.typeModalTitle.textContent = type.name;
  elements.typeModalTagline.textContent = type.tagline;
  elements.typeModalDescription.textContent = type.description;
  elements.typeModalPath.textContent = type.path;
  renderKeywords(elements.typeModalKeywords, type.keywords);
  elements.typeModal.hidden = false;
}

function closeTypeModal() {
  elements.typeModal.hidden = true;
}

// =========================================
// 查看完整建议
// =========================================
function showFullAdvice() {
  if (!currentResultType) return;

  const result = RESULTS[currentResultType];
  const advice = FULL_ADVICES[currentResultType];

  // 填充顶部信息
  elements.adviceTypeEmoji.textContent = result.emoji;
  elements.adviceTypeName.textContent = result.name;

  // 填充路线图
  elements.adviceRoadmap.innerHTML = advice.roadmap.map((item, idx) => `
    <div class="roadmap-item">
      <div class="roadmap-step-num" style="background: ${result.color}">${item.step}</div>
      <div class="roadmap-item-content">
        <div class="roadmap-item-title">${item.title}</div>
        <div class="roadmap-item-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');

  // 填充行动清单
  elements.adviceActions.innerHTML = advice.actions.map((action, idx) => `
    <li class="advice-action-item">
      <span class="action-num" style="background: ${result.color}">${idx + 1}</span>
      <span class="action-text">${action}</span>
    </li>
  `).join('');

  // 填充避坑指南
  elements.advicePitfalls.innerHTML = advice.personalPitfalls.map(p => `
    <div class="pitfall-item">
      <span class="pitfall-icon">⚠</span>
      <span>${p}</span>
    </div>
  `).join('');

  switchPage('fullAdvice');
  window.scrollTo(0, 0);
}

function backToResult() {
  switchPage('result');
  window.scrollTo(0, 0);
}

// =========================================
// 保存图片
// =========================================
async function saveResultCard() {
  const card = document.getElementById('result-card');
  if (!card) {
    showToast('❌ 无法找到结果卡片');
    return;
  }

  const result = RESULTS[currentResultType] || {};
  const restoreButton = setButtonLoading(elements.saveCardBtn, '生成中...');

  try {
    await captureElementAsImage(
      card,
      `赚钱人格测试_详细卡_${result.name || '结果'}.png`,
      `${CONFIG.BRAND}详细卡`
    );
  } catch (err) {
    console.error('保存详细卡失败:', err);
    showToast('❌ 生成失败，请稍后重试');
  } finally {
    restoreButton();
  }
}

async function saveShortPoster() {
  if (!currentResultType) return;

  const result = RESULTS[currentResultType];
  renderPoster(result);

  const restoreButton = setButtonLoading(elements.savePosterBtn, '生成中...');

  try {
    elements.posterCard.classList.add('is-capturing');
    await captureElementAsImage(
      elements.posterCard,
      `赚钱人格测试_短海报_${result.name}.png`,
      `${CONFIG.BRAND}短海报`
    );
  } catch (err) {
    console.error('保存短海报失败:', err);
    showToast('❌ 生成失败，请稍后重试');
  } finally {
    elements.posterCard.classList.remove('is-capturing');
    restoreButton();
  }
}

// =========================================
// 重新测试
// =========================================
function restartQuiz() {
  currentQuestion = 0;
  answers = [];
  history = [];
  switchPage('home');
}

// =========================================
// 事件绑定
// =========================================
function bindEvents() {
  // 开始测试
  elements.startBtn.addEventListener('click', startQuiz);

  // 返回上一题
  elements.backBtn.addEventListener('click', goBack);

  // 查看完整建议
  elements.viewFullBtn.addEventListener('click', showFullAdvice);

  // 完整建议页返回
  elements.fullAdviceBackBtn.addEventListener('click', backToResult);

  // 完整建议页重新测试
  elements.adviceRestartBtn.addEventListener('click', restartQuiz);

  // 重新测试
  elements.restartBtn.addEventListener('click', restartQuiz);

  // 保存短海报
  elements.savePosterBtn.addEventListener('click', saveShortPoster);

  // 保存卡片
  elements.saveCardBtn.addEventListener('click', saveResultCard);

  // 其他人格弹窗
  elements.otherTypesContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.type-card');
    if (card) {
      showTypeModal(card.dataset.type);
    }
  });

  elements.typeModalClose.addEventListener('click', closeTypeModal);
  elements.typeModal.addEventListener('click', (e) => {
    if (e.target === elements.typeModal) {
      closeTypeModal();
    }
  });

  elements.imagePreviewClose.addEventListener('click', closeImagePreview);
  elements.imagePreviewModal.addEventListener('click', (e) => {
    if (e.target === elements.imagePreviewModal) {
      closeImagePreview();
    }
  });
  elements.downloadImageBtn.addEventListener('click', () => {
    if (previewImageBlob) {
      downloadBlob(previewImageBlob, previewImageFilename || '赚钱人格测试.png');
      showToast('✅ 已重新下载图片');
    }
  });

  // 键盘支持
  document.addEventListener('keydown', (e) => {
    if (!elements.typeModal.hidden && e.key === 'Escape') {
      closeTypeModal();
      return;
    }

    if (!elements.imagePreviewModal.hidden && e.key === 'Escape') {
      closeImagePreview();
      return;
    }

    if (e.key === 'Escape' && pages.quiz.classList.contains('active')) {
      goBack();
      return;
    }

    if (pages.quiz.classList.contains('active')) {
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
      const optionIndex = keyMap[e.key.toLowerCase()];
      if (optionIndex !== undefined && QUESTIONS[currentQuestion].options[optionIndex]) {
        selectOption(optionIndex);
      }
    }
  });
}

// =========================================
// 初始化
// =========================================
function init() {
  bindEvents();
  console.log('[赚钱人格测试] 初始化完成');
}

// 启动
document.addEventListener('DOMContentLoaded', init);
