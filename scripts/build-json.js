import fs from "fs";

import { collectF1 }
from "./collect-f1.js";

import { collectTennis }
from "./collect-tennis.js";

import { collectRugby }
from "./collect-rugby.js";

import {
    parseGeminiResponse
}
from "./parse-gemini.js";

import {
    filterFutureEvents
}
from "./filter-future-events.js";

import {
    validateEvents
}
from "./validate.js";

const output = {

    generatedAt:
        new Date().toISOString(),

    status: "live",

    version: "7.2",

    sources: {

        f1: {
            source: "gemini"
        },

        tennis: {
            source: "gemini"
        },

        rugby: {
            source: "gemini"
        }
    },

    sports: {}
};

try {

    const f1Raw =
        await collectF1();

    const tennisRaw =
        await collectTennis();

    const rugbyRaw =
        await collectRugby();

    output.sports.f1 =
        filterFutureEvents(
            validateEvents(
                parseGeminiResponse(
                    f1Raw
                )
            )
        );

    output.sports.tennis =
        filterFutureEvents(
            validateEvents(
                parseGeminiResponse(
                    tennisRaw
                )
            )
        );

    output.sports.rugby =
        filterFutureEvents(
            validateEvents(
                parseGeminiResponse(
                    rugbyRaw
                )
            )
        );

} catch (err) {

    output.status =
        "partial";

    output.error =
        err.message;
}

fs.writeFileSync(
    "data/schedules.json",
    JSON.stringify(
        output,
        null,
        2
    )
);

console.log(
    "schedules.json generated"
);