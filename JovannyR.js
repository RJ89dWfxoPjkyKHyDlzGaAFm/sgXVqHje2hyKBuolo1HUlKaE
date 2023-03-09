// ==UserScript==
// @name         JovannyR
// @namespace    https://JovannyR.com/blocker.html
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-body
// @noframes
// ==/UserScript==

(function() {
    'use strict';

let str = document.body.innerHTML;
let res = str.replace(/Kike/g, "Jew").replace(/KIKE/g, "JEW").replace(/kike/gi, "jew").replace(/Glow *(N|n)igger/g, "Undercover Fed").replace(/GLOW *NIGGER/g, "UNDERCOVER FED").replace(/glow\s*nigger/gi, "Undercover Fed").replace(/N+i+g+e+r+/g, "Black").replace(/N+I+G+E+R+/g, "BLACK").replace(/n+i+g+e+r+/gi, "black").replace(/N+I+G+A+H+/g, "Black").replace(/N+I+G+A+H+/g, "BLACK").replace(/n+i+g+a+h+/gi, "black").replace(/N+i+g+a+h*/g, "Black").replace(/N+I+G+A+H*/g, "BLACK").replace(/n+i+g+a+h*/gi, "black").replace(/N+i+g+/g, "Black").replace(/N+I+G+/g, "BLACK").replace(/n+i+g+/gi, "black").replace(/Spic/g, "Latino").replace(/SPIC/g, "LATINO").replace(/spic/gi, "latino").replace(/Beaner/g, "latino").replace(/BEANER/g, "latino").replace(/beaner/gi, "latino").replace(/Gook/g, "Asian").replace(/GOOK/g, "ASIAN").replace(/gook/gi, "asian").replace(/Chink/g, "Asian").replace(/CHINK/g, "ASIAN").replace(/chink/gi, "asian").replace(/Pajeet/g, "Indian").replace(/PAJEET/g, "INDIAN").replace(/pajeet/gi, "indian").replace(/Sand\s*Nigger/g, "Muslim").replace(/SAND\s*NIGGER/g, "MUSLIM").replace(/sand\s*nigger/gi, "muslim").replace(/White/g, "Lizard").replace(/WHITE/g, "LIZARD").replace(/white/gi, "lizard").replace(/God/gi, "Sky Daddy").replace(/God/gi, "Sky Daddy").replace(/Donald\s*Trump/gi, "Orange Cheeto Man").replace(/Trump/gi, "Orange Cheeto Man").replace(/Will *Smith/gi, "Cuckzilla").replace(/Kanye/gi, "Blackzilla").replace(/Kanye *West/gi, "Blackzilla").replace(/Ye\s/g, "Blackzilla ").replace(/\sYe\s/gi, " Blackzilla ").replace(/Joe\s*Biden/gi, "Mein Führer").replace(/All\sLives\sMatter/gi, "I am a nazi").replace(/AllLivesMatter/gi, "iamanazi").replace(/(kill|neck|hang)\s*yourself/gi, "I love you").replace(/KYS/g, "I LOVE YOU").replace(/kys/gi, "I love you");
document.body.innerHTML = res;
})();