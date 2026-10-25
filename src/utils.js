// utils.js – General helper utilities used across the validator
/**
 * Checks whether a given font object or style indicates an italic font.
 * @param {Object} fontObj - Font object from PDF.js (may contain .name)
 * @param {Object} style - Style object from PDF.js textContent.styles
 * @returns {boolean} true if the font is italic/oblique/kursiv
 */
export function isItalicFont(fontObj, style) {
  if (fontObj && fontObj.name) {
    return /italic|oblique|kursiv/i.test(fontObj.name);
  }
  if (style && style.fontFamily) {
    return /italic|oblique|kursiv/i.test(style.fontFamily);
  }
  return false;
}

/**
 * Returns the letter grade based on numeric score.
 * @param {number} score - Numeric score (0‑100)
 * @returns {string} Grade (A‑D)
 */
export function getLetter(score) {
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 56) return "C";
  return "D";
}
