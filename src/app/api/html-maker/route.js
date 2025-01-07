import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY, // Ensure to set this in your .env file
});

export async function POST(req) {
  try {
    const { content } = await req.json();

    // console.log(content);

    if (!content || content.trim() === "") {
      return new Response(
        JSON.stringify({ error: "Content cannot be empty" }),
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4", // Use the latest GPT-4 model
      messages: [
        {
          role: "user",
          content: `Convert the following text into a properly formatted HTML paragraph wrapped in single <p></p> tag use <br> for new line and with appropriate tags such as <b>,<emp></emp>,<u></u> <i>, <a>, etc., where applicable:\n\n${content}`,
        },
      ],
      temperature: 0.7,
      max_tokens: 200,
    });

    const formattedHtml = response.choices[0]?.message?.content?.trim();

    // console.log(formattedHtml);

    if (!formattedHtml) {
      return new Response(
        JSON.stringify({ error: "Failed to generate HTML" }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ html: formattedHtml.replace(/<\/?p>/g, "") }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error with GPT-4:", error);
    return new Response(
      JSON.stringify({ error: "Error generating HTML with GPT-4" }),
      { status: 500 }
    );
  }
}
