// Write your code in this file!
const scuberGreetingForFeet = (ride) => {
  if (parseInt(ride,10) < 400) {
    return 'This one is on me!'
  } else if (parseInt(ride, 10) > 2000 && parseInt(ride, 10) < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

const ternaryCheckCity = (city) => {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

const switchOnCharmFromTip = (tip) => {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}
