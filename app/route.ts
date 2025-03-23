import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const providerName = process.env.PROVIDER_NAME || 'Default Model Name';
    const picturePath = process.env.PICTURE_PATH || '/default/path/to/picture.png';
    const providerDescription = process.env.PROVIDER_DESCRIPTION || 'Default provider description';

    const info = {
        provider_name: providerName,
        picture_path: picturePath,
        provider_description: providerDescription
    };

    return NextResponse.json(info);
}
