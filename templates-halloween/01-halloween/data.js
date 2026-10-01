/* ==========================================================================
   HALLOWEEN THEME 01: TILL DEATH (VICTORIAN GOTHIC ROMANCE)
   Independent Configuration File (templates-halloween/01-halloween/)
   ========================================================================== */

const LETTER_DATA = {
  // 1. Passcode Configuration (4 digits, leave empty "" to disable)
  passcode: "1031",

  // 2. Letter Header & Typography
  dateText: "ALL HALLOWS' EVE, 2026",
  headline: "TILL DEATH DO US PART",
  salutation: "My Eternal Soulmate,",

  // 3. Typographic Engine (Choose from standard 9 fonts:
  // "Playfair Display", "Cormorant Garamond", "EB Garamond", "Lora",
  // "Alegreya", "Cinzel", "Caveat", "Montserrat", "MedievalSharp")
  fontType: "Cormorant Garamond",

  // 4. Letter Body Content (Typewriter effect automatically adapts)
  body: "In this life and whatever realm awaits beyond, my devotion to you remains unyielding. Like ancient roots entwined beneath the fallen leaves, our souls were bound long before time itself began. Let the shadows lengthen and the cold winds whisper through the hollow night—for in the warmth of your embrace, even eternity seems too short. To the bone, to the heart, forever yours.",

  // 5. Letter Closing
  closing: "Eternally & faithfully yours,\nAlways by your side",

  // 6. Audio Engine (Catbox link or audio stream)
  audioUrl: "https://files.catbox.moe/k3b4t0.mp3",

  // 7. Large-format Photo Gallery (Supports 9:16 mobile portraits)
  photos: [
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      caption: "Our shadows walk side by side through the autumn chill."
    },
    {
      url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop",
      caption: "A bond forged in mystery, carved into timeless memory."
    }
  ],

  // 8. Gothic Silver Scratch-off Card
  enableScratch: true,
  scratchSecret: "✦ YOU ARE MY ONCE-IN-A-LIFETIME HAUNTING LOVE ✦",

  // 9. Runaway Decision Interaction
  enableRunaway: true,
  runawayQuestion: "WILL YOU WALK WITH ME INTO THE SWEET DARKNESS?",
  runawaySuccessMessage: "✦ Our pact is sealed. Eternity belongs to us ♡ ✦"
};
