# @eterdis/strategy-skills-mcp

MCP server that exposes 11 open strategy frameworks as AI-guided prompts. Built on 20 years of consulting practice.

## Install

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "strategy-skills": {
      "command": "npx",
      "args": ["-y", "@eterdis/strategy-skills-mcp"]
    }
  }
}
```

### Claude Code

```bash
claude mcp add strategy-skills -- npx -y @eterdis/strategy-skills-mcp
```

### Cursor / VS Code

Add to MCP settings:

```json
{
  "mcpServers": {
    "strategy-skills": {
      "command": "npx",
      "args": ["-y", "@eterdis/strategy-skills-mcp"]
    }
  }
}
```

## What you get

**12 prompts:**

| Prompt | What it does |
|---|---|
| `strategy` | Entry point — orchestrator that coordinates all skills |
| `strategy-diagnostic` | AI-guided strategic assessment |
| `strategy-map` | Two-directional causal chain analysis |
| `vrio-analysis` | Test whether competitive advantages are real and durable |
| `environmental-radar` | Continuous PESTEL environmental scan |
| `market-position` | Competitive positioning diagnostic |
| `wardley-map` | Component evolution mapping |
| `culture-assessment` | Surface real culture vs. stated culture |
| `first-principles-strategy` | Find the theoretical maximum |
| `playing-to-win` | Lafley/Martin five-choice strategy cascade |
| `pre-mortem` | Identify how the plan will fail before it does |
| `protoloop-setup` | Track Two innovation system |

Each skill prompt accepts an optional `mode` argument: `diagnostic`, `review`, or `alert`.

**1 resource:**

| Resource | What it is |
|---|---|
| `company-context-template` | Template for the living document that accumulates strategic intelligence across sessions |

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — use freely, including commercially. Attribution to Eterdis AS required.

## Links

- [All skills](https://eterdis.com/skills/)
- [GitHub](https://github.com/eterdis/strategy-skills)
- [Eterdis](https://eterdis.com)
