
import clientPromise from "@/lib/mongodb";


export async function POST(request) {
    try {
        const body = await request.json()
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url")

        const doc = await collection.findOne({ shorturl: body.shorturl })
        if (doc) {
            return Response.json({ success: "false", error: "true", message: 'URL already generated' })
        }
        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })

        return Response.json({ success: "true", error: "failed", message: 'URL Generated Successfully' })
    } catch (error) {
        console.error('URL generation failed:', error)
        return Response.json({ success: false, error: true, message: 'Unable to generate URL' }, { status: 500 })
    }

}