export const dynamic = "force-dynamic"; // força não usar o cache

export async function GET() {
    return Response.json({
        time: new Date().toLocaleTimeString()
    });
}
