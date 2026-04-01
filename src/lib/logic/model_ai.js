export const header = {
	name: 'Anton Brams',
	title: 'Applied AI Engineer — Prototyping & Systems',
}

export const thesis = `I take products from 0 to 1. I think in systems, not layers — when I build an AI agent, I also build its memory architecture, its permission model, its physical interface. I start where there's no product yet — just an unsolved problem that needs a shape. One decision cascades — a sensor swap reshapes the housing, the firmware, the architecture above it. Most engineers stop at their layer. I follow the chain reaction through every layer until the system is in harmony. Solo. Fast. Everything below is one person, end-to-end, from the metal up.`

export const facts = [
	{
		label: 'Skills',
		value: `AI: Deepagents, multi-layer memory systems, universal tool registries, permission systems, physical ai interfaces. Software: Fullstack NextJS & NodeJS, CD/CI, Docker. Hardware: C++, rigid/flex PCB design, SMT reflow soldering, sensors/haptics. Design: UX, UI, industrial, sound design.`,
	},
	{
		label: 'Experience',
		value:
			'11 years. AI agents, automotive (Hyundai, YanFeng), enterprise (Telekom, KUKA, BASF), manufacturing automation, hardware R&D.',
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
		value: 'Remote-first, async. Open to full-time or trial engagement. (Yet) based in Germany.',
	},
	{
		label: 'Roles',
		value: 'UX, Fullstack Developer, Architect, Product Owner, Founder, Lecturer.',
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
		description: `Built a personal AI system that remembers everything, controls real machines, and enforces security on every action.<br/><br/>Four-layer memory compacts conversations into a temporal pyramid — deltas roll into days, days into months, months into years — so context survives indefinitely without blowing the token window. My Mac connects to the agent via inverse SSE as a self-describing peripheral — it announces its tools, schemas, and capabilities on connect. The agent doesn't know what devices exist until they show up. Universal registry normalizes all sources (local, MCP, API, peripherals) behind one API with lazy two-step discovery to save tokens. Instead of skills that force the LLM to read tutorials, run terminal commands, and handle API keys directly — new integrations are just YAML configs that get converted into native LLM tools. Define once, call forever. API keys injected from a secure enclave and sanitized on output, so the LLM never touches sensitive data. Permission system uses stable hashing to handle LLM argument reordering — same tool call in any key order produces the same security verdict.<br/><br/>Production-tested: found and fixed a LangGraph message ID collision invisible until 156+ messages, race conditions in concurrent persistence, and LLM argument reordering breaking security verdicts. 10,600 lines. Still running daily.`,
		impact: '46 days. Solo. Production-grade.',
		images: ['/ai/ava/1.webp', '/ai/ava/2.webp', '/ai/ava/3.webp', '/ai/ava/4.webp'],
		route: '/projects/Ava',
	},
	{
		name: 'Alena Souvenirs - Manufacturing',
		subtitle: 'Laser farm: 200 → 1000 units/day',
		description: `Manual laser alignment on CO₂ lasers required sub-millimeter precision by hand, dozens of times per shift. Bottleneck: 200 units/day.<br/><br/>I designed end-to-end: switched laser technology (CO₂ → diode, 1/4 cost, modular), mounted ESP32 camera on laser head for automatic alignment, built SVG pipeline to eliminate manual file prep, designed modular rack with shared air/exhaust.<br/><br/>Hard decisions: Switching laser technology cascaded everything. Camera-based alignment with transformation matrices eliminated manual positioning. SVG pipeline replaced WhatsApp chaos with automated processing. Smart-cut mode reduced operator dexterity requirements. Full-stack integration (hardware, firmware, software, workflow).`,
		impact: '1,000 units/day. 4 diode lasers. 2 operators freed. Still running 2024-2025.',
		images: ['/ai/alena/1.webp', '/ai/alena/2.webp', '/ai/alena/3.webp', '/ai/alena/4.webp'],
		route: '/projects/Alena Souvenirs - Manufacturing',
	},
	{
		name: 'Touchboard',
		subtitle: 'Haptic input device. €200k raised, founder mindset',
		description: `Touchboard was invented to bridge the gap between thinking and doing — a smart, context-aware input device that knows what you need before you reach for it, eliminating the friction of traditional keyboards that force you to remember where keys are and look away from your work.<br/><br/>Built end-to-end: custom transparent ITO-coated capacitive film (laser-etched by hand, no commercial supplier), 500-page C++ multitouch driver library, proprietary force signal processing algorithm with multi-threshold haptic triggering – light click, force touch, firmware (SPI, BLE, UI normalization across displays), housing & chassis design, Touchboard Studio software with layout editor and image recognition. Context-aware layouts auto-detect frontmost application and display relevant controls directly under your fingers.<br/><br/>Hard decisions: Custom multitouch film instead of using existing sensors required weeks of fabrication. Symmetric ergonomic design with real haptic feedback on the multitouch surface itself. 14-hour coding days solving firmware complexities and sensor integration.`,
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
		name: 'Enterprise at MESO & Co.',
		subtitle: 'Shipped with OEMs under real-world pressure',
		description: `Automotive and industrial clients needed interactive systems that worked under real-world pressure — Frankfurt Motor Show, exhibitions, production constraints. Each project required different architectural approach.<br/><br/><a href="/#/projects/YanFeng">YanFeng</a> autonomous dashboard: Context-aware mode switching (manual ↔ autonomous). VVVV-based dashboard + MQTT-controlled multi-screen setup (ceiling, seats, doors). Each screen shows context-specific content.<br/><br/><a href="/#/projects/Hyundai">Hyundai</a> cockpit: Smartphone-based modular displays instead of fixed dashboard. Cordova sandbox with telemetric data-driven animations. Rotation compensated UI with phone's IMU sensor.<br/><br/><a href="/#/projects/BASF">BASF</a> brainstorming: RFID-tagged physical materials auto-logged participants. WebSocket real-time sync across multiple devices.<br/><br/><a href="/#/projects/KUKA">KUKA</a> showroom: Tangible ring-pointer shaped like brand logo. Custom collision detection algorithm. Hybrid physical-digital interaction.`,
		impact: `Shipped concepts and prototype showcases for clients. Frankfurt Motor Show – live public exhibition. Proved ability to adapt architecture to different constraints.`,
		images: ['/ai/others/1.webp', '/ai/others/2.webp', '/ai/others/3.webp', '/ai/others/4.webp'],
	},
]
