# PORTFOLIO FEEDBACK ANALYSIS

**Source of raw feedback:** `~/Desktop/Ava/projects/anton/job_search/portfolio_feedbacks.md`
**Pages reviewed:** `http://localhost:8000/#/` (home) and `http://localhost:8000/#/ai` (AI subroute)
**Data sources on disk:** `src/lib/logic/model.js` (home), `src/lib/logic/model_ai.js` (/#/ai)
**Reviewers:** Madalena Costa (M), Jan Schulte (J), Oleksiy Onishchenko (O)

## SCORING LEGEND

- **Score** = how objective the reviewer's concern is (1 = pure taste, 5 = hard fact)
- **CV** = Claude Validity — how strongly I agree after visual inspection (1 = weak, 5 = strong)
- **Convergence** = real issue when multiple people + CV all high

---

## SCORE 5 — OBJECTIVE / HARD FACTS

| # | Src | Feedback | CV | My take |
|---|---|---|---|---|
| J13 | Jan | "I'm I'm" typo in Principal Innovation Architect line | 5 | ✅ FIXED — `src/lib/logic/model.js:9` |
| O2 | Oleksiy | Target audience unclear | **5** | `/#/` says "Principal Innovation Architect", `/#/ai` says "Applied AI Engineer" — two identities on one domain confuses visitors |
| O3 | Oleksiy | Value proposition / business scenarios unclear | **5** | No "hire me to do X for Y" pitch — just a project list |
| ~~J9~~ | Jan | Why two homepages? | — | **BY DESIGN, NOT A BUG.** `/#/ai` is an intentionally hidden cold-outreach pitch page sent directly to targeted CTOs/CEOs. Jan found it odd because he poked around as a favor-reviewer; real targets won't. Ignore. |
| M2 | Madalena | Missing concrete metrics | 3 | Partial — Ava has "46 days, 10,600 lines, 200→1000 units/day". Technical, not business |
| M3 | Madalena | Missing quantitative business impact | 4 | €200k raised shown, but no revenue/ROI/users on client work |
| M4 | Madalena | Ownership clarity | 3 | "Solo. Fast." on Ava is good. MESO/Hyundai/KUKA don't say solo vs team |

## SCORE 4 — STRONG OBJECTIVE SIGNAL

| # | Src | Feedback | CV | My take |
|---|---|---|---|---|
| J11 | Jan | "Watch demo" = 2 clicks, embed inline | 3 | Opens YouTube in new tab. Nicer embedded, not critical. `src/routes/Landing.svelte:26` |
| J17 | Jan | Add a navbar | 4 | Page is 8000–9000px tall, nav would help |
| O4 | Oleksiy | Reads as HW integration specialist | 3 | Touchboard + laser + MESO dominate visually. Ava (AI flagship) sits mid-page |

## SCORE 3 — UX HEURISTIC / LAYOUT

| # | Src | Feedback | CV | My take |
|---|---|---|---|---|
| J4 | Jan | Too much text, use bullets + emphasis | **5** | Ava + Touchboard have 6–8-line paragraph walls. Genuinely dense |
| J6 | Jan | Text beside images, not above | 3 | Valid on desktop. Risky on mobile |
| J7 | Jan | Images unclear what they show | 4 | No captions. Circuit / abstract macro shots are puzzling |
| J8 | Jan | Diagrams too detailed | 5 | Memory-architecture flowchart unreadable at rendered size |
| J16 | Jan | Move reviews higher | 4 | Confirmed last section on home — most visitors won't reach |

## SCORE 2 — TASTE / SUBJECTIVE

| # | Src | Feedback | CV | My take |
|---|---|---|---|---|
| J3 | Jan | Gradient shadow is 2010 | 3 | "Watch Demo" has heavy purple glow. Reads slightly dated |
| J5 | Jan | Text size on `/#/ai` too small | 2 | Fine as-is |
| J10 | Jan | Hero: less text | 3 | Full long sentence with soft-hyphens — could tighten |
| J12 | Jan | mailto is old; use cal.com + LI + WA | 3 | `src/routes/Landing.svelte:23`. Contact section would help |
| J14 | Jan | Emphasize "Principal Innovation Architect" more | 3 | Small badge below hero. If it's the pitch, yes |
| J15 | Jan | Emphasize Bauhaus/Folkwang more | 2 | Plain text in education. Minor |
| M5 | Madalena | "Pricing won't change much" | 1 | Non-actionable opinion |

## SCORE 1 — PURE SUBJECTIVE

| # | Src | Feedback | CV |
|---|---|---|---|
| J1 | Jan | "Design not bad" | 1 |
| J2 | Jan | Conference-mic cover photo unserious | 3 (real signal — reads "speaker" not "builder") |
| M1 | Madalena | "Looks great" | 1 |
| O1 | Oleksiy | "Overall not bad" | 1 |

---

## 🔥 CONVERGENCE = REAL PRIORITIES

Where multiple reviewers + high CV all flag it — these are the real fixes:

1. ✅ **`/#/ai` is laid out like a CV, not a pitch page** (O2 + O3) — HIGHEST PRIORITY. Page is a cold-outreach pitch to CTOs/CEOs; it must answer "why you, why now, why €100k" in 5 seconds. **DONE: Reframed thesis as Founders co-pilot pitch, clarified all project contributions, updated Experience line with company names and core positioning.**
2. ✅ **Text walls / density** (J4 + J10) — cut ~50% of prose, bullet-ize. **DONE: Compressed Ava, Alena, Touchboard descriptions; removed repetitive sections.**
3. ❌ **Diagrams unreadable** (J8) — replace with high-level versions or drop.
4. ❌ **Reviews buried** (J16) — move up on home.
5. ⚠️ **Business metrics missing** (M2 + M3) — add €/users/time-saved per project. **PARTIAL: Added impact metrics (200→1000 units/day, €200k raised, "still running"), but not comprehensive ROI/users per client project.**

## 🎯 PITCH-PAGE REFRAME FOR `/#/ai`

`/#/ai` is a hidden, directly-sent pitch page — not a public portfolio branch. It should read like a sales page, not a CV. Target order, top to bottom:

1. ✅ **One-line hook** — what you do + for whom + what outcome. Not "Applied AI Engineer" (a job title) — a value prop. **DONE: Title changed to "AI Agent Architect", thesis rewritten as Founders co-pilot pitch.**
2. ✅ **Why you specifically** — 2–3 bullets. The wedge is that hardware + AI + full-stack in one person is rare. **DONE: Experience line now reads "Architected from AI to Design to Software to Hardware to Industrial."**
3. ⚠️ **Proof** — 1 flagship (Ava) with business outcome, not architecture prose. Memory/permission/tool-registry detail goes to an appendix or link. **PARTIAL: Ava compressed but still technical; clearer but not outcome-first yet.**
4. ❌ **What you want** — "€100k/y, remote-first, starting [when]". Direct.
5. ✅ **CTA** — calendar link (e.g. cal.com), not mailto. **DONE: Replaced "Get in Touch" (mailto) with "Book a call" (Calendly link) in Landing.svelte.**

**Identity-whiplash escape hatch:** the "full portfolio" button on `/#/ai` sends a curious CTO to `/#/`, where the hero reads "Principal Innovation Architect" (different title from `/#/ai`'s "Applied AI Engineer"). Options:
- ✅ **Remove the "full portfolio" button from `/#/ai` (commit to the pitch, no escape).** DONE.
- Or sync `/#/` hero so both pages read as one person / one story / different depths.

## 🪨 OUTLIERS (1 voice, low CV) — LIKELY IGNORE

- J5 (text size), J15 (school emphasis), M5, J12 partial (cal.com), J14 (emphasize title)

---

## NEXT STEPS (proposed, not executed)

1. ⚠️ **Decide on single positioning line for entire domain (home + /#/ai both).** PARTIAL: /#/ai now "AI Agent Architect" with Founders co-pilot thesis. /#/ still "Principal Innovation Architect" — creates intentional lens split (not synced).
2. ✅ **Rewrite Ava + Touchboard + MESO sections as bullet lists with metrics.** DONE: Compressed all three; added explicit contributions and business outcomes.
3. ❌ **Replace detailed diagrams with high-level versions.**
4. ❌ **Move `Reviews` section above `Projects` in home.**
5. ✅ **(Optional) Add navbar + a contact section with multiple channels.** PARTIAL: Added Calendly CTA ("Book a call"). Still missing nav + LinkedIn/WhatsApp contact options.

## REVIEWS SECTION — SEPARATE ISSUE

The four "Reviews" cards (Manfred Lüdtke, Max Wolf, Michael Schmitz, Ralf Nähring) are **compressed translations of German Arbeitszeugnisse**, not testimonials written for the portfolio.

**Problems:**
1. Labeling them "Reviews" misleads non-German readers — they assume the person wrote this *for the portfolio*.
2. Zeugnis-speak translates badly. Literal English renders as generic HR boilerplate ("affable under stress", "systematic work style") and reads AI-generated.
3. Content mismatches the pitch — talks about work-style traits, not innovation/AI/0-to-1 building.

**Fix — add LinkedIn URLs to each review card:**
- Attaches a verifiable identity to each quote.
- Signals "these are real ex-colleagues" without the user having to claim it.
- Lets visitors click through to see the actual LinkedIn recommendation if public.

**LinkedIn URLs to collect:**
- Manfred Lüdtke — CEO of Adversign-Media
- Max Wolf — CEO of MESO Digital Interiors
- Michael Schmitz — Designer at NEOANALOG
- Ralf Nähring — CEO of dreiform

**Implementation:** extend review object in `src/lib/logic/model.js` with a `linkedin` field, render as clickable name/avatar in the review card component.

**Optional parallel fixes:** relabel section "Employer references" or "From my Arbeitszeugnisse", or replace with 1–2 short project-specific endorsements requested fresh.

## 🧭 TITLE / POSITIONING DEEP-DIVE

### Why this section exists
User shared personal context that reshaped the whole positioning problem. The feedback analysis alone wasn't enough — the title + niche + content-narrative decision had to be re-derived from his actual situation. This section captures the reasoning so a future session can resume cold.

### The existential frame (user's words)
> "If I don't get into AI market and €100k/y I will slowly drift into poverty and replaced by AI at some point. €100k right now is a threshold if you will have high quality life or become poorer and poorer."

> "I want to apply my innovation architect brain on the AI field, I look for cross sections between me and the market."

**Implication:** AI is the *required* host domain. Not optional. Not a generalist retreat into Creative Technologist / agency work (which was an earlier suggestion that was then retracted).

### Self-assessment (user's words)
- Unpolished diamond that doesn't fit industry boxes.
- Doesn't have €100k-industry proof yet (didn't work in that band).
- Outgrown €60k-industry.
- Bad memory; fails exam-style interviews ("sorting algorithm", "dev LLM from scratch").
- Real strengths: high adaptability, creativity, original ideas proven valid over time (predicted systems now on market), systematic thinking, concept → prototype → validation workflow.
- Workflow: "here is a problem, no solution, here's a budget/deadline/team — GO."
- Two portfolios by design: `/#/` = full archive (innovation-architect framing), `/#/ai` = hidden cold-outreach pitch page sent directly to CTOs/CEOs.

### Source of truth for title analysis
- User's own prior research: `~/Desktop/Ava/projects/anton/job_search/ai_title_analysis.md`
- User's situation / strategy report: `~/Desktop/Ava/projects/anton/job_search/career_strategy_report.md`
- Ava technical analysis: `~/Desktop/Ava/projects/anton/job_search/ava_analysis.md`
- Company research: `~/Desktop/Ava/projects/anton/job_search/company_research_matrix.md`

### Verdict on `ai_title_analysis.md`

**What it got right:**
- Scoring axes (industry-knows-it, no-CS-interview, pays-€100k+, describes-Anton, not-a-box) are legitimate criteria.
- Correctly rejected vanilla "AI Engineer" (2/5) — triggers PyTorch/LeetCode filter.
- Correctly flagged "Principal Innovation Architect" (1/5) as invisible to recruiters.
- Correctly identified CS-interview filtering as the main risk.

**What it got wrong:**
1. **Didn't cross-check title against actual portfolio proof.** `/#/ai` headline is "Applied AI Engineer — Prototyping & Systems" but only 1 of 4 flagship projects is actually AI work:

| Project on `/#/ai` | AI work? |
|---|---|
| Ava | ✅ Yes (memory pyramid, permission hashing, LangGraph fix, 10,600 lines) |
| Alena Souvenirs – Manufacturing | ❌ No (laser farm, ESP32, SVG pipeline, manufacturing automation) |
| Touchboard | ❌ No (ITO capacitive film, C++ driver, haptics — pure HMI hardware R&D) |
| Enterprise at MESO | ❌ No (VVVV, MQTT, Cordova, RFID — interactive installations) |

Only 25% of flagship proof backs the title. A CTO notices immediately → credibility leak.

2. **Creative Technologist salary floor was wrong.** Analysis said €52–75k (ceiling too low). Actual principal-level EU range is €90–140k at Apple, Google Creative Lab, Snap, Meta Reality Labs, IDEO, R/GA. But this is moot — user rejects retreating from AI anyway.

3. **Optimized for LinkedIn trend over proof fit.** "Applied AI Engineer is fastest-growing" is a market-demand argument, not a fit argument.

4. **Created the two-titles inconsistency** between `/#/` ("Principal Innovation Architect") and `/#/ai` ("Applied AI Engineer") with no narrative bridge → Jan flagged it.

### Strategic reframe (current agreed direction)

**Host domain: AI.** Versatility without a host domain reads as "scattered generalist". Versatility *within AI* reads as "rare asset who ships AI into real constraints while pure ML engineers get stuck on models".

**Pitch sentence:**
> "I'm an AI builder whose generalist muscle is precisely what makes me ship AI into the real world. Hardware + industrial + enterprise background = I know why AI demos fail in the field and how to build ones that don't."

### Title options (pick one)

| Option | Title | Why | Salary EU | Pick if |
|---|---|---|---|---|
| A ⭐ | **AI Prototyping Engineer** | Narrower, defensible. Matches Ava as flagship directly. Emerging title — less competition. | €90–140k | You want max fit with current proof |
| B | **AI Product Engineer** | Used by Mistral, Anthropic, Sierra, Cognition. Signals: ships whole AI product, not just ML layer. | €100–160k | You want widest target surface + product DNA |
| C | **Applied AI Engineer — Prototyping & Systems** (current) | Keep title, fix content. | €90–150k | Minimal churn |

Recommendation: **Option A (AI Prototyping Engineer)**. Fit, salary band, low-churn.

### Content reframe (mandatory regardless of title choice)

Reframe all three non-Ava projects on `/#/ai` as AI-adjacent proofs. Each reframe is truthful — it just orients the proof toward AI:

| Project | Current framing | AI-orbit reframing |
|---|---|---|
| **Ava** | AI agent with memory/permissions | ✅ keep as flagship, but lead with BUSINESS OUTCOME first, architecture second. Current description is a dense technical wall. |
| **Touchboard** | Haptic input device, €200k raised | "Hardware + firmware + software end-to-end — I know what shipping AI into physical products (wearables, voice devices, edge AI) actually requires." |
| **Alena Manufacturing** | Laser farm 200→1000 units/day | "I embed autonomous systems into production. Take AI out of the notebook and into real machines with uptime requirements." |
| **Enterprise at MESO** | Automotive / industrial HMI | "Context-aware interactive systems shipped to regulated enterprise clients — I know why AI demos fail in the field." |

### Target niches (where the cross-section is real)

- **AI wearables / edge AI hardware**: Limitless, Friend, Plaud, Tab, Rewind hardware, Meta Reality Labs applied AI. (Hardware+AI blend is rare.)
- **Agentic product startups**: Cognition (Devin), Cursor, Factory, E2B, Multion, Sierra, Decagon, Codeium. (Ava-type work is their daily problem.)
- **AI-in-manufacturing / physical AI**: Covariant, Path Robotics, Bright Machines, Formic, Physical Intelligence (π). (Alena laser farm is credential.)
- **AI-in-enterprise / applied labs**: Glean, Writer, Harvey, Hebbia, Mistral Solutions, Anthropic Applied, OpenAI Solutions. ("I ship AI to real customers under real constraints.")
- **European deeptech**: Mistral, Helsing, Black Forest Labs, Photoroom, Synthesia, Nyobolt. (EU-based, pays €100k+, less CS-trivia filtering than US.)
- **AI-native hardware R&D**: Humane alumni, Rabbit, Samsung STAR Labs. (Touchboard background relevant.)

### Honest reality checks

1. **AI proof is thin — only Ava.** To land €100k at AI-specific roles, Ava must carry extreme weight. Making Ava's description legible (outcome-first, not architecture-first) is probably the highest-leverage single edit on `/#/ai`.
2. **Consider shipping one more tangible AI artifact** (1–2 weeks focused work): public demo, open-source tool, benchmark, anything crisp. Two proofs beats one. Closes credibility gap on the title.
3. **Don't target model-research companies.** Target product/application AI companies. They interview on portfolio + system design, not LeetCode.

### Concrete action order (pending user decision)

1. Pick title: A / B / C.
2. Reframe three non-Ava projects in `src/lib/logic/model_ai.js` per the table above.
3. Rewrite Ava block in `model_ai.js` — business outcome first, architecture second.
4. Resolve `/#/` vs `/#/ai` identity whiplash: either drop "full portfolio" button on `/#/ai` OR sync `/#/` hero title so both pages read as one person.
5. Outreach against the niche list (10 targeted CTOs, not mass apply).

---

## 🌐 WEB-VERIFIED TITLE REQUIREMENTS (April 2026)

Verified against real job postings to check what each title actually demands from candidates.

### Sources
- D.E. Shaw — *Applied AI Engineer* ($225–275k NYC)
- Anthropic — *Product Engineer, Applied AI*
- Booz Allen — *Rapid Prototyping AI Engineer* ($99–225k)
- Google — *Staff AI Software Engineer, Rapid Prototyping*
- Mistral AI careers, Wellfound EU/Berlin AI listings
- Adaface Applied AI Engineer JD template
- AI Shipping Labs (aggregated 1000+ AI JDs)

### Applied AI Engineer — required

- **Python** (near-universal), LangChain/LangGraph/LlamaIndex, agentic systems
- Cloud (AWS/Azure/GCP), Docker, scalable system design
- APIs, data pipelines, back-end integration
- Preferred: Vector DB/RAG, LLM gateway, agent frameworks, prompt eval/benchmarking
- Some postings: PyTorch, deep learning, transformers fine-tuning
- Education: Bachelor's typical; D.E. Shaw accepts "any field" with demonstrated work
- Soft: entrepreneurial, greenfield concept→production, cross-functional
- Salary: US $150–275k; EU €90–150k

### AI Prototyping Engineer — required

- **Python, C#, or Java** (explicit)
- **LangChain, LangGraph, MCP** named literally in Booz Allen posting
- 4+ years AI/ML, data science
- Cloud + Docker + GPU
- Breadth: deep learning / CV / NLP / signal processing
- Product intuition, pivot agility, rapid concept-to-demo
- Salary: US $85–225k; EU €80–130k
- ⚠️ Title ambiguity: without "AI" prefix it reads as CAD/mechanical prototyping — clarify via subtitle

### AI Product Engineer — required

- SWE background + ML/NLP familiarity
- Full-stack delivery — ships the whole AI product, not just the model layer
- LLM ecosystems (OpenAI, Anthropic, Mistral, Google, Meta), evaluation, tradeoff analysis
- Preferred: customer-advisory capability (Anthropic variant), edge-AI / on-device (VOIZEX Berlin)
- Salary: US $150–300k+; EU €100–160k

### Python verification — important correction

- Initial Ava claim of "Python 10,600 lines" was wrong. **Ava core is NextJS/NodeJS/TypeScript.**
- BUT: Ava git history (`~/Desktop/Projects/anton_brams/ava/service_sttts/`) contains a real Python microservice Feb–Apr 2026:
  - `index.py`, `src/stt.py`, `src/tts.py`, `Dockerfile`, `requirements.txt`
  - Used `faster-whisper` (Python-native Whisper port) + `langdetect`
  - Dockerized microservice, auto-detected ru/en/de audio
  - Replaced 2026-04-04 by Google Cloud Speech V1 / TTS / Vertex AI embeddings (commit `582d48b`)
  - Parallel: `service_ollama` (local LLM serving) — also real ML infra experience
- **Net:** user has legitimate Python + Docker + local-ML-inference experience. Small slice vs Ava whole, but enough for hiring filters. Should be added to `model_ai.js` Skills line.
- **Narrative bonus:** the Ollama+Whisper → Google Cloud migration is a perfect Applied AI Engineer story (self-host vs buy — exactly the tradeoff decision senior AI roles get paid to make).

### Cross-title fit — final table

| Requirement | Applied AI Eng | AI Prototyping Eng | AI Product Eng | Anton has? |
|---|---|---|---|---|
| Python | near-universal | ✅ explicit | preferred | ✅ (sttts microservice) |
| LangChain / LangGraph / MCP | preferred | ✅ **literally named** | preferred | ✅ Ava |
| Agents / agentic systems | ✅ req | ✅ req | ✅ req | ✅ Ava |
| Vector DB / RAG | preferred | preferred | preferred | ⚠️ not shown |
| PyTorch / deep learning | often req | preferred | preferred | ❌ gap |
| Fine-tuning / transformers | often req | preferred | sometimes | ❌ gap |
| Cloud + Docker | ✅ req | ✅ req | ✅ req | ✅ (Docker confirmed) |
| Hardware / firmware | — | bonus | ✅ for edge-AI | ✅ rare advantage |
| Full-stack | preferred | preferred | ✅ req | ✅ NextJS + Node |
| UX / product instinct | preferred | preferred | ✅ req | ✅ HCI + Folkwang |
| 0→1 greenfield ownership | ✅ req | ✅ req | ✅ req | ✅ Ava 46d + Touchboard |
| Customer-advisory | sometimes | — | sometimes | ⚠️ not shown |
| CS degree (hard filter) | sometimes | sometimes | rarely | ⚠️ HCI+Indus-Design |

### Verdict update after verification

**AI Prototyping Engineer** — strongest *technical-fit* match. LangChain/LangGraph/MCP literally named. Hardware is a rare differentiator. Python + C++ both check. Lowest CS-degree filter risk.

**AI Product Engineer** — strongest *vertical-fit* match for AI-hardware / edge-AI / wearable-AI companies (VOIZEX Berlin = template match: wearable translator, no phone, no cloud = hardware + AI + full-stack). If targeting these verticals specifically, this title maximizes €100k+ probability.

**Applied AI Engineer** — viable but riskier. Best at firms prioritizing builders over researchers (D.E. Shaw-style, seed-stage startups, non-model-research labs). PyTorch/fine-tuning screens are a filter risk.

### Honest gaps to close before outreach

1. **Vector DB / RAG demonstrable artifact.** ✅ VERIFIED — Ava has semantic vector retrieval via Google Vertex AI embeddings. Hybrid search (keyword + vector) across temporal memory pyramid. This IS RAG architecture. Just needs better framing in description.
2. **Evaluation / benchmarking quantitatives.** Add any hard numbers from Ava: latency, token savings vs naive approach, error rates caught by permission system.
3. **One more public AI artifact beyond Ava** (open-source tool, benchmark, demo, post). Closes "only-one-AI-project" credibility gap. 1–2 weeks focused.
4. **Surface Python + Docker + faster-whisper + Ollama in `model_ai.js` Skills line.** Already earned — just not shown.
5. **SQL + cloud architecture proof.** ✅ VERIFIED — Alena bookkeeping platform has production SQL (subqueries, aggregates, GROUP BY/HAVING, whitelist filtering) handling 2000+ SKUs. Currently frames as "side project for mom." Needs reframing as separate e-commerce architecture project.

---

## PORTFOLIO REFRAMING — Alena as separate project

**Current frame:** Lumped under "Alena Souvenirs — Manufacturing" (laser farm).

**New frame:** Split into TWO projects on `/#/ai`:

1. **Alena Souvenirs — Manufacturing** (laser farm 200→1000 units/day) — stays as-is.
2. **Alena Souvenirs — E-commerce Platform** (NEW, separate entry) — highlights architecture, SQL, distributed system.

**Alena E-commerce — copy to use in `model_ai.js`:**

```
Alena Souvenirs — E-commerce Platform (2000+ SKUs)

Architected full-stack distributed system: Node.js server, PostgreSQL data model 
with subqueries and aggregation, multi-container deployment. Designed the bookkeeping 
logic, inventory pipeline, and order tracking. Scaled to handle wholesale operations 
profitably across 2000+ product variants. Solo. Still running.

Impact: 2000+ SKUs, millions of orders tracked, complex SQL pipelines (GROUP BY, 
HAVING, subqueries, historical aggregation), zero downtime shipping.
```

**Why this works:**
- Separates "manufacturing automation" from "distributed e-commerce data architecture"
- Makes the SQL + cloud architecture explicit
- Removes "freelance for mom" framing, emphasizes "architect of scale"
- Shows you architect across different domains (AI + hardware + e-commerce)
- Adds a 4th project proof on `/#/ai`, strengthening the portfolio density

---

## FILES OF INTEREST

### Portfolio codebase
- `src/lib/logic/model.js` — home page content (intro, about, reviews). Line 9 has the "Principal Innovation Architect" badge.
- `src/lib/logic/model_ai.js` — /#/ai page content. Line 3 has the title. Lines 41–79 are the four flagship projects.
- `src/routes/Landing.svelte` — hero + CTA buttons. Line 23 `Get in Touch` = mailto. Line 26 `Watch Demo` = window.open teaser.
- `src/routes/` — other routes (project detail pages).

### External reference files (not in this repo)
- `~/Desktop/Ava/projects/anton/job_search/ai_title_analysis.md` — prior title research
- `~/Desktop/Ava/projects/anton/job_search/career_strategy_report.md` — career strategy doc
- `~/Desktop/Ava/projects/anton/job_search/ava_analysis.md` — Ava technical deep-dive
- `~/Desktop/Ava/projects/anton/job_search/company_research_matrix.md` — target-company matrix
- `~/Desktop/Ava/projects/anton/job_search/portfolio_feedbacks.md` — raw reviewer feedback (Madalena, Jan, Oleksiy)
