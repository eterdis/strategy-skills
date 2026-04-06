import { cpSync, mkdirSync, rmSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const mcpDir = dirname(__dirname);
const repoRoot = dirname(mcpDir);
const contentDir = join(mcpDir, "content");

const skills = [
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
];

rmSync(contentDir, { recursive: true, force: true });

for (const skill of skills) {
  const dest = join(contentDir, skill);
  mkdirSync(dest, { recursive: true });
  cpSync(join(repoRoot, skill, "SKILL.md"), join(dest, "SKILL.md"));
}

cpSync(join(repoRoot, "install", "STRATEGY.md"), join(contentDir, "STRATEGY.md"));
cpSync(join(repoRoot, "install", "company-context.md"), join(contentDir, "company-context.md"));

console.log(`Copied ${skills.length} skills + orchestrator + context template`);
