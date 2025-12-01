export default {
  app: {
    title: 'RFID 赋能的移动端 ERP',
    subtitle: '双语、极速，为资产密集型团队而生'
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
      title: '入库管理',
      desc: '预分配、月台指派、质检均通过 RFID 校验'
    },
    tag: {
      title: '标签绑定',
      desc: '批量高频扫描，自动配对资产与 EPC'
    },
    transfer: {
      title: '调拨',
      desc: '仓库、产线、车辆间的 RFID 确认调拨'
    },
    receiving: {
      title: '接收',
      desc: 'RFID 辅助接收与异常处理'
    },
    usage: {
      title: '使用追踪',
      desc: '通过 RFID 关口采集运行数据'
    },
    maintenancePlan: {
      title: '维修计划',
      desc: '实时读写驱动的预防性保养计划'
    },
    maintenanceRecords: {
      title: '维修记录',
      desc: '围绕 RFID 身份的闭环记录'
    },
    scrap: {
      title: '报废管理',
      desc: '全流程合规留痕的生命周期终结'
    }
  },
  dashboard: {
    heading: 'RFID 运行控制中心',
    velocity: '扫描速度',
    accuracy: '读取准确率',
    uptime: '读写器在线率',
    timeline: 'RFID 事件时间线'
  },
  inbound: {
    title: '入库管理',
    preload: '预报',
    staging: '暂存区',
    qaStatus: '质检状态',
    tagsPaired: '已配对标签'
  },
  tagBinding: {
    title: '批量标签绑定',
    guidance: '高速交替扫描资产与标签，系统自动配对。',
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
