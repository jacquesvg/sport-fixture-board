export function parseGemini(response) {

    const text =
        response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        return [];
    }

    try {

        const cleaned = text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        return JSON.parse(cleaned);

    } catch (error) {

        console.error(
            "Gemini JSON parsing failed"
        );

        return [];
    }
}