import { askGemini }
from "./gemini.js";

export async function collectTennis() {

    const today =
        new Date().toISOString();

    const prompt = `
Today's date is:

${today}

TASK

Find ATP, WTA and Grand Slam
events occurring during the NEXT 7 DAYS.

DO NOT return historical events.

Return ONLY JSON.

[
 {
  "id":"",
  "sport":"tennis",
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
``