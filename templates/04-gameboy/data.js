/* ==========================================================================
   THEME 04: 复古像素掌机款 - 专属演示数据
   独立数据文件 - 仅供 templates/04-gameboy/ 使用
   ========================================================================== */
const LETTER_DATA = {
  passcode: "1989", // 初代 GameBoy 发行年份密码
  fontType: "Montserrat",

  envelopeNote: "✦ CARTRIDGE BOX: LOVE QUEST #04 ✦",
  waxSealMonogram: "👾",

  dateText: "WORLD 1-1 // 2026.09.21",
  headline: "INSERT COIN TO CONTINUE",
  salutation: "PLAYER 2,",
  body: `Sometimes in our co-op game, we get hit by silly misunderstandings and our health bars drop to danger levels.

Looking back on our disagreement, I realize how foolish it was to let temporary frustration disrupt our team. You are my permanent Player 2, and no boss fight or game glitch can ever change how much I love playing this life with you.

There is never a "Game Over" for us. I'm inserting our gold coin to hit Continue, restore our hearts to 100%, and jump right back in side by side. I'm so sorry, and I choose you on every level.`,
  closing: "PLAYER 1 ♡\n(Ready for Co-op)",

  // 演示通关记忆存档照片（全画幅 3D 翻转 + 幻灯片）
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
      caption: "SAVE SLOT 1: The day we beat the hardest boss together ♡"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80",
      caption: "SAVE SLOT 2: Our sweetest pixel memories on repeat 🎮"
    }
  ],

  // 经典钢琴浪漫背景曲
  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  // 专属金手指刮刮乐
  enableScratch: true,
  scratchHint: "✦ SCRATCH GOLD FINGER FOR SECRET CHEAT CODE ✦",
  scratchSecret: "CHEAT CODE: Unlimited Hugs & Ice Cream Raid on Me! ♡",

  // 8-Bit 像素逃跑问答
  enableRunaway: true,
  runawayQuestion: "CONTINUE OUR CO-OP ADVENTURE FOREVER?",
  runawaySuccessMessage: "✦ LEVEL COMPLETED! CO-OP SAVED FOREVER! ♡ ✦"
};
