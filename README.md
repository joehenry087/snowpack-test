`npm install` of course, then:

1. Start a custom dev server that serves the 'build' directory. Snowpack will put the assets in 'public' there and also compile the `src` through Svelte to there.

```
npm start     
```

2. Then start watching the `src` for changes:

```
npm run snow
```
