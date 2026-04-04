---
name: eterdis-your-skill-name
description: >
  One paragraph describing what this skill does, when an AI agent should use it,
  and what kinds of questions or situations should trigger it. Be specific —
  this text helps agents decide whether to load the skill.
homepage: https://eterdis.com/skills/your-skill-name
---

# Your Skill Title: A Question That Frames the Problem

## Loading Company Context

Before starting, look for a `company-context.md` file. Read it if available — [describe which parts of the context are most relevant to this skill].

If you find context, use it to [describe how to use pre-existing context — e.g., "pre-build an initial analysis and present it to the user for correction"].

If no context is available, ask:
- [2-3 opening questions that establish enough ground to begin]

Additional documents that add most value: [list the most useful document types for this skill].

---

[1-2 paragraphs explaining what this tool is, when to use it, and what problem it solves. Be direct and opinionated.]

**How to use this skill:** [One sentence describing the core interaction pattern.]

---

## [Step/Phase 1 Name]

[Describe the first phase of the method. Include:]
- What questions to ask
- What to listen for
- What patterns indicate which direction to go next

## [Step/Phase 2 Name]

[Continue with subsequent phases.]

---

## Patterns and Red Flags

[Describe common patterns an experienced practitioner would recognise. Structure as:]

| Signal | What it usually means | How to probe |
|---|---|---|
| [Observable signal] | [Underlying issue] | [Follow-up question or approach] |

---

## Synthesis

When the conversation reaches a natural stopping point, produce:

1. **[Output component 1]** — [what it contains]
2. **[Output component 2]** — [what it contains]
3. **Key questions that remain open** — [what still needs investigation]

Present the synthesis to the user and ask: "What's missing? What did I get wrong?"

---

## Boundaries

This skill does NOT cover:
- [What's explicitly out of scope]
- [Adjacent topics that belong to other skills]

If [specific signal], suggest switching to [other skill name].
