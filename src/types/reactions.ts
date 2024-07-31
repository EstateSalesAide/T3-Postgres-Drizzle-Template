export type Reaction = {
  emoji: string;
  alt_text: string;
};

// Define a single source of truth for reaction types and values
export const reactions = {
  LIKE: { emoji: "👍", alt_text: "like" },
  DISLIKE: { emoji: "👎", alt_text: "dislike" },
  LOVE: { emoji: "❤️", alt_text: "love" },
  HAHA: { emoji: "🤣", alt_text: "haha" },
  WOW: { emoji: "😮", alt_text: "wow" },
  HAPPY: { emoji: "😊", alt_text: "happy" },
  SAD: { emoji: "😔", alt_text: "sad" },
  ANGRY: { emoji: "😡", alt_text: "angry" },
} as const;

// Derive types from the reactions object
export type AnyReaction = (typeof reactions)[keyof typeof reactions];

// Export constants directly from the reactions object
export const REACTION_LIKE = reactions.LIKE;
export const REACTION_DISLIKE = reactions.DISLIKE;
export const REACTION_LOVE = reactions.LOVE;
export const REACTION_HAHA = reactions.HAHA;
export const REACTION_WOW = reactions.WOW;
export const REACTION_HAPPY = reactions.HAPPY;
export const REACTION_SAD = reactions.SAD;
export const REACTION_ANGRY = reactions.ANGRY;
