export function parseGeminiResponse(response) {

    const text =
        response
            ?.candidates?.[0]
            ?.content?.parts?.[0]
            ?.text;

    if (!text) {

        return [];
    }

    try {

        return JSON.parse(
            text
                .replace(/```json/g, "")
                .replace(/```/g, "")
                .trim()
        );

    } catch (error) {

        console.error(
            "Failed to parse Gemini JSON"
        );

        return [];
    }
}
