

## How to run the application

`yarn install`

`yarn dev`

## How to test

`yarn test`

## Features

TBD

## Router routes and what they do

- Used to test if a route is alive

```js
router.get('/ping', (req, res) => {
  res.send('pong');
});
```

- For now we want to demonstrate a test route

```js
router.get('/', (req, res) => {
  res.send('Hello World!');
});
```

- TBD on how we would like to get build info

```js
router.get('/build-info', (req, res) => {
  const sha = childProcess
    .execSync('git rev-parse --short HEAD')
    .toString()
    .trim();

  res.json({
    version,
    sha,
  });
});
```
