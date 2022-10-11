class Card {
    constructor(number, symbol, src) {
      this.number = number;
      this.symbol = symbol;
      this.src = src;
    }    
  }

  class CardDeck {
    constructor(cards = []) {
      this.cards = cards;
      this.symbols = ["♦", "♣", "♥", "♠"];
      this.numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
      if (this.cards.length === 0) {
        for (let i = 0; i < this.symbols.length; i++) {
          for (let y = 0; y < this.numbers.length; y++) {
            let src = '_of_'
            if (this.symbols[i] === '♦'){
              src += 'diamonds.png'
            } else if (this.symbols[i] === '♣'){
              src += 'clubs.png'
            } else if (this.symbols[i] === '♥'){
              src += 'hearts.png'
            } else if (this.symbols[i] === '♠'){
              src += 'spades.png'
            }


            if (this.numbers[y] === 'A'){
              src = 'ace' + src
            } else if (this.numbers[y] === 'J'){
              src = 'jack' + src
            } else if (this.numbers[y] === 'Q'){
              src = 'queen' + src
            } else if (this.numbers[y] === 'K'){
              src = 'king' + src
            } else {
              src = this.numbers[y] + src
            }
            src = '../images/lab2_images/' + src
            this.cards.push(new Card(this.numbers[y], this.symbols[i], src));
          }
        }
      }
    }

    brassage() {
      const moitie_deck = this.cards.length / 2;
      const temp_deck1 = new CardDeck(this.cards.slice(0, 26));
      const temp_deck2 = new CardDeck(this.cards.slice(26));
      this.cards = []
      for (let i = 0; i < moitie_deck; i++){
        this.cards.push(temp_deck1.cards[i]);
        this.cards.push(temp_deck2.cards[i]);
      }
    }
  }

  function show_deck(deck) {
    /*
    Source: https://flexiple.com/javascript/javascript-appendchild/
    User: Varun Omprakash
    Utilisation: afficher les cartes en creant des img
    */
    let corps = document.querySelector('#card-display')
    for (let i = 0; i < deck.cards.length; i++){
      if (i % deck.numbers.length === (deck.numbers.length - 1)){
        const new_img = document.createElement("img")
        const new_br = document.createElement("br")
        new_img.src = deck.cards[i].src
        new_img.id = "playing-cards"
        corps.append(new_img)
        corps.append(new_br)
      } else {
        const new_img = document.createElement("img")
        new_img.src = deck.cards[i].src
        new_img.id = "playing-cards"
        corps.append(new_img)
      }
    }
  }
  
  const deck = new CardDeck();
  show_deck(deck)

  const btn_brassage = document.querySelector('#deck-brassage');
  btn_brassage.addEventListener('click', () => {
    /*
    Source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    User: Gabriel McAdams
    Utilisation: Vider le corps pour reafficher le deck
    */
    const corps = document.querySelector('#card-display')
    deck.brassage()
    corps.innerHTML = ''
    show_deck(deck)
  });