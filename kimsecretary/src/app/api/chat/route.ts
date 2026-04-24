import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: Request) {
  try {
    const apiKey =
      process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: 'GEMINI_API_KEY 환경변수가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    const { message } = await request.json();

    if (!message) {
      return Response.json(
        { error: '메시지가 필요합니다.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Gemini 3.1 Pro Preview는 free tier 쿼터가 매우 낮아 429 발생하므로
    // free tier 할당량이 넉넉한 3.1 Flash-Lite Preview를 사용
    const model = genAI.getGenerativeModel({
      model: 'gemini-3.1-flash-lite-preview',
    });

    const result = await model.generateContent(message);
    const response = result.response;
    const text = response.text();

    return Response.json({
      success: true,
      message: text,
    });
  } catch (error) {
    console.error('Gemini API Error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'AI 응답 생성 중 오류가 발생했습니다.';
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
