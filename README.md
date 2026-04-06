# Eterdis Strategy Skills

Open strategy frameworks designed to run as AI-guided conversations. Each skill is a single markdown file that turns any large language model into a strategy thinking partner.

Built on 20 years of consulting practice. Free, open, model-agnostic.

## What these are

Strategy skills are structured prompts in [SKILL.md format](https://agentskills.io) that guide an LLM through a proven strategic framework — asking the right questions, spotting patterns, surfacing contradictions, and producing actionable output. They work with Claude, ChatGPT, Gemini, or any model that reads markdown.

Every skill runs in three modes:
- **Diagnostic** — deep first-use session (30-60 minutes)
- **Review** — periodic re-assessment (15-20 minutes)
- **Alert Triggers** — early-warning tripwires to monitor between sessions

All skills read and update a shared `company-context.md` file that accumulates strategic intelligence across sessions.

## Skills

### Understand where you are

| Skill | What it does |
|---|---|
| [strategy-diagnostic](strategy-diagnostic/) | Entry point — AI-guided strategic assessment that detects which frameworks to run |
| [strategy-map](strategy-map/) | Map the causal chain from resources to results, expectations to requirements |
| [vrio-analysis](vrio-analysis/) | Test whether your competitive advantages are real, rare, and durable |
| [environmental-radar](environmental-radar/) | Continuous PESTEL scan for external forces shaping your next move |
| [market-position](market-position/) | Competitive positioning — where you actually stand, not where the slide deck says |
| [wardley-map](wardley-map/) | Component evolution mapping — see where the value chain is heading |
| [culture-assessment](culture-assessment/) | Surface the real culture vs. the stated one |

### Decide and build

| Skill | What it does |
|---|---|
| [first-principles-strategy](first-principles-strategy/) | Find the theoretical maximum, then work backwards to your first move |
| [playing-to-win](playing-to-win/) | Lafley/Martin strategy cascade — five choices that define a winning strategy |
| [pre-mortem](pre-mortem/) | Identify how the plan will fail before it does |
| [protoloop-setup](protoloop-setup/) | Design a Track Two innovation system for new revenue streams |

## Quick start

### One-command install (Claude Code, Cursor, Codex, and 40+ agents)

```bash
npx skills add eterdis/strategy-skills
```

### Claude Code plugin marketplace

```
/plugin marketplace add eterdis/strategy-skills
```

Then browse and install individual skills via `/plugin` > Discover.

### Install the full system from source

```bash
git clone https://github.com/eterdis/strategy-skills.git
```

Point your AI agent to the [`install/`](install/) directory, which contains:
- `STRATEGY.md` — orchestrator that coordinates all skills
- `skills/` — individual skill files
- `company-context.md` — template for storing strategic context

### Use a single skill

```bash
curl -O https://raw.githubusercontent.com/eterdis/strategy-skills/main/strategy-diagnostic/SKILL.md
```

### Works with any AI

| Environment | How to install |
|---|---|
| **Claude Code** | `npx skills add eterdis/strategy-skills` or `/plugin marketplace add eterdis/strategy-skills` |
| **Cursor, Codex, Copilot, Windsurf** | `npx skills add eterdis/strategy-skills` |
| **Claude Projects** | Upload `STRATEGY.md` + skill files as project knowledge |
| **ChatGPT** | Paste SKILL.md contents as Custom Instructions or first message |
| **Gemini, Llama, DeepSeek, Ollama** | Paste SKILL.md contents as system prompt |

Full instructions at [eterdis.com/skills](https://eterdis.com/skills/).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The most valuable contributions are improvements based on real session experience.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — use freely, including commercially. Attribution to Eterdis AS required.

## Disclaimer

These are thinking tools, not professional advice. LLMs make mistakes. You are responsible for any decisions you make based on skill output. [Full terms](https://eterdis.com/terms/).
