export * from "./types.js";
export * from "./execution-context.js";
export * from "./runtime-result.js";
export * from "./runtime.js";

// 📂 runtime/
// │
// ├── runtime.ts              // Core orchestrator
// ├── execution-context.ts    // State for a single run
// ├── runtime-result.ts       // Final runtime output
// ├── types.ts                // Shared runtime types (if needed)
// └── index.ts

// | File                   | Responsibility                                                |
// | ---------------------- | ------------------------------------------------------------- |
// | `runtime.ts`           | Main execution engine (`Runtime.run()`)                       |
// | `execution-context.ts` | Holds state for one execution (agent, input, iteration, etc.) |
// | `runtime-result.ts`    | Defines what the runtime returns                              |
// | `types.ts`             | Shared runtime interfaces (optional for now)                  |
// | `index.ts`             | Barrel export                                                 |
