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
		description: `I built a personal AI agent from 0 (on DeepAgents framework) that remembers everything, controls machines, enforces security.<br/><br/>
<b>Plugin architecture:</b> every integration is a config object—tools, context, event handlers, middlewares. Plugins auto-register via declarative registry. Zero wiring. Add Slack, add device, add API—no core rewires. Restart agent, new capability live. 10 minutes end-to-end.<br/><br/>
<b>Infinite memory without token death:</b> temporal pyramid compresses conversations—old context fades, newer context stays dense. Thousands of messages survive indefinitely without blowing token window. Recalls conversation from months ago, still coherent.<br/><br/>
<b>Self-discovering devices:</b> peripherals announce on connect; agent auto-maps what exists and what it can do. No config files, no manual binding. Plug in hardware, agent knows instantly what commands are available.<br/><br/>
<b>One API for everything:</b> local CLI tools, MCP servers, HTTP APIs, hardware—same tool interface. No impedance mismatch. LLM calls curl and MQTT with identical semantics.<br/><br/>
<b>Permission system that doesn't break:</b> argument order shifting shouldn't flip allow→deny. Stable hash over canonical form survives LLM mutations. Rare bug that takes hours to debug, engineered away.<br/><br/>
<b>YAML-to-API shortcuts:</b> no microservices per integration. One YAML file = one service. Endpoints, schemas, request templates, all data-driven. Agent integrates with any API in hours, not days. LLM scrapes, processes, extracts—all via sandboxed curl/jq, no shell access.<br/><br/>
<b>Production-grade under fire:</b> caught and fixed invisible bugs: LangGraph message ID collisions (undetectable until 156+ messages), race conditions in concurrent persistence, permission verdicts flipping on argument mutation. 10,600 lines. Still running daily, 46 days solo build.<br/><br/>
<b>Impact:</b> Production AI that scales—adds tools at runtime, drops hardware instantly, remembers forever, enforces security under LLM pressure.`,
		images: ['/ai/ava/1.webp', '/ai/ava/2.webp', '/ai/ava/3.webp', '/ai/ava/4.webp'],
		route: '/projects/Ava',
	},
	{
		name: 'Alena Souvenirs - Manufacturing',
		subtitle: 'Laser farm: 200 → 1000 units/day',
		description: `I engineered a complete laser farm from 0 to eliminate manual bottlenecks in souvenir manufacturing.<br/><br/>
<b>Problem:</b> Making layered magnets required hand-gluing sheets, then manual CO₂ laser alignment—sub-millimeter precision by keyboard dozens of times/shift. Skilled labor, slow. 200 units/day max.<br/><br/>
<b>Solution:</b> Switched from CO₂ (expensive, requires chillers, mirror cleaning, smoke extraction contaminating optics) to modular 70W diode lasers (1/4 cost, compact, horizontally scalable, G-Code control). Mounted ESP32 camera on laser head—detects print crosses regardless of rotation or scale, feeds back to auto-align. Built SVG pipeline to automate file prep (layer splitting, ink-saving, bleed, PDF/SVG rendering)—eliminated manual handover and WhatsApp chaos. Designed custom tray with laser-safe floor and alignment pins. Smart-cut mode: pre-cut alignment holes, stack sheets on pins, glue as one block, final cut with depth-aware laser power per layer—reduces manual labor to near zero.<br/><br/>
<b>Impact:</b> 1,000 units/day. 2 full-time operators freed. Modular farm scales as business grows. Still running 2024-2025.`,
		images: ['/ai/alena/1.webp', '/ai/alena/2.webp', '/ai/alena/3.webp', '/ai/alena/4.webp'],
		route: '/projects/Alena Souvenirs - Manufacturing',
	},
	{
		name: 'Touchboard',
		subtitle: 'Haptic input device. €200k raised, founder mindset',
		description: `I invented and built Touchboard from 0 — idea, design, algorithms, hardware, firmware, software, casing, all mine.<br/><br/>
<b>Core concept:</b> context-aware input device that auto-detects frontmost application and displays relevant controls under your fingers. Eliminated keyboard friction (remembering keys, looking away).<br/><br/>
<b>Custom film:</b> transparent ITO-coated capacitive film (laser-etched by hand, no commercial supplier).<br/><br/>
<b>Driver:</b> 500-page C++ multitouch driver library, proprietary force signal processing algorithm with multi-threshold haptic triggering (light click, force touch).<br/><br/>
<b>Firmware & casing:</b> SPI, BLE, display normalization; symmetric ergonomic casing with haptic feedback embedded in surface.<br/><br/>
<b>Software:</b> layout editor with context-aware app detection.<br/><br/>
<b>Impact:</b> Raised €200k (EXIST, NRW Stipendium, accelerators). €10k first-place at Next Award. Proves founder-level thinking: raised capital, pitched vision, made strategic decision not to force unproven product to market.`,
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

		<br/><br/><b>Impact:</b> Shipped production systems and concepts across startups, enterprise, and OEM clients. Systems still operational (Alenashop 2021–2025). Concepts and designs showcased globally at automotive exhibitions, setting industry standards 5+ years ahead. Proved ability to translate ambiguous requirements into functioning prototypes across diverse domains—from ecommerce to automotive to digital signage.`,
		images: ['/ai/others/1.webp', '/ai/others/2.webp', '/ai/others/3.webp', '/ai/others/4.webp'],
	},
]
