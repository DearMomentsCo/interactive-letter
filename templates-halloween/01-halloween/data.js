/**
 * Till Death (01-halloween) - Configuration Data Source
 * 1:1 Mapping ready for future Tally Customization Form
 */
const letterData = {
  // Passcode gate (Leave empty "" to disable)
  passcode: "1031",

  // Core Heading & Meta
  dateText: "ALL HALLOWS' EVE, 2026",
  headline: "TILL DEATH DO US PART",
  subHeadline: "A solemn pact etched across eternity",

  // Main Letter Content
  salutation: "My Eternal Dearest,",
  body: "They say nothing in this fleeting realm lasts forever, yet here we stand—bound by a vow that mocks the passage of time itself.\n\nThrough every shadow and every flicker of twilight, my devotion remains unyielding. Not even the silence of the earth can part what has been so deeply woven into bone and breath.\n\nTake my hand, now and into the quiet forever.",
  closing: "Eternally yours to the marrow,",
  signature: "Your Devoted",

  // Typography Preference ("Playfair Display", "Cinzel", "Cormorant Garamond")
  fontType: "Cinzel",

  // Polaroid Gallery (Dual-sided cards with handwritten memories)
  photos: [
    {
      url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
      caption: "Our first twilight under the whispering pines, 2024"
    },
    {
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      caption: "A midnight vow etched beneath the autumn moon"
    }
  ],

  // Scratch-off Secret Compartment
  enableScratch: true,
  scratchTitle: "A SECRET CARVED IN SHADOW",
  scratchSecret: "✦ Even in the cold silence of the tomb, I would seek you out again. ✦",

  // Eternal Vow Interactive Prompt
  enableRunaway: true,
  runawayQuestion: "WILL YOU WALK INTO THE AFTERLIFE WITH ME?",
  runawaySuccessMessage: "✦ Eternity is sealed. Our shadows are one. ✦"
};
