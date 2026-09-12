import { askGemini }
from "./gemini.js";

export async function collectRugby() {

    const today =
    new Date().toISOString();

const prompt = `
Today's date is ${new Date().toISOString()}.

Answer ONLY with JSON.

What rugby union matches are taking place TODAY?

If there are matches today, include them.

Use current publicly available information.

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
