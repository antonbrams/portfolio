export const header = {
	name: 'Anton Brams',
	title: 'AI Agent Architect',
}

export const thesis = `Founders co-pilot. For startups, R&D labs, companies that need to build 0→1. I translate ambitious ideas with no clear solution into working prototypes or ready-to-ship concepts. I save time, money, eliminate unknowns fast. I don't memorize tools — I have intuitive understanding of software, hardware, and design. I act as your R&D lab. I solve multidimensional problems spanning multiple domains. As HCI expert & industrial designer using web stack, I ship agents into the real world: integrations with machines and APIs, human interfaces, memory systems, reasoning patterns. I build 0→1. End-to-end. Solo. Fast.`

export const facts = [
	{
		label: 'Experience',
		value:
			'11+ years. Architected from AI to Design to Software to Hardware to Industrial. Shipped for Hyundai, YanFeng, Telekom, BASF, KUKA. Built my own products — Touchboard, Ava, Alenashop.',
	},
	{
		label: 'Skills',
		value: `AI: Deepagents, multi-layer memory systems, universal tool registries, permission systems, physical ai interfaces. Software: Fullstack NextJS & NodeJS, CD/CI, Docker. Hardware: C++, rigid/flex PCB design, SMT reflow soldering, sensors/haptics. Design: UX, UI, industrial, sound design.`,
	},
	{
		label: 'Education',
		value:
			'M.Sc. Human-Computer Interaction, Bauhaus (highest grade). B.A. Industrial Design, Folkwang (highest grade).',
	},
	{
		label: 'Currently',
		value: 'Building Ava (AI agent infrastructure). UX & Fullstack at MESO Digital Interiors.',
	},
	{
		label: 'Work Style',
		value: 'Remote-first, async. Based in Germany, open to relocation to warm country.',
	},
	{
		label: 'Engagement',
		value: 'Free 30-min brainstorming — no commitment. Project-based work in epochs (~€100/h). Full-time starting €100k/y. Available now.',
	},
	{
		label: 'Previous Roles',
		value: 'UX, Fullstack Developer, Product Owner, Founder, Lecturer.',
	},
	{
		label: 'Languages',
		value: 'English (C1), German (C2), Russian (Native)',
	},
]

export const projects = [
	{
		name: 'Ava',
		subtitle: 'Production AI agent I live inside daily',
		description: `I built a personal AI agent from 0 (on DeepAgents framework) that remembers everything, controls machines, enforces security. Architected: four-layer temporal memory compresses conversations into temporal pyramid—context survives indefinitely without blowing token window. Self-describing peripherals announce themselves on connect; agent discovers devices dynamically. Universal tool registry normalizes all sources (local, MCP, APIs, hardware) behind one API. Built YAML-config integration system—new tools without tutorials, terminal commands, or API key exposure. Designed permission system using stable hashing to survive LLM argument reordering. Production-tested: found and fixed LangGraph message ID collisions (invisible until 156+ messages), race conditions in concurrent persistence, argument reordering breaking security verdicts. 10,600 lines of my code. Still running daily.`,
		impact: '46 days. Solo. Production-grade.',
		images: ['/ai/ava/1.webp', '/ai/ava/2.webp', '/ai/ava/3.webp', '/ai/ava/4.webp'],
		route: '/projects/Ava',
	},
	{
		name: 'Alena Souvenirs - Manufacturing',
		subtitle: 'Laser farm: 200 → 1000 units/day',
		description: `I engineered a complete laser farm from 0. Bottleneck: manual CO₂ laser alignment—sub-millimeter precision by hand, dozens times/shift. 200 units/day max. I designed and built: switched laser tech (CO₂→diode laser, 1/4 cost, modular), mounted ESP32 camera system with transformation matrix algorithms for automatic alignment, built SVG processing pipeline (eliminated WhatsApp file exchange chaos), designed metal rack architecture with air intake funnels and shared exhaust, designed multifunctional feed trays, wrote ui, backend and firmware (G-code generation, smart-cut mode to reduce operator dexterity requirements). Full-stack: software, cv algorithms, firmware, software, hardware, welding, pneumatics, workflow — all integrated from scratch.`,
		impact:
			'1,000 units/day. 2 full-time operators freed. Modular farm scales as business grows. Still running 2024-2025.',
		images: ['/ai/alena/1.webp', '/ai/alena/2.webp', '/ai/alena/3.webp', '/ai/alena/4.webp'],
		route: '/projects/Alena Souvenirs - Manufacturing',
	},
	{
		name: 'Touchboard',
		subtitle: 'Haptic input device. €200k raised, founder mindset',
		description: `I invented and built Touchboard from 0 — idea, design, algorithms, hardware, firmware, software, casing, all mine. Context-aware input device that auto-detects frontmost application and displays relevant controls under your fingers. Eliminated keyboard friction (remembering keys, looking away). Built: custom transparent ITO-coated capacitive film (laser-etched by hand, no commercial supplier), 500-page C++ multitouch driver library, proprietary force signal processing algorithm with multi-threshold haptic triggering (light click, force touch), firmware (SPI, BLE, display normalization), symmetric ergonomic casing with haptic feedback embedded in surface, layout editor software. Weeks of custom film fabrication. Solved firmware complexities and sensor integration from scratch. Pitched investors, presented vision, raised €200k capital.`,
		impact:
			'€200k raised (EXIST, NRW Stipendium, accelerators). €10k first-place prize at Next Award competition. Proves founder-level thinking: raised capital, pitched vision, made strategic decision not to force unproven product to market.',
		images: [
			'/ai/touchboard/1.webp',
			'/ai/touchboard/2.webp',
			'/ai/touchboard/3.webp',
			'/ai/touchboard/4.webp',
		],
		route: 'https://www.youtube.com/playlist?list=PLIIcLdscAJU8TSejQCNW-Tc52-Lw_5AM_',
	},
	{
		name: 'Further Work',
		subtitle: 'Co-pilot across diverse domains',
		description: `Diverse clients across startups, enterprise, and industry needed working systems under real-world constraints. Each project required translating ambiguous requirements into functioning prototypes and shipped solutions. Different domain, same approach: understand the bottleneck, architect the solution, ship it.
		
		<br/><br/><a href="/#/projects/Diwa">Diwa</a> at Adversign Media (2022-2023): Product Owner. I convinced the team to make the right architectural decisions—monolith→microservices refactor, hardware/motherboard specs (coordinated with China-based engineers), UX redesign for multiplatform mobile app. My voice was listened to. Translated vague customer needs into technical specs, hardware constraints into intuitive interfaces.

		<br/><br/><a href="/#/projects/Alenashop">Alenashop</a> eCommerce platform: I built from 0 to production (runs 2021–now). Scaled a wholesale business from founder spreadsheets to 2000+ SKU management. Built end-to-end full-stack accounting system (Svelte, NodeJS, Docker, PostgreSQL, AWS) that tracked inventory, orders, fulfillment, manufacturing, finances. Evolved with the business—from chaos to foundation for manufacturing operations and team scaling. Still running today.
		
		<br/><br/><a href="/#/projects/YanFeng">YanFeng</a> (automotive supplier): I designed and built fullstack UI for show car's middle console and door interfaces—design propositions in YanFeng's visual language, UX for autonomous/manual mode switching across all surfaces. Collaborated hand-in-hand with YanFeng designers. Tech and UX advisor for production main dashboard. Tech stack: VVVV-based dashboard, MQTT multi-screen control (ceiling, seats, doors), context-aware mode switching.
		
		<br/><br/><a href="/#/projects/Hyundai">Hyundai</a> (multiple projects, some under NDA): I was UX and UI designer creating advanced concepts for future production—ahead of industry trends by 5 years. Public project: vertical heading interface built into steering wheel. User rotates wheel, display rotates with it, interface stays locked in place. Collaborated hand-in-hand with Hyundai designers, ensured UI visuals matched their language, implemented technically, presented at fairs worldwide. Smartphone-based modular displays, telemetric data-driven animations, rotation-compensated UI with phone IMU sensor.
		
		
`,
		impact: `Shipped production systems and concepts across startups, enterprise, and OEM clients. Systems still operational (Alenashop 2021–2025). Concepts and designs showcased globally at automotive exhibitions, setting industry standards 5+ years ahead. Proved ability to translate ambiguous requirements into functioning prototypes across diverse domains—from ecommerce to automotive to digital signage.`,
		images: ['/ai/others/1.webp', '/ai/others/2.webp', '/ai/others/3.webp', '/ai/others/4.webp'],
	},
]
