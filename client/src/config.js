let BASE_URL = "https://connect-two-lemon.vercel.app/posts/64491bee4dbbc87d68af7708/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
