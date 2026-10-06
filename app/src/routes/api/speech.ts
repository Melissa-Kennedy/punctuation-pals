import { createFileRoute } from "@tanstack/react-router";

const SPEECH_MODEL = "google/gemini-3.1-flash-tts-preview";
const SPEECH_VOICE = "Kore";
const MAX_TEXT_LENGTH = 300;

export const Route = createFileRoute("/api/speech")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let text = "";
        try {
          const body = (await request.json()) as { text?: unknown };
          if (typeof body.text === "string") text = body.text.trim();
        } catch {
          return Response.json({ error: "Send the sentence to read aloud." }, { status: 400 });
        }
        if (!text || text.length > MAX_TEXT_LENGTH) {
          return Response.json({ error: "Send the sentence to read aloud." }, { status: 400 });
        }

        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) {
          return Response.json({ error: "Listening is not set up yet." }, { status: 500 });
        }

        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: SPEECH_MODEL,
            contents: [
              {
                role: "user",
                parts: [{ text: `Read this sentence aloud slowly and cheerfully for a child learning punctuation: ${text}` }],
              },
            ],
            generationConfig: {
              responseModalities: ["AUDIO"],
              speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: SPEECH_VOICE } } },
            },
            stream_format: "audio",
          }),
        });

        if (!upstream.ok || !upstream.body) {
          return Response.json({ error: "The voice is busy right now. Try again in a moment." }, { status: upstream.ok ? 502 : upstream.status });
        }

        return new Response(upstream.body, {
          status: 200,
          headers: {
            "Content-Type": upstream.headers.get("Content-Type") ?? "audio/wav",
            "Cache-Control": "no-cache",
          },
        });
      },
    },
  },
});
