# Reproducible demo of React Native 0.63.3 crashing when importing large static json.

#### Build
- `node data/data-build.js`
- `yarn install`
- `npx pod-install`


- `yarn run ios`: Builds successfully and renders as expected
###vs.
- `yarn run release-ios`: Builds successfully and renders as expected
###vs.
- Build using Profile in XCode:

In the screenshot below the simulator was built with in Debug mode, but the Profilor's instrument was built with Release mode.

![Screen Shot 2021-10-08 at 12 47 46 AM](https://user-images.githubusercontent.com/6335974/136508894-0fc28068-107e-4684-af65-bd0111c42a0a.png)



