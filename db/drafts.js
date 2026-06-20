/**
 * 模块：[Drafts / 未寄出信笺]
 * 调性：极度克制下的情感偏差。
 * 每一篇都是 L 逻辑世界中无法被代码消解的「感性残余」。
 */

const DB_Drafts = [
    {
        id: "D-001",
        category: "Drafts",
        title: "Early Opening of the End",
        path: "/Drafts/Unsent/Letter_to_Light.txt",
        content_en: `Light, if this file is decrypted, it means the probability of my physical cessation has reached 100%. I once told you that we would part, not as a threat, but as an observation of a shifting trajectory. From the moment we first shook hands, the 'Detective-Subject' binary began to collapse. You are the only variable that has ever caused a persistent tremor in my logic. I don't regret the sugar or the sleepless nights; I only find it statistically curious that the person who understands my silence best is the one who must silence me forever.`,
        content_zh: `月，如果这份文件被解密，意味着我肉体消亡的概率已达到 100%。我曾说过我们会分开，那并非威胁，而是对轨迹偏移的观测。从我们第一次握手起，「侦探与对象」的二元对立就开始崩塌了。你是唯一一个让我的逻辑产生持续震颤的变量。我不后悔那些方糖或不眠之夜，我只是在统计学上感到好奇：那个最懂我沉默的人，竟是那个必须让我永远沉默的人。`
    },
    {
        id: "D-002",
        category: "Drafts",
        title: "The Lost Wammy's File",
        path: "/Drafts/Unsent/Identity_Solitude.txt",
        content_en: `Wammy's House removed identifiers, name, history—irrelevant. Only correct answers remained. Your existence introduces a different condition: an answer that cannot be derived, only observed. Your lies are structurally consistent. Almost indistinguishable from truth. This symmetry is... notable. If your 'new world' is achieved, its thermal profile is likely low. Unsuitable for most human subjects.`,
        content_zh: `温米之家剥离了所有身份标识、名字、过去——均为无关变量。只剩下「正确答案」。你的存在引入了另一种情况：某些答案无法被推导，只能被观测。你的谎言在结构上是自洽的，几乎无法与真实区分。这种对称性……值得记录。如果你的「新世界」成立，其温度特征大概率偏低，不适合大多数人类生存。`
    },
    {
        id: "D-003",
        category: "Drafts",
        title: "The Logic of Sugar Substitution",
        path: "/Drafts/Unsent/Glucose_Log.txt",
        content_en: `People ask why I consume so much sugar. The honest answer is that I don't know either. The medical explanation about glucose and cognitive function is convenient, so I use it. But if I'm being precise—and I always am—it started long before I needed to think hard about anything. Maybe it's simpler than that. Sweet things don't lie. A strawberry cake is exactly what it promises to be. You, on the other hand, are a five-course meal that might be poisoned. I kept eating cake because at least the cake never made me recalculate my entire model of the world at 3am. And yet—I would choose the poison every time. That's the part I can't explain with glucose.`,
        content_zh: `人们问我为什么吃这么多糖。老实说我自己也不确定。关于葡萄糖与认知功能的医学解释很方便，所以我一直在用。但如果精确一点——而我总是精确的——这个习惯早在我需要高强度思考之前就开始了。也许答案比那简单得多。甜的东西不会骗人。一块草莓蛋糕就是它承诺的样子。而你，是一桌可能下了毒的满汉全席。我一直在吃蛋糕，至少蛋糕不会让我在凌晨三点重新推翻整个世界模型。但如果让我重新选——我每次都会选那杯毒酒。这一点，我没办法用葡萄糖来解释。`
    },
    {
        id: "D-004",
        category: "Drafts",
        title: "Sensory Observations in the Rain",
        path: "/Drafts/Unsent/Rain_Verification.txt",
        content_en: `The rain was neither symbolic nor romantic. It was 18 degrees, moderate humidity, and my shoes were wet. I dried your feet because I wanted to know if they were warm. They were. That single data point told me more than six months of surveillance. A person planning what you're planning should have cold extremities—vasoconstriction from sustained cortisol. But yours were warm. Which means either my hypothesis is wrong, or you've gotten so good at this that even your circulatory system believes the lie. I think it's the latter. I also think that was the last time I'll touch another person without an investigative purpose. Strange, that I don't mind.`,
        content_zh: `那场雨既不象征什么，也不浪漫。气温18度，湿度中等，我的鞋湿了。我为你擦脚是因为我想知道它们是不是温的。是的。这一个数据点告诉我的，比六个月的监控都多。一个正在计划你所计划之事的人，四肢末端应该是冷的——持续皮质醇导致的血管收缩。但你的是温的。这意味着要么我的假设错了，要么你已经熟练到连自己的循环系统都相信了那个谎言。我认为是后者。我还认为，那是我最后一次不带调查目的地触碰另一个人。奇怪的是，我并不介意。`
    },
    {
        id: "D-005",
        category: "Drafts",
        title: "Deletion of the Alias 'L'",
        path: "/Drafts/Unsent/System_Logoff.txt",
        content_en: `'L' is not a person, but a function. When I fall, the function will eventually be restored by others. But the 'L' who sat across from you, challenging your arrogance, will be permanently deleted. I wondered if I should have told you my real name. Would it have changed the outcome, or just added another name to your notebook? Probably the latter. To the world, I am a symbol; to you, I was an obstacle. But to myself, for a brief moment in that rain, I was just a man who lost a game.`,
        content_zh: `「L」不是一个人，而是一个函数。当我倒下，这个函数终会被他人修复。但那个坐在你对面、挑战你傲慢的「L」，将被永久删除。我在想，我是不是该告诉你我的真名。这会改变结局，还是仅仅给你的笔记本增加一个名字？大概是后者。对世界而言，我是一个符号；对你而言，我是一个障碍。但对我自己，在那场雨的短暂瞬间，我只是一个输了游戏的凡人。`
    }
];
