/* ==========================================================================
   ORDER 001 - CUSTOMER DATA (2 张照片 + 专属本地音频)
   ========================================================================== */
const LETTER_DATA = {
  passcode: "0928",
  fontType: "Caveat",

  envelopeNote: "✦ For Liam ✦",
  waxSealMonogram: "♥",

  dateText: "September 28, 2026",
  salutation: "Dear Liam,",
  headline: "I'M SO SORRY",
  body: `I hate that we went to bed angry last night. You mean the world to me, and my stubbornness got the best of me.

Like kintsugi, I know we can heal and become even stronger together. I love you more than words can say.`,
  closing: "Forever yours,\nSarah ♡",

  // 【照片列表：必须与你上传到此文件夹的文件名完全一致】
  photos: [
    {
      url: "photo1.jpg",
      caption: "Our first trip to the beach ♡"
    },
    {
      url: "photo2.jpg",
      caption: "That cozy rainy night in Kyoto ♡"
    }
  ],

  // 【专属音频：直接填写本地文件名，不要带 http 网址】
  audioUrl: "audio.mp3",

  enableScratch: true,
  scratchHint: "✦ POLISH THE GOLDEN SEAM TO HEAL ✦",
  scratchSecret: "Forgive me? Movie night & pizza on me! ♡",

  enableRunaway: true,
  runawayQuestion: "Will you forgive your silly girl?",
  runawaySuccessMessage: "Yay! Best boyfriend ever! Hugs incoming ♡"
};
