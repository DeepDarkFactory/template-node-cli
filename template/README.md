[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/<%= username %>/<%= project %>/master/LICENSE)<% if (includeTravis) { %>
[![Build Status](https://img.shields.io/travis/<%= username %>/<%= project %>.svg)](https://travis-ci.org/<%= username %>/<%= project %>)<% } %><% if (includeCodecovIo) { %>
[![Coverage](https://img.shields.io/codecov/c/github/<%= username %>/<%= project %>.svg)](https://codecov.io/gh/<%= username %>/<%= project %>)<% } %>
[![npm](https://img.shields.io/npm/v/<%= project %>.svg)](https://www.npmjs.com/package/<%= project %>)<% if (prettier) { %>
[![prettier](https://img.shields.io/badge/style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)<% } %>

# <%= project %>

> <%= tagline %>

## Install

```
yarn global add <%= project %>
```

Or

```
npm install --global <%= project %>
```

## Usage

```
<%= project %>
```

#### License

MIT © [<%= username %>](https://github.com/<%= username %>)
