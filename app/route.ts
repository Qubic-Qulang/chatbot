import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const providerName = process.env.PROVIDER_NAME || 'gpt-4o-mini model';
    const picturePath = process.env.PICTURE_PATH || '/public/images/logo.png';
    const imageResponse = await fetch(new URL(picturePath, request.url).toString());
    if (!imageResponse.ok) {
        throw new Error('Failed to fetch the image');
    }
    const providerDescription = process.env.PROVIDER_DESCRIPTION || 'Default provider with gpt-4o-mini model';

    const info = {
        provider_name: providerName,
        picture_path: picturePath,
        provider_description: providerDescription
    };

    return NextResponse.json(info);
}
