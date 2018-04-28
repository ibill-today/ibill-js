export default ['index', 'browser-offline', 'server-offline'].map(entry => ({
  input: `src/${entry}.js`,
  output: [
    { file: `${entry}.js`, format: 'cjs' },
    // { file: `${entry}-es.js`, format: 'es' }
  ],
}))