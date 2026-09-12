import { askGemini }
from "./gemini.js";

export async function collectF1() {

    const today =
        new Date().toISOString();

    const prompt = `
Today's date is ${new Date().toISOString()}.

You MUST find Formula 1 sessions that are occurring
between today and the next 7 days.

Use current publicly available information.

Return ONLY fixtures occurring after today's date.

Include:

Practice
Sprint
Sprint Qualifying
Qualifying
Race

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