import axios from "axios";
const API_KEY=process.env.GEMINI_API_KEY;
const MODEL="gemini-2.5-flash";
export async function askGemini(prompt){
 const url=`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
 const r=await axios.post(url,{contents:[{parts:[{text:prompt}]}]});
 return r.data;
}
