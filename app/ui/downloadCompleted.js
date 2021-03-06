const html = require('choo/html');
const assets = require('../../common/assets');

module.exports = function(state) {
  return html`
    <div
      id="download-complete"
      class="flex flex-col items-center justify-center h-full w-full bg-white p-2"
    >
      <h1 class="text-center font-bold my-2">
        ${state.translate('downloadFinish')}
      </h1>
      <img src="${assets.get('completed.svg')}" class="my-12 h-48" />
    </div>
  `;
};
