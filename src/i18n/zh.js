export default {
  app: {
    title: '酒店布草 RFID 中枢',
    subtitle: '双语、极速，为客房与洗衣高频流程而生'
  },
  common: {
    search: '搜索',
    filter: '筛选',
    scan: 'RFID 扫描',
    continuousScan: '连续扫描',
    stop: '停止',
    status: '状态',
    tagId: '标签 ID',
    asset: '资产',
    location: '位置',
    action: '操作',
    add: '新增',
    save: '保存',
    cancel: '取消',
    history: '历史',
    details: '详情',
    language: '语言',
    queue: '扫描队列',
    rfidFocus: 'RFID 优先流程'
  },
  modules: {
    inbound: {
      title: '洗衣入库',
      desc: '月台收货、污渍质检、EPC 校验一体化'
    },
    tag: {
      title: '标签绑定',
      desc: '高速批量绑定床品、毛巾、浴袍、地巾等 EPC'
    },
    transfer: {
      title: '调拨',
      desc: '洗衣房、布草间与手推车之间的 RFID 确认调拨'
    },
    receiving: {
      title: '接收',
      desc: '客房/场馆收货，RFID 凭证与差异留痕'
    },
    usage: {
      title: '使用追踪',
      desc: '按房间/翻台读取，监控单件循环次数'
    },
    maintenancePlan: {
      title: '去渍与修补计划',
      desc: '由读写驱动的轮换与深度清洁排程'
    },
    maintenanceRecords: {
      title: '修补记录',
      desc: '围绕布草 RFID 身份的闭环追踪'
    },
    scrap: {
      title: '报废管理',
      desc: '报废/再生全链路合规留痕'
    }
  },
  dashboard: {
    heading: '布草 RFID 控制中心',
    velocity: '扫描速度',
    accuracy: '读取准确率',
    uptime: '读写器在线率',
    timeline: 'RFID 事件时间线'
  },
  inbound: {
    title: '洗衣入库',
    preload: '预报',
    staging: '暂存区',
    qaStatus: '质检状态',
    tagsPaired: '已配对标签'
  },
  tagBinding: {
    title: '批量标签绑定',
    guidance: '高速交替扫描布草与标签，系统自动配对。',
    bound: '已绑定',
    pending: '待确认',
    errors: '冲突'
  },
  transfer: {
    title: '调拨编排',
    from: '来源',
    to: '去向',
    carrier: '承运',
    stage: '阶段',
    verified: 'RFID 已校验'
  },
  receiving: {
    title: '接收与异常',
    proof: '交付凭证',
    discrepancy: '差异处理'
  },
  usage: {
    title: '使用追踪',
    checkpoints: '读写关口',
    runtime: '运行时长'
  },
  maintenancePlan: {
    title: '维修计划',
    window: '时间窗',
    frequency: '频率',
    next: '下次到期'
  },
  maintenanceRecords: {
    title: '维修记录',
    technician: '技师',
    result: '结果',
    notes: '备注'
  },
  scrap: {
    title: '报废与注销',
    method: '方式',
    compliance: '合规编号'
  }
};
