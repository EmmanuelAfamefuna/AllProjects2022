/* Odd even algo to deal cards */
const dealCards = (cardsArr) => {
    let player = []
    let computer = []
  
    /* Loop through our data array, check the index odd/even and push to our player/computer hands */
    cardsArr.forEach((card, index) => {
  
       if(index % 2 == 0){ // check the index is a multiple of 2 - EVEN
         computer.push(card)
       } else {
         /* Take the odd index and push to the player hand - player always gets first card */
         player.push(card)
       }
    }) // end forEach
  
    return { player, computer}
  }
  
  
  /* Sorting Object By property value  Value */
  const sortHand = (a, b) => {
    return a.value - b.value
  } 
  
  /* Update Card Value for Jack, Queen, King, Ace to be able to sort and check hands */
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
          card.value = Number(card.value);
      }
      return card
    })
    return updateCards
    }
  
  
  // Pack them into an box aka object
  module.exports = {
      dealCards: dealCards,
      sortHand: sortHand,
      updateValue: updateValue
    }