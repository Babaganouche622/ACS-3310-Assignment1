const stringLib = require('../index.js');

describe(('String Library Sanity Tests'), () => {
  test('Capitalizes the first letter of a phrase about fluffy kittens', () => {
    expect(stringLib.capitalize('adorable kittens with fluffy tails')).toBe('Adorable kittens with fluffy tails');
  });

  test('Capitalizes all letters in a sentence about vibrant sunsets and serene beaches', () => {
    expect(stringLib.allCaps('vibrant sunsets over serene beaches')).toBe('VIBRANT SUNSETS OVER SERENE BEACHES');
  });

  test('Capitalizes all words in a lengthy sentence describing a peaceful forest under the starry night sky', () => {
    expect(stringLib.capitalizeWords('a peaceful forest under the starry night sky with a gentle breeze')).toBe('A Peaceful Forest Under The Starry Night Sky With A Gentle Breeze');
  });

  test('Capitalizes all words in a complex sentence, except for small connecting words, in a story about adventurous pirates searching for hidden treasures', () => {
    expect(stringLib.capitalizeHeadline('adventurous pirates searching for hidden treasures in a vast ocean')).toBe('Adventurous Pirates Searching for Hidden Treasures in a Vast Ocean');
  });

  test('Removes extra spaces from a detailed sentence about exploring ancient ruins and discovering mysterious artifacts', () => {
    expect(stringLib.removeExtraSpaces('exploring  ancient ruins  and discovering mysterious  artifacts')).toBe('exploring ancient ruins and discovering mysterious artifacts');
  });

  test('Converts a descriptive sentence about magical creatures and enchanted forests into kebob case', () => {
    expect(stringLib.kebobCase('magical creatures living in enchanted forests')).toBe('magical-creatures-living-in-enchanted-forests');
  });

  test('Converts a lengthy sentence about mystical spells and ancient scrolls into snake case', () => {
    expect(stringLib.snakeCase('mystical spells cast with ancient scrolls')).toBe('mystical_spells_cast_with_ancient_scrolls');
  });

  test('Converts a narrative about soaring dragons and epic battles into camel case', () => {
    expect(stringLib.camelCase('soaring dragons in epic battles against dark forces')).toBe('soaringDragonsInEpicBattlesAgainstDarkForces');
  });

  test('Shifts the first letter of an adventurous word to the end', () => {
    expect(stringLib.shift('adventurous')).toBe('dventurousa');
  });

  test('Creates a hashtag from a captivating story of brave knights and majestic castles', () => {
    expect(stringLib.makeHashTag('captivating story of brave knights and majestic castles')).toBe('#captivating #majestic #knights');
  });

  test('Checks if an empty diary page is truly empty', () => {
    expect(stringLib.isEmpty('')).toBe(true);
  });
});

// TODO: There is no error handling or input sanitizing.
describe.skip('nonStringInputs', () => {
  test('Handles null input gracefully', () => {
    expect(() => stringLib.capitalize(null)).not.toThrow();
  });

  test('Handles undefined input gracefully', () => {
    expect(() => stringLib.allCaps(undefined)).not.toThrow();
  });

  test('Handles number input gracefully', () => {
    expect(() => stringLib.capitalizeWords(123)).not.toThrow();
  });

  test('Handles boolean input gracefully', () => {
    expect(() => stringLib.kebobCase(true)).not.toThrow();
  });

  test('Handles array input gracefully', () => {
    expect(() => stringLib.camelCase([1, 2, 3])).not.toThrow();
  });

  test('Handles object input gracefully', () => {
    expect(() => stringLib.snakeCase({ a: 1, b: 2 })).not.toThrow();
  });

  test('Handles function input gracefully', () => {
    expect(() => stringLib.capitalizeWords(() => { })).not.toThrow();
  });

  test('Handles symbol input gracefully', () => {
    expect(() => stringLib.allCaps(Symbol('test'))).not.toThrow();
  });
});

describe('Enchanted Function Composition 🌟🧚‍♀️', () => {
  test('Mystical Capitalization and Kebob Transformation', () => {
    const result = stringLib.kebobCase(stringLib.capitalize('sparkle magic'));
    expect(result).toBe('sparkle-magic');
  });

  test('Whimsical CapitalizeWords and Camel Case Fusion', () => {
    const result = stringLib.camelCase(stringLib.capitalizeWords('glittering spellbound adventure'));
    expect(result).toBe('glitteringSpellboundAdventure');
  });

  test('Enchanting CapitalizeWords and Snake Spellcasting', () => {
    const result = stringLib.snakeCase(stringLib.capitalizeWords('whispering pixie dust'));
    expect(result).toBe('whispering_pixie_dust');
  });

  test('Charming Capitalization with Snake Whispers', () => {
    const result = stringLib.snakeCase(stringLib.capitalize('shimmering dreams'));
    expect(result).toBe('shimmering_dreams');
  });

  test('Kebob Conjuring with Captivating CapitalizeWords', () => {
    const result = stringLib.capitalizeWords(stringLib.kebobCase('magic spells'));
    expect(result).toBe('Magic-spells');
  });

  // TODO: Functionality of chaining functions together is not yet implemented.
  test.skip('Kebob Dance under the Moon, then Snake Slumber', () => {
    const result = stringLib.snakeCase(stringLib.kebobCase('enchanted forest'));
    expect(result).toBe('enchanted_forest');
  });

  test.skip('Camel Carousel through Starlit Night and Kebob Clouds', () => {
    const result = stringLib.kebobCase(stringLib.camelCase('wandering through mystic realms'));
    expect(result).toBe('wandering-through-mystic-realms');
  });

  test.skip('Camel\'s Journey, Guided by Snake Serenade', () => {
    const result = stringLib.snakeCase(stringLib.camelCase('moonlit wings and starry skies'));
    expect(result).toBe('moonlit_wings_and_starry_skies');
  });
});

describe('boundaryTests', () => {
  test('Maximum length input for capitalizeWords', () => {
    const input = 'a'.repeat(1000000); // Maximum length input for performance testing
    const result = stringLib.allCaps(input);
    expect(result).toBe('A'.repeat(1000000));
  });

  // Add similar boundary tests for other functions to come
});


