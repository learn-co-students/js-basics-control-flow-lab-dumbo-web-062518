function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(somePlace) {
  return `${somePlace === "NYC" ? 'Ok, sounds good.' : 'No go.'}`;
}

function switchOnCharmFromTip(someTip) {
  switch (someTip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
