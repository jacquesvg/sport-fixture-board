import { parseGemini }
from "./parse-gemini.js";

const f1Raw =
    await collectF1();

output.sports.f1 =
    parseGemini(f1Raw);