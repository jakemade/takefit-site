// takefit website settings. The ONLY line to edit: your TikTok client key.
//
// The client KEY is public (it is part of every TikTok login link anyone can see), so it may live in this file.
// The client SECRET is NOT: it stays in the TIKTOK_CLIENT_SECRET environment variable on the computer that runs
// takefit, and never goes into this website.
//
// Use the SANDBOX client key while testing and recording the demo, and the production one after TikTok approves
// the app (developers.tiktok.com > Manage apps > your app > Credentials).
window.TAKEFIT = {
  tiktokClientKey: "PASTE_YOUR_TIKTOK_CLIENT_KEY_HERE",
  redirectUri: "https://jakemade.github.io/takefit-site/callback.html",
  scopes: ["user.info.basic", "video.upload", "video.publish"],
};
