import {askGemini} from "./gemini.js";
export async function collectTennis(){
 const prompt=`Find ATP, WTA and Grand Slam tennis events occurring in the next 7 days. Return ONLY valid JSON array. Fields: id,sport,title,competition,location,datetime,description. sport value must be tennis.`;
 return await askGemini(prompt);
}
