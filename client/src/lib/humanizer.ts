/**
 * Typos_Inc Humanization Algorithm
 * 
 * Strategies:
 * 1. QWERTY Adjacency Swaps: Simulate fat-finger errors based on keyboard layout.
 * 2. Casing Laziness: Lowercase 'i', missed sentence capitalization.
 * 3. Punctuation Laziness: Missing apostrophes, missing Oxford commas, loose sentence endings.
 * 4. Common Misspellings: Dictionary of common errors (teh, dont, etc.).
 */

const KEYBOARD_ADJACENCY: Record<string, string[]> = {
  'q': ['w', 'a'], 'w': ['q', 'e', 's'], 'e': ['w', 'r', 'd'], 'r': ['e', 't', 'f'], 't': ['r', 'y', 'g'], 'y': ['t', 'u', 'h'], 'u': ['y', 'i', 'j'], 'i': ['u', 'o', 'k'], 'o': ['i', 'p', 'l'], 'p': ['o', 'l'],
  'a': ['q', 's', 'z'], 's': ['w', 'a', 'd', 'x', 'z'], 'd': ['e', 's', 'f', 'c', 'x'], 'f': ['r', 'd', 'g', 'v', 'c'], 'g': ['t', 'f', 'h', 'b', 'v'], 'h': ['y', 'g', 'j', 'n', 'b'], 'j': ['u', 'h', 'k', 'm', 'n'], 'k': ['i', 'j', 'l', 'm'], 'l': ['o', 'k', 'p'],
  'z': ['a', 's', 'x'], 'x': ['z', 's', 'd', 'c'], 'c': ['x', 'd', 'f', 'v'], 'v': ['c', 'f', 'g', 'b'], 'b': ['v', 'g', 'h', 'n'], 'n': ['b', 'h', 'j', 'm'], 'm': ['n', 'j', 'k']
};

const COMMON_MISSPELLINGS: Record<string, string> = {
  'the': 'teh',
  'and': 'adn',
  'that': 'taht',
  'have': 'haz',
  'really': 'rly',
  'what': 'wat',
  'because': 'cuz',
  'ok': 'k',
  'okay': 'k',
  'are': 'r',
  'you': 'u',
  'your': 'ur',
  'you\'re': 'ur',
  'to': '2',
  'too': '2',
  'for': '4',
  'be': 'b',
  'see': 'c',
  'why': 'y',
  'please': 'plz',
  'people': 'ppl',
  'through': 'thru',
  'though': 'tho',
  'before': 'b4',
  'great': 'gr8',
  'mate': 'm8',
  'later': 'l8r',
  'wait': 'w8',
  'oh': 'o',
  'my': 'mah',
  'god': 'gawd',
  'good': 'gud',
  'love': 'luv',
  'thanks': 'thx',
  'thank': 'thx',
  'yes': 'yea',
  'no': 'nah',
  'going': 'gonna',
  'want': 'wanna',
  'cannot': 'cant',
  'don\'t': 'dont',
  'won\'t': 'wont',
  'it\'s': 'its',
  'i\'m': 'im',
  'i\'ll': 'ill',
  'i\'ve': 'ive',
  'we\'re': 'were',
  'they\'re': 'there', // Intentional grammar error
  'their': 'there', // Intentional grammar error
  'there': 'their', // Intentional grammar error
  'lose': 'loose', // Intentional grammar error
  'loose': 'lose', // Intentional grammar error
  'effect': 'affect', // Intentional grammar error
  'affect': 'effect', // Intentional grammar error
  'definitely': 'defiantly', // Classic auto-correct fail
  'separate': 'seperate',
  'a lot': 'alot',
};

interface HumanizerOptions {
  intensity: number; // 0.0 to 1.0
}

export function humanizeText(text: string, options: HumanizerOptions = { intensity: 0.5 }): string {
  const { intensity } = options;
  let chars = text.split('');
  
  // 1. Global Replacements (Words)
  // We split by word boundaries to handle whole-word replacements
  let words = text.split(/(\s+)/); // Split but keep delimiters
  
  words = words.map(word => {
    const lowerWord = word.toLowerCase().replace(/[^\w\s]/g, ''); // strip punctuation for lookup
    
    // Chance to swap with a common misspelling/slang
    if (COMMON_MISSPELLINGS[lowerWord] && Math.random() < (0.3 * intensity)) {
      return COMMON_MISSPELLINGS[lowerWord];
    }
    
    // Chance to remove apostrophes
    if (word.includes("'") && Math.random() < (0.4 * intensity)) {
      return word.replace("'", "");
    }

    return word;
  });
  
  let processedText = words.join('');
  chars = processedText.split('');

  // 2. Character-level mutations
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    const lowerChar = char.toLowerCase();
    
    // Skip if not a letter
    if (!/[a-z]/.test(lowerChar)) continue;

    const rand = Math.random();

    // Strategy: Lowercase 'i'
    if (char === 'I' && (chars[i-1] === ' ' || i === 0) && (chars[i+1] === ' ' || chars[i+1] === "'") && rand < (0.6 * intensity)) {
      chars[i] = 'i';
      continue;
    }

    // Strategy: Missed Shift Key (Sentence start)
    if (i === 0 || (i > 1 && chars[i-2] === '.')) {
      if (rand < (0.5 * intensity)) {
        chars[i] = lowerChar;
        continue;
      }
    }

    // Strategy: Fat Finger (Adjacency Swap)
    if (KEYBOARD_ADJACENCY[lowerChar] && rand < (0.05 * intensity)) {
      const neighbors = KEYBOARD_ADJACENCY[lowerChar];
      const replacement = neighbors[Math.floor(Math.random() * neighbors.length)];
      // Maintain case? Maybe not, typos are often messy.
      chars[i] = replacement;
      continue;
    }

    // Strategy: Double Letter (Stutter)
    if (rand < (0.02 * intensity)) {
      chars.splice(i, 0, char);
      i++; // Skip the inserted char
      continue;
    }

    // Strategy: Missed Letter
    if (rand < (0.01 * intensity)) {
      chars.splice(i, 1);
      i--; // Adjust index
      continue;
    }
    
    // Strategy: Swap Adjacent Chars (Transposition)
    if (i < chars.length - 1 && rand < (0.03 * intensity)) {
      const nextChar = chars[i+1];
      chars[i+1] = char;
      chars[i] = nextChar;
      i++; // Skip next
      continue;
    }
  }

  // 3. Punctuation Laziness
  let result = chars.join('');
  
  // Remove Oxford Comma: ", and" -> " and"
  if (Math.random() < (0.8 * intensity)) {
    result = result.replace(/, and/g, " and");
  }

  // Remove periods at end of paragraphs/sentences
  if (Math.random() < (0.4 * intensity)) {
    result = result.replace(/\.$/, "");
  }

  // Convert "..." to ".." or "...."
  if (result.includes("...")) {
     if (Math.random() < 0.5) result = result.replace(/\.\.\./g, "..");
     else if (Math.random() < 0.5) result = result.replace(/\.\.\./g, "....");
  }

  return result;
}
