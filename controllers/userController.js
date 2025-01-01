import User from "../models/userModel.js";

//for Register Logout

export const Addpost = async (req, res) => {
  const { description, category } = req.body;
  // console.log(req.file);
  try {
    if (!description) {
      return res.status(400).json({ error: "Please fill all the fields!" });
    }
    const photoUrl = req.file.path;
    const newUser = new User({
      description,
      category,
      file: photoUrl,
    });
    await newUser.save();
    return res.status(201).json({ message: "Posted successfully!", newUser });
  } catch (error) {
    console.error("Post error:", error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};
// for GetPost data
export const GetPost = async (req, res) => {
  const category = req.query.category;
  console.log(category);
  try {
    if (!category) {
      return res.status(400).json({ error: "category is not given!" });
    }
    const SelectedPost = await User.find({ category: category }).sort({ createdAt: -1 });;
    if (SelectedPost.length == 0) {
      return res.status(400).json({ error: "No data found!" });
    }
    return res
      .status(201)
      .json({ message: "Data fetched successfully!", SelectedPost });
  } catch (err) {
    return res.status(403).json({ error: "Token varification error:" });
  }
};
// for GetPost data
export const GetSpecificPost = async (req, res) => {
  const Postid = req.params.postid; 
  // console.log(Postid);
  try {
    if (!Postid) {
      return res.status(400).json({ error: "Post ID is not provided!" });
    }
    const SpecificPost = await User.findById(Postid); 
    if (!SpecificPost) {
      return res.status(404).json({ error: "No specific post found!" });
    }
    return res
      .status(200) // Use 200 for successful GET requests
      .json({ message: "Specific post fetched successfully!", SpecificPost });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error while fetching post!" });
  }
};


// for GetPost all data
export const AllRandomPost = async (req, res) => {
  try {
    
    const AllRandomPost = await User.find().sort({ createdAt: -1 });; 
    if (!AllRandomPost) {
      return res.status(404).json({ error: "No specific post found!" });
    }
    return res
      .status(200) // Use 200 for successful GET requests
      .json({ message: "post fetched successfully!",SelectedPost:AllRandomPost });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error while fetching post!" });
  }
};