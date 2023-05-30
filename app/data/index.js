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

export const products = [
     {
        _id: productIds[0],
        name: "Butter",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/056333F3-F221-4A79-83F5-4C473ADB3409_ssqrso.png",
    },
    {
        _id: productIds[1],
        name: "Eggs",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/504477B0-E0EB-450D-9FEA-F001E6F22340_p0wejo.png",
    },
    {
        _id: productIds[2],
        name: "Flour",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/4AABA7AA-8213-4B4C-AF68-F79021F52301_by7aup.png",
    },
    {
        _id: productIds[3],
        name: "Sugar",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/76149E21-626C-4E22-8A5A-D61AD73A743B_eiupib.png",
    },
    {
        _id: productIds[4],
        name: "Almonds",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/DD98718D-B41E-4C0E-8BA5-BC7EDC7AA3F7_jej3yi.png",
    },
    {
        _id: productIds[5],
        name: "Cashew",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/A0F41118-14E5-4075-B650-BD014D8103D9_idigzj.png",
    },
    {
        _id: productIds[6],
        name: "Honey",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/5F1413FA-299B-4029-B70E-48CF4617041D_xc3zhr.png",
    },
    {
        _id: productIds[7],
        name: "Strawberry",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/E9533E01-A3E5-4A35-B7C6-6E5DBBF9A97F_s2xpoq.png",
    },
    {
        _id: productIds[8],
        name: "Blueberry",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391570/webBakery/products/521FD40F-F393-4B37-B4A5-9FED6BA39135_bdldz9.png",
    },
    {
        _id: productIds[9],
        name: "Peaches",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683391569/webBakery/products/E58DDF60-5051-43B4-BF6A-378A84646836_mhm9l0.png",
    },
];

export const bakeware = [
    {
        _id: bakewareIds[0],
        name: "Stand mixer",
        brand: "Smeg",
        link: "https://www.mediamarkt.hu/hu/product/_smeg-smf03rdeu-retro-konyhai-robotg%C3%A9p-piros-1328161.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683390375/webBakery/equipment/096E4B8E-3BB6-4C5C-A5FB-7E69C9E88865_bqnjei.png",
    },
    {
        _id: bakewareIds[1],
        name: "Hand mixer",
        brand: "Philips",
        link: "https://www.mediamarkt.hu/hu/product/_philips-hr3705-00-k%C3%A9zi-mixer-300-w-feh%C3%A9r-1270526.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/180B7E4F-5FFE-4BC5-8985-9066C4FC9DD3_jo97o4.png",
    },
    {
        _id: bakewareIds[2],
        name: "Cupcake pan",
        brand: "Bakemaster",
        link: "https://www.kitchenware.com.au/bakemaster-muffin-cupcake-pan-12-cup.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/36268608-39AD-49C1-A24D-6EF06EBF036F_m1zydu.png",
    },
    {
        _id: bakewareIds[3],
        name: "Pan",
        brand: "Pyrex",
        link: "https://www.kitchenware.com.au/pyrex-platinum-round-springform-pan-20cm.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/E17A8FEF-D691-4307-9074-3C82071740CC_biguir.png",
    },
    {
        _id: bakewareIds[4],
        name: "Mixing bowl",
        brand: "Mason Cash",
        link: "https://www.kitchenware.com.au/mason-cash-hearts-cream-mixing-bowl.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/7F196C96-C151-4CD4-A46D-C64B927C6B67_qfwifi.png",
    },
    {
        _id: bakewareIds[5],
        name: "Piping bag",
        brand: "Mastercraft",
        link: "https://www.kitchenware.com.au/mastercraft-icing-starter-set-of-8.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/CDDEEBFA-BF59-4559-A889-5EF009BDA0D5_ogeqef.png",
    },
    {
        _id: bakewareIds[6],
        name: "Rolling pin",
        brand: "Daily Bake",
        link: "https://www.kitchenware.com.au/d-line-rolling-pin-50x6cm-rubberwood.html",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/47FA4DE4-48B5-481E-8B30-7CC02B24DC8D_i4gfvn.png",
    },
    {
        _id: bakewareIds[7],
        name: "Hand whisk",
        brand: "Flying Tiger",
        link: "https://flyingtiger.com/products/hand-whisk-3031190",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388947/webBakery/equipment/7284953E-71B5-4839-A621-C746669FCFD9_bvlaaa.png",
    },
    {
        _id: bakewareIds[8],
        name: "Baking mould",
        brand: "Flying Tiger",
        link: "https://flyingtiger.com/products/baking-mould-3036446",
        picture: "https://res.cloudinary.com/dpclhozin/image/upload/v1683388946/webBakery/equipment/07CC789A-61D6-47A3-8D01-E98A8FDE325D_zkve26.png",
    },
    ];