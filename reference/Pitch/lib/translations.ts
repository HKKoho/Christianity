export const translations = {
  'en': {
    hero: {
      title: "Let's Stop Making<br/><span class='text-brand-gold-400 text-6xl sm:text-8xl'>\"Shadow Believers\"</span>",
      subtitle: "From knowing <em>about</em> God<br />to truly <em>knowing</em> Him together.",
      cta: "Discover the Vision",
    },
    introduction: {
        title: "The Discipleship Crisis",
        paragraph: "Many know <em>about</em> God, but don't truly <em>know</em> Him.<br />We bridge the gap from passive knowledge to active, shared faith.",
        danger: {
            title: "The Danger of Passive Faith",
            points: [
                "Creates a false sense of maturity.",
                "Puts passive knowledge over active faith.",
                "Inoculates against Jesus' transformational call.",
                "Leads to a lack of genuine relationship with Christ."
            ]
        }
    },
    vision: {
        title: "Our Vision: A Living Walk,<br />Not a Program",
        quote: {
            text: "The fear of the LORD is the beginning of wisdom, and the knowledge of the Holy One is insight.",
            reference: "— Proverbs 9:10",
        },
        paragraph: "We nurture a genuine walk with God: from knowledge, to practice, to shared experience.",
        pathway: [
            { title: "SPARK KNOWLEDGE", subtitle: "Truth", color: "text-purple-700" },
            { title: "INSPIRE PRACTICE", subtitle: "Practice", color: "text-blue-700" },
            { title: "CULTIVATE EXPERIENCE", subtitle: "Experience", color: "text-orange-700" },
            { title: "DEEPEN FELLOWSHIP", subtitle: "Fellowship", color: "text-red-700" }
        ],
        conclusion: "Knowledge → Practice → Shared Experience"
    },
    features: {
      title: "Our 8-Step Transformation Pathway",
      subtitle: "Guiding users from cultural curiosity to genuine discipleship.",
      list: [
        {
          icon: "Palette",
          title: "1. Cultural Entry Point",
          content: "Engage with beautiful art, music, and history as a non-threatening entry point.",
          benefit: "Low-Friction Entry",
        },
        {
          icon: "HelpCircle",
          title: "2. The 'Why' Question",
          content: "Shift focus from 'what' to 'why' to spark deeper, reflective thought.",
          benefit: "Sparks Active Reflection",
        },
        {
          icon: "Edit3",
          title: "3. Guided Reflection",
          content: "Optional prompts connect truths to personal life, bridging knowledge and experience.",
          benefit: "Personalizes Truth",
        },
        {
          icon: "Link",
          title: "4. Progressive Disclosure",
          content: "Users naturally click their way from aesthetics (a hymn) to doctrine (the meaning of grace).",
          benefit: "User-Led Path to Depth",
        },
         {
          icon: "Layers",
          title: "5. Layered Content",
          content: "Each topic has levels: Surface, Intermediate, and Deep. Users choose their depth.",
          benefit: "Empowers User Choice",
        },
        {
          icon: "BrainCircuit",
          title: "6. Active Retrieval",
          content: "Quizzes and spaced repetition ensure users actively learn and retain core truths.",
          benefit: "Builds Lasting Knowledge",
        },
        {
          icon: "Users",
          title: "7. Community Discussion",
          content: "Users discuss what they're learning, asking real questions to solidify understanding.",
          benefit: "Deepens Through Fellowship",
        },
        {
          icon: "CheckSquare",
          title: "8. Gentle Accountability",
          content: "Follow-ups on personal application goals provide encouragement to turn intention into action.",
          benefit: "Turns Intention into Action",
        },
      ]
    },
    implementation: {
      title: "From Vision to Reality",
      subtitle: "Our 8-week plan to bring this vision to life.",
    },
    timeline: {
        title: "8-Week Path to Launch",
        items: [
            {
                weeks: 'Weeks 1-3',
                title: 'Foundation & Core Logic',
                description: 'Build core database, authentication, and feature logic.',
                color: 'bg-purple-500',
            },
            {
                weeks: 'Weeks 4-6',
                title: 'User Experience & Engagement',
                description: 'Develop dashboard, reflection prompts, and trackers.',
                color: 'bg-blue-500',
            },
            {
                weeks: 'Weeks 7-8',
                title: 'Integration, Polish & Launch',
                description: 'Integrate all modules, conduct testing, and launch.',
                color: 'bg-green-500',
            },
        ],
        total: {
            label: "Total Estimated Development",
            value: "200-240 hours",
            sublabel: "(25-30 hours/week over 8 weeks)",
        }
    },
    cost: {
        title: "Lean & Sustainable Budget",
        hosting: {
            title: "Monthly Hosting",
            price: "$5-10",
            description: "MongoDB (free) + Railway ($5) + Vercel (free)",
        },
        setup: {
            title: "One-Time Setup",
            price: "$15",
            description: "Domain name registration",
        },
        development: {
            title: "Development Cost (If Hiring)",
            price: "at least $7000",
            description: "Consider engaging a <span class=\"font-semibold\">volunteer developer</span> from your community. Working with us costs only one-third.",
        }
    },
    choice: {
        title: "The Two Paths Before Us",
        subtitle: "The choice: Build for audience size, or for life-changing depth.",
        path1: {
            title: "Path 1: The Content Library",
            subtitle: "The \"Christian Netflix\" Model",
            points: [
                { text: "High initial sign-ups", icon: "✓", color: "text-green-600", style: "" },
                { text: "Simpler to build", icon: "✓", color: "text-green-600", style: "" },
                { text: "Users feel productive", icon: "✓", color: "text-green-600", style: "" },
                { text: "Creates shallow faith", icon: "✗", color: "text-red-600", style: "font-bold text-red-800" },
                { text: "Fails to truly transform", icon: "✗", color: "text-red-600", style: "font-bold text-red-800" },
            ]
        },
        path2: {
            badge: "The Discipleship Way",
            title: "Path 2: The Transformation Tool",
            subtitle: "A Genuine Discipleship Model",
            points: [
                { text: "Fosters genuine life-change", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "Makes true disciples", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "Lasting Kingdom impact", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "Harder to build", icon: "⚠", color: "text-yellow-600", style: "text-yellow-700" },
                { text: "Fewer initial users", icon: "⚠", color: "text-yellow-600", style: "text-yellow-700" },
            ]
        }
    },
    cta: {
        title: "Let's Build for the Kingdom.",
        quote: {
            text: "\"Whatever you do, work heartily, as for the Lord and not for men.\"",
            reference: "— Colossians 3:23",
        },
        checklistTitle: "Our Next Steps",
        steps: [
            'Discuss & commit to building for depth over numbers.',
            'Decide to prioritize transformation over vanity metrics.',
            'Identify and empower a developer (volunteer or hired).',
            'Pray for the wisdom and courage to build what truly honors God.',
        ],
        contactButton: "Get in Touch"
    },
    footer: {
      line1: "A Proposal for Genuine Discipleship",
      line2: "To save, please use your browser's \"Print to PDF\" function.",
    }
  },
  'zh-hant': {
    hero: {
      title: "讓我們停止製造<br/><span class='text-brand-gold-400 text-6xl sm:text-8xl'>「影子信徒」</span>",
      subtitle: "從知道<em>關於</em>神<br />到共同<em>經歷</em>神。",
      cta: "探索此異象",
    },
    introduction: {
        title: "門徒危機",
        paragraph: "許多人知道<em>關於</em>神，卻不真正<em>認識</em>祂。<br />我們將被動的知識轉化為主動、共享的信仰。",
        danger: {
            title: "被動信仰的危險",
            points: [
                "造成虛假的屬靈成熟感。",
                "被動知識取代主動信仰。",
                "對耶穌的轉化呼召產生免疫。",
                "缺乏與基督的真實關係。"
            ]
        }
    },
    vision: {
        title: "我們的異象：<br />一場真實的同行，而非一個計劃",
        quote: {
            text: "敬畏耶和華是智慧的開端；認識至聖者便是聰明。",
            reference: "— 箴言 9:10",
        },
        paragraph: "我們培育與神同行的真實旅程：從知識到實踐，再到共同經歷。",
        pathway: [
            { title: "點燃知識", subtitle: "真理", color: "text-purple-700" },
            { title: "激發實踐", subtitle: "實踐", color: "text-blue-700" },
            { title: "培養經歷", subtitle: "經歷", color: "text-orange-700" },
            { title: "深化團契", subtitle: "團契", color: "text-red-700" }
        ],
        conclusion: "知識 → 實踐 → 共同經歷"
    },
    features: {
      title: "我們的八步轉化路徑",
      subtitle: "引導用戶從文化好奇心到真實的門徒訓練。",
      list: [
        {
          icon: "Palette",
          title: "1. 文化入口",
          content: "以優美的藝術、音樂和歷史作為無威脅性的入口。",
          benefit: "低門檻進入",
        },
        {
          icon: "HelpCircle",
          title: "2. 「為什麼」問題",
          content: "將焦點從「是什麼」轉向「為什麼」，激發深度反思。",
          benefit: "激發主動反思",
        },
        {
          icon: "Edit3",
          title: "3. 引導式反思",
          content: "可選的提示將真理與個人生活聯繫起來。",
          benefit: "個人化真理",
        },
        {
          icon: "Link",
          title: "4. 漸進式披露",
          content: "用戶自然地從美學（如讚美詩）點擊進入教義（如恩典的意義）。",
          benefit: "用戶主導的深度路徑",
        },
         {
          icon: "Layers",
          title: "5. 分層式內容",
          content: "每個主題都有表層、中層和深層。用戶可自行選擇深度。",
          benefit: "賦予用戶選擇權",
        },
        {
          icon: "BrainCircuit",
          title: "6. 主動回想",
          content: "用測驗和間隔重複確保用戶能主動學習並記住核心真理。",
          benefit: "建立持久知識",
        },
        {
          icon: "Users",
          title: "7. 社群討論",
          content: "用戶討論所學，提出真實問題，鞏固理解。",
          benefit: "在團契中深化",
        },
        {
          icon: "CheckSquare",
          title: "8. 溫和問責",
          content: "跟進個人應用目標，鼓勵將意圖轉化為行動。",
          benefit: "化意圖為行動",
        },
      ]
    },
    implementation: {
      title: "從願景到現實",
      subtitle: "我們的8週計劃，將此異象化為現實。",
    },
    timeline: {
        title: "8週啟動路徑",
        items: [
            {
                weeks: '第1-3週',
                title: '基礎與核心邏輯',
                description: '建立核心數據庫、身份驗證和功能邏輯。',
                color: 'bg-purple-500',
            },
            {
                weeks: '第4-6週',
                title: '用戶體驗與參與',
                description: '開發儀表板、反思提示和追蹤器。',
                color: 'bg-blue-500',
            },
            {
                weeks: '第7-8週',
                title: '整合、完善與啟動',
                description: '整合所有模塊，進行測試並啟動。',
                color: 'bg-green-500',
            },
        ],
        total: {
            label: "總預計開發時間",
            value: "200-240小時",
            sublabel: "(8週內每週25-30小時)",
        }
    },
    cost: {
        title: "精簡且可持續的預算",
        hosting: {
            title: "每月託管費用",
            price: "$5-10美元",
            description: "MongoDB (免費) + Railway ($5) + Vercel (免費)",
        },
        setup: {
            title: "一次性設置費用",
            price: "$15美元",
            description: "域名註冊",
        },
        development: {
            title: "開發成本（若外包）",
            price: "至少 $7000美元",
            description: "可考慮讓社群內的<span class=\"font-semibold\">志願開發者</span>參與。與我們合作的成本僅為三分之一。",
        }
    },
    choice: {
        title: "我們面前的兩條路",
        subtitle: "選擇：為觀眾規模而建，還是為改變生命的深度而建。",
        path1: {
            title: "路徑一：內容資料庫",
            subtitle: "「基督徒 Netflix」模式",
            points: [
                { text: "初期註冊人數多", icon: "✓", color: "text-green-600", style: "" },
                { text: "構建更簡單", icon: "✓", color: "text-green-600", style: "" },
                { text: "用戶感覺有生產力", icon: "✓", color: "text-green-600", style: "" },
                { text: "造成膚淺的信仰", icon: "✗", color: "text-red-600", style: "font-bold text-red-800" },
                { text: "無法帶來真正轉化", icon: "✗", color: "text-red-600", style: "font-bold text-red-800" },
            ]
        },
        path2: {
            badge: "門徒之道",
            title: "路徑二：轉化工具",
            subtitle: "真正的門徒訓練模式",
            points: [
                { text: "促進真正的生命改變", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "塑造真正的門徒", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "創造持久的國度影響", icon: "✓", color: "text-green-600", style: "font-bold text-green-800" },
                { text: "構建更困難", icon: "⚠", color: "text-yellow-600", style: "text-yellow-700" },
                { text: "初期用戶較少", icon: "⚠", color: "text-yellow-600", style: "text-yellow-700" },
            ]
        }
    },
    cta: {
        title: "讓我們為神國而建。",
        quote: {
            text: "「無論做甚麼，都要從心裡做，像是給主做的，不是給人做的。」",
            reference: "— 歌羅西書 3:23",
        },
        checklistTitle: "我們的下一步",
        steps: [
            '討論並承諾：為深度而非數量而建。',
            '決定將轉化置於虛榮指標之上。',
            '確定並授權一名開發人員（志願者或受薪者）。',
            '同心禱告，求神賜予智慧和勇氣。',
        ],
        contactButton: "開始對話"
    },
    footer: {
      line1: "一份關於真正門徒訓練的提案",
      line2: "如需保存，請使用瀏覽器的「打印為PDF」功能。",
    }
  }
};