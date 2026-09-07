/* ==========================================================================
   ORDER 002 - CUSTOMER DATA (Chloe to Noah / 2 张照片)
   ========================================================================== */
const LETTER_DATA = {
  // 1. 客户自设 4 位密码
  passcode: "1123",

  // 2. 客户选择的字体
  fontType: "Playfair Display",

  // 3. 信封定制
  envelopeNote: "✦ FOR NOAH ✦",
  waxSealMonogram: "♥",

  // 4. 正文排版
  dateText: "October 14, 2026",
  salutation: "Dear Noah,",
  headline: "I AM TRULY SORRY",
  body: `I've been thinking a lot about what happened between us. My words were careless, but my feelings for you have always been genuine and deep.

I hate seeing you hurt, especially when I was the one who caused it. I promise to be more patient, to listen with my whole heart, and to never take what we have for granted. Let's mend this together.`,
  closing: "Always yours,\nChloe ♡",

  // 5. 【2 张照片配置】：系统会自动贴合横图与竖图，不裁切
  photos: [
    {
      url: "photo1.jpg",
      caption: "Our favorite trip by the ocean 🌊"
    },
    {
      url: "photo2.jpg",
      caption: "Even on our silliest days, I choose you ♡"
    }
  ],

  // 6. 默认钢琴背景音
  audioUrl: "audio.mp3",

  // 7. 刮刮乐誓言
  enableScratch: true,
  scratchHint: "✦ POLISH THE GOLDEN SEAM TO HEAL ✦",
  scratchSecret: "Date night this weekend? Ice cream & your favorite movie on me! ♡",

  // 8. 逃跑互动问答
  enableRunaway: true,
  runawayQuestion: "Can we kiss and make up?",
  runawaySuccessMessage: "Yay! I love you so much, my boy! ♡"
};
