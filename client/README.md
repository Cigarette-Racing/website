# Gatsby Site

## Getting Started

First, prepare your environment variables:

```shell
cp .env.example .env.development
```

Fill in any variables in the example with values provided by the team. Next, run the following commands to install and run the site:

```shell
npm install
npm start
```

## Building for Production

First, prepare your environment variables:

```shell
cp .env.example .env.production
```

Fill in any variables in the example with values provided by the team. Next, run the following command to build a production version of the site:

```shell
npm run build
```

## Tips and Tricks

### Fixing `ENOENT Error: missing json file`

![error screenshot](https://i.imgur.com/7RGaUOs.png)

To fix this error, run the following commands:

```shell
npm run clean
npm run build
cp .cache/json/_404_.json .cache/json/_dev-404-page_.json
npm start
```
