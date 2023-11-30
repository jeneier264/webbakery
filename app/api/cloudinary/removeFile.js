//import { v2 as cloudinary } from 'cloudinary';
import { Cloudinary } from "@cloudinary/url-gen";

export const removeFile = async (name) => {
  // cloudinary.config({
  //   cloud_name: 'dpclhozin',
  //   api_key: '378152142575513',
  //   api_secret: 'wkHineGy-BhW_JPHwSEaMQy9ZF4',
  // });
  const cloudinary = new Cloudinary({
    cloud: {
      cloudName: "dpclhozin",
      apiKey: "378152142575513",
      apiSecret: "wkHineGy-BhW_JPHwSEaMQy9ZF4",
    }
  });

  try {
    const result = await cloudinary.v2.uploader.destroy(name);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
