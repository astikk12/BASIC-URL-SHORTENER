import shortid from "shortid";
import URL from "../model/url.model.js";

const creatUrl = async (data) => {
  const url = await URL.create({
    redirect: data,
    shortid: shortid.generate(),
  });
  return url;
};

export default creatUrl;
