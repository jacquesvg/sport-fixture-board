import { askGemini }
from "./gemini.js";

export async function collectF1() {

    const today =
        new Date().toISOString();

const today = new Date().toISOString();

const prompt = `
Today's date is:

${today}

You are a Formula 1 scheduling assistant.

STEP 1

Identify the CURRENT Formula 1 race weekend.

STEP 2

Return ALL Formula 1 sessions taking place
between today and the next 7 calendar days.

Include:

- Practice 1
- Practice 2
- Practice 3
- Sprint
- Sprint Qualifying
- Qualifying
- Race

CRITICAL RULES

- Include the current race weekend if one is in progress.
- Include sessions happening today.
- Include sessions happening tomorrow.
- Do not skip race events.
- Do not return sessions outside the next 7 days.
- Do not return historical sessions.

Return ONLY valid JSON.

[
  {
    "id":"",
    "sport":"f1",
    "title":"",
    "competition":"",
    "location":"",
    "datetime":"",
    "description":""
  }
]
`;

    return await askGemini(prompt);
}