**WIP: This is just the beginning of our test-app™**

As we're attempting to work backwards, the idea is `test-app` will be a companion to the framework used to help flush out developer use cases. As these are refined we'll eventully abstract the framework to it's own folder.

**WIP: To get up and running**

- Add a `.env` file to the `test-app` directory with the following content

```
CLIENT_PORT=4000
SERVER_PORT=5000
```

- Install dependencies `yarn install`
- To run dev type `yarn dev`

The server is transcompiled to the `build` folder and will run on `http://localhost:5000/`
The client will run in memory and be served from `http://localhost:4000/`
