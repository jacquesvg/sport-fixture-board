import axios from "axios";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";

export async function askGemini(prompt) {
    const url =
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

    try {
        const response = await axios.post(
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
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(
            JSON.stringify(response.data, null, 2)
        );

        return response.data;

    } catch (error) {

        console.error(
            error.response?.data ||
            error.message
        );

        throw error;
    }
}