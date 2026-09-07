/* ==========================================================================
   THEME 02: 白旗停战条约款 - 演示数据
   独立数据文件 - 仅供 templates/02-white-flag/ 使用
   ========================================================================== */
const LETTER_DATA = {
  passcode: "2026",
  fontType: "Lora",

  envelopeNote: "✦ DIPLOMATIC POUCH: PEACE PROTOCOL ✦",
  waxSealMonogram: "🕊️",

  dateText: "September 7, 2026",
  headline: "OFFICIAL PEACE ACCORD",
  salutation: "To My Dearest Commander,",
  body: `I hereby raise the white flag and declare an immediate, unconditional cessation of all stubbornness and pride.

Looking back on our disagreement, I realize how foolish it was to let a brief moment of frustration overshadow how deeply I care about you. No argument in this world is worth creating distance between us.

This treaty represents my sincere pledge to listen with greater empathy, speak with gentler patience, and cherish our bond above all else. I offer you my full heart and request a return to peace.`,
  closing: "Respectfully Submitted,\nYour Loyal Partner ♡",

  // 演示照片（自动全画幅适配与翻页）
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
      caption: "Protocol Article I: The day peace felt easiest ♡"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80",
      caption: "Protocol Article II: Even in silly times, I choose you ♡"
    }
  ],

  audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-9835.mp3",

  enableScratch: true,
  scratchHint: "✦ UNSEAL CLASSIFIED PEACE CLAUSE ✦",
  scratchSecret: "Treaty Reparation: Dinner at your favorite place, fully paid! ♡",

  enableRunaway: true,
  runawayQuestion: "Do you formally ratify this peace treaty?",
  runawaySuccessMessage: "✦ PEACE ACCORD RATIFIED! CEASEFIRE COMMENCED! ♡ ✦"
};
