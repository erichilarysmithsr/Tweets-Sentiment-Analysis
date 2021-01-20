"use strict";
let datafire = require('datafire');

let microsoft_cognitiveservices_newssearch = require('@datafire/microsoft_cognitiveservices_newssearch').actions;
module.exports = new datafire.Action({
  id: "action",
  handler: async (input, context) => {
    let news = await Promise.all([].map(item => microsoft_cognitiveservices_newssearch.News_Search({
      'X-BingApis-SDK': "true",
      q: "",
    }, context)));
    return news;
  },
});
