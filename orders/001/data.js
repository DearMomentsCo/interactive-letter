/* ==========================================================================
   ORDER 001 - CUSTOMER DATA
   ========================================================================== */
const LETTER_DATA = {
  // 1. 客户设定的 4 位密码
  passcode: "0928",

  // 2. 客户选择的字体（此处指定为手写体 Caveat）
  fontType: "Caveat",

  // 3. 信封封面与火漆
  envelopeNote: "✦ For Liam ✦",
  waxSealMonogram: "♥",

  // 4. 正文排版
  dateText: "September 28, 2026",
  salutation: "Dear Liam,",
  headline: "I'M SO SORRY",
  body: `I hate that we went to bed angry last night. You mean the world to me, and my stubbornness got the best of me.

Like kintsugi, I know we can heal and become even stronger together. I love you more than words can say.`,
  closing: "Forever yours,\nSarah ♡",

  // 5. 翻转相片配置（读取同文件夹下的 photo.jpg）
  photos: [
    {
      url: "photo.jpg",
      caption: "Our happiest memory together in Kyoto ♡"
    }
  ],

  // 6. 默认钢琴治愈音频
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  // 7. 刮刮乐设置
  enableScratch: true,
  scratchHint: "✦ POLISH THE GOLDEN SEAM TO HEAL ✦",
  scratchSecret: "Forgive me? Movie night & pizza on me! ♡",

  // 8. 逃跑互动问答
  enableRunaway: true,
  runawayQuestion: "Will you forgive your silly girl?",
  runawaySuccessMessage: "Yay! Best boyfriend ever! Hugs incoming ♡"
};
