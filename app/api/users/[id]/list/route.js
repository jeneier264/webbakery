import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const user = await User.findById(params.id);
        const shoplist = user.shoplist;

        return new Response(JSON.stringify(shoplist), { status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
} 

export const PATCH = async (request, { params }) => {
  const { item } = await request.json();

  try {
    await connectToDB();

    const user = await User.findById(params.id);
    const shoplist = user.shoplist;
    const itemInList = shoplist.some((el) => el.name === item.name);
    let updatedList = [];

    if (itemInList) {
        updatedList = shoplist.map((el) => {
          if (el.name === item.name) {
            return { ...el, amount: item.amount, isChecked: item.isChecked };
          }
          return el;
        });
    } else {
      updatedList = [...shoplist, { name: item.name, amount: item.amount, isChecked: item.isChecked }];
    }

    
    user.shoplist = updatedList.filter((el) => el.amount !== 0);

    await user.save();

    return new Response("Successfully updated the list", { status: 200 });
  } catch (error) {
    return new Response("Error Updating list", { status: 500 });
  }
};
