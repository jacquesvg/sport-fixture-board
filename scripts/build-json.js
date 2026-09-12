import fs from "fs";
import {collectF1} from "./collect-f1.js";
import {collectTennis} from "./collect-tennis.js";
import {collectRugby} from "./collect-rugby.js";

const output={generatedAt:new Date().toISOString(),status:"live",version:"7",sources:{f1:{source:"gemini"},tennis:{source:"gemini"},rugby:{source:"gemini"}},sports:{}};
try{
 output.sports.f1=await collectF1();
 output.sports.tennis=await collectTennis();
 output.sports.rugby=await collectRugby();
}catch(err){output.status='partial'; output.error=err.message;}
fs.writeFileSync('data/schedules.json',JSON.stringify(output,null,2));
console.log('schedules.json generated');
