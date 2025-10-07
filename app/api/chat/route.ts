import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { message, history } = await req.json();

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", // change to your domain in production
        "X-Title": "Portfolio Chatbot",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct", // free model
        messages: [
          { role: "system", content: "You are a friendly AI assistant inside Hamayoun Bhatti's portfolio." },
          ...(history || []), // keep past messages if sent from client
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    const aiReply =
      data?.choices?.[0]?.message?.content ||
      "🤖 Sorry, I couldn’t generate a reply.";

    return NextResponse.json({ reply: aiReply });
  } catch (err) {
    return NextResponse.json({ reply: "⚠️ Error connecting to AI API." });
  }
}
