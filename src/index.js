import App from "./App.svelte";

var app = new App({
  target: document.body,
});


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
console.log(import.meta.hot)
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
	app.$destroy();
  });
}

export default app;
