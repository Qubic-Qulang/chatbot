import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const providerName = process.env.PROVIDER_NAME || 'gpt-4o-mini model';
    const picturePath = process.env.PICTURE_PATH || '/public/images/logo.png';
    const imageResponse = await fetch(new URL(picturePath, request.url).toString());
    if (!imageResponse.ok) {
        throw new Error('Failed to fetch the image');
    }
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = `data:${imageResponse.headers.get('content-type')};base64,${Buffer.from(imageBuffer).toString('base64')}`;
    const providerDescription = process.env.PROVIDER_DESCRIPTION || 'Default provider with gpt-4o-mini model';

    const info = {
        provider_name: providerName,
        base64Image: base64Image,
        provider_description: providerDescription
    };

    return NextResponse.json(info);
}
