# Contributing to Eterdis Strategy Skills

These skills are open tools for running AI-guided strategy sessions. Contributions that make them sharper, more practical, or more engaging are welcome.

## Ways to contribute

### Improve an existing skill
The highest-value contributions. If you've run a skill and found that it misses something, asks the wrong question at the wrong time, or could guide the conversation better — open a PR.

Things that make skills better:
- Better opening questions that surface real issues faster
- Pattern libraries from your domain (what does "stuck" look like in healthcare? in SaaS? in manufacturing?)
- Sharper contradiction detection ("if the user says X but also Y, probe Z")
- Clearer synthesis prompts that produce more actionable output
- Fixes for places where the AI tends to go off track

### Suggest a change without writing it
Open an issue. Describe what happened when you ran the skill, what you expected, and what went wrong. Real session experience is the most useful feedback.

### Propose a new skill
Open an issue first — describe the strategic question the skill addresses and why existing skills don't cover it. If it fits, we'll work with you on the design before you write the full skill.

## Skill format

Every skill is a single markdown file called `SKILL.md` inside its own directory.

```
your-skill-name/
  SKILL.md
```

### Required frontmatter

```yaml
---
name: eterdis-your-skill-name
description: >
  One paragraph. What the skill does, when to use it, what triggers it.
  Should help an AI agent decide whether to load this skill.
homepage: https://eterdis.com/skills/your-skill-name
---
```

### Structure

A good skill has:

1. **Loading Company Context** — instructions for using `company-context.md` if available, and fallback questions if not.
2. **Introduction** — what this tool is, when to use it, what it's not.
3. **The method** — the actual framework, broken into clear steps.
4. **Conversation guidance** — how to ask questions, what to probe, what patterns to watch for.
5. **Synthesis / output** — what the final deliverable looks like.

### Design principles

- **Conversational, not mechanical.** The skill should guide a real dialogue, not run a survey.
- **Opinionated.** Take a position on what good strategy looks like. Bland frameworks help nobody.
- **Adaptive.** Include branching logic — "if the user says X, go deeper on Y."
- **Honest about limitations.** Say what the skill doesn't cover.
- **Useful even if cut short.** A 10-minute session should still produce something valuable.

## How to submit

1. Fork this repository.
2. Create a branch (`git checkout -b improve-strategy-map`).
3. Make your changes.
4. Submit a pull request with:
   - What you changed and why.
   - If you ran the skill in a session, describe what happened.

## Code of conduct

Be direct, be constructive, be respectful. These skills are used by real leadership teams making real decisions. Quality matters more than quantity.

## License

By contributing, you agree that your contributions will be licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), the same license as the existing skills.
