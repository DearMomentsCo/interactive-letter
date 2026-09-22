/* ==========================================================================
   THEME 05: 复古双筒观片镜款 - 专属演示数据
   独立数据文件 - 仅供 templates/05-viewmaster/ 使用
   ========================================================================== */
const LETTER_DATA = {
  passcode: "1939", // View-Master 专利诞生年份密码
  fontType: "Montserrat",

  envelopeNote: "✦ VIEW-MASTER REEL NO. 05 ✦",
  waxSealMonogram: "📸",

  dateText: "REEL DATE // 2026.09.22",
  headline: "OUR STORY IN FULL FOCUS",
  salutation: "To My Favorite View,",
  body: `Sometimes in the rush of life, our picture gets a little blurry. We bump into careless words, static noise, and small misunderstandings that make us lose sight of the big picture.

Looking through this reel of our memories, every single frame reminds me how bright and irreplaceable you are. No argument or temporary blur could ever change how deeply I cherish you.

Let's pull the lever, click past the static, and snap our hearts back into sharp, vibrant focus together. I'm so sorry, and I love you endlessly.`,
  closing: "Forever focused on you ♡\nYour Silly Human",

  // 专属 7 帧底片圆盘照片库（支持下压拨杆轮播）
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
      caption: "FRAME 1 OF 7: The sunset where everything felt magical ♡"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80",
      caption: "FRAME 2 OF 7: Laughing uncontrollably in the coffee shop ☕"
    },
    {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
      caption: "FRAME 3 OF 7: Under the stars, hand in hand forever ✨"
    }
  ],

  // 浪漫温暖的木吉他背景曲
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  // 柯达 35mm 胶卷底片刮刮乐
  enableScratch: true,
  scratchHint: "✦ SCRATCH 35MM FILM STRIP TO REVEAL HIDDEN FRAME ✦",
  scratchSecret: "SECRET FRAME: A Lifetime of Late-Night Talks & Infinite Cuddles ♡",

  // 光学对焦逃跑问答
  enableRunaway: true,
  runawayQuestion: "KEEP OUR HEARTS IN FULL FOCUS FOREVER?",
  runawaySuccessMessage: "✦ 100% IN FOCUS! REEL PRESERVED FOREVER! ♡ ✦"
};
