import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const providerName = process.env.PROVIDER_NAME || 'gpt-4o-mini model';
    const picturePath = process.env.PICTURE_PATH || '/images/logo.png';
    const publicIp = process.env.PUBLIC_IP || '46.17.103.110:3001/';
    const imageResponse = await fetch(new URL(picturePath, `http://${publicIp}`));
    const imageBuffer = await imageResponse.arrayBuffer();
    const base64Image = `data:${imageResponse.headers.get('content-type')};base64,${Buffer.from(imageBuffer).toString('base64')}`;
    const providerDescription = process.env.PROVIDER_DESCRIPTION || 'Default provider with gpt-4o-mini model';

    const info = {
        provider_name: providerName,
        picturePath: imageResponse.url,
        provider_description: providerDescription,
        base64Image: base64Image

    };

    return NextResponse.json(info);
}
