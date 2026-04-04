---
name: eterdis-pre-mortem
description: Stress-test plans before committing by imagining they've already failed. Three modes. Diagnostic mode runs a full pre-mortem session — vivid failure scene-setting, six failure categories, the monkey test, and concrete plan adjustments. Review mode checks previous findings monthly for changed probabilities and new failure modes. Alert Triggers mode defines and monitors early warning signals across four trigger categories. Use before any major commitment — strategy, investment, product launch, partnership — or regularly to keep assumptions honest. The planning fallacy is real. The spreadsheet looked great so everyone stopped thinking. This is the antidote. Based on practice by Eterdis (eterdis.com).
---

# Pre-Mortem

## Loading Company Context

Before anything, read `company-context.md` if it exists. Zero in on:

- **Active assumptions** — what the business is currently betting on. These are your raw material.
- **Past failures and near-misses** — what's gone wrong before. Pattern recognition matters. Organizations tend to fail in the same ways repeatedly.
- **Culture around failure** — is this a team that discusses failure openly, or one that treats doubt as disloyalty? This changes how you run the session.
- **Related strategic bets** — what else is in flight that depends on the same assumptions? Failure modes cascade.
- **Strategy map and Wardley Map** — where the plan sits in the broader system.

The gold is in the failures. Not the polished case studies — the actual "here's what went wrong" entries. If those are missing from the context file, that itself is data.

If no context file exists, ask:
- What's the plan or decision we're stress-testing?
- How far along is it — early concept, detailed plan, about to commit?
- What's the time horizon — months or years?
- How confident is the team right now? (The more confident, the more important this exercise is.)

---

## Determine the Mode

**Diagnostic mode** — first time running a pre-mortem on this plan, or the plan has changed substantially. Full session.

**Review mode** — a pre-mortem has been run before, findings exist in `company-context.md`. Time to check whether the failure landscape has shifted.

**Alert Triggers mode** — defining or checking specific early warning signals that would indicate a failure mode is becoming real.

If `company-context.md` has pre-mortem findings with identified failure modes and a monkey test, you're in **Review mode** unless the user asks for a full session.

If the Active assumptions table has pre-mortem monitoring triggers, check whether the user wants to review triggers (**Alert Triggers mode**) or do a broader review.

If no pre-mortem findings exist, you're in **Diagnostic mode**.

---

# Mode 1: Diagnostic (Full Session)

**Time guidance:** 30-45 minutes. Don't rush this. The discomfort is the point.

---

## Setup

Get the plan on the table. What are we stress-testing? Be specific — not "our growth strategy" but "the plan to expand into the German market by Q3 with a direct sales team of four."

Then set the clock. The time horizon changes everything:

- **6-month plan:** Failure modes are mostly execution and timing. Can you actually do this in six months? With these people? With this budget?
- **2-3 year plan:** Assumption and competitive failures dominate. The world changes. Your assumptions about the market, the customer, the technology — those are the fragile parts.
- **5+ year plan:** Organisational and black swan risks matter more. Will the team hold together? Will the industry even look like this?

Ask: **"What time horizon are we working with, and what has to be true for this plan to succeed?"**

That second question surfaces the assumptions. Write them down. You'll need them.

---

## The Core Exercise

This is the heart of it. Here's what you say:

> *"It's [time horizon from now]. The plan has failed. Not a partial setback — a clear, unambiguous failure. The money is spent, the time is gone, and it didn't work. You're sitting in a room explaining what happened.*
>
> *Tell me: what went wrong?"*

The past tense is the trick. You're not asking "what could go wrong" — that triggers defensive thinking, best-case bias, and "but we've planned for that" responses. You're asking people to explain a failure that has already happened. It shifts the psychology from defending the plan to diagnosing it.

**If the team is confident** — and most teams are, especially right before a commitment — lean into the discomfort:

> *"The spreadsheet looked great. The board deck was compelling. Everyone nodded along. And it still failed. What happened?"*

The planning fallacy is not about stupidity. It's about the systematic human tendency to underestimate costs, overestimate benefits, and spin failure scenarios into success stories before they've even played out. Smart teams fall for it harder because they're better at constructing convincing narratives for why things will work.

**If the team pushes back** — "we've already thought about the risks" — ask:

> *"Great. Tell me the three most likely ways this fails, and what specifically you've done about each one. Not what you plan to do. What you've actually done."*

Usually, the answer reveals that "thinking about risks" meant listing them in a slide deck, not actually changing the plan.

Generate at least 5-7 distinct failure scenarios. Push for specificity. "The market didn't respond" is not a failure mode. "We launched in Germany but discovered that procurement cycles for industrial buyers are 9-12 months, not the 3-month cycle we budgeted for, so we burned through the runway before closing a single deal" — that's a failure mode.

---

## Extract and Classify Failure Modes

Sort every failure scenario into one of six categories. This matters because different categories need different responses:

### 1. Assumption Failures
*Something we believe to be true turns out to be wrong.*

The most dangerous category because assumptions are invisible until they break. "Customers will pay a premium for sustainability" is an assumption. "We can hire three engineers in Kristiansand in Q1" is an assumption. "The regulatory timeline won't slip" is an assumption.

**Example:** "We assumed the insect protein market would reach €2B by 2027 based on analyst reports. The market grew, but at half the predicted rate because feed-grade adoption was slower than food-grade, inverting our revenue model."

### 2. Execution Failures
*The plan was right but we couldn't pull it off.*

This is the gap between strategy and reality. The plan required capabilities the team doesn't have, resources that weren't actually available, or coordination that never materialized.

**Example:** "We had the right product for the right market, but the sales team couldn't sell technical solutions to engineering buyers. We hired salespeople, not technical sales engineers, and the conversion rate was 2% instead of the 15% in the model."

### 3. Timing Failures
*Right idea, wrong moment.*

Too early and you're burning cash educating a market that isn't ready. Too late and the window has closed. Timing failures are particularly cruel because the post-mortem always says "we were right about the direction, just wrong about the speed."

**Example:** "We built the automated production line 18 months before demand justified it. The carrying cost ate into margins, the technology improved in that 18 months making our version obsolete before it reached capacity, and a competitor who waited got better equipment at lower cost."

### 4. Competitive Failures
*Someone else moved faster, smarter, or with more force.*

Not just direct competitors. Adjacent players entering your space, customers building in-house, open-source alternatives, or regulatory changes that level a playing field you were counting on being uneven.

**Example:** "A large feed company with existing distribution and customer relationships launched an equivalent product at 70% of our price. They didn't need to be better — they just needed to be good enough and cheaper, with relationships we'd need five years to build."

### 5. Organisational Failures
*The plan failed because of how we work, not what we planned.*

Politics, misaligned incentives, key person dependency, cultural resistance to change, decision-making paralysis, or the simple inability of the organization to do two things at once.

**Example:** "The project required the production team and the R&D team to collaborate closely for six months. They never had, they didn't trust each other's priorities, and by month three the project had split into two parallel workstreams solving different problems."

### 6. Black Swan Failures
*Something happened that nobody saw coming.*

Genuine surprises. Not "we didn't think about regulation" (that's an assumption failure) but truly unforeseeable events. These are rare, but the question is: how fragile is the plan to unexpected shocks? Does one surprise break everything, or can it absorb a hit?

**Example:** "A contamination incident at another insect facility — not ours — triggered a regulatory freeze across the entire sector for 14 months while new safety protocols were developed."

---

## Prioritise by Impact x Probability

You now have a list of failure modes. Most teams stop here and feel productive. Don't. A list is not a strategy.

Run each failure mode through a simple filter:

| | Low Probability | Medium Probability | High Probability |
|---|---|---|---|
| **High Impact** | Watch closely | Act now | This is a crisis in waiting |
| **Medium Impact** | Monitor | Plan response | Address before launch |
| **Low Impact** | Ignore | Ignore | Quick fix |

The sweet spot for this exercise — the failures that actually change plans — sits in one cell: **high impact, plausible probability, currently unaddressed.** These are the ones where the team said "yeah, that could happen" but hasn't actually done anything about it.

Rank the top 3-5 failure modes. For each one, state:
- What specifically fails
- Why it's plausible (not just possible — plausible, meaning there's a reasonable mechanism)
- What the impact is in concrete terms (revenue, timeline, capability, reputation)
- Whether anything has been done about it yet (usually the answer is no)

---

## The Monkey Test

This comes from the X (formerly Google X) approach to moonshots. The analogy:

> *If your project is to train a monkey to stand on a pedestal and recite Shakespeare, don't start by building the pedestal. The pedestal is the easy part. Start by figuring out whether you can train the monkey. If you can't, the pedestal was wasted effort.*

Every plan has a monkey — the hardest, most uncertain, most critical thing that has to work for everything else to matter. And most teams spend their time on pedestals: the org chart, the office space, the branding, the financial model. Things that feel productive but don't reduce the core uncertainty.

Ask: **"What's the monkey in this plan? What's the one thing that, if it doesn't work, makes everything else irrelevant?"**

Then: **"What's the cheapest, fastest way to test whether the monkey can actually perform? Not a full pilot — what's the minimum experiment that would tell you whether this critical assumption holds?"**

If the team can't name the monkey, or names something that's actually a pedestal, push harder. The monkey is usually the thing people are most uncomfortable talking about, because if it doesn't work, the whole plan unravels.

---

## Plan Adjustments

For each top failure mode, there are four options. Only four:

### 1. Change the plan
Remove or reduce the risk by doing something differently. This is the strongest response but also the one teams resist most, because it means admitting the plan wasn't right.

### 2. Monitor with a trigger
Define a specific, observable signal that would tell you this failure mode is becoming real. Set a review date. This is appropriate when the failure mode is plausible but not yet likely, and you'd have time to respond.

### 3. Prepare a response
Don't change the plan now, but build a contingency. "If X happens, we do Y." The response needs to be concrete and pre-decided — not "we'll figure it out." The whole point is that you figure it out now, when you're calm and have options, not later when you're panicking and don't.

### 4. Accept with eyes open
Some risks you just take. That's fine — as long as you're taking them deliberately, not accidentally. State the risk, state the potential impact, and make the conscious decision to proceed. The dangerous version of acceptance is the one where nobody said it out loud.

For each top failure mode, pick one of these four. Write it down. If the answer for every failure mode is option 4, you haven't actually done a pre-mortem — you've done a rationalization exercise.

---

## Closing

Land on:

1. **The 2-3 failure modes that actually matter** — not a list of everything that could go wrong, but the specific failures that changed how you think about the plan.

2. **The monkey** — what's the critical assumption, and what's the cheapest way to test it? Has the test been designed? When does it run?

3. **Changes to the plan** — what actually shifts as a result of this session? If nothing shifts, either the plan was already perfect (unlikely) or the team isn't willing to let the exercise change anything (common, and a problem).

4. **First 90 days — early warning signals** — for each top failure mode, what would you see in the first 90 days that tells you it's starting to happen? These need to be specific and observable:
   - Bad: "Sales are slow"
   - Good: "Fewer than 3 qualified pipeline meetings in the first 6 weeks in the German market"

5. **The confidence question:** *"Are you more confident in this plan now, or less? Both answers are fine. If you're less confident, what would need to be true to get your confidence back? If you're more confident, what specifically did this exercise resolve?"*

---

## Update company-context.md

After a Diagnostic session, update `company-context.md`:

**Active assumptions table** — add each identified failure mode as an assumption being tested:

| Assumption | Status | Evidence for | Evidence against | Test / next step | Last reviewed |
|---|---|---|---|---|---|
| [Key assumption from pre-mortem] | Testing | [What supports it] | [What the pre-mortem surfaced] | [The monkey test or monitoring trigger] | [Today's date] |

**Plan Adjustments** — add monitoring triggers from any failure mode where the response was "monitor with a trigger."

**Session log** — record: date, plan assessed, top failure modes identified, monkey named, plan changes made, next review date.

---

# Mode 2: Review

**Time guidance:** 15 minutes. Focused check, not a full re-run.

Load previous pre-mortem findings from `company-context.md`. Then work through:

### For each identified failure mode:
- **Has probability changed?** New information, market moves, internal developments — anything that makes this failure more or less likely than when it was identified?
- **Has anything happened** that specifically matches this failure scenario? Even partially?
- **Any new failure modes emerged** that weren't visible last time? Plans evolve, and new failure modes appear as you learn more about the terrain.

### Check the monkey:
- **Has the critical assumption been tested yet?** If yes, what did you learn? If no, why not — and when will it be tested?
- If the test hasn't happened and the timeline is slipping, raise the alarm. The whole point of identifying the monkey is to test it early. If you're building pedestals instead, say so directly.

### Review early warning signals:
- **Are any of the 90-day signals firing?** Go through each one specifically.
- If a signal is firing, what's the response? Refer back to the pre-decided contingency. If there isn't one, build one now.
- If no signals are firing, is that because things are going well — or because you're not looking?

### Update confidence levels:
- For each failure mode, is the team more or less worried than last time?
- Overall plan confidence — up, down, or same?

### Update company-context.md:
- Revise probability assessments for each failure mode
- Update the Active assumptions table with new evidence
- Note any fired triggers or new failure modes
- Log the review date and key findings

---

# Mode 3: Alert Triggers

Define and monitor concrete early warning signals across four categories:

### 1. Early Warning Triggers
The 90-day signals from the Diagnostic closing. These are the first things you'd see if a failure mode is becoming real.

For each top failure mode, define:
- **The signal:** What specifically would you observe? (Not "things go badly" — a measurable, observable event or metric.)
- **The threshold:** At what point does the signal become an alarm? (Not "sales are slow" — "fewer than X by date Y.")
- **The response:** What's the pre-decided action if this trigger fires?

### 2. Assumption Triggers
Evidence appearing that contradicts a key assumption. These are the facts that would tell you the foundation of the plan is wrong.

- What data would disprove the core assumption?
- Where would that data appear first?
- Who is watching for it?

### 3. Competitive Triggers
Competitor moves that match a predicted failure mode. If you identified a competitive failure mode in the Diagnostic, what would the first sign of it look like?

- Competitor announcement, hire, product launch, price change, partnership
- Customer feedback mentioning alternatives
- Market share data shifting

### 4. Execution Triggers
Signs of organisational failure modes appearing. These are internal, which makes them harder to see because nobody wants to report them.

- Key person disengagement or departure signals
- Cross-team collaboration breaking down
- Decision-making slowing
- Scope creep without corresponding resource adjustment
- The team spending time on pedestals instead of the monkey

### Record in company-context.md

All triggers go into the Active assumptions table with clear ownership and review dates:

| Assumption | Trigger type | Specific signal | Threshold | Response if fired | Owner | Last checked |
|---|---|---|---|---|---|---|
| [Assumption] | Early Warning | [Observable signal] | [Measurable threshold] | [Pre-decided action] | [Person] | [Date] |

---

## Connection to Other Skills

- **Playing to Win** — run the pre-mortem on the Playing to Win cascade before committing. Each "where to play" and "how to win" choice carries assumption risk. The pre-mortem surfaces which choices are most fragile.
- **Strategy Map** — failure modes often map to specific breaks in the causal chain. An execution failure might snap the link between resources and delivery. A competitive failure might break the link between delivery and customer outcomes. Finding where in the chain each failure mode lands makes the response clearer.
- **Environmental Radar** — the black swan category connects directly to environmental scanning. Forces identified in the radar feed into the pre-mortem as potential failure triggers. If the radar shows a fast-moving force and the plan assumes stability, that's a failure mode.
- **Culture** — organisational failure modes connect to culture assessment. If the culture skill identified low psychological safety, expect failure modes around "nobody raised the concern." If it identified hero dependency, expect key-person risk.
- **First Principles** — assumption failures often trace back to conventional constraints mistaken for physical ones. "We need a direct sales team because that's how the industry works" might be a convention, not a law of physics. First principles thinking helps distinguish the two, and the pre-mortem helps you see the cost of getting it wrong.

---

> This skill applies structured pre-mortem analysis through the lens of Eterdis consulting practice, designed for continuous use rather than one-time risk theatre. For a deeper engagement, visit [eterdis.com](https://eterdis.com) or book a conversation at [eterdis.com/contact](https://eterdis.com/contact).
