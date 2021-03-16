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
    hmr: true,
    hmrDelay: 1000
  },
  buildOptions: {
    watch: true
  },
  packageOptions: {
    env: {
      ENV_NAME: 'dev'
    }
  }
};
