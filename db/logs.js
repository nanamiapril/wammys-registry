/**
 * 模块：[Logs / 观察日志]
 * 调性：冰冷的采样感、监控视角、对微小异常的病理学捕捉。
 */

const DB_Logs = [
    {
        id: "L-101",
        category: "Logs",
        title: "The 0.2s Anomaly",
        path: "/Logs/Observation/Micro_Expression_01.log",
        content_en: `Timestamp: 16:28:04. Location: University Library. During a routine discussion regarding Subject K's case files, Subject Yagami's right index finger remained stationary for 0.2 seconds while turning a page. This delay does not correlate with reading speed or cognitive processing of the text. It is a biological echo of a 'search' signal—as if he were instinctively scanning for a threat that only he knows exists. Result: 7% increase in correlation probability. Subject is no longer merely 'acting'; he is beginning to camouflage within his own perfection.`,
        content_zh: `时间戳：16:28:04。地点：大学图书馆。在讨论目标 K 相关案卷的例行谈话中，目标夜神月的右食指在翻页时停滞了 0.2 秒。这种延迟与阅读速度或文本认知无关，而更像是某种「检索」信号的生物学残响——仿佛他在本能地扫描一个只有他知道存在的威胁。结论：关联概率提升 7%。目标已不再仅仅是「演戏」，他正开始在自身的完美中进行拟态。`
    },
    {
        id: "L-102",
        category: "Logs",
        title: "Coffee and Pulse Rate",
        path: "/Logs/Observation/Physiological_Sync.log",
        content_en: `I offered him a cup of coffee today. He accepted it with a standard social smile (Musculus risorius involvement: 100%). However, as he tilted the cup, his pulse rate (monitored via visual jugular vein vibration) dropped by 3 beats per minute. A normal human shows a slight elevation in heart rate when accepting a gesture from a potential adversary. Light Yagami, however, forced a deceleration. He is not just controlling his actions; he is rewriting his own autonomic responses in real time. This level of self-regulation is either transcendent or deeply fractured.`,
        content_zh: `今天我递给他一杯咖啡。他以标准的社交微笑接过去（笑肌参与度：100%）。然而，在他倾斜杯子时，他的脉搏（通过颈静脉视觉振动监测）每分钟下降了 3 次。正常人在接受潜在对手的善意时会心跳加速，夜神月却强制其减速。他不仅在控制行为，更是在实时覆写自己的自主神经应答。这种层级的自我规制，要么属于超越，要么属于深层的断裂。`
    },
    {
        id: "L-103",
        category: "Logs",
        title: "The Nocturnal Gaze",
        path: "/Logs/Observation/Late_Night_Study.log",
        content_en: `03:42 AM. The monitor shows him still studying. Most humans exhibit 'micro-slumps' in posture at this hour. Light remains perfectly upright. He isn't studying the curriculum; he is maintaining the image of 'The Ideal Student' for the benefit of the camera—for my benefit. We are engaged in a silent dialogue through a lens. He knows I am watching, and I know he knows. The paradox of this observation: the more flawless his performance, the more certain I am of the distortion it conceals.`,
        content_zh: `凌晨 03:42。监控显示他仍在学习。大多数人类在这个时间点都会出现姿势的「微塌」，但月依然保持完美的挺拔。他不是在学习课程，而是在为了镜头——为了我——维持「理想学生」的形象。我们正通过镜头进行一场无声的对话。他知道我在看，我也知道他知道。这场观察的悖论在于：他的表演越完美无缺，我就越确信其中隐藏的失真。`
    },
    {
        id: "L-104",
        category: "Logs",
        title: "The Mirroring Effect",
        path: "/Logs/Observation/Mirror_Behavior.log",
        content_en: `Subject has begun to unconsciously (or perhaps hyper-consciously) mirror my sitting posture. A subtle tilt of the head, a specific way of holding a cell phone. In psychology, mirroring builds rapport. But between us, it feels like a tactical invasion. He is trying to colonize my habits to predict my thoughts. It is a dangerous game of shadows. If I am the abyss, he is trying to become the reflection that stares back until the abyss itself feels exposed.`,
        content_zh: `目标开始无意识（或许是超意识）地模仿我的坐姿。微妙的倾头角度，特定的持机方式。在心理学中，模仿能建立好感，但在我们之间，这更像是一种战术入侵。他试图殖民我的习惯来预测我的思维。这是一场危险的影子游戏。如果我是深渊，他正试图成为那面回望的镜子，直到深渊本身感到无所遁形。`
    },
    {
        id: "L-105",
        category: "Logs",
        title: "Residual Satisfaction",
        path: "/Logs/Observation/After_Action_Report.log",
        content_en: `After the latest case update aired on the news, there was a 0.5-second dilation in his pupils. It wasn't surprise—it was a flicker of 'completion' suppressed by an artificial layer of concern. It is the look of an architect inspecting a finished blueprint. He views the world as a corrupted system that only he can debug. My presence to him is simply the last stubborn process that refuses to terminate according to his schedule. The system clock is running, but our timestamps are no longer synchronized.`,
        content_zh: `在最新一起案件的新闻播出后，他的瞳孔出现了 0.5 秒的放大。那不是惊讶，而是被人工的关切掩盖的一丝「完成感」。那是建筑师在检查竣工蓝图时的眼神。他将世界视为一个只有他能调试的故障系统，而我的存在对他而言，只是最后一个拒绝按照他的计划表终止的顽固进程。系统时钟在走，但我们的时间戳已不再同步。`
    }
];
