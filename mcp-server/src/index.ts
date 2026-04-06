#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const contentDir = join(__dirname, "..", "content");

const SKILLS = [
  "strategy-diagnostic",
  "strategy-map",
  "vrio-analysis",
  "environmental-radar",
  "market-position",
  "wardley-map",
  "culture-assessment",
  "first-principles-strategy",
  "playing-to-win",
  "pre-mortem",
  "protoloop-setup",
] as const;

function readSkill(name: string): string {
  return readFileSync(join(contentDir, name, "SKILL.md"), "utf-8");
}

function readContent(filename: string): string {
  return readFileSync(join(contentDir, filename), "utf-8");
}

function extractDescription(skillContent: string, fallback: string): string {
  // Single-line: description: Some text here
  const singleLine = skillContent.match(
    /^---\s*\n[\s\S]*?description:\s+(?!>)(.+?)(?:\nhomepage:|\n---)/m
  );
  if (singleLine) return singleLine[1].trim();

  // Multi-line with >: description: >\n  text\n  more text
  const multiLine = skillContent.match(
    /^---\s*\n[\s\S]*?description:\s*>\s*\n([\s\S]*?)\n(?:homepage:|---)/m
  );
  if (multiLine) return multiLine[1].replace(/\n\s+/g, " ").trim();

  return fallback;
}

const server = new McpServer(
  { name: "eterdis-strategy-skills", version: "1.0.0" },
  {
    instructions:
      "Eterdis Strategy Skills — 11 open strategy frameworks for AI-guided conversations. " +
      "Start with the 'strategy' prompt for the full orchestrator, or pick a specific skill. " +
      "Each skill supports three modes: diagnostic (deep first session), review (periodic check), " +
      "and alert (early-warning triggers).",
  }
);

// Register the orchestrator as the main entry prompt
const orchestratorContent = readContent("STRATEGY.md");

server.registerPrompt(
  "strategy",
  {
    description:
      "The strategy orchestrator — entry point that coordinates all 11 skills. " +
      "Runs an open-ended discovery conversation, detects which frameworks matter, " +
      "and routes to the right skill.",
  },
  () => ({
    messages: [
      {
        role: "user" as const,
        content: {
          type: "text" as const,
          text: orchestratorContent,
        },
      },
    ],
  })
);

// Register each skill as a prompt with optional mode argument
const modeSchema = {
  mode: z
    .enum(["diagnostic", "review", "alert"])
    .optional()
    .describe(
      "Session mode: diagnostic (deep first session), review (periodic check), or alert (early-warning triggers)"
    ),
};

for (const skillName of SKILLS) {
  const skillContent = readSkill(skillName);
  const description = extractDescription(skillContent, `Strategy skill: ${skillName}`);

  server.registerPrompt(
    skillName,
    { description, argsSchema: modeSchema },
    ({ mode }) => {
      const modeInstruction = mode
        ? `\n\nRun this skill in **${mode}** mode.`
        : "";

      return {
        messages: [
          {
            role: "user" as const,
            content: {
              type: "text" as const,
              text: skillContent + modeInstruction,
            },
          },
        ],
      };
    }
  );
}

// Register company-context template as a resource
const contextTemplate = readContent("company-context.md");

server.registerResource(
  "company-context-template",
  "strategy://company-context-template",
  {
    description:
      "Template for company-context.md — the living document that accumulates " +
      "strategic intelligence across sessions. Copy this to start a new engagement.",
    mimeType: "text/markdown",
  },
  () => ({
    contents: [
      {
        uri: "strategy://company-context-template",
        text: contextTemplate,
      },
    ],
  })
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Eterdis Strategy Skills MCP server running on stdio");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
