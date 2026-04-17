export const header = {
	name: 'Anton Brams',
	title: 'AI Agent Architect',
}

export const thesis = `Founder co-pilot for 0→1. I operate at the principal level across AI, software, hardware, and design, solving problems that span all of them at once. Where most teams assemble five specialists and a translator, I bring the same capability in one head — no coordination tax, no tunnel vision, no handoffs lost in translation. I work from first principles — strip the problem to what it actually demands, then rebuild every part from zero so the pieces interlock. My value isn't a stack; it's judgment about what's worth building, prototypes that prove it, and end-to-end delivery — solo, fast. I run my own R&D platform (a live AI agent I use daily) where architectural ideas mature under real-world load. For startups, R&D groups, and AI companies who need a builder who thinks like an operator.`

export const facts = [
	{
		label: 'Experience',
		value:
			'11+ years solving cross-domain problems in AI, design, software, hardware, and industrial. Delivered for Hyundai, YanFeng, Telekom, BASF, KUKA. Also founded three products of my own: Touchboard, Ava, Alenashop — last two running till today.',
	},
	{
		label: 'Skills',
		value: `Shipped in production across every layer. AI: DeepAgents, multi-layer memory systems, universal tool registries, permission systems, physical AI interfaces. Software: fullstack TypeScript/NextJs/NodeJs, PostgreSQL/MongoDB, CI/CD, Docker. Hardware: embedded C++, rigid/flex PCB design, SMT reflow, sensor/haptics, MQTT/BLE/SPI. Design: UX, UI, industrial, sound.`,
	},
	{
		label: 'Education',
		value:
			'M.Sc. Human-Computer Interaction, Bauhaus (highest grade). B.A. Industrial Design, Folkwang (highest grade).',
	},
	{
		label: 'Currently',
		value: 'Ava development. UX & Fullstack at MESO Digital Interiors.',
	},
	{
		label: 'Work Style',
		value: 'Remote-first, async. Based in Germany, open to relocation to warm country.',
	},
	{
		label: 'Engagement',
		value:
			'Free 30-min call. Project work €100/h (2d/wk) — start immediately. Full-time from €100k/y — quits current role on signing. International AI-company band, not German market.',
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
		subtitle: 'Live R&D platform — architecture I transfer into client deployments',
		description: `Ava is the AI agent I run daily and the lab where every architecture pattern I ship to clients matures first. Built in 46 days, 10,600 lines, on DeepAgents.<br/><br/>
<b>Plugin-first architecture:</b> every integration (Slack, device, API, MCP server) is a declarative config — tools, context, handlers, middleware. No core rewires. New capability live in ~10 minutes, hot-loaded.<br/><br/>
<b>Infinite memory without token death:</b> temporal pyramid compression keeps recent context dense while older context fades. Thousands of messages survive in a fixed window.<br/><br/>
<b>Unified tool surface:</b> local CLIs, MCP servers, HTTP APIs, hardware — all speak one interface. LLM calls curl and MQTT with identical semantics. Eliminates the N-integrations × N-adapters tax.<br/><br/>
<b>YAML-to-API shortcuts:</b> one YAML file = one service. Endpoints, schemas, request templates all data-driven. Agent scrapes, processes, extracts through sandboxed curl/jq — safer than giving it shell access. Agent integrates new APIs itself in seconds — not a human in hours.<br/><br/>
<b>Permission system that survives LLM mutations:</b> stable hash over canonical argument form prevents allow → deny flips from argument-order shifts. The class of bug that kills agent deployments in production, engineered away upfront.<br/><br/>
<b>Business impact:</b> integration cycle collapses from sprints to hours (plugin-first). Long-running agents stay coherent without context reload cost (memory). Agent side effects are safe in production (permission model). These patterns are ready to drop into any team's agent stack.`,
		images: ['/ai/ava/1.webp', '/ai/ava/2.webp', '/ai/ava/3.webp', '/ai/ava/4.webp'],
		route: '/projects/Ava',
	},
	{
		name: 'Alena Souvenirs - Manufacturing',
		subtitle: 'Laser farm: 200 → 1000 units/day',
		description: `I architected and operated a complete laser farm from 0 — owner-operator, not consultant. Architecture principle: every part does 3-5 jobs and interlocks with the next. The tray alone is laser-safe floor, camera reference, quick-swap surface, smoke-funnel seal, and software anchor for G-Code. One object, five functions. The whole factory works like this — tray, shelf, algorithms, smart-cut finisher — one living system, not a stack of features.<br/><br/>
<b>Problem:</b> Making layered magnets required hand-gluing sheets, then manual CO₂ laser alignment—sub-millimeter precision by keyboard dozens of times/shift. Skilled labor, slow. 200 units/day max.<br/><br/>
<b>Solution:</b> Switched from CO₂ (expensive, requires chillers, mirror cleaning, smoke extraction contaminating optics) to modular 70W diode lasers (1/4 cost, compact, horizontally scalable, G-Code control). Mounted ESP32 camera on laser head—detects print crosses regardless of rotation or scale, feeds back to auto-align. Built SVG pipeline to automate file prep (layer splitting, ink-saving, bleed, PDF/SVG rendering)—eliminated manual handover and WhatsApp chaos. Designed custom tray with laser-safe floor and alignment pins. Smart-cut mode: pre-cut alignment holes, stack sheets on pins, glue as one block, final cut with depth-aware laser power per layer—reduces manual labor to near zero.<br/><br/>
<b>Business impact:</b> 1,000 units/day. 2 full-time operators freed. Modular farm scales as business grows. Running 2024 - today.`,
		images: ['/ai/alena/1.webp', '/ai/alena/2.webp', '/ai/alena/3.webp', '/ai/alena/4.webp'],
		route: '/projects/Alena Souvenirs - Manufacturing',
	},
	{
		name: 'Touchboard',
		subtitle: 'Invented, funded, built end-to-end. €200k raised.',
		description: `Touchboard is a context-aware haptic input device I built from the idea down to the casing — algorithms, hardware, firmware, software, all mine. I raised €200k (EXIST, NRW Stipendium, accelerators) and won €10k first place at the Next Award on the vision alone. I also made the harder call: not to force an unproven product to market.<br/><br/>
<b>Core concept:</b> ergonomic input surface with a better layout than a keyboard. Software defines which controls surface under your fingers per app, and haptics sync to the UI. Every key is pressure-sensitive — play MIDI with real velocity, hit harder for a louder snare.<br/><br/>
<b>Custom hardware stack:</b> transparent ITO-coated capacitive film (laser-etched by hand — no commercial supplier existed); 500-page C++ multitouch driver; SPI/BLE firmware; symmetric ergonomic casing with embedded surface haptics.<br/><br/>
<b>Software:</b> proprietary force signal processing and multi-threshold haptic triggering (light click, force touch); layout editor with context-aware app detection.<br/><br/>
<b>Business impact:</b> €210k non-dilutive capital raised on vision and prototype; strategic exit preserved capital when the market signal wasn't there; the stack, patents-adjacent IP, and founder experience all carried forward.`,
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
		description: `Projects across automotive OEM, automotive interiors, ecommerce, and digital signage. Same operating mode — translate ambiguous business problems into shipped systems. Each entry below is a different proof of cross-domain range.

		<br/><br/><a href="/#/projects/Diwa">Diwa</a> at Adversign Media (2022-2023): Product Owner. I convinced the team to make the right architectural decisions — Cloud monolith → microservices refactor, hardware/motherboard specs (coordinated with China-based engineers), UX redesign for multiplatform mobile app. My voice was listened to. Translated vague customer needs into technical specs, hardware constraints into intuitive interfaces.

		<br/><br/><a href="/#/projects/Alenashop">Alenashop</a> eCommerce platform: I built from 0 to production (runs 2021 – today). Scaled a wholesale business from founder spreadsheets to 4300+ SKU management. Built end-to-end full-stack accounting system (Svelte, NodeJS, Docker, PostgreSQL, AWS) that tracked inventory, orders, fulfillment, manufacturing, finances. Evolved with the business—from chaos to foundation for manufacturing operations and team scaling.

		<br/><br/><a href="/#/projects/YanFeng">YanFeng</a> (automotive supplier): I designed and built fullstack UI for show car's middle console and door interfaces—design propositions in YanFeng's visual language, UX for autonomous/manual mode switching across all surfaces. Collaborated hand-in-hand with YanFeng designers. Tech and UX advisor for production main dashboard. Tech stack: React, VVVV-based dashboard, MQTT multi-screen control (ceiling, seats, doors), context-aware mode switching.

		<br/><br/><a href="/#/projects/Hyundai">Hyundai</a> (multiple projects, some under NDA): I was UX and UI designer creating advanced concepts for future production—ahead of industry trends by 5 years. Public project: vertical heading interface built into steering wheel. User rotates wheel, display rotates with it, interface stays locked in place. Collaborated hand-in-hand with Hyundai designers, ensured UI visuals matched their language, implemented technically, presented at fairs worldwide. Smartphone-based modular displays, telemetric data-driven animations, rotation-compensated UI with phone IMU sensor.`,
		images: ['/ai/others/1.webp', '/ai/others/2.webp', '/ai/others/3.webp', '/ai/others/4.webp'],
	},
]
