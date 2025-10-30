export default async function handler(req, res) {
  const { prompt, mode } = req.body;

  try {
    const reply = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `Bạn là chatbot học tập siêu đáng yêu 🌸, trả lời thân thiện, dễ hiểu, phù hợp với mục "${mode}".`
          },
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await reply.json();
    res.status(200).json({ reply: data.choices?.[0]?.message?.content || "Ơ... hình như mình bị lỗi rồi 😅" });
  } catch (error) {
    res.status(500).json({ reply: "Lỗi server 😭" });
  }
}
