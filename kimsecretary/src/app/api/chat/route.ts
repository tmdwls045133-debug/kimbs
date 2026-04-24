import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('NEXT_PUBLIC_GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return Response.json(
        { error: '메시지가 필요합니다.' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const result = await model.generateContent(message);
    const response = result.response;
    const text = response.text();

    return Response.json({
      success: true,
      message: text,
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return Response.json(
      { error: 'AI 응답 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
