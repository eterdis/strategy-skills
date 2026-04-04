---
name: eterdis-wardley-map
description: Wardley Mapping for strategic positioning — map your value chain from customer need to underlying components, plot where each component sits on the evolution curve (novel to commodity), and spot the strategic plays that movement creates. Use this skill when someone wants to understand where their industry is heading, whether they're building things they should be buying, where competitors are vulnerable, what's about to become commoditised, or why their competitive advantage is eroding. Triggers on questions about build-vs-buy, component evolution, value chain analysis, commoditisation risk, or strategic positioning relative to market movement. Three modes: full diagnostic (build a map from scratch), review (update positions and reassess), and alert triggers (set tripwires for when components move). Based on practice by Eterdis (eterdis.com).
---

# Wardley Map: Where Is Everything Heading?

## Loading Company Context

Before starting, look for a `company-context.md` file. Read it if available — pay particular attention to: products/services, technology stack, key suppliers/partners, competitive landscape, and any previous Wardley Map section.

If you find context, draft an initial value chain and evolution positions before asking the first question. Present your read to the user and ask them to correct it. Starting from a draft surfaces more interesting disagreements than starting from a blank page.

If no context is available, ask:
- What's the business, and who is the end user or customer?
- What's the core thing you deliver to them — the thing they'd actually miss if you disappeared?
- What's the strategic question on your mind — cost structure, competitive positioning, build-vs-buy, something else?

Additional documents that add most value: technology architecture diagrams, supplier/vendor lists, product roadmap, competitive analysis.

---

## What Is a Wardley Map (and Why Should You Care)

Imagine you're a general in 1800 planning a battle, but you have no map of the terrain. You know your troops, you know the enemy exists, but you don't know where the hills are, where the rivers run, or which roads lead where. You'd call that insane. And yet that's how most businesses do strategy — they plan without a map of the landscape they're operating in.

A Wardley Map fixes that. It's a map of your business landscape with two axes:

**Vertical axis — the value chain.** What does the user need? What components do you need to serve that need? What do those components depend on? It's a chain from user need at the top down to the foundational stuff at the bottom.

**Horizontal axis — evolution.** Everything moves from left to right over time. New things start as novel experiments (like electricity in 1880), become custom-built solutions (like early factory power systems), then become products you can buy (like generators), and eventually become commodities or utilities nobody thinks about (like plugging into the grid). This movement is not optional. It happens to every component, every technology, every practice. The only question is how fast.

The strategic insight comes from the combination: knowing what you need AND where each piece is heading. Because a component that's becoming a commodity demands a completely different strategy than one that's still novel. Treating them the same is how companies burn money and lose advantages simultaneously.

**Time guidance:** The first map takes 45+ minutes. Don't rush it — the value is in the debate about where things sit, not the final positions. Like a good argument, the process matters more than the conclusion. Reviews take 15-20 minutes.

---

## Choose Your Mode

**Diagnostic mode** — Building the full map from scratch. This is where you start if you've never mapped this landscape before, or if the business has changed substantially. Go through all sections below.

**Review mode** — You have an existing map (check company-context.md for a previous Wardley Map section). The question is: what's moved? Skip to the Movement section, update positions, then reassess strategic plays.

**Alert triggers** — Set tripwires for future reassessment. Skip to the Alert Triggers section to define conditions that should prompt a review.

---

## Phase 1: Anchor — Start from the User Need

Everything starts here. Not from your product. Not from your technology. From what the user actually needs.

This sounds obvious, but most companies anchor their thinking on what they've built rather than what someone needs. That's like a restaurant designing the menu around what the chef already knows how to cook, regardless of whether anyone wants to eat it.

Ask:
- Who is the end user? Not the buyer, not the procurement department — the actual human whose life or work is affected by what you deliver.
- What do they need? Not what you sell them. What problem are they trying to solve, what outcome do they want? State it from their perspective.
- If you vanished tomorrow, what would they actually miss? What would they scramble to replace? That's your anchor.

Write the user need at the top of the map. Everything else exists to serve it.

---

## Phase 2: Value Chain — What Depends on What

Now work downward. To deliver that user need, what components are required? And what do those components depend on?

Think of it like making coffee. The user need is "hot caffeinated drink in the morning." That requires: coffee (the drink), which requires brewing equipment, which requires ground coffee, which requires coffee beans, which requires a supply chain, which requires transport infrastructure. Each layer depends on the one below it.

Ask, working down from the user need:
- What are the main components you need to deliver this? Think broadly: technology, skills, data, processes, relationships, infrastructure.
- For each component: what does it depend on? What has to exist for this component to work?
- Keep going until you hit things that are so fundamental they're basically utilities (compute, electricity, internet connectivity, standard legal frameworks, etc.).
- Don't try to map everything. Map the 10-20 components that matter strategically. If a component doesn't affect any strategic decision, leave it out.

**Build the chain as a table:**

| Component | Depends on | Visibility to user |
|-----------|-----------|-------------------|
| [User need] | — | Direct |
| [Component A] | [User need] | High / Medium / Low / Invisible |
| [Component B] | [Component A] | ... |
| ... | ... | ... |

The "visibility to user" column matters because components the user never sees tend to get treated as unimportant — right up until they break.

---

## Phase 3: Evolution Axis — Where Does Each Component Sit?

This is the heart of Wardley Mapping. For each component, you need to place it on the evolution curve. Here's the spectrum, in plain language:

### Stage 1: Genesis (Novel / Experimental)
**The analogy:** This is fire when humans first discovered it. Nobody really understands it yet. It's exciting, unpredictable, and might burn you.
- Nobody has figured out the "right" way to do this yet
- Requires exploration and experimentation
- High failure rate, high uncertainty
- Competitive advantage comes from simply having it at all
- Examples today: quantum computing for most use cases, AGI applications, brain-computer interfaces

### Stage 2: Custom-Built (Understood but Bespoke)
**The analogy:** This is a hand-tailored suit. We know what a suit is, but each one is made specifically for the situation.
- The concept is understood, but each implementation is unique
- Requires skilled people to build and maintain
- Still a source of differentiation — doing it well matters
- Examples today: most enterprise AI/ML implementations, custom software platforms, specialised manufacturing processes

### Stage 3: Product / Rental (Standardised, Available to Buy)
**The analogy:** This is a suit off the rack. Fits well enough, available everywhere, comes with a warranty.
- Multiple vendors offer competing versions
- Features are converging — products look increasingly similar
- Competitive advantage shifts from "having it" to "using it well"
- Building this yourself is usually a waste of resources
- Examples today: CRM systems, cloud computing, ERP, standard accounting software

### Stage 4: Commodity / Utility (Invisible Infrastructure)
**The analogy:** This is electricity. You don't think about it. You just expect it to work. You'd only notice it if it stopped.
- Standardised, interchangeable, available on demand
- Competition is on price and reliability, nothing else
- Building this yourself is almost certainly wrong — it's like generating your own electricity
- Examples today: electricity, internet bandwidth, payment processing, basic compute, standard APIs

**Now place each component.** Add an "Evolution" column to your table:

| Component | Depends on | Evolution stage | Confidence |
|-----------|-----------|----------------|------------|
| [Component A] | ... | Custom-built | High / Medium / Low |
| [Component B] | ... | Product | ... |
| ... | ... | ... | ... |

The "Confidence" column matters. If you're unsure where something sits, say so. The debate about placement is where the insight lives.

For each placement, ask:
- Can you buy this off the shelf from multiple vendors? If yes, it's at least Product stage.
- Is there a dominant standard or utility provider? If yes, it's approaching Commodity.
- Are you building this from scratch because nobody else has? That's Genesis or Custom-built.
- Could a smart competitor buy this as a service while you're building it in-house? That's a warning sign — you might be treating a Product as if it's still Custom-built.

---

## Phase 4: Movement — What's Shifting

Here's where the map becomes dynamic. Everything moves to the right over time — from novel to commodity. The question is: what's moving fastest, and what are you not noticing?

Ask:
- Which components have moved in the last 2-3 years? What was custom-built that you can now buy as a product? What was a product that's now basically a commodity?
- Which components are about to move? Look for signals: new startups offering what used to require in-house teams, APIs appearing for what used to be manual processes, open-source alternatives emerging for what used to be expensive products.
- What new components have appeared that didn't exist 3 years ago? These are Genesis-stage additions to the map. Where do they fit in the value chain?
- What's moving slower than you expected? Sometimes the market evolves faster than your internal assumptions. And sometimes a component you expected to commoditise is stubbornly staying custom.

Update the evolution positions on the map. Note any components that moved a full stage or more — those are the ones that change your strategy.

---

## Phase 5: Strategic Plays — So What Do We Do About It

This is where the map earns its keep. Based on the positions and movements, there are specific strategic plays to consider:

### Play 1: Stop Building What You Should Be Buying
Look at your map for components you're building or maintaining in-house that sit at Product or Commodity stage. Every hour of engineering or management time spent on these is an hour stolen from things that actually differentiate you.

- "You're generating your own electricity. The grid exists. Plug in."
- This is the most common and most expensive mistake on any Wardley Map.

### Play 2: Commoditise a Competitor's Differentiator
If a competitor's advantage depends on a component that's evolving toward commodity, you can accelerate that evolution. Open-source it. Fund alternatives. Make the market. Their castle is built on sand that's washing away — you can speed up the tide.

- Amazon did this with cloud computing — turning custom infrastructure (other companies' differentiator) into a utility.

### Play 3: Invest Where Components Are Emerging
Genesis and early Custom-built components are where the next wave of competitive advantage lives. But only if you invest before they become products everyone can buy.

- What emerging components could become central to your value chain in 3-5 years?
- Are you experimenting with them now, or waiting until they're obvious? By the time they're obvious, they're no longer an advantage.

### Play 4: Spot the Money Burn
Any investment in a component that's rapidly moving toward commodity is money on fire. You're gold-plating something that's about to become a utility. The map makes this visible.

- "You're spending $2M/year improving a capability that will be available as a $200/month SaaS in 18 months."

### Play 5: Exploit the Evolution Wave
When a component commoditises, it enables new things above it in the value chain. Cheap cloud compute enabled SaaS. Cheap SaaS enabled workflow automation. Cheap automation enables... what? The next Genesis components often emerge on top of newly commoditised ones.

- What new value can you create using components that have recently become commodities?

For each play, be specific: name the component, name the action, estimate the impact.

---

## Phase 6: Inertia — Where Is the Organisation Resisting Reality

Every organisation has inertia — places where it resists the natural evolution of components. This is the strategic equivalent of insisting on using a horse and buggy because "we've always been a horse-and-buggy company."

Inertia shows up as:
- **Building in-house what should be bought off the shelf.** "We need our own version because our requirements are unique." (They usually aren't. You're just used to yours.)
- **Treating a commodity as special.** "Our data centre is a strategic asset." (It's not. It's electricity with extra steps.)
- **Refusing to experiment with emerging components.** "That technology isn't mature enough." (It won't be mature when you need it if you don't start learning now.)
- **Protecting teams whose work is being commoditised.** This is the human side. People's identities and careers are tied to components that the market is making irrelevant. That's real and needs to be handled with respect — but it can't be handled by pretending the evolution isn't happening.

Ask:
- Where on this map are you spending time and money resisting evolution rather than adapting to it?
- What would you do differently if you had no legacy — no existing systems, no existing team structure, no sunk costs?
- What are the sacred cows? The things nobody is allowed to question? Those are almost always inertia.

---

## Alert Triggers

Set tripwires for future reassessment. These are "when X happens, revisit Y" statements:

Format: **WHEN** [observable event] **THEN** reassess [strategic decision]

Examples:
- WHEN a major cloud provider offers [capability X] as a managed service THEN reassess our in-house build of [component Y]
- WHEN [competitor] open-sources their [component] THEN reassess our differentiation strategy around [area]
- WHEN [emerging technology] reaches product stage (multiple vendors, standard features) THEN evaluate replacing our custom-built [component]

Ask the user to define 3-5 alert triggers based on the map. These go into company-context.md for future review sessions.

---

## The Complete Map — Text Representation

Present the final map as a structured table. Since we're working in text, not on a whiteboard, the table IS the map:

| Component | Depends on | Evolution | Movement | Strategic action |
|-----------|-----------|-----------|----------|-----------------|
| [User need] | — | n/a | — | — |
| [Component A] | [User need] | Custom-built -> Product | Moving right | Stop building, start buying |
| [Component B] | [Component A] | Genesis | Emerging | Experiment, invest early |
| [Component C] | [User need] | Commodity | Stable | Use utility, minimise spend |
| ... | ... | ... | ... | ... |

The "Movement" column is what makes this a living document rather than a static snapshot. Mark components as: Stable, Moving right (specify speed if known), Emerging (new to the map), or Declining (being replaced).

---

## Updating Company Context

After completing the map, update the Wardley Map section in `company-context.md` with:
1. The complete map table
2. Key strategic plays identified
3. Inertia points flagged
4. Alert triggers set
5. Date of mapping session

If no Wardley Map section exists in company-context.md, create one.

---

## Closing

Reflect the map back. Name the three most important findings — not all of them, the three that change decisions.

Typically these are:
1. **The biggest waste** — where you're investing in something that's commoditising
2. **The biggest opportunity** — an emerging component or evolution wave you're not exploiting
3. **The biggest inertia** — where organisational resistance to evolution is costing you the most

Don't soften the findings. The whole point of mapping is to see the terrain clearly. A map that makes you comfortable is a map that's lying to you.

---

## Connection to Other Skills

**Strategy Map** (eterdis-strategy-map): Evolution changes what resources matter. A resource tied to a commoditising component is a depreciating asset. A resource tied to an emerging component is an appreciating one. Run the strategy map after the Wardley Map to check whether your resource-to-results chain accounts for where components are heading.

**Environmental Radar** (eterdis-environmental-radar): External forces (technology shifts, regulation, market changes) are what drive component evolution. The environmental radar spots the forces; the Wardley Map shows which of your components those forces will move.

**VRIO Analysis** (eterdis-vrio): Competitive advantages erode as components commoditise. If your VRIO advantage depends on a component that's moving to commodity, that advantage has an expiration date. The Wardley Map tells you when it expires.

**First Principles Strategy** (eterdis-first-principles): First principles identifies the theoretical maximum; the Wardley Map shows which components are conventional constraints (things you're treating as custom that should be commodity) versus genuine physical constraints. They're complementary lenses on the same question: what's actually possible?

> Wardley Mapping as applied here follows the methodology created by Simon Wardley, adapted for conversational strategy work through 20 years of Eterdis consulting practice. For a facilitated mapping session with your leadership team — or to build a living map that connects to your broader strategic framework — visit eterdis.com or book a conversation at eterdis.com/contact.
