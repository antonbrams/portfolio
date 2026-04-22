export const header = {
	name: 'Anton Brams',
	title: 'AI Agent Architect',
}

export const thesis = `Founder co-pilot for 0→1. I start from the user's perfect scenario — and architect backwards to make it real.<br/><br/>R&D lab in one human. No coordination tax, no tunnel vision. I work from first principles: identify the problem, strip it to the essentials, rebuild from zero until every piece interlocks.<br/><br/>My value isn't a stack — it's judgment about what's worth building, prototypes that prove it, and end-to-end delivery. Solo or embedded in your team, fast.`

export const closing = `I've been thinking about how human-computer interfaces should work in the AI era — and building to prove it. I want to be in the room where that gets defined.`

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
		description: `Ava is the AI agent I run daily — the lab where every architecture I ship to clients is proven before I charge for it.<br/><br/>
<b>Problem:</b> AI agents built by most teams fail in production — brittle integrations that take sprints to add, context death on long conversations, unsafe side effects that break things silently.<br/><br/>
<b>Result:</b> Running daily for months without breaking. New integration live in ~10 minutes. Memory survives thousands of messages. No unsafe side effects in production. Built solo in 46 days, 10,600 lines.<br/><br/>
<b>New capability in 10 minutes, not a sprint.</b> Plugin-first architecture — every integration is a declarative config. No core rewires, no risk. Slack, hardware, API, MCP server — same pattern, hot-loaded.<br/><br/>
<b>Agent stays coherent across thousands of messages.</b> Memory compression keeps recent context dense while older context fades naturally. No context resets, no reload cost, no lost thread.<br/><br/>
<b>One interface for everything.</b> APIs, hardware, CLI tools, MCP servers — all speak one interface. No adapter sprawl, no N×N integration tax.<br/><br/>
<b>Agent integrates new APIs itself — in seconds.</b> One YAML file defines a service. The agent scrapes, processes, extracts through it — sandboxed and safe. What takes a developer hours, the agent does alone.<br/><br/>
<b>Safe in production, by design.</b> Permission system prevents the class of bug that silently kills agent deployments — engineered away upfront, not patched later.`,
		images: ['/ai/ava/1.webp', '/ai/ava/2.webp', '/ai/ava/3.webp', '/ai/ava/4.webp'],
		route: '/projects/Ava',
	},
	{
		name: 'Alena Souvenirs - Manufacturing',
		subtitle: 'Laser farm: 200 → 1000 units/day',
		description: `Built and operated a complete laser manufacturing farm from zero — owner-operator, not consultant. Running 2024 – today.<br/><br/>
<b>Problem:</b> Making layered magnets required hand-gluing sheets and manually aligning each laser cut by keyboard — sub-millimeter precision, dozens of times per shift. Skilled labor, slow. 200 units/day max.<br/><br/>
<b>Result:</b> One button press. Finished product falls out of the batch — no manual alignment, no designer prep, no cleaning downtime. 200 → 1,000 units/day. 2 full-time labor positions eliminated. Scales with the business.<br/><br/>
<b>Offsetting manual work into automation.</b> Computer vision on the laser head aligns every cut automatically — no keyboard, no operator. A custom SVG pipeline eliminates designer handoff entirely: file prep, layer splitting, layout optimization — one click, ready to cut.<br/><br/>
<b>Right hardware from the ground up.</b> Switched from CO₂ to modular diode lasers — ¼ the cost, no mirror calibration, stackable, software-controlled. Custom tray loads and unloads in seconds, doubles as camera reference and local air suction — no dirt, no cleaning, no downtime. Scalable rack fits multiple lasers in 1m².<br/><br/>
<b>A new industrial process.</b> The entire manual alignment and gluing workflow moved into machine operations. Smart-cut mode stacks, glues, and cuts in one automated sequence — depth-aware per layer. 2 full-time jobs replaced by one button.`,
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
