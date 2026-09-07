/* ==========================================================================
   CUSTOMER ORDER DATA FILE (买家定制内容填空表)
   ========================================================================== */
const LETTER_DATA = {
  // 1. 密码锁设置 (留空 "" 则不启用密码锁；填写 "1024" 等 4 位字符则强制解锁才能看信)
  passcode: "1024",

  // 2. 信封封面
  envelopeNote: "✦ For My Dearest Emily ✦",
  waxSealMonogram: "♥", // 可填 "♥" 或买家姓名首字母如 "A & E"

  // 3. 信件文案
  dateText: "October 24, 2026",
  salutation: "Dear Emily,",
  headline: "I'M TRULY SORRY",
  body: `Sometimes words fall short of fixing what was broken, but my remorse is entirely real.

In Japan, when a bowl is broken, it is repaired with pure gold. The fracture is not hidden; it is illuminated. It becomes the most luminous part of the piece, proving that history, love, and care create something far more resilient.

I value our bond more than my ego or any fleeting disagreement. I promise to listen closer, care deeper, and cherish us every single day.`,
  closing: "Forever Yours,\nDaniel ♡",

  // 4. 3D 翻转相片 (最多 8 张，正面图片 + 背面留言)
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80",
      caption: "Every fracture can be healed with time, patience and golden love ♡"
    }
  ],

  // 5. 音频设置 (支持外部链接或上传到仓库的 audio.mp3)
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  // 6. 刮刮乐设置
  enableScratch: true,
  scratchHint: "✦ PEEL OFF THE BANDAGE TO HEAL ✦",
  scratchSecret: "WILL YOU FORGIVE ME? DINNER TONIGHT! ♡",

  // 7. 逃跑互动按钮设置
  enableRunaway: true,
  runawayQuestion: "Do you forgive me?",
  runawaySuccessMessage: "Yay! I promise to make it up to you with unlimited hugs! ♡"
};
