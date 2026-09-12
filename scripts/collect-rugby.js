import { askGemini }
from "./gemini.js";

export async function collectRugby() {

    const today =
        new Date().toISOString();

    const prompt = `
Today's date is:

${today}

TASK

Find international rugby union
fixtures occurring during the NEXT 7 DAYS.

DO NOT return historical events.

Return ONLY JSON.

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