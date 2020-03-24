# Pokemon Card App

Become the next Pokemon trainer. 🙂
Technical Test for Media Huis

## TOC

- [How to run](#Develop)
- [Scripts](#Scripts)
- [Hiccup](#Hiccups)
- [Still Todo](#Todo)
- [License](#License)

## Develop 👨‍💻

Run `yarn install` to install dependencies and `yarn start` to start the local server.

## Scripts 🏃‍♂️

Some useful custom scripts are :

- `test` => runs tests 🧪
- `eslint-check` => checks if there are any configuration problems between `prettier` and `eslint` rules
- `lint` => runs linter (`eslint`)
- `flow` => runs `flowjs` for typechecking
- `flow:coverage` => checks for `flowjs` coverage
- `flow:stop` => stops `flowjs` server
- `flow:typed` => installs `flowtype` def for dependencies

There are many other, so just run `yarn run` to see all available scripts.

## Hiccups 🤭

- Technologies `ApolloClient` and `GraphQL` was sort of an issue. Still new for me, but fun to use and to reason around once you get use to how to do `queries`.

- The `<Search />` autocomplete with `DownShift` was another hiccup. I have added the code, but it's not hooked up to the app, since was stumbling on the filtering.

**Uncomment the `<Search />` inside `<App />` to see**

- [ ] I would have added a `filter` argument on the backend to filter by `name` on the `Pokemons API`, but that would had created more work on the BackEnd 🤔. Maybe using the `Apollo` `@client` argument instead, but did't have time to try it.

## Todo 🚨

- [ ] Create `<PokemonPhoto />` and remove `<Avatar />`
- [ ] Create `<PokemonDetail/>` view
- [ ] Clean Styles
- [ ] Write Test for the newly created components
- [ ] Check `flowjs` type errors
- [ ] Refactor Code

## License

[LICENSE](#LICENSE)

**Disclaimer**: app was bootstraped `create-react-app` script and `graphql api` provided by Pokemon and MediaHuis.

Made with ❤️ by code4cake in Belgium 🇧🇪.
