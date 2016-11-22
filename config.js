'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAADB4T5s35EBAO9YZCbAuD5MDeunZCC1x56Cbx54LtylZAP44BSaO7ZBfsB7a1FLGXZAuAdYhNr2KSh1kkxmxhj6OS0MDqyapkNf3Cy9bXciWHZCmt05ZC5IQLrl7k7lQUoOzDZAwZASig1PSQRaBiXHH6PaTtwejneZCtfdtRwZCUKigZDZD';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'my_voice_is_my_password_verify_me'

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}
