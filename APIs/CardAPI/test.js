const { dealCards, sortHand } = require('./card_api/helpers/dealer')


let hand = [
	{
		code: 'JD',
		image: 'https://deckofcardsapi.com/static/img/JD.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/JD.svg',
			png: 'https://deckofcardsapi.com/static/img/JD.png'
		},
		value: 'JACK',
		suit: 'DIAMONDS'
	},
	{
		code: '5C',
		image: 'https://deckofcardsapi.com/static/img/5C.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/5C.svg',
			png: 'https://deckofcardsapi.com/static/img/5C.png'
		},
		value: '5',
		suit: 'CLUBS'
	},
	{
		code: '3C',
		image: 'https://deckofcardsapi.com/static/img/3C.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/3C.svg',
			png: 'https://deckofcardsapi.com/static/img/3C.png'
		},
		value: '3',
		suit: 'CLUBS'
	},
	{
		code: '0C',
		image: 'https://deckofcardsapi.com/static/img/0C.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/0C.svg',
			png: 'https://deckofcardsapi.com/static/img/0C.png'
		},
		value: '10',
		suit: 'CLUBS'
	},
	{
		code: '7D',
		image: 'https://deckofcardsapi.com/static/img/7D.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/7D.svg',
			png: 'https://deckofcardsapi.com/static/img/7D.png'
		},
		value: '7',
		suit: 'DIAMONDS'
	},
	{
		code: '7D',
		image: 'https://deckofcardsapi.com/static/img/7D.png',
		images: {
			svg: 'https://deckofcardsapi.com/static/img/7D.svg',
			png: 'https://deckofcardsapi.com/static/img/7D.png'
		},
		value: '7',
		suit: 'DIAMONDS'
	}
]



const updateValue = (arr) => {
let updateCards = arr.map((card) => {
	
	switch(card.value){
		case 'JACK':
			card.value = 11;
			break
		case 'QUEEN':
			card.value = 12;
			break
		case 'KING':
			card.value = 13;
			break;
		case 'ACE':
			card.value = 14;
			break;
		default:
			card.value = card.value;
	}
	return card
})

console.log("Did it work??", updateCards)

}

updateValue(hand)




let { player, computer } = dealCards(hand)
//console.log("player hand", player)
//console.log("computer hand", computer)
//console.log(hand.length)

let sortedHand = computer.sort(sortHand)

console.log("Sorted Hand...",sortedHand)