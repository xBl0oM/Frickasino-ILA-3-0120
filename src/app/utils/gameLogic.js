const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const createDeck = () => {
  let deck = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push({ rank, suit });
    }
  }
  return deck;
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const cardValue = (card) => {
  if (card.rank === 'A') return 1;
  if (['J', 'Q', 'K'].includes(card.rank)) return 0;
  return parseInt(card.rank);
};

const handValue = (hand) => {
  let total = 0;
  for (let card of hand) {
    total += cardValue(card);
  }
  return total % 10;
};

const dealInitialHands = (deck) => {
  const playerHand = [deck.pop(), deck.pop()];
  const bankerHand = [deck.pop(), deck.pop()];
  return { playerHand, bankerHand, deck };
};

const drawThirdCard = (handValue, deck) => {
  return handValue <= 5 ? deck.pop() : null;
};

const playBaccarat = () => {
  let deck = createDeck();
  deck = shuffleDeck(deck);

  let { playerHand, bankerHand, deck: newDeck } = dealInitialHands(deck);

  let playerThirdCard = null;
  let bankerThirdCard = null;

  const playerHandValue = handValue(playerHand);
  const bankerHandValue = handValue(bankerHand);

  if (playerHandValue <= 5) {
    playerThirdCard = drawThirdCard(playerHandValue, newDeck);
    if (playerThirdCard) playerHand.push(playerThirdCard);
  }

  if (bankerHandValue <= 5) {
    bankerThirdCard = drawThirdCard(bankerHandValue, newDeck);
    if (bankerThirdCard) bankerHand.push(bankerThirdCard);
  }

  const finalPlayerValue = handValue(playerHand);
  const finalBankerValue = handValue(bankerHand);

  let result = '';
  if (finalPlayerValue > finalBankerValue) {
    result = 'Player wins!';
  } else if (finalPlayerValue < finalBankerValue) {
    result = 'Banker wins!';
  } else {
    result = 'It\'s a tie!';
  }

  return {
    playerHand,
    bankerHand,
    playerHandValue: finalPlayerValue,
    bankerHandValue: finalBankerValue,
    result
  };
};

export default playBaccarat;
