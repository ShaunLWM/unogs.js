# unogs.js

[!["Monthly Download"](https://img.shields.io/npm/dm/unogs.js.svg)](https://npmjs.org/package/unogs.js)
[!["Latest Release"](https://img.shields.io/npm/v/unogs.js.svg)](https://github.com/ShaunLWM/unogs.js/releases/latest)
[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/ShaunLWM/unogs.js/blob/master/LICENSE)

> Unofficial Unogs API

## Install

```
$ npm install unogs.js
```

```
$ yarn install unogs.js
```

## Usage

```js
const unogs = require("unogs.js");

const imgs = await unogs.getImages(80100929);
//=> get images for Cable Girls

const eps = await unogs.getEpisodes(80100929);
//=> get episodes for Cable Girls
```

## API

### getDetails(netflixId)

### getImages(netflixId)

### getGenres(netflixId)

### getPeople(netflixId)

### getCountries(netflixId)

### getEpisodes(netflixId)

### getAll(netflixId)

## License

MIT © [ShaunLWM](https://github.com/ShaunLWM)
