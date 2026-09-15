/* ==========================================================================
   THEME 03: 复古磁带倒带款 - 演示数据
   独立数据文件 - 仅供 templates/03-cassette/ 使用
   ========================================================================== */
const LETTER_DATA = {
  passcode: "1998",
  fontType: "Playfair Display",

  envelopeNote: "✦ MIXTAPE FOR YOU: SIDE A ✦",
  waxSealMonogram: "🎵",

  dateText: "September 15, 2026",
  headline: "CAN WE REWIND?",
  salutation: "My Favorite Track,",
  body: `If life had a tape deck, I would hold down the rewind button and erase every careless word from yesterday.

Sometimes we hit static and discord, but you are still my favorite melody in this entire noisy world. No misunderstanding can change how deeply I treasure us.

Let's wind the tape back to zero. To soft laughter, warm embraces, and our favorite song on repeat. I'm so sorry, and I love you endlessly.`,
  closing: "Forever on your playlist,\nYour Silly Human ♡",

  // 演示照片（全画幅智能自适应 + 3D 翻转 + < 1 / 2 > 幻灯片）
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
      caption: "Track 01: The afternoon everything sounded sweet ♡"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80",
      caption: "Track 02: Our silliest road trip memories 🎶"
    }
  ],

  // 浪漫钢琴背景音乐
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  // 专属磁带贴纸刮刮乐
  enableScratch: true,
  scratchHint: "✦ SCRATCH TAPE LABEL FOR SECRET BONUS TRACK ✦",
  scratchSecret: "Bonus Track: Late-night drive & ice cream on me tonight! ♡",

  // 逃跑问答
  enableRunaway: true,
  runawayQuestion: "Can we press play on us again?",
  runawaySuccessMessage: "✦ TRACK RESUMED! PLAYING IN PERFECT HARMONY! ♡ ✦"
};
