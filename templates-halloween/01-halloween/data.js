/**
 * 01-HALLOWEEN: TILL DEATH DO US PART
 * Customization Configuration (Demo Data - Desensitized)
 * Strictly 1:1 mapped to future Tally Form fields.
 */
window.LETTER_DATA = {
  // 1. Passcode Lock (4 digits, empty string "" disables lock)
  passcode: "0928",

  // 2. Letter Header & Metadata
  dateText: "OCTOBER 31, 2026",
  headline: "TILL DEATH DO US PART",
  salutation: "My Beloved Dearest,",

  // 3. Body Content (Supports standard paragraph text)
  body: "In this realm and every life hereafter, my soul recognizes yours before my eyes even open. Time may wither the flesh, stars may collapse into quiet dust, but what binds us is written in bones that outlast eternity. Every heartbeat of mine was made to echo beside yours in the quiet dark.",

  // 4. Letter Closing & Signature
  closing: "Eternally entwined to the bone,",
  signature: "Your Devoted Spirit",

  // 5. Typography Choice ('Cinzel', 'Playfair Display', or 'Cormorant Garamond')
  fontType: "Cinzel",

  // 6. Background Audio Stream URL (Royalty-free romantic gothic cello demo)
  audioUrl: "https://assets.mixkit.co/music/preview/mixkit-sad-and-melancholic-cello-soundtrack-697.mp3",

  // 7. Photo Album (Demo placeholders - No buyer privacy exposed)
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      caption: "Our first autumn dance under the pale silver moon."
    },
    {
      url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      caption: "In the shadow of ancient ruins, where promise became forever."
    }
  ],

  // 8. Secret Scratch-off Layer
  enableScratch: true,
  scratchSecret: "✦ When the final bell tolls, I will find you in the dark. ✦",

  // 9. Playful Question & Answer
  enableRunaway: true,
  runawayQuestion: "WILL YOU BE MY VALENTINE IN THE AFTERLIFE?",
  runawaySuccessMessage: "✦ ETERNITY IS OURS ♡ TILL THE END OF TIME ✦"
};
