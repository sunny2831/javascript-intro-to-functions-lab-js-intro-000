function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string)
}

function logWhisper(string) {
  console.log(string)
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return ("I can't hear you!")
  }
  else if (string.toUppercase() === string) {
    return ("YES INDEED!")
  }
}
