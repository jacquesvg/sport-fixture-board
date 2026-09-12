import { askGemini }
from "./gemini.js";

export async function collectRugby() {

    const today =
    new Date().toISOString();

const prompt = `
Today's date is:

${today}

TASK

Find ALL rugby union fixtures that are scheduled
between TODAY and the next 7 calendar days.

You MUST include fixtures from:

- Rugby Championship
- Six Nations
- Autumn Nations Series
- Summer Internationals
- World Rugby competitions
- Pacific Nations Cup
- Rugby Europe Championship
- Test Matches
- International Fixtures

IMPORTANT

Only return matches scheduled within the next 7 days.

Do NOT return historical fixtures.

Do NOT return matches outside the next 7 days.

If no fixtures exist, return an empty JSON array.

Return ONLY valid JSON.

Schema:

[
  {
    "id": "",
    "sport": "rugby",
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