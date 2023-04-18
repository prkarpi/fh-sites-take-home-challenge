class PokerHand {
  constructor(hand) {
    this.cards = hand.split(' ');
  }

 getRank() {
  if (this.isRoyalFlush()) {
    return 'Royal Flush';
  } else if (this.isFlush()) {
    return 'Flush';
  } else if (this.isTwoPair()) {
    return 'Two Pair';
  } else if (this.isOnePair()) {
    return 'One Pair';
  } else {
    return 'High Card';
  }
}

isRoyalFlush() {
  const suits = this.cards.map(card => card[1]);
  const values = this.cards.map(card => card[0]);
  const royalValues = ['A', 'K', 'Q', 'J', '10'];
  return (
    suits.every(suit => suit === suits[0]) && // all cards have the same suit
    values.every(value => royalValues.includes(value)) // all cards have a royal value
  );
}

  

  isFlush() {
    const suits = this.cards.map(card => card[1]);
    return suits.every(suit => suit === suits[0]);
  }

  isTwoPair() {
    const values = this.cards.map(card => card[0]);
    const counts = {};
    for (let i = 0; i < values.length; i++) {
      counts[values[i]] = (counts[values[i]] || 0) + 1;
    }
    return Object.values(counts).filter(count => count === 2).length === 2;
  }

  isOnePair() {
    const values = this.cards.map(card => card[0]);
    const counts = {};
    for (let i = 0; i < values.length; i++) {
      counts[values[i]] = (counts[values[i]] || 0) + 1;
    }
    return Object.values(counts).includes(2);
  }
}

module.exports = PokerHand;
