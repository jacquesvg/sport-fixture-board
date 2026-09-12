import {askGemini} from "./gemini.js";
export async function collectRugby(){
 const prompt=`Find international rugby union fixtures occurring in the next 7 days. Return ONLY valid JSON array. Fields: id,sport,title,competition,location,datetime,description. sport value must be rugby.`;
 return await askGemini(prompt);
}
