// ==UserScript==
// @name         JovannyR
// @namespace    https://JovannyR.com/blocker.html
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://*.4chan.org/*
// @match        http*://*.4channel.org/*
// @match        http*://*.reddit.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
let str = document.documentElement.innerHTML;
let res = str.replace(/Kike/g, "Jew").replace(/KIKE/g, "JEW").replace(/kike/gi, "jew").replace(/Glow\s*(N|n)igger/g, "Undercover Fed").replace(/GLOW\s*NIGGER/g, "UNDERCOVER FED").replace(/glow\s*nigger/gi, "Undercover Fed").replace(/N+i+g+e+r+/g, "Black").replace(/N+I+G+E+R+/g, "BLACK").replace(/n+i+g+e+r+/gi, "black").replace(/N+I+G+A+H+/g, "Black").replace(/N+I+G+A+H+/g, "BLACK").replace(/n+i+g+a+h+/gi, "black").replace(/N+i+g+a+h*/g, "Black").replace(/N+I+G+A+H*/g, "BLACK").replace(/n+i+g+a+h*/gi, "black").replace(/N+i+g+/g, "Black").replace(/N+O+G+( |.|,)/g, "BLACK").replace(/n+o+g+( |.|,)/gi, "black").replace(/N+I+G+( |.|,)/g, "BLACK").replace(/n+i+g+( |.|,)/gi, "black").replace(/Spic/g, "Latino").replace(/SPIC/g, "LATINO").replace(/spic/gi, "latino").replace(/Beaner/g, "latino").replace(/BEANER/g, "latino").replace(/beaner/gi, "latino").replace(/Gook/g, "Asian").replace(/GOOK/g, "ASIAN").replace(/gook/gi, "asian").replace(/Chink/g, "Asian").replace(/CHINK/g, "ASIAN").replace(/chink/gi, "asian").replace(/Pajeet/g, "Indian").replace(/PAJEET/g, "INDIAN").replace(/pajeet/gi, "indian").replace(/Sand\s*Nigger/g, "Muslim").replace(/SAND\s*NIGGER/g, "MUSLIM").replace(/sand\s*nigger/gi, "muslim").replace(/White( |.|,) /g, "Lizard").replace(/WHITE( |.|,)/g, "LIZARD").replace(/white( |.|,)/gi, "lizard").replace(/God/gi, "Sky Daddy").replace(/God/gi, "Sky Daddy").replace(/Donald\s*Trump/gi, "Orange Cheeto Man").replace(/Trump/gi, "Orange Cheeto Man")
document.documentElement.innerHTML = res;
})();