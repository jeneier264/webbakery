import Bakeware from "@models/bakeware";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const bakeware = await Bakeware.find({})

        return new Response(JSON.stringify(bakeware), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all bakeware", { status: 500 })
    }
} 