import { askGemini }
from "./gemini.js";

export async function collectRugby() {

    const today =
    new Date().toISOString();

const prompt = `
Today's date is ${new Date().toISOString()}.

You are a rugby union fixture researcher.

CRITICAL:

List EVERY rugby union fixture taking place today
or during the next 7 calendar days.

Search for fixtures from:

- Rugby Championship
- International Tests
- Summer Internationals
- Autumn Nations Series
- Pacific Nations Cup
- Rugby Europe Championship
- World Rugby fixtures
- Test Matches

If fixtures occur today, they MUST be included.

Do not return historical matches.

Do not return estimates.

Return ONLY confirmed future fixtures.

Return ONLY valid JSON.

[
  {
    "id":"",
    "sport":"rugby",
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