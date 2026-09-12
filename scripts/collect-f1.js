import { askGemini }
from "./gemini.js";

export async function collectF1() {

    const today =
        new Date().toISOString();

    const prompt = `
Today's date is:

${today}

TASK

Find all Formula 1 events
scheduled during the NEXT 7 DAYS.

Return ONLY events
that take place between today
and seven calendar days from now.

DO NOT return historical events.

Return ONLY JSON.

Schema:

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