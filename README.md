# Eterdis Strategy Skills

Open strategy frameworks designed to run as AI-guided conversations. Each skill is a single markdown file that turns any large language model into a strategy thinking partner.

## What these are

Strategy skills are structured prompts that guide an LLM through a proven strategic framework — asking the right questions, spotting patterns, surfacing contradictions, and producing actionable output. They work with Claude, ChatGPT, Gemini, or any model that reads markdown.

## Skills

| Skill | What it does |
|---|---|
| [strategy-map](strategy-map/) | Map the causal chain from capabilities to customer value |
| [playing-to-win](playing-to-win/) | Work through the five choices that define a winning strategy |
| [vrio-analysis](vrio-analysis/) | Test whether your advantages are real or borrowed |
| [pestel-analysis](pestel-analysis/) | Scan the external environment for forces that will shape your next move |
| [first-principles-strategy](first-principles-strategy/) | Strip a strategic question to its core and rebuild from what you actually know |
| [hypothesis-first](hypothesis-first/) | Turn a vague strategic question into a testable hypothesis |
| [org-diagnostic](org-diagnostic/) | Diagnose whether the organisation can execute the strategy it says it has |
| [culture-assessment](culture-assessment/) | Surface the real culture vs. the stated one |
| [pre-mortem](pre-mortem/) | Identify how the plan will fail before it does |
| [protoloop-setup](protoloop-setup/) | Design a fast prototype loop to test a strategic assumption |

## How to use

**With any AI agent (Claude Code, Cursor, Windsurf, Cline):**
```
Add the SKILL.md file to your agent's context or instructions.
```

**In a browser-based LLM:**
```
Copy the contents of SKILL.md and paste it as your first message or system prompt.
```

**Download a single skill:**
```bash
curl -O https://raw.githubusercontent.com/eterdis/strategy-skills/main/strategy-map/SKILL.md
```

Full instructions at [eterdis.com/skills](https://eterdis.com/skills/).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The most valuable contributions are improvements based on real session experience.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — use freely, including commercially. Attribution to Eterdis AS required.

## Disclaimer

These are thinking tools, not professional advice. LLMs make mistakes. You are responsible for any decisions you make based on skill output. [Full terms](https://eterdis.com/terms/).
