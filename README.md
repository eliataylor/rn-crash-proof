# Reproducible demo of React Native 0.63.3 crashing when importing large static json.

#### Build
- `node data/data-build.js`
- `yarn install`
- `npx pod-install`


- `yarn run ios` > Builds successfully and renders first item in each json file
vs.
- `yarn run ios --configuration Release` > Crashes instantly on launching the app.

In the screenshot below 



