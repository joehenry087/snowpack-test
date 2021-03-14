module.exports = {
  mount: {
    public: '/',
    src: '/src',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
  ],
  experiments: {
    // ssr: true
  },
  devOptions: {
    hmr: true
  },
  buildOptions: {
    watch: true
  }
};
