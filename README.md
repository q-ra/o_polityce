# o_polityce

> O polityce

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Przygotowanie środowiska - (jednorazowe nie trzeba powtarzac)
``` bash
npm install -g @vue/cli
vue init bootstrap-vue/webpack
```

## Dokumentacja uzywanych bibliotek
https://bootstrap-vue.js.org/docs/components

## Jak będzie problem z node-sass na dockerze - to trzeba to wykonac
``` bash
npm update
npm install
nodejs node_modules/node-sass/scripts/install.js
npm rebuild node-sass
```