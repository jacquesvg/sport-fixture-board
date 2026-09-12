import { askGemini }
from "./gemini.js";

export async function collectF1() {

    const today =
        new Date().toISOString();

const prompt = `
Today's date is:

${today}

TASK

Find ALL Formula 1 sessions scheduled
between TODAY and the next 7 calendar days.

You MUST include:

- Practice 1
- Practice 2
- Practice 3
- Sprint
- Sprint Qualifying
- Qualifying
- Race

Only return events occurring
within the next 7 days.

Do NOT return historical events.

Return ONLY valid JSON.

Schema:

[
  {
    "id": "",
    "sport": "f1",
    "title": "",
    "competition": "",
    "location": "",
    "datetime": "",
    "description": ""
  }
]
`;

    return await askGemini(prompt);
}