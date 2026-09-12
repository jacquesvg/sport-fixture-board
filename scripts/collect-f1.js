import {askGemini} from "./gemini.js";
export async function collectF1(){
 const prompt = `
Today's date is ${new Date().toISOString()}.

Find all Formula 1 sessions
scheduled within the next 7 days.

Do not return historical events.

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
