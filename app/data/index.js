import mongoose from "mongoose";

const productIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const bakewareIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const userIds = [new mongoose.Types.ObjectId()];

const recipeIds = [new mongoose.Types.ObjectId(), new mongoose.Types.ObjectId()];

export const products = [
  {
    _id: productIds[0],
    name: "Butter",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/056333F3-F221-4A79-83F5-4C473ADB3409_ssqrso.png",
  },
  {
    _id: productIds[1],
    name: "Eggs",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/504477B0-E0EB-450D-9FEA-F001E6F22340_p0wejo.png",
  },
  {
    _id: productIds[2],
    name: "Flour",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/4AABA7AA-8213-4B4C-AF68-F79021F52301_by7aup.png",
  },
  {
    _id: productIds[3],
    name: "Sugar",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/76149E21-626C-4E22-8A5A-D61AD73A743B_eiupib.png",
  },
  {
    _id: productIds[4],
    name: "Almonds",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/DD98718D-B41E-4C0E-8BA5-BC7EDC7AA3F7_jej3yi.png",
  },
  {
    _id: productIds[5],
    name: "Cashew",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/A0F41118-14E5-4075-B650-BD014D8103D9_idigzj.png",
  },
  {
    _id: productIds[6],
    name: "Honey",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/5F1413FA-299B-4029-B70E-48CF4617041D_xc3zhr.png",
  },
  {
    _id: productIds[7],
    name: "Strawberry",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/E9533E01-A3E5-4A35-B7C6-6E5DBBF9A97F_s2xpoq.png",
  },
  {
    _id: productIds[8],
    name: "Blueberry",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/521FD40F-F393-4B37-B4A5-9FED6BA39135_bdldz9.png",
  },
  {
    _id: productIds[9],
    name: "Peaches",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/E58DDF60-5051-43B4-BF6A-378A84646836_mhm9l0.png",
  },
];

export const bakeware = [
  {
    _id: bakewareIds[0],
    name: "Stand mixer",
    brand: "Smeg",
    link: "https://www.mediamarkt.hu/hu/product/_smeg-smf03rdeu-retro-konyhai-robotg%C3%A9p-piros-1328161.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683390375/webBakery/equipment/096E4B8E-3BB6-4C5C-A5FB-7E69C9E88865_bqnjei.png",
  },
  {
    _id: bakewareIds[1],
    name: "Hand mixer",
    brand: "Philips",
    link: "https://www.mediamarkt.hu/hu/product/_philips-hr3705-00-k%C3%A9zi-mixer-300-w-feh%C3%A9r-1270526.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/180B7E4F-5FFE-4BC5-8985-9066C4FC9DD3_jo97o4.png",
  },
  {
    _id: bakewareIds[2],
    name: "Cupcake pan",
    brand: "Bakemaster",
    link: "https://www.kitchenware.com.au/bakemaster-muffin-cupcake-pan-12-cup.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/36268608-39AD-49C1-A24D-6EF06EBF036F_m1zydu.png",
  },
  {
    _id: bakewareIds[3],
    name: "Pan",
    brand: "Pyrex",
    link: "https://www.kitchenware.com.au/pyrex-platinum-round-springform-pan-20cm.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/E17A8FEF-D691-4307-9074-3C82071740CC_biguir.png",
  },
  {
    _id: bakewareIds[4],
    name: "Mixing bowl",
    brand: "Mason Cash",
    link: "https://www.kitchenware.com.au/mason-cash-hearts-cream-mixing-bowl.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/7F196C96-C151-4CD4-A46D-C64B927C6B67_qfwifi.png",
  },
  {
    _id: bakewareIds[5],
    name: "Piping bag",
    brand: "Mastercraft",
    link: "https://www.kitchenware.com.au/mastercraft-icing-starter-set-of-8.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/CDDEEBFA-BF59-4559-A889-5EF009BDA0D5_ogeqef.png",
  },
  {
    _id: bakewareIds[6],
    name: "Rolling pin",
    brand: "Daily Bake",
    link: "https://www.kitchenware.com.au/d-line-rolling-pin-50x6cm-rubberwood.html",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/47FA4DE4-48B5-481E-8B30-7CC02B24DC8D_i4gfvn.png",
  },
  {
    _id: bakewareIds[7],
    name: "Hand whisk",
    brand: "Flying Tiger",
    link: "https://flyingtiger.com/products/hand-whisk-3031190",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/7284953E-71B5-4839-A621-C746669FCFD9_bvlaaa.png",
  },
  {
    _id: bakewareIds[8],
    name: "Baking mould",
    brand: "Flying Tiger",
    link: "https://flyingtiger.com/products/baking-mould-3036446",
    picture:
      "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/07CC789A-61D6-47A3-8D01-E98A8FDE325D_zkve26.png",
  },
];

export const users = [
  {
    _id: userIds[0],
    email: "chief@hmail.com",
    username: "janythechief",
    image:
      "https://i.pinimg.com/564x/16/4e/b7/164eb7eb7009848bab72a68f096288f6.jpg",
    __v: 0,
    shoplist: [],
  },
];

const id = new mongoose.Types.ObjectId("656309a4bd060cbc075cac3b");

export const recipes = [
  {
    _id: recipeIds[1],
    creator: id,
    creatorName: "janythechief",
    recipe: "Vegan Chocolate Cheesecake",
    tag: "#chocolate #vegan #cheesecake #cake",
    steps: [
      "Prepare: Line the bottom and sides of a cake tin (with a removable base) with some parchment paper.",
      "Make the crust: Add the cookies and sea salt to your food processor and blitz for about 30 seconds until evenly finely ground (see note 3). Add in the vegan butter and blend again until evenly combined and the mixture sticks together between your fingers.",
      "Press the cookie mixture into the base of the cake tin, and smooth it out with a ¼ cup measure or flat-bottomed glass, making sure it is compact. Set aside in the fridge while you prepare the filling.",
      "Melt the chocolate: Melt the chocolate over a bain-marie (double boiler), stir until smooth, and set it aside for 15-20 minutes to cool.",
      "Make the filling: Add the cream cheese to a large mixing bowl and whisk using an electric whisk for 2-3 minutes, until smooth and fluffy. Then mix in the yogurt and whisk until smooth.",
      "Lastly, alternate between adding the melted chocolate and maple syrup in 3 increments each, whisking each time to incorporate them into the cream cheese mixture. (one part chocolate and whisk, one part maple syrup whisk again, etc..)",
      "Set the cake: Transfer the filling into the cake tin using a spatula to smooth out the top. Place in the fridge to set for 4 hours (or overnight if preferred). Once set, carefully remove the cake from the tin. ",
      "Garnish: Make half a batch of vegan ganache and allow it to cool slightly for 10-20 minutes. Give the ganache a good whisk so it is smooth and then pour it over the top of the cake, using a spatula to spread it out. Decorate with chocolate shavings or see note 4 on how to make chocolate curls.",
      "Storage: Place it in an airtight container in the fridge and consume it within 5 days. Alternatively, you can freeze any unused slices and defrost them as needed"
    ],
    time: 260,
    servings: 12,
    products: [
      {
        count: 160,
        meausure: "gr",
        name: "oreos",
      },
      {
        count: 50,
        meausure: "gr",
        name: "vegan butter",
      },
      {
        count: 1.25,
        meausure: "tsp",
        name: "salt",
      },
      {
        count: 300,
        meausure: "gr",
        name: "dark chocolate",
      },
      {
        count: 300,
        meausure: "gr",
        name: "cream cheese",
      },
      {
        count: 300,
        meausure: "gr",
        name: "greek-style yogurt",
      },
      {
        count: 20,
        meausure: "gr",
        name: "coco powder",
      },
      {
        count: 1,
        meausure: "tsp",
        name: "vanilla extract",
      },
    ],
    equipment: [new mongoose.Types.ObjectId("646f57700a32ea7d25511a4b"), new mongoose.Types.ObjectId("646f57700a32ea7d25511a4e"), new mongoose.Types.ObjectId("646f57700a32ea7d25511a4f")],
    picture:
      "https://i.pinimg.com/564x/09/1d/ca/091dcaf69c24db499e89b334e35a56fd.jpg",
  },
];
