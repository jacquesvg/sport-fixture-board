import axios from "axios";

const API_KEY =
    process.env.GEMINI_API_KEY;

const MODEL =
    "gemini-3.6-flash";

export async function askGemini(prompt) {

    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

    try {

        const response =
            await axios.post(
                url,
                {
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                },
                {
                    params: {
                        key: API_KEY
                    },
                    headers: {
                        "Content-Type":
                            "application/json"
                    }
                }
            );

        return response.data;

    } catch (error) {

        console.error(
            JSON.stringify(
                error.response?.data ||
                error.message,
                null,
                2
            )
        );

        throw error;
    }
}