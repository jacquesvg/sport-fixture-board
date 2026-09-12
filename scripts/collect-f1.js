import {askGemini} from "./gemini.js";
export async function collectF1(){
 const prompt=`Find all Formula 1 sessions and race events occurring in the next 7 days. Return ONLY valid JSON array. Fields: id,sport,title,competition,location,datetime,description. sport value must be f1.`;
 return await askGemini(prompt);
}
