const LnSPath = './Lumia_and_Solas.json';
const JSON = JSON.parse(fs.readFileSync(LnSPath));
  
export function OverwriteLnSJSONFile() {
  let dataAsString = JSON.stringify(customer, null, 2);
  fs.writeFileSync('./Lumia_and_Solas.json', dataAsString)
}

const DefaultGiverData = {
  "LumiaData": {
    "Trust": 0,
    "TimesGreeted": 0,
    "GreetCooldownTimeLeft": 0,
    "TimesPetted": 0,
    "PetCooldownTimeLeft": 0,
    "TimesHug": 0,
    "HugCooldownTimeLeft": 0,
    "RockPaperScissorScore": [0, 0]
  },
  "SolasData": {
    "Trust": 0,
    "TimesGreeted": 0,
    "GreetCooldownTimeLeft": 0,
    "TimesPetted": 0,
    "PetCooldownTimeLeft": 0,
    "TimesHug": 0,
    "HugCooldownTimeLeft": 0,
    "RockPaperScissorScore": [0, 0]
  }
}
const LumiaData = {
  Enabled: true,
  GreetTrustPrerequisites: 30,
  GreetReplyTexts: [
    [ // low level trust
      (name) => { return `smiles and nods, acknowledging ${name}'s greeting.`; },
      (name) => { return `smiles and waves back, acknowledging ${name}'s greeting.`; },
      (name) => { return `replies back, "H-Hello, ${name}."`; },
      (name) => { return `replies back, "H-Hey, ${name}."`; },
      (name) => { return `replies back, "H-Hi, ${name}."`; },
      (name) => { return `shies away from ${name}'s greeting, hiding behind Opall then shyly waving at you.`; },
      (name) => { return `shies away from ${name}'s greeting, hiding behind Solas then shyly waving at you.`; },
      (name) => { return `shies away from ${name}'s greeting, hiding behind Solas. The latter growling in protectiveness.`; },
      (name) => { return `gestures a wave to ${name}, her way of greeting back.`; },
      (name) => { return `returns ${name}'s greeting with a wave.`; },
      (name) => { return `flusters at the sudden greeting, "H-Hello, ${name}."`; },
      (name) => { return `flusters at the sudden greeting, "H-Hey, ${name}."`; },
      (name) => { return `flusters at the sudden greeting, "H-Hi, ${name}."`; }
      // (name) => { return `flusters at the sudden greeting, "Hello, ${[...name][0]}-${name}."`; },
      // (name) => { return `flusters at the sudden greeting, "Hey, ${[...name][0]}-${name}."`; },
      // (name) => { return `flusters at the sudden greeting, "Hi, ${[...name][0]}-${name}."`; },
    ], // low level trust
    [ // high level trust
      (name) => { return `blushes, then smiles and nods in reply to ${name}'s greeting.`; },
      (name) => { return `blushes, smiles and nods, acknowledging ${name}'s greeting.`; },
      (name) => { return `smiles and waves back, acknowledging ${name}'s greeting.`; },
      (name) => { return `smiles and waves back in reply to ${name}'s greeting.`; },
      (name) => { return `replies back with a tinge of red on her face, "H-Hello, ${name}!"`; },
      (name) => { return `replies back with a tinge of red on her face, "H-Hey, ${name}!"`; },
      (name) => { return `replies back with a tinge of red on her face, "H-Hi, ${name}!"`; },
      (name) => { return `greets back with a smile, "H-Hello, ${name}!"`; },
      (name) => { return `greets back with a smile, "H-Hey, ${name}!"`; },
      (name) => { return `greets back with a smile, "H-Hi, ${name}!"`; },
      (name) => { return `gestures a wave to ${name}, her way of greeting back.`; },
      (name) => { return `returns ${name}'s greeting with a smile and a wave.`; },
      (name) => { return `blushes at the sudden greeting, "H-Hello, ${name}!"`; },
      (name) => { return `blushes at the sudden greeting, "H-Hey, ${name}!"`; },
      (name) => { return `blushes at the sudden greeting, "H-Hi, ${name}!"`; },
    ] // high level trust
  ],
  PetTrustPrerequisites: 35,
  PetReplyTexts: [[], []],
  ScritchTrustPrerequisites: 25,
  HugTrustPrerequisites: 35,
  HugReplyTexts: [[], []],
}
const SolasData = {
  Enabled: true,
  GreetTrustPrerequisites: 35,
  GreetReplyTexts: [
    [
      (name) => { return `replies, "Nice to meet you. Can't wait to forget your name, ${name}." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Lovely meeting you. Can't wait to forget your name, ${name}." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Nice to meet you. Are we done talking, ${name}?" She says, snickering afterwards.`; },
      (name) => { return `replies, "Lovely meeting you. Are we done talking, ${name}?" She says, snickering afterwards.`; },
      (name) => { return `replies, "Nice to meet you, ${name}. Let's not do it again, yeah?" She says.`; },
      (name) => { return `replies, "Lovely meeting you, ${name}. Let's not do it again, yeah?" She says.`; },
      (name) => { return `replies, "Oh, it's ${name}. How lovely." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Oh, it's ${name}. How delightful." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Oh, it's you, ${name}. How delightful." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Oh, it's you, ${name}. How lovely." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Oh, it's ${name}. How lovely." She says, snickering afterwards.`; },
      (name) => { return `replies, "Oh, it's ${name}. How delightful." She says, snickering afterwards.`; },
      (name) => { return `replies, "Oh, it's you, ${name}. How delightful." She says, snickering afterwards.`; },
      (name) => { return `replies, "Oh, it's you, ${name}. How lovely." She says, snickering afterwards.`; },
      (name) => { return `insolently smirks before replying, "Oh. Fancy meeting *you* here, ${name}."` }
    ],
    [
      (name) => { return `replies, "Nice to meet you again, ${name}~." She says, cheekily giggling afterwards.`; },
      (name) => { return `replies, "Lovely meeting you again, ${name}~." She says, cheekily giggling afterwards.`; },
      (name) => { return `smirks, "Oh, hello there, ${name}. Had fun with your adventures?" She rhetorically asks, a subtle tinge of red on her cheeks.`; },
      (name) => { return `smirks, "Oh, hello there, ${name}. I suppose your adventure was fun?" She rhetorically asks, a subtle tinge of red on her cheeks.`; },
      (name) => { return `smirks, "Oh, hello there, ${name}. Was your adventure fun?" She rhetorically asks, a subtle tinge of red on her cheeks.`; },
      (name) => { return `says, "Oh boy, it's ${name}. Just what I needed to make my day complete." A radiating smile forming after.`; },
      (name) => { return `says, "Oh, it's ${name}. Just what I needed to make my day complete." A radiating smile forming after.`; },
      (name) => { return `remarks, "Back already, ${name}?" A giggle following before she continues, "Well, I'm not complaining.".`; },
      (name) => { return `teases, "Back already, ${name}?" A giggle following before she continues, "Well, I'm not complaining.".`; },
      (name) => { return `says, "Back already, ${name}?" A giggle following before she continues, "Well, I'm not complaining.".`; },
      (name) => { return `jabs, "Back already, ${name}?" A giggle following before she continues, "Well, I'm not complaining.".`; },
      (name) => { return `replies, "Oh, ${name}, how delightful it is that you're back." She says, a smile forming after.`; },
      (name) => { return `replies, "Oh, ${name}, how lovely is is that you're back." She says, a smile forming after.`; },
    ]
  ],
  PetTrustPrerequisites: 35,
  PetReplyTexts: [[], []],
  ScritchTrustPrerequisites: 35,
  HugTrustPrerequisites: 35,
  HugReplyTexts: [[], []]
}

function RandomFromArray(array) { return array[Math.floor(array.length * Math.random())]; }

// ^<OOC> ([a-zA-Z-']+) (greets|pets|scritches|hugs|cuddles|smothers) (Lumia|Solas)(?:\.|)$
// ^<OOC> ([a-zA-Z-']+) plays (rock-paper-scissor) with (Lumia|Solas)(?:\.|)$
export function InteractedWithLnS(window, line) {
  let filter = /^<OOC> ([a-zA-Z-']+) (greets|pets|scritches|hugs|cuddles|smothers) (Lumia|Solas)(?:\.|)$/i;
  let giver = filter[1], giverAction = filter[2], receiver = filter[3];

  if (JSON[giver] == undefined) { JSON[giver] = JSON["Default"]; } // check if giver info exists; otherwise, set info
  let giverData = JSON[giver][`${receiver}Data`]; // giver data for receiver

  // check action made
  switch (giverAction) {
    case "greets": GreetReply(window, giver, giverData, receiver); break;

    case "pets": break;
    case "scritches": break;

    case "hugs":
    case "cuddles":
    case "smothers": break;
  }
}

function GreetReply(window, giver, giverData, receiver) {
  switch (receiver) { // chack if 'receiver' is enabled
    case "Lumia": if (LumiaData.Enabled == false) { return } break;
    case "Solas": if (SolasData.Enabled == false) { return } break;
  }

  // check for cooldown then set cooldown
  if (giverData["GreetCooldownTimeLeft"] > 0) { return; }
  giverData["GreetCooldownTimeLeft"] += 60;

  let trustPrerequisiteReached, replyTextFunction;
  switch (receiver) { // check if receiver trust requisite reached, then get data depending on if trust requisite reached
    case "Lumia":
      trustPrerequisiteReached = (giverData["Trust"] >= LumiaData.GreetTrustPrerequisites ? 1 : 0);
      replyTextFunction = RandomFromArray(LumiaData.GreetReplyTexts[trustPrerequisiteReached]);
      break;
    case "Solas":
      trustPrerequisiteReached = (giverData["Trust"] >= SolasData.GreetTrustPrerequisites ? 1 : 0);
      replyTextFunction = RandomFromArray(SolasData.GreetReplyTexts[trustPrerequisiteReached]);
      break;
  }

  // window.connection.send(`whisper ${giver}=:'s companion, ${receiver}, ${replyTextFunction(giver)}`);
  console.log(`whisper ${giver}=:'s companion, ${receiver}, ${replyTextFunction(giver)}`);
}
function PetReply(window, line) { }
function HugReply(window, line) { }
function RockPaperScissors(window, line) { }