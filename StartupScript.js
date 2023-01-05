import { InteractedWithLnS, OverwriteLnSJSONFile } from './LumiaAndSolasScript.js';

function LnSInteraction(window, line) { 
  InteractedWithLnS(window, line); 
  // window.HTMLOutputElement.send("Interaction with LnS initiated!"); 
}
function ManualSaveLnSJSON() { 
  OverwriteLnSJSONFile(); 
  // window.HTMLOutputElement.send("Manually saved!"); 
}

function OpallsBeautificationTrigger(window, line) {}

LnSInteraction("undefined", {string: "<OOC> Niel greets Solas."});