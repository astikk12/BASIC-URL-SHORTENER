import shortid from "shortid";
import URL from "../model/url.model.js"
import creatUrl from "../services/url.services.js";

export const addUrl = async (req, res) => {
  try {
    const { redirect } = req.body;

    if (!redirect) {
      return res.status(400).json({ message: "redirect URL is required" });
    }

    const url = await creatUrl(redirect);

    res.status(201).json({
      message: "URL created successfully",
      shortId: url.shortid,
    });
  } catch (error) {
    console.error("error in controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUrl = async (req, res) => {
  const urls = await URL.find({});
  res.status(200).json(urls);
};

const redirect = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await URL.findOneAndUpdate(
      { shortid: id },
      {
        $inc: { visitCount: 1 },
        $push: { visited: { timestamp: new Date() } },
      }
    );
    console.log("REDIRECT VALUE:", JSON.stringify(entry.redirect));


    if (!entry) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    return res.redirect(entry.redirect);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


const analytics = async (req, res) => {
  const { id } = req.params;

  const url = await URL.findOne({ shortid: id });

  if (!url) {
    return res.status(404).json({ message: "URL not found" });
  }

  res.status(200).json({
    totalClick: url.visitCount,
    visitHistory: url.visited,
  });
};


export default { addUrl, getUrl, redirect, analytics };
