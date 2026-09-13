import { askGemini }
from "./gemini.js";

export async function collectF1() {

    const today =
        new Date().toISOString();

const prompt = `
Today's date is ${new Date().toISOString()}.

You are a Formula 1 fixture researcher.

CRITICAL:

First determine the current Formula 1 race weekend.

Then return ALL Formula 1 sessions taking place
between today and the next 7 days.

Include:

- Practice 1
- Practice 2
- Practice 3
- Sprint
- Sprint Qualifying
- Qualifying
- Race

Do not skip the current race weekend.

Do not return historical sessions.

Do not return estimated events.

Return ONLY confirmed fixtures.

Return ONLY JSON.

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