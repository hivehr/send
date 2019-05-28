const html = require('choo/html');
const Promo = require('./promo');
const Header = require('./header');
const Footer = require('./footer');

function banner(state) {
  return null;

  if (state.layout) {
    return; // server side
  }
  const show =
    !state.capabilities.standalone &&
    !/firefox/i.test(navigator.userAgent) &&
    !state.route.startsWith('/unsupported/');
  if (show) {
    return state.cache(Promo, 'promo').render();
  }
}

module.exports = function body(main) {
  return function(state, emit) {
    const b = html`
      <body
        class="flex flex-col items-center font-sans md:h-screen md:bg-grey-lightest"
      >
        ${banner(state, emit)} ${state.cache(Header, 'header').render()}
        ${main(state, emit)} ${state.cache(Footer, 'footer').render()}
      </body>
    `;
    if (state.layout) {
      // server side only
      return state.layout(state, b);
    }
    return b;
  };
};
