function e(e){return e.replace(e[0],e[0].toUpperCase())}function o(o){return o.split(" ").map(o=>e(o)).join(" ")}function t(e){return e.split(" ").filter(e=>""!==e).join(" ")}module.exports.capitalize=e,module.exports.allCaps=function(e){return e.toUpperCase()},module.exports.capitalizeWords=o,module.exports.removeExtraSpaces=t,module.exports.kabobCase=function(e){return e.toLowerCase().replace(/\s/g,"-")},module.exports.snakeCase=function(e){return e.toLowerCase().split().map(e=>t(e)).join().replace(/\s/g,"_")},module.exports.camelCase=function(e){const t=o(e);return t[0].toLowerCase()+t.slice(1,t.length).replace(/\s/g,"")};