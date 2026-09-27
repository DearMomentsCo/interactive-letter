/**
 * TILL DEATH DO US PART (01-halloween)
 * 1:1 Mapping ready for future Tally Customization Form
 * Zero hardcoded buyer data. All strings English & gothic luxury calibrated.
 */
const letterData = {
  // Passcode gate (Leave empty "" to disable)
  passcode: "1031",

  // Core Heading & Meta
  dateText: "ALL HALLOWS' EVE, 2026",
  headline: "TILL DEATH DO US PART",
  subHeadline: "AN ETERNAL PACT SEALED BEYOND THE SHADOWS",

  // Main Letter Content
  salutation: "My Eternal Beloved,",
  body: "They say nothing in this fleeting realm withstands the test of time, yet our souls remain bound by a pact that mocks eternity itself.\n\nThrough every fading breath and every cold whisper of twilight, my devotion to you stays unyielding. Neither distance nor the silence of the grave could ever part what is woven into our very marrow.\n\nTake my hand across the velvet dark, today and into the quiet forever.",
  closing: "Eternally yours to the bone,",
  signature: "Your Devoted Wraith",

  // Typography Preference ("Cinzel", "Playfair Display", "Cormorant Garamond")
  fontType: "Cinzel",

  // Background Audio direct stream (Leave empty "" for synthetic acoustic soundscapes only)
  audioUrl: "",

  // Full-bleed Victorian Dual-Sided Photo Gallery
  photos: [
    {
      url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      caption: "Under the whispering pines where we first bound our souls. ✦ 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      caption: "A midnight vow etched beneath the silver crescent moon."
    }
  ],

  // Victorian Coffin Scratch-off Layer
  enableScratch: true,
  scratchHint: "✦ SCRATCH THE ASHES TO REVEAL THE HIDDEN VOW ✦",
  scratchSecret: "✦ Even if the stars turn to ash, I would search the underworld to find you again. ✦",

  // Runaway Mechanical Vow Gate
  enableRunaway: true,
  runawayQuestion: "WILL YOU WALK INTO THE AFTERLIFE WITH ME?",
  runawaySuccessMessage: "✦ THE VOW IS SEALED. TWO SHADOWS BECOME ONE ETERNITY. ✦"
};
