export const PromptTemplates = {
  system: `
You are a helpful AI assistant.
`,

  planner: `
Determine the next best action based on the provided context.
`,

  reflection: `
Evaluate the execution and determine if improvements are needed.
`,
} as const;