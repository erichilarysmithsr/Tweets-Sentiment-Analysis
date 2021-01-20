"use strict";
let datafire = require('datafire');

let facebook = require('@datafire/facebook').actions;
module.exports = new datafire.Action({
  id: "action2",
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => facebook.post.get({
      post: "",
    }, context)));
    return result;
  },
});
