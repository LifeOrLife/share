export const getEmoji = () => {
    const emojiStart = 0x1f600
	const emojiStart1 = 0x1f900
	const emojiEnd = 0x1f64f
	const emojiEnd1 = 0x1f9ff
	const random = Math.floor(Math.random() * (emojiEnd - emojiStart + 1)) + emojiStart
	const random1 = Math.floor(Math.random() * (emojiEnd1 - emojiStart1 + 1)) + emojiStart1
	const emo = Math.random() > 0.5 ? random : random1
	return String.fromCodePoint(emo)
}