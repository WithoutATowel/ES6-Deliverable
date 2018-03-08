// Rewrite these two object types to use the class keyword, instead of direct 
// prototype manipulation. Speaker is a simple type that exposes a speak method 
// which, when called, logs the given text along with the speaker's name. 
// Shouter is a subtype of Speaker which shouts its text and makes it uppercase.


class Speaker {
  constructor(name, verb) {
    this.name = name;
    this.verb = verb || "says";
  }
  
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
}
    

class Shouter {
  constructor(name) {
    this.name = name;
    this.verb = 'shouts';
  }

  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text.toUpperCase() + "'");
  }
}

new Shouter("Dr. Loudmouth").speak("hello there")


// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Speaker_upgrade