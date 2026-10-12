export const storyTitle = 'Introduction to My Development Skills and Career'

export const storyParagraphs = [
  `Born a year before the release of Windows 95, I can't quite pinpoint when my fascination with computers began. It just always seemed to be there. From a young age, I became thoroughly proficient with every legacy OS of that era: Win95, Win98, WinME, Win2000, WinXP, and WinVista. Young as I was, I understood and operated them all at a solid level. Back then, I knew my way around all of it - WinME, which would completely lock up the moment the power so much as flickered, and Windows 2000, whose source code Microsoft eventually made public. Oh, and this is kind of a silly one, but I still remember multiple Win98 serial numbers to this day. Ha. I must have memorized them so young that they're just permanently stuck up there, and can't get rid of them even if I tried.`,

  `If I had to trace the origin of my interest in programming, it would probably be my desire to build something like the MSPaint that came with Win95. My very first programming language was Pascal - primitive by today's standards, a procedural-oriented relic - but it was widely used at the time. For a good while I was completely obsessed with it, spending my days staring at that iconic blue background with white and yellow foreground text on the crt screen.`,

  `From there I explored Visual Basic, Delphi, Flash Script, and various other approaches before finally arriving at C — the true language of programmers. I was 14 years old when I first picked up C/C++. Obviously I wasn't old enough to start a professional career, so I pursued it as a hobby, happily spending my time with C, C++, Windows NT Programming, APIs, MFC, and all manner of libraries. During this period I built apps like a VNC-style remote desktop tool using the Windows API, and gained hands-on experience with threading and asynchronous processing. For someone so young, it was a substantial body of experience.`,

  `After that, I spent a lot of time on Fedora using KDevelop with the Qt library — though I can't recall the exact version. Once I started working professionally, I continued with Qt across Windows and Android, among other platforms. I genuinely enjoyed KDE development as well.`,

  `One thing I remember clearly. I first encountered HTML, CSS, JavaScript, and ExtJS around 2010. Before that point, nearly all my spare time outside of school was consumed by programming — fingers on the keyboard, always building something.`,

  `My very first assignment as an intern was building Tetris - a competition among new hires to see who could write the shortest, most performant code. That was followed by a project to port two SWF Flash games to Cocos2d.`,

  `During that project, something happened that I'll never forget. A power outage killed the entire office and my machine included. At the exact moment I was pressing Ctrl+S. When the power came back, my main.cpp was gone. Nearly a month of work, wiped clean. Not even a #pragma in sight. Total devastation.`,

  `The company hadn't allowed SVN access for interns' projects, so I'd been working locally with WinRAR as my "version control." Looking back, that's a bit embarrassing to admit — but regardless, that first year at the company was genuinely grueling.`,

  `My next assignment was building an offline dictionary app for architects. Dictionary software turned out to be more complex than expected; only later did I realize corpus theory was at the heart of it. I also developed an application using the Autodesk Revit SDK, which taught me how to work with third-party SDKs.`,

  `Through a personal connection, I moved on to a startup. Understaffed by nature, the company handed two or three simultaneous projects to each developer. That environment pushed me into a wide range of new territory: building internal management systems with ASP.NET, IIS, and Node.js (around v0.4, as I recall); developing a video conferencing system with WebRTC; and building another conferencing client in WinForms.`,

  `And the mobile market was still booming at the time, so I also got extensive experience with Cocos2d and Cocos3d. When CocosCreator completely overhauled the development model in 2019, I stepped away from Cocos entirely - though looking back later, I could see how much easier they'd made things.`,

  `I also spent a long stretch doing hybrid mobile development with Cordova and Ionic, with Framework 7 as my go-to framework. During this period I established a solid understanding of deployment through AWS, and got my first exposure to AngularJS and ReactJS — both of which have evolved enormously since then.`,

  `This company gave me some of the most memorable experiences of my career. I did Android APK reverse engineering and Unity APK reversing. On TSolution, an office suite built on top of LibreOffice, I served as PM for the main UI and developed the HWP 5.0 parsing module myself. The LibreOffice class and module workflow documentation was so extensive that when I printed it out and hung it on the walls, it covered three full walls.`,

  `I also contributed to the KakaoTalk desktop client, led development of a remote internal security management system, built a product sales platform, and — right around the time TensorFlow and Keras were emerging — developed a CAPTCHA auto-recognition and bypass program.`,

  `At my next company, I encountered something I'd never dealt with before: the intersection of software and physical hardware. I'd dabbled with toggling LEDs via assembly and briefly played around with a Raspberry Pi, but this was a different scale entirely. The project involved processing video feeds from 280 Hikvision cameras and using the results to automatically control access gates at the company's main entrance and other locations — opening and closing them based on vehicle authorization. This required not just computer vision, but also PLC integration for motor control. I didn't design the physical PLC boards — hardware engineering isn't my field — but I was responsible for everything on the software side.`,

  `During the COVID period, I also developed an employee attendance and anomaly detection system using thermal imaging cameras.`,

  `Following that, I joined a project comparable in scale to Alibaba + Alipay, where I served as team lead for the payments module and contributed to backend and admin website development for the e-commerce side. The project gave me a much deeper appreciation for the tradeoffs between MongoDB and Oracle DB. We incorporated blockchain concepts into the payment system — not a full multi-node distributed chain in the strict sense, but all transaction signing and payment generation was built with security as a foundation.`,

  `I also led development of a unified management system for restaurants and shopping malls, covering both web and app interfaces. However the POS side wasn't mine. One colleague who loves printing took the side.`,

  `As the Web3 space emerged, I didn't go all-in professionally, but I've kept pace with new Web3 technologies and languages and continue to follow the space today.`,

  `After ChatGPT's arrival in 2022, I worked on several AI-related projects — some of which I can't discuss due to NDAs. Among the ones I can mention: I built a service that lets authors load their books as text files, assign character voices to individual lines of dialogue, and automatically generate a complete audiobook. I also built a service where authors provide chapter and section titles along with basic plot outlines as prompts, and the system auto-completes the entire book.`,

  `Looking back on my career path, I honestly can't quite define what my "specialty" is. But I think that's simply the result of who I am — someone who dives headfirst into any software challenge, whether it pays or not, just because I love it.`,

  `Some people, when they see my résumé or hear me talk about my experience, respond with skepticism — "Is all of this real? How could one person have done all of that?" It's all real. I would never claim experience I don't have, and the things I have done, I remember with precision.`,

  `You, reading this, might be wondering the same thing — "So what exactly is this person's core skill?" Fair question. If I had to pick a few anchors from everything above, I'd say: C#, Windows Programming, and Java (Android).`,
]

export type Experience = {
  title: string
  period: string
  company: string
  description: string
  details: string[]
  skills: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Early Beginnings',
    period: 'Childhood — early teens',
    company: 'Self-taught',
    description:
      'Started with legacy Windows systems (Win95 through Vista), learned Pascal, Visual Basic, Delphi, and Flash Script before moving into C/C++, Windows NT Programming, APIs, MFC, and Qt. Built a VNC-style remote desktop tool as a teenager.',
    details: [
      'Proficient with every legacy OS from Win95 through Vista',
      'First language: Pascal — then Visual Basic, Delphi, Flash Script',
      'Picked up C/C++ at 14, explored Win32 API, MFC, threading, async processing',
      'Built a VNC-style remote desktop tool using the Windows API',
      'Cross-platform exploration with Qt/KDE on Fedora',
    ],
    skills: ['Pascal', 'Visual Basic', 'C/C++', 'Win32 API', 'MFC', 'Qt'],
  },
  {
    title: 'Software Developer Intern',
    period: 'Dec 2014 – Sep 2015',
    company: 'KOAST',
    description:
      'First professional assignment: built Tetris for a new-hire competition, ported SWF Flash games to Cocos2D for Android and iOS, built a 3D modeling tool integrated with Autodesk Revit, and developed an offline dictionary app for architects.',
    details: [
      'Built Tetris for a new-hire code competition (shortest, most performant code wins)',
      'Ported SWF Flash games (Mortal Combat, Fighter Flight) to Cocos2D for Android and iOS',
      'Built a 3D modeling tool integrated with Autodesk Revit SDK',
      'Developed ArchDic — an offline dictionary of architectural terms',
      'Learned to work with third-party SDKs and corpus-based dictionary systems',
    ],
    skills: ['Cocos2D', 'Autodesk Revit SDK', '3D Modeling', 'Android', 'iOS'],
  },
  {
    title: 'Software Engineer',
    period: 'Oct 2015 – Feb 2019',
    company: 'NovaCircuit',
    description:
      'Handled multiple projects simultaneously in an understaffed startup: endpoint monitoring with behavioral anomaly detection, CAPTCHA recognition, web/desktop video conferencing (WebRTC), HWP 5.0 document parsing for LibreOffice, Android/Unity APK reverse engineering, KakaoTalk desktop client, and a product sales platform.',
    details: [
      'Built MR Eye — endpoint monitoring with screen recording, keystroke tracking, and behavioral anomaly detection',
      'Implemented CAPTCHA recognition system using TensorFlow and image processing',
      'Engineered MeetUp — Windows desktop video conferencing with real-time audio/video streaming',
      'Developed web-based video conferencing system (Node.js, MongoDB, WebRTC)',
      'Built desktop chat application for KakaoTalk with messaging automation',
      'Developed HWP 5.0 document parsing module for LibreOffice (TSolution project)',
      'Performed Android APK reverse engineering (native + Unity 4.x–5.6)',
      'Built Sales Management System and Internal Management System for company operations',
    ],
    skills: ['Node.js', 'MongoDB', 'WebRTC', 'Android', 'LibreOffice', 'TensorFlow', 'Image Processing', 'ASP.NET', 'Cordova', 'Ionic'],
  },
  {
    title: 'Senior Full-Stack Engineer',
    period: 'Mar 2019 – 2022',
    company: 'NeuralBridge',
    description:
      'Full-stack engineering at scale: digital payment platform (Alipay-level), e-commerce ecosystem (Alibaba-level), license plate recognition with physical gate control, and enterprise management platforms for restaurants and shopping malls.',
    details: [
      'Architected MR Pay — digital payment platform similar to Alipay with secure transaction flows and multi-party settlement logic',
      'Built MR Bay — full-scale e-commerce ecosystem comparable to Alibaba (order processing, vendor management, payment integration)',
      'Designed and launched DialogueDaily — relationship and marriage counseling platform with content delivery and subscription workflows',
      'Built StrongGate — license plate recognition system with 280 Hikvision cameras, PLC gate control, and thermal imaging attendance during COVID',
      'Delivered Reshoper — Restaurant & Shopping Mall Management Platform (web + app) and desktop-based restaurant management software',
    ],
    skills: ['Node.js', 'MongoDB', 'Oracle DB', 'Computer Vision', 'PLC', 'C#', 'React', 'AWS', 'Blockchain'],
  },
  {
    title: 'Senior AI Engineer',
    period: '2022 – Present',
    company: 'NeuralBridge',
    description:
      'Focused on AI since 2022: multi-model expert evaluation marketplace, RAG-powered semantic matching, hybrid fraud detection, AI book writing assistant, real-time crypto analytics, LLM-driven Telegram swap bot, AI audiobook generator, and AI character generation platform.',
    details: [
      'Built Supakon — AI expert marketplace with LangChain-orchestrated multi-model evaluation (LLaMA, Mistral, GPT, Gemini) for parallel expert scoring, hybrid fraud detection (LLM + ML anomaly detection), and RAG-powered semantic matching (Pinecone/Weaviate)',
      'Developed Author Wizard — AI book writing assistant with multi-stage prompt pipelines (outline → drafting → revision) using GPT and Gemini, integrated with React and WordPress',
      'Built Audie.ai — AI audiobook generation platform integrating ElevenLabs APIs with WordPress',
      'Engineered HindSight — real-time crypto analytics platform (BubbleMap-style) with sub-second latency, WebSocket streaming, and unsupervised anomaly detection (Node.js, React, D3.js)',
      'Built MindAI SwapBot — LLM-driven Telegram bot interpreting natural language swap requests and executing on-chain transactions with intent-parsing pipelines',
      'Developed Lust AI — AI character generation and chat platform with image generation (pose/style controls) and conversational AI companions (v4.9, powered by SPICE)',
      'Built MR USBLock — digital asset access control system with ML-based behavioral anomaly detection',
      'Built MemoLabs — BRC-20 inscription platform and airdrop point system',
      'Built Drive3 — Web3 decentralized storage platform',
      'Designed contact information aggregation system (automation and scraping)',
    ],
    skills: ['LangChain', 'RAG', 'Pinecone', 'Weaviate', 'GPT', 'Gemini', 'LLaMA', 'Mistral', 'React', 'AWS', 'Blockchain', 'WebSocket', 'D3.js', 'ElevenLabs'],
  },
]

export type SkillCategory = {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Favorites',
    skills: ['C#', 'Windows Programming', 'Android Development', 'WordPress'],
  },
  {
    category: 'LLM & Generative AI',
    skills: ['GPT', 'Gemini', 'LLaMA', 'Mistral', 'Prompt Engineering', 'RAG', 'AI Agents'],
  },
  {
    category: 'LLM Orchestration & Search',
    skills: ['LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'Chroma', 'Elasticsearch', 'Embedding Pipelines', 'n8n'],
  },
  {
    category: 'ML Engineering',
    skills: ['Scikit-learn', 'TensorFlow', 'Keras', 'Classification', 'Anomaly Detection', 'Pandas', 'NumPy', 'SciPy'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Node.js', 'Django', 'Flask', 'FastAPI', 'Web2Py', 'REST / GraphQL', 'ASP.NET', 'PHP', 'Java', 'Rust', 'WordPress', 'Wix', 'Shopify', 'Ruby', 'Liquid', 'Twilio'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Svelte', 'Solid.js', 'Webpack', 'Chakra UI', 'shadcn/ui', 'MUI', 'Material Design', 'Ant Design', 'CLADD', 'HTML/CSS', 'Angular'],
  },
  {
    category: 'Cloud & Infra',
    skills: ['AWS (EC2, S3, Lambda)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Nginx', 'Redis', 'Supabase'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'Oracle DB', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Blockchain / Web3',
    skills: ['Solidity', 'Ethers.js', 'Web3.js', 'Polkadot.js', 'Smart Contracts', 'Web3 Storage', 'Web3 Wallet Development'],
  },
  {
    category: 'Mobile',
    skills: ['Android (Java, Kotlin)', 'iOS (Swift)', 'React Native', 'Cocos2D', 'Cordova', 'Ionic', 'PhoneGap', 'Framework7'],
  },
  {
    category: 'Foundations',
    skills: ['C/C++', 'Pascal', 'Qt', 'Win32 API', 'MFC'],
  },
]

export const blogPosts = [
  {
    slug: 'story',
    title: 'My Story',
    excerpt: 'The full journey from Windows 95 to AI — how I became the developer I am today.',
    date: '2026-07-13',
    tags: ['Career', 'Story'],
  },
  {
    slug: 'nine-years-and-uncle',
    title: 'Nine Years, and Uncle',
    excerpt: 'A client I met on Upwork, two accidents, and a bond that refused to break — the story of a nine-year project that finally came home.',
    date: '2026-07-14',
    tags: ['Story', 'Personal', 'Client'],
  },
]

export type BlogPostContent = {
  slug: string
  sections: { heading?: string; paragraphs: string[] }[]
}

export const blogPostContents: BlogPostContent[] = [
  {
    slug: 'nine-years-and-uncle',
    sections: [
      {
        paragraphs: [
          `For most developers, "keeping your word" means hitting a deadline. But there's one promise in my life that means something different. It took nine years to finish. Twice, an accident cut off all contact between me and the person I'd made it to. And yet I never let go of that promise — and neither did he. This is the story of those nine years.`,
          `Nine years ago, I met a client by chance on Upwork. What he'd hired me for was software development. But the real problem he was carrying was something else entirely. He had already spent three years trying to bring this project to life, but the developers he'd worked with either lacked the skill or never truly understood what he was trying to build. All he had to show for those three years were incomplete pieces of work — and not even the source code for those. What remained were a handful of mockup screens he'd sketched himself, and a pile of materials about the marriage and couples-counseling service he ran.`,
          `At the time, I had no idea this connection would still be alive today, or that nine years later I'd finally be handing him a finished product.`,
        ],
      },
      {
        heading: 'The First Accident',
        paragraphs: [
          `This was before vibe coding existed, so coding still demanded real time and effort. Even so, a skilled developer should have been able to finish both the web and mobile versions within six months.`,
          `Once I'd finished the web version and the Android app, I made plans to meet him in person and headed to the airport to fly to Michigan, where he lived. That same day, I was in an accident.`,
          `It took a while to recover. My body eventually healed, but my devices were completely destroyed — every account and every contact stored on them was gone. I've never regretted anything more than not having memorized his contact information. Ten years ago, backing everything up to the cloud wasn't yet the habit it is now.`,
        ],
      },
      {
        heading: 'A Reunion, Seven Years Later',
        paragraphs: [
          `A few years later, I stumbled across his contact information again, almost by accident. I managed to recover the email account we'd once used to communicate, and we finally reconnected.`,
          `He was genuinely overjoyed to hear from me again. And he still wanted to finish the project that carried his dream. What struck me most was this: for seven years, he hadn't handed the project to anyone else. He had simply kept what I'd given him, safe and untouched, waiting. That trust of his weighed on me more than any contract ever could.`,
        ],
      },
      {
        heading: 'The Second Accident',
        paragraphs: [
          `We worked together again for two years. Then something happened in my personal life, and I disappeared from contact for over a year. Once again, I wasn't able to let him know what had happened to me.`,
          `The last promise we'd made was that once he returned from a business trip, we'd get the project ready to launch. That promise, too, went unkept. Accidents, as it turns out, never announce themselves in advance.`,
          `When I finally recovered, the first person I reached out to wasn't family — it was him. After all the years we'd shared, and the understanding we'd built between us, this project had stopped being just his dream. It had become something I cared about too. I wanted, more than anything, to see his dream become real.`,
        ],
      },
      {
        heading: 'Closing the Circle',
        paragraphs: [
          `I wanted, somehow, to bring these nine years to a close. Last month — exactly nine years after we first met — I finally finished the project.`,
          `If the reason this took nine years was a lack of responsibility, or conscience, or simply not being skilled enough, then I probably should have given up being a developer altogether. But that's not what this delay was. It was the product of two accidents and a bond that, somehow, refused to break. That no matter how much life falls apart, you finish what you started — that's what I wanted to prove, to him and to myself, over these nine years.`,
        ],
      },
      {
        heading: 'Why I Call Him Uncle',
        paragraphs: [
          `Over the course of a life, a person meets many people. But I doubt I'll ever have another relationship as full of twists and turns as this one. What I'm most grateful for is that, through all of it, he was endlessly generous and considerate toward me. There were times when he suffered losses because of me, or because of things in my life beyond my control — and still, he never once held it against me. He always just said, "God bless you."`,
          `Today, I work alongside him as part of his team, and we've become genuine friends. He's always been someone who offers me guidance, encouragement, and a living example of what it means to live with values — an elder I look up to. That's why I call him Uncle.`,
          `Looking back on these nine years, I think the story really comes down to one thing: a good relationship survives only when neither person gives up on the other. And I want to be the kind of developer who never gives up on the people, or the work, they've committed to — no matter what gets in the way.`,
        ],
      },
    ],
  },
]

export type Testimonial = {
  quote: string
  author: string
  role: string
}

// Only testimonials from clients whose product is publicly linkable. Quotes from
// managers at companies already listed in the resume were removed: unverifiable
// by a reader, and they read as internal reference letters rather than proof.
export const testimonials: Testimonial[] = [
  {
    quote:
      'Brian doesn\'t just write code — he absorbs the entire system in days and starts shipping by the end of the week. He doesn\'t need hand-holding; he needs a problem. Give him something nobody else can figure out, and he\'ll come back with a working solution.',
    author: 'Ted Lee, CEO',
    role: 'MemoLabs',
  },
]

// Why the surname is spelled Waing. Shown as a standalone note on the About page.
export const nameNote = {
  label: 'A note on the name',
  body: 'On my documents it reads Yang. Somewhere in the first year of the AI era I kept turning the letters over, and there it was, already sitting inside my own name: Y, AI, NG. So I made it permanent.',
  equation: 'Yang + AI = Yaing',
}

export type ProjectHighlight = {
  title: string
  description: string
  tags: string[]
  icon: string
  company: string
  url?: string
  image?: string
  challenge?: string
  solution?: string
  techniques?: string[]
  metrics?: string
}

export const projectHighlights: ProjectHighlight[] = [
  {
    title: 'Supakon',
    metrics: '4 models scoring every candidate in parallel, across 3 dimensions',
    description:
      'Enterprise-grade AI expert matching platform connecting organizations with pre-vetted AI specialists. LangChain-orchestrated multi-model evaluation pipeline (LLaMA, Mistral, GPT, Gemini) for parallel expert scoring across technical depth, domain specificity, and communication clarity. Hybrid fraud detection (LLM + ML anomaly detection) and RAG-powered semantic matching using vector embeddings.',
    tags: ['LangChain', 'RAG', 'Pinecone', 'Weaviate', 'GPT', 'Gemini', 'LLaMA', 'Mistral', 'AWS', 'Python', 'Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Embedding Pipelines', 'Async Pipelines'],
    icon: 'brain',
    company: 'NeuralBridge',
    url: 'https://supakon.com',
    image: '/projects/supakon.jpg',
    challenge: 'Trust and relevance at scale — how do you verify that an "AI expert" is actually an expert, and match them to the right project without manual review?',
    solution: 'Built a LangChain-orchestrated pipeline where 4 models (LLaMA, Mistral, GPT, Gemini) evaluate each candidate in parallel across different dimensions. Hybrid fraud detection layers LLM semantic analysis with ML anomaly detection to catch inconsistencies rule-based systems miss. RAG-powered matching via Pinecone/Weaviate replaced keyword search entirely.',
    techniques: ['Multi-model ensemble scoring', 'LangChain chain orchestration', 'RAG with Pinecone & Weaviate', 'Hybrid fraud detection (LLM + ML)', 'Parallel async evaluation pipelines'],
  },
  {
    title: 'MR Pay',
    description:
      'Digital payment platform similar to Alipay. Designed secure transaction flows, multi-party settlement logic, and scalable backend services for web and mobile. Blockchain-inspired transaction signing for payment security.',
    tags: ['Node.js', 'MongoDB', 'Oracle DB', 'Blockchain', 'Express', 'Redis', 'JWT Auth', 'REST API', 'Microservices', 'Transaction Security'],
    icon: 'credit-card',
    company: 'NeuralBridge',
    image: '/projects/mr-pay.jpg',
    challenge: 'Building a payment platform at Alipay scale — handling secure transactions, multi-party settlement, and preventing double-spending without a distributed ledger.',
    solution: 'Designed blockchain-inspired transaction signing where every transaction gets a cryptographic signature. Multi-party settlement logic handles vendor splits, refunds, and escrow. Built scalable backend services supporting both web and mobile clients.',
    techniques: ['Blockchain-inspired transaction signing', 'Multi-party settlement logic', 'Cryptographic transaction verification', 'Scalable payment architecture'],
  },
  {
    title: 'MR Bay',
    description:
      'Full-scale e-commerce ecosystem comparable to Alibaba. Order processing, vendor management, inventory, and payment integration across multiple storefronts.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redis', 'REST API', 'Microservices', 'CI/CD', 'Inventory Systems', 'Admin Dashboards'],
    icon: 'file-text',
    company: 'NeuralBridge',
    image: '/projects/mr-bay.jpg',
    challenge: 'Building an e-commerce platform at Alibaba scale — order processing, vendor management, inventory tracking, and payment integration across multiple storefronts with real traffic.',
    solution: 'Architected a full-stack ecosystem with React frontend, Node.js backend, and MongoDB. Integrated MR Pay for payment processing. Every component had to handle real traffic at real volume — no staging environment luxury.',
    techniques: ['Multi-storefront architecture', 'Real-time inventory management', 'Vendor management system', 'Payment integration with MR Pay'],
  },
  {
    title: 'StrongGate',
    metrics: '280 camera feeds driving physical gates, plus PLC motor control',
    description:
      'Computer vision pipeline processing 280 Hikvision camera feeds to control physical access gates via PLC integration. YOLO-based object detection and OpenCV image processing for license plate recognition. Also built a thermal-imaging attendance system during COVID.',
    tags: ['Computer Vision', 'YOLO', 'OpenCV', 'TensorFlow', 'Face Detection', 'Object Detection', 'PLC', 'HIKVision SDK', 'C++', 'Python', 'Keras', 'RTSP Streaming', 'Multithreading', 'Thermal Imaging'],
    icon: 'camera',
    company: 'NeuralBridge',
    image: '/projects/stronggate.jpg',
    challenge: '280 Hikvision cameras feeding live video to control physical access gates. Every gate open/close cycle had to be reliable — software failures meant real vehicles stuck at real gates. License plate recognition had to work in varying lighting, weather, and angles.',
    solution: 'Built a YOLO-based object detection pipeline for vehicle detection, OpenCV for license plate recognition, and face detection for driver verification. PLC integration handles physical gate control with fail-safe defaults. Thermal imaging extension during COVID added body temperature screening on top of access control.',
    techniques: ['YOLO object detection for vehicles', 'OpenCV license plate recognition', 'Face detection for driver verification', 'PLC gate control with fail-safe', 'Thermal imaging anomaly detection'],
  },
  {
    title: 'Author Wizard',
    description:
      'AI book writing assistant with multi-stage prompt pipelines (outline generation → structured drafting → revision loops) using GPT and Gemini. Maintains narrative consistency across chapters through context window management and stateful prompt chaining.',
    tags: ['GPT', 'Gemini', 'React', 'WordPress', 'Prompt Engineering', 'PHP', 'Node.js', 'Context Window Management', 'Stateful Prompt Chaining'],
    icon: 'file-text',
    company: 'NeuralBridge',
    url: 'https://bookwiz.io',
    image: '/projects/author-wizard.jpg',
    challenge: 'AI-generated long-form content loses narrative consistency across chapters. Context windows can\'t hold an entire book, so earlier plot points get forgotten, characters drift, and themes fragment.',
    solution: 'Multi-stage prompt pipeline: outline generation first, then structured drafting chapter-by-chapter, then revision loops. Stateful prompt chaining carries key narrative elements (character states, plot threads, themes) forward across chapters. Context window management ensures the AI always has the right context at the right stage.',
    techniques: ['Multi-stage prompt pipelines (outline → draft → revise)', 'Stateful prompt chaining across chapters', 'Context window management', 'GPT + Gemini dual-model workflow', 'WordPress integration for publishing'],
  },
  {
    title: 'Audie.ai',
    description:
      'AI audiobook generation platform. Authors load books as text files, assign character voices to dialogue lines, and automatically generate complete audiobooks. Integrates ElevenLabs APIs with WordPress.',
    tags: ['ElevenLabs', 'WordPress', 'AI', 'Audio', 'PHP', 'Text-to-Speech', 'Audio Processing', 'REST API', 'Dialogue Detection'],
    icon: 'file-text',
    company: 'NeuralBridge',
    url: 'https://audie.ai',
    image: '/projects/audie-ai.jpg',
    challenge: 'Converting books to audiobooks is expensive and slow. Authors need a way to assign different voices to different characters, handle narration vs dialogue, and generate hours of audio without manual recording.',
    solution: 'Built a platform where authors upload text files, map character names to ElevenLabs voices, and the system automatically detects dialogue lines and assigns the right voice. Narration gets a separate narrator voice. WordPress integration handles publishing and distribution.',
    techniques: ['ElevenLabs API integration for voice synthesis', 'Dialogue detection and character voice mapping', 'Automated audio generation pipeline', 'WordPress publishing integration'],
  },
  {
    title: 'HindSight',
    metrics: 'Sub-second update latency on live on-chain streams',
    description:
      'Real-time cryptocurrency analytics platform (BubbleMap-style) with sub-second update latency on on-chain data streams. Unsupervised anomaly detection flags unusual wallet clustering and transaction velocity patterns.',
    tags: ['Node.js', 'WebSocket', 'React', 'D3.js', 'Anomaly Detection', 'TypeScript', 'Redis', 'Web3.js', 'Real-time Systems', 'Data Visualization'],
    icon: 'brain',
    company: 'NeuralBridge',
    url: 'https://hindsight.vip',
    image: '/projects/hindsight.jpg',
    challenge: 'On-chain data moves fast — thousands of transactions per second across multiple chains. Visualizing this in real-time with sub-second latency while also detecting anomalies requires a carefully engineered pipeline.',
    solution: 'WebSocket streaming pipeline with Node.js backend processing live on-chain data. D3.js-powered BubbleMap visualization renders wallet clusters and transaction flows in real-time. Unsupervised anomaly detection runs alongside, flagging unusual wallet clustering and transaction velocity patterns invisible in standard charting tools.',
    techniques: ['WebSocket streaming for sub-second updates', 'Unsupervised anomaly detection on transaction patterns', 'D3.js BubbleMap visualization', 'Real-time on-chain data processing'],
  },
  {
    title: 'Lust AI',
    metrics: 'Shipped through v4.9',
    description:
      'AI character generation and chat platform built for MindAI. Image generation with pose and style controls, alongside conversational AI companions. Powered by SPICE, shipped through v4.9.',
    tags: ['AI', 'Image Generation', 'Chat', 'React', 'SPICE', 'Node.js', 'WebSocket', 'Diffusion Models', 'Conversational AI', 'Session Memory'],
    icon: 'brain',
    company: 'NeuralBridge',
    url: 'https://lustai.app',
    challenge: 'Building an AI platform that generates consistent character images across different poses and styles while maintaining coherent multi-turn conversations.',
    solution: 'Integrated SPICE AI tools for image generation with pose and style controls. Conversational AI companions maintain context across sessions. Scaled to v4.9 with active users.',
    techniques: ['SPICE AI image generation', 'Pose and style control pipelines', 'Multi-turn conversational AI', 'Character consistency across generations'],
  },
  {
    title: 'MindAI SwapBot',
    description:
      'LLM-driven Telegram trading bot built for MindAI. Natural language swaps plus market making, sniping and other automated strategies, all executed on-chain. Intent-parsing pipelines handle ambiguous user inputs gracefully — critical for financial actions where misinterpretation has real consequences.',
    tags: ['LLM', 'Telegram', 'Blockchain', 'Web3', 'Intent Parsing', 'Node.js', 'Ethers.js', 'Telegram Bot API', 'Prompt Engineering', 'On-chain Execution'],
    icon: 'brain',
    company: 'NeuralBridge',
    image: '/projects/mindai-swapbot.jpg',
    challenge: 'Users describe trades in natural language — "swap 100 USDC for ETH" — but phrasing varies wildly, and a misread instruction moves real money. The bot also had to run automated strategies where timing is as unforgiving as correctness: market making quotes continuously, sniping fires the moment a condition is met.',
    solution: 'LLM-driven intent parsing pipeline that normalizes natural language into structured trade parameters. Ambiguous inputs trigger clarification prompts rather than executing wrong trades. Alongside it run the automated strategy modes — market making, sniping and other on-chain execution paths — each with confirmation callbacks so nothing fires silently.',
    techniques: ['LLM intent parsing for natural language trades', 'Ambiguity detection with clarification prompts', 'Market making strategy execution', 'Sniping with condition triggers', 'On-chain transaction execution', 'Telegram bot integration'],
  },
  {
    title: 'DialogueDaily',
    description:
      'Relationship and marriage counseling platform with subscription workflows and content delivery. A personal project built for one client over nine years, through two accidents that cut off contact entirely, and finally delivered.',
    tags: ['React', 'Node.js', 'Subscription', 'Content Delivery', 'MongoDB', 'AWS', 'Payment Integration', 'Push Notifications', 'Mobile Web'],
    icon: 'file-text',
    company: 'Personal project',
    url: 'https://dialoguedaily.com',
    image: '/projects/dialoguedaily.jpg',
    challenge: 'A nine-year journey — started on Upwork, survived two car accidents, and finally delivered. The client needed a counseling platform with content delivery, subscription management, and a seamless user experience.',
    solution: 'Built a full-stack platform with React frontend, Node.js backend, subscription workflows, and content delivery pipelines. The project taught patience and persistence as much as engineering.',
    techniques: ['Subscription workflow management', 'Content delivery pipelines', 'React + Node.js full-stack architecture'],
  },
  {
    title: 'MR USBLock',
    description:
      'Digital asset access control enforced by a kernel-mode filter driver built with the Windows WDK and DDK, with ML behavioural anomaly detection layered on top. Blocking removable storage reliably means sitting below the application layer, where the OS decides whether a device is allowed to exist at all.',
    tags: ['Security', 'Windows WDK/DDK', 'Kernel-mode Driver', 'Windows Internals', 'C#', 'ML', 'Anomaly Detection', 'Access Control', 'Scikit-learn', 'USB Device Control', 'Behavioral Analytics'],
    icon: 'camera',
    company: 'NeuralBridge',
    metrics: 'Enforced in a kernel-mode filter driver, not a user-space agent',
    image: '/projects/mr-usblock.jpg',
    challenge: 'Device control written in user space is trivial to defeat: kill the process, unload the agent, boot from something else. Enforcement has to live in the kernel, at the point where Windows enumerates the device. Separately, a credential check says nothing about whether an authorised user has started behaving like an intruder.',
    solution: 'Built a kernel-mode filter driver with the Windows WDK and DDK so access decisions happen below the application layer and cannot be switched off from user space, then layered ML behavioural anomaly detection above it so deviations from an established access baseline raise alerts before they turn into breaches.',
    techniques: ['Kernel-mode filter driver (WDK/DDK)', 'Device enumeration and access control at the driver layer', 'User-mode service to driver communication', 'ML-based behavioural anomaly detection', 'Baseline deviation alerting', 'Defense in depth'],
  },
  {
    title: 'MemoLabs',
    description:
      'BRC-20 inscription platform and airdrop point system. Built frontend platform and website for blockchain inscription services.',
    tags: ['BRC-20', 'Blockchain', 'Web3', 'Frontend', 'React', 'TypeScript', 'Bitcoin', 'Wallet Integration', 'Airdrop Systems'],
    icon: 'credit-card',
    company: 'NeuralBridge',
    url: 'https://memolabs.org',
    image: '/projects/memolabs.jpg',
    challenge: 'BRC-20 inscription on Bitcoin requires specialized tooling. Users need a clean interface to create inscriptions, track them, and participate in airdrop point systems.',
    solution: 'Built the frontend platform and website for MemoLabs — handling BRC-20 inscription creation, tracking, and an airdrop point system for community engagement.',
    techniques: ['BRC-20 inscription interface', 'Airdrop point system', 'Web3 frontend integration'],
  },
  {
    title: 'Drive3',
    description:
      'Web3 decentralized storage platform for secure, distributed file storage on the blockchain.',
    tags: ['Web3', 'Storage', 'Blockchain', 'Decentralized', 'React', 'Smart Contracts', 'Distributed Systems', 'File Encryption'],
    icon: 'file-text',
    company: 'NeuralBridge',
    challenge: 'Centralized storage has single points of failure. Building a Web3 storage platform that distributes files across a decentralized network while maintaining reliability and speed.',
    solution: 'Built a Web3 decentralized storage platform leveraging blockchain for file integrity verification and distributed nodes for storage redundancy.',
    techniques: ['Decentralized file storage', 'Blockchain integrity verification', 'Distributed node architecture'],
  },
  {
    title: 'Reshoper',
    description:
      'Enterprise-grade Restaurant & Shopping Mall Management Platform covering web and app interfaces. Desktop-based restaurant management software with POS integration.',
    tags: ['React', 'Node.js', 'Enterprise', 'POS', 'C#', 'WinForms', 'MongoDB', 'REST API', 'Desktop Software', 'Reporting Dashboards'],
    icon: 'file-text',
    company: 'NeuralBridge',
    image: '/projects/reshoper.jpg',
    challenge: 'Restaurants and shopping malls need unified management — POS, inventory, staff scheduling, reporting — across both web and desktop interfaces. Different environments, same data.',
    solution: 'Delivered enterprise-grade management platform with web and app interfaces plus desktop-based restaurant management software. POS integration handles real-time transactions and inventory updates.',
    techniques: ['Cross-platform architecture (web + desktop)', 'POS integration', 'Real-time inventory and staff management', 'Enterprise reporting dashboards'],
  },
  {
    title: 'MR Eye',
    description:
      'Endpoint monitoring solution with screen recording, keystroke tracking, and behavioral anomaly detection for enterprise security oversight.',
    tags: ['Security', 'Monitoring', 'Anomaly Detection', 'Screen Recording', 'C++', 'Win32 API', 'Windows Hooks', 'Endpoint Agents', 'Low-level Windows'],
    icon: 'camera',
    company: 'NovaCircuit',
    image: '/projects/mr-eye.jpg',
    challenge: 'Enterprise security requires monitoring endpoints without blocking productivity. The system had to capture screen activity, track keystrokes, and detect anomalous behavior — all without noticeable performance impact.',
    solution: 'Built a lightweight endpoint agent with screen recording, keystroke tracking, and behavioral anomaly detection. The anomaly detection engine flags unusual patterns — mass file copies, off-hours access, unexpected application usage — for security review.',
    techniques: ['Low-overhead screen recording', 'Keystroke pattern tracking', 'Behavioral anomaly detection engine', 'Real-time security alerting'],
  },
  {
    title: 'MeetUp',
    description:
      'Windows desktop video conferencing application with real-time audio/video streaming. Also built a web-based version using Node.js, MongoDB, and WebRTC.',
    tags: ['WebRTC', 'Node.js', 'MongoDB', 'Windows', 'C++', 'Socket Programming', 'Audio/Video Streaming', 'Windows Programming'],
    icon: 'brain',
    company: 'NovaCircuit',
    image: '/projects/meetup.jpg',
    challenge: 'Real-time video conferencing on Windows desktop with multi-party audio/video streaming. Latency, synchronization, and bandwidth management are all critical.',
    solution: 'Built a Windows desktop application with real-time audio/video streaming. Later extended to a web-based version using Node.js, MongoDB, and WebRTC for browser-based communication.',
    techniques: ['Real-time audio/video streaming', 'WebRTC for browser-based conferencing', 'Multi-party synchronization', 'Bandwidth-adaptive streaming'],
  },
  {
    title: 'Lottery Platform',
    metrics: '100,000+ simultaneous ticket purchases under SERIALIZABLE isolation',
    description:
      'High-concurrency lottery platform built in Rust with Svelte frontend and PostgreSQL. Handles 100,000+ simultaneous ticket purchases with sub-second latency. Transactional integrity is non-negotiable — every ticket must be atomic, every draw must be verifiable, and every user must see consistent state.',
    tags: ['Rust', 'Svelte', 'PostgreSQL', 'High Concurrency', 'Transactional Integrity', 'WebSocket', 'Tokio', 'Async Rust', 'Connection Pooling', 'Load Testing'],
    icon: 'credit-card',
    company: 'NeuralBridge',
    challenge: '100,000 users buying lottery tickets simultaneously creates extreme write contention on the database. Every ticket purchase must be atomic — no double-sales, no lost tickets, no race conditions. Traditional web frameworks buckle under this load, and a single failed transaction means a real user loses money.',
    solution: 'Built the backend in Rust for zero-cost abstractions and predictable memory management. PostgreSQL handles transactional integrity with row-level locking and SERIALIZABLE isolation for ticket sales. Connection pooling with bounded async tasks prevents resource exhaustion under peak load. Svelte frontend delivers a lightweight client-side experience with real-time WebSocket updates for draw results and ticket status.',
    techniques: ['Rust async runtime for high-concurrency handling', 'PostgreSQL row-level locking with SERIALIZABLE isolation', 'Bounded connection pooling to prevent resource exhaustion', 'WebSocket real-time draw updates', 'Atomic ticket purchase transactions', 'Svelte reactive frontend with minimal bundle size'],
  },
  {
    title: 'Contact Aggregation System',
    description:
      'Contact information aggregation platform combining automated scraping, validation, and deduplication pipelines. Designed for large-scale outreach data collection with scheduling and export workflows.',
    tags: ['Python', 'Web Scraping', 'Selenium', 'Automation', 'Data Pipelines', 'Deduplication', 'Scheduling'],
    icon: 'file-text',
    company: 'NeuralBridge',
    image: '/projects/email-scraper.jpg',
    challenge: 'Collecting contact data across thousands of heterogeneous sources without getting blocked, while keeping the resulting dataset clean enough to actually use.',
    solution: 'Built rotating, rate-limited scraping workers with headless-browser fallbacks for JavaScript-heavy sites, then ran every record through validation and fuzzy deduplication before export.',
    techniques: ['Headless-browser scraping with rate limiting', 'Validation and fuzzy deduplication pipelines', 'Scheduled collection jobs with retry logic'],
  },
  {
    title: 'TSolution',
    metrics: 'HWP 5.0 binary format, against documentation covering 3 office walls',
    description:
      'Office suite built on top of LibreOffice. Served as PM for the main UI and developed the HWP 5.0 document parsing module. The printed LibreOffice class and module documentation covered three full office walls.',
    tags: ['LibreOffice', 'C++', 'HWP 5.0', 'UNO API', 'Document Parsing', 'Project Management', 'Desktop Software'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/tsolution.jpg',
    challenge: 'HWP is a proprietary Korean document format with sparse documentation, and LibreOffice’s internal module architecture is famously vast — the printed class documentation covered three office walls.',
    solution: 'Reverse-engineered the HWP 5.0 binary format against the published spec, mapped it onto LibreOffice’s document model through the UNO API, developed the parsing module hands-on, and served as PM for the main UI.',
    techniques: ['HWP 5.0 binary format parsing', 'LibreOffice UNO API integration', 'Document model mapping', 'PM for the main UI'],
  },
  {
    title: 'KakaoTalk Desktop Client',
    description:
      'Desktop chat application for KakaoTalk, Korea’s dominant messenger, with messaging automation capabilities built on top of protocol analysis.',
    tags: ['C#', 'Windows Programming', 'Protocol Analysis', 'Messaging Automation', 'Reverse Engineering', 'Desktop Software'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/kakaotalk.jpg',
    challenge: 'Building a desktop client and automation layer for a closed, proprietary messaging protocol meant reverse-engineering the wire format and keeping up with server-side changes without any official API.',
    solution: 'Analyzed the KakaoTalk protocol through packet inspection, implemented a compatible desktop client in C# on Windows, and layered messaging automation on top with graceful handling of protocol updates.',
    techniques: ['Protocol reverse engineering via packet analysis', 'Windows desktop client in C#', 'Messaging automation layer', 'Resilience to server-side protocol changes'],
  },
  {
    title: 'ArchDic',
    description:
      'Offline dictionary application of architectural terms for architects. What looked like a simple lookup tool turned out to rest on corpus theory at its core — the first project that taught how linguistic data structures really work.',
    tags: ['C++', 'Qt', 'Corpus Theory', 'Offline Search', 'Trie / Indexing', 'Desktop Software', 'Windows Programming'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/archdic.jpg',
    challenge: 'A dictionary app sounds trivial until you need fast offline lookup over a large domain-specific corpus with fuzzy matching — corpus theory turned out to be at the heart of it.',
    solution: 'Built an indexed offline dictionary in C++/Qt with prefix and fuzzy search over a curated architectural-terms corpus, packaged for desktop with no network dependency.',
    techniques: ['Corpus-based dictionary construction', 'Indexed offline full-text search', 'Prefix and fuzzy matching', 'Qt desktop packaging'],
  },
  {
    title: '3D Modeling Tool (Revit)',
    description:
      'A 3D modeling tool integrated with the Autodesk Revit SDK, built during the KOAST internship. The project was the first hands-on lesson in working inside a large third-party SDK and its object model.',
    tags: ['C#', 'Autodesk Revit SDK', '3D Modeling', 'BIM', '.NET', 'Third-party SDK Integration'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/3d-builder.jpg',
    challenge: 'Integrating with the Autodesk Revit SDK meant learning a massive, opinionated BIM object model and API surface, then bending it toward custom 3D modeling behavior.',
    solution: 'Studied the Revit SDK object model, built a modeling tool on top of its .NET API, and mapped custom modeling operations onto Revit’s document and element structures.',
    techniques: ['Autodesk Revit SDK / .NET API integration', 'BIM object-model mapping', 'Custom 3D modeling operations'],
  },
  {
    title: 'Cocos2d Game Ports',
    description:
      'Ported two SWF Flash games (Mortal Combat, Fighter Flight) to Cocos2d for Android and iOS during the KOAST internship — the assignment that followed the legendary Tetris code-golf competition.',
    tags: ['Cocos2D', 'C++', 'Android', 'iOS', 'Game Development', 'SWF Porting', 'Cross-platform'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/cocos2d-games.jpg',
    challenge: 'Reimplementing Flash/SWF games on Cocos2d for both Android and iOS meant rebuilding game logic and asset pipelines that originally targeted the Flash runtime, on two mobile platforms at once.',
    solution: 'Recreated the games’ mechanics and scene flow in Cocos2d, rebuilt the asset and animation pipeline for mobile, and shipped to both Android and iOS from a shared C++ codebase.',
    techniques: ['SWF-to-Cocos2d game reimplementation', 'Shared C++ codebase for Android + iOS', 'Mobile asset and animation pipeline'],
  },
  {
    title: 'CAPTCHA Recognition',
    description:
      'A CAPTCHA auto-recognition and bypass system built right as TensorFlow and Keras were first emerging. Combined classic image processing with early deep-learning models to read distorted challenge text.',
    tags: ['TensorFlow', 'Keras', 'Python', 'Image Processing', 'OpenCV', 'CNN', 'OCR', 'Deep Learning'],
    icon: 'brain',
    company: 'NovaCircuit',
    image: '/projects/tensorflow-cap.jpg',
    challenge: 'Reading deliberately distorted CAPTCHA text required tolerance to noise, warping, and overlapping characters — well beyond what template matching could handle, at a time when deep-learning tooling was brand new.',
    solution: 'Built an image-processing front end (denoise, segment, normalize) feeding CNN models trained in TensorFlow/Keras to recognize characters, iterating on architectures as the frameworks matured.',
    techniques: ['Image preprocessing and character segmentation', 'CNN-based character recognition (TensorFlow/Keras)', 'Synthetic training-data generation', 'End-to-end recognition pipeline'],
  },
  {
    title: 'APK Reverse Engineering',
    metrics: 'Unity 4.x through 5.6, native and IL2CPP builds',
    description:
      'Android APK and Unity APK reverse engineering — analyzing native Android apps and Unity builds (4.x–5.6) to understand, audit, and rebuild their behavior.',
    tags: ['Android', 'Reverse Engineering', 'Unity', 'Smali / DEX', 'Native Code', 'Security Analysis', 'Java'],
    icon: 'camera',
    company: 'NovaCircuit',
    image: '/projects/apk-reverse.jpg',
    challenge: 'Understanding shipped Android and Unity applications with no source meant decompiling, deobfuscating, and reconstructing program behavior across both Dalvik bytecode and Unity’s IL2CPP/Mono internals.',
    solution: 'Reverse-engineered APKs through smali/DEX analysis and native inspection, mapped Unity 4.x–5.6 build internals, and reconstructed the relevant logic for auditing and rebuilding.',
    techniques: ['Smali / DEX decompilation and analysis', 'Unity 4.x–5.6 build internals (Mono/IL2CPP)', 'Native code inspection', 'Behavior reconstruction'],
  },
  {
    title: 'Web Conferencing System',
    description:
      'A web-based video conferencing system built on Node.js, MongoDB, and WebRTC — the browser counterpart to the MeetUp desktop client, delivering real-time multi-party audio and video.',
    tags: ['WebRTC', 'Node.js', 'MongoDB', 'Socket.io', 'Real-time Systems', 'Audio/Video Streaming', 'JavaScript'],
    icon: 'brain',
    company: 'NovaCircuit',
    image: '/projects/web-conference.jpg',
    challenge: 'Delivering low-latency, multi-party audio and video in the browser required managing WebRTC peer connections, signaling, and media negotiation reliably across networks and devices.',
    solution: 'Built a Node.js signaling server with Socket.io, orchestrated WebRTC peer connections for multi-party rooms, and used MongoDB for room and session state.',
    techniques: ['WebRTC peer-connection orchestration', 'Node.js + Socket.io signaling server', 'Multi-party room management', 'Media negotiation across networks'],
  },
  {
    title: 'Sales Management System',
    description:
      'A product sales management platform built for company operations at NovaCircuit — covering orders, inventory, and reporting for internal sales workflows.',
    tags: ['ASP.NET', 'C#', 'SQL Server', 'Web Forms', 'Reporting', 'Enterprise Software'],
    icon: 'file-text',
    company: 'NovaCircuit',
    image: '/projects/sales-mgmt.jpg',
    challenge: 'Internal sales operations needed a single system tying together orders, inventory, and reporting, reliable enough to run day-to-day business.',
    solution: 'Built a full sales management platform on ASP.NET/C# with SQL Server, covering order entry, inventory tracking, and management reporting for internal teams.',
    techniques: ['ASP.NET / C# business application', 'SQL Server data modeling', 'Order and inventory workflows', 'Management reporting'],
  },
  {
    title: 'Internal Management System',
    description:
      'A remote internal security and operations management system built at NovaCircuit, giving administrators centralized oversight of internal resources and activity.',
    tags: ['ASP.NET', 'IIS', 'Node.js', 'C#', 'Security', 'Admin Dashboards', 'Enterprise Software'],
    icon: 'camera',
    company: 'NovaCircuit',
    image: '/projects/internal-mgmt.jpg',
    challenge: 'The company needed centralized, remote oversight of internal systems and security-relevant activity, accessible to administrators without exposing sensitive infrastructure.',
    solution: 'Built internal management and security-oversight tooling on ASP.NET/IIS with Node.js services, providing administrators a centralized dashboard over internal resources and activity.',
    techniques: ['ASP.NET / IIS internal tooling', 'Node.js supporting services', 'Centralized admin dashboards', 'Remote security oversight'],
  },
  {
    title: 'AWS-NovaFlex',
    description:
      'Extension product for Advanced Web Strategies that widens what an AI agent can do inside WordPress through the Novamira MCP server. darianwaing.com is the demonstration: every page, the header template, the design system and the whole image pipeline were built by an agent calling it, with no page-builder UI touched by hand.',
    tags: ['MCP', 'WordPress', 'PHP', 'AI Agents', 'Elementor', 'Astra', 'Automation'],
    icon: 'brain',
    company: 'Advanced Web Strategies',
    metrics: 'This entire site was built by an AI agent driving WordPress through it',
    challenge:
      'An AI agent connected to WordPress over MCP can post and edit, but building a real site needs much more: theme settings, page-builder trees, media pipelines, design rules, arbitrary server-side execution. Every capability the agent lacks is a point where a human has to take the keyboard back.',
    solution:
      'Built AWS-NovaFlex as an extension layer on top of the Novamira MCP server, broadening the surface an agent can call and hardening the parts that break silently, then proved it end to end by having an agent design and build this site.',
    techniques: ['WordPress ability design for agents', 'Page-builder tree construction through the document API', 'Server-side PHP execution surface', 'Media upload and attachment pipeline', 'Design-system validation for generated output'],
  },
  {
    title: 'Real-Time Speech Interpreter',
    description:
      'Real-time speech interpretation built in Rust, on my own time. Speak Chinese and the English interpretation lands live in an actual call, working inside Google Meet, Zoom and Telegram rather than in a separate app the other side cannot hear.',
    tags: ['Rust', 'Real-time Audio', 'Speech Recognition', 'Machine Translation', 'Virtual Audio Devices', 'Low Latency'],
    icon: 'brain',
    company: 'Personal project',
    metrics: 'Chinese to English, live inside Google Meet, Zoom and Telegram',
    challenge:
      'Interpretation is only useful if it arrives inside the meeting people are already in. Chinese speech has to be captured, recognised, translated into English and spoken back with low enough latency to hold a conversation, while feeding audio into platforms that were never designed to accept a third party in the pipeline.',
    solution:
      'Built the pipeline in Rust for predictable latency and memory behaviour under continuous streaming, and routed the output so it presents to Google Meet, Zoom and Telegram as a normal audio source, which is what lets it work in a real call instead of a demo.',
    techniques: ['Rust streaming audio pipeline', 'Real-time Chinese speech recognition', 'Chinese to English machine translation', 'Virtual audio device routing', 'Low-latency buffering for conversational turn taking', 'Integration with Google Meet, Zoom and Telegram'],
  },
]

export type PsychometricTrait = {
  category: string
  traits: string[]
  description: string
}

export const psychometricTraits: PsychometricTrait[] = [
  {
    category: 'Thinking',
    traits: ['Analysing', 'Exploring'],
    description:
      'Comfortable dealing with numerical data to understand and solve problems. Factual and uses evidence to support hypotheses. Prefers established and proven approaches, appreciates authority and rules, and adjusts easily. Practical and down to earth, while keeping an open mind to novel approaches.',
  },
  {
    category: 'Executing',
    traits: ['Quality', 'Result Driven'],
    description:
      'Systematic, methodical, and organised — delivers within deadlines. Reliable, disciplined, and driven to achieve goals. Doesn\u2019t get lost in detail, though can sometimes overlook mistakes.',
  },
  {
    category: 'Connecting',
    traits: ['Networking', 'Collaborating'],
    description:
      'Displays empathy towards colleagues and values listening to their points of view. Involves others in key decisions and plans. Gives credit where it\u2019s due and delegates easily when necessary.',
  },
  {
    category: 'Progressing',
    traits: ['Leadership', 'Resilience', 'Adaptability'],
    description:
      'Comfortable working in rapidly changing environments. A good team player who pays attention to everyone\u2019s input in a group setting.',
  },
]

export const psychometricSummary = {
  topTraits: ['Team player', 'Focused', 'Analytical'],
  roleFit: [
    'Roles involving managing multiple stakeholders or building deep relationships with key accounts.',
    'Roles with clear goals or timelines, where performance can be easily measured.',
    'Roles relating to research, analysis, data analytics, or applying rational thinking to solve problems.',
  ],
  organizationFit: [
    'Organisations that are supportive of employees, promote sharing information, and have good employee recognition programs.',
    'Organisations that are fast-paced, results-oriented, and offer clear career paths linked to performance.',
    'Organisations that promote evidence-based critical thinking.',
  ],
}

export type MbtiTrait = {
  label: string
  opposite: string
  percent: number
  category: string
  color: string
}

export type MbtiSection = {
  title: string
  paragraphs: string[]
}

export const mbtiData = {
  type: 'ENFJ-T',
  typeName: 'Protagonist',
  role: 'Diplomat',
  description: [
    `As a Protagonist (ENFJ-T), you possess a unique blend of charisma, empathy, and idealism that sets you apart in any crowd. Your natural ability to inspire and lead others is matched only by your deep-seated desire to make a positive impact on the world around you. You have an uncanny knack for understanding people's emotions and motivations, often sensing what others need before they even realize it themselves.`,
    `Your gift for communication allows you to articulate your visionary ideas with passion and conviction, drawing others into your orbit and motivating them to join your cause. You thrive on meaningful connections and have a remarkable talent for bringing out the best in those around you. However, your idealistic nature can sometimes set you up for disappointment when reality falls short of your lofty expectations.`,
  ],
  traits: [
    { label: 'Extraverted', opposite: 'Introverted', percent: 61, category: 'Energy', color: 'blue' },
    { label: 'Intuitive', opposite: 'Observant', percent: 57, category: 'Mind', color: 'yellow' },
    { label: 'Feeling', opposite: 'Thinking', percent: 65, category: 'Nature', color: 'green' },
    { label: 'Judging', opposite: 'Prospecting', percent: 61, category: 'Tactics', color: 'purple' },
    { label: 'Turbulent', opposite: 'Assertive', percent: 64, category: 'Identity', color: 'red' },
  ] as MbtiTrait[],
  sections: [
    {
      title: 'Career',
      paragraphs: [
        `Your career path is likely to be driven by a deep-seated need to make a meaningful difference in people's lives. You thrive in roles that allow you to inspire, guide, and develop others, making you an excellent teacher, counselor, or team leader. Your natural charisma and ability to articulate a compelling vision make you a standout in fields like human resources, public relations, or nonprofit management.`,
      ],
    },
    {
      title: 'Personal Growth',
      paragraphs: [
        `Your journey of personal growth is fueled by an insatiable desire for self-improvement and a genuine commitment to becoming the best version of yourself. You set high standards for your own behavior and are often your own harshest critic. While this drive can lead to remarkable personal development, it's crucial to temper it with self-compassion and realistic expectations.`,
      ],
    },
    {
      title: 'Relationships',
      paragraphs: [
        `In relationships, whether romantic, familial, or platonic, you shine as a deeply committed and intuitive partner. Your ability to understand and cater to others' emotional needs makes you a valued friend and confidant. You have a gift for creating deep, meaningful connections and building environments where others feel safe to be their authentic selves.`,
      ],
    },
  ] as MbtiSection[],
}

export type Education = {
  degree: string
  institution: string
  period: string
  description: string
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'James Cook University, Singapore',
    period: '2011 – 2014',
    description:
      'Studied core computer science subjects including computer architecture, algorithms, data structures, software engineering, databases, networks, and artificial intelligence.',
  },
  {
    degree: 'Blockchain Bootcamp',
    institution: 'Moralis Academy',
    period: '2019',
    description:
      'Completed a Blockchain Bootcamp focused on smart contract development (Solidity), Web3 integration (Web3.js/Ethers.js), decentralized application (dApp) architecture, token standards (ERC-20/BRC-20), and blockchain security fundamentals.',
  },
]
