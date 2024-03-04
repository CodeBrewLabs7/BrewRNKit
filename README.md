# myapp
⚛️ React Native Boilerplate: Jumpstart your app development with essential configurations for React Native projects. Includes libraries, navigation, state management, and styling setup. Streamline your workflow and focus on building amazing mobile experiences! 📱✨

<!-- ![React Native Boilerplate License](https://img.shields.io/github/license/CodeBrewLabs7/BrewRNKit) -->
![React Native Boilerplate Release Date](https://img.shields.io/github/release-date/CodeBrewLabs7/BrewRNKit)
![React Native Boilerplate Download](https://flat.badgen.net/npm/dt/brew-react-native-kit)
![React Native Boilerplate Top Language](https://img.shields.io/github/languages/top/CodeBrewLabs7/BrewRNKit)

## 📱 Screenshot

### Preview of myapp

https://github.com/CodeBrewLabs7/myapp/assets/56266123/e9a51ea0-f056-4b14-b4ef-f01eef8cc7de


## Requirements

Node 18 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native@latest init MyApp --template brew-react-native-kit
```

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm install
npm start

# OR using Yarn
yarn install
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
cd ios
pod install
npm run ios

# OR using Yarn
cd ios
pod install
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.



## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
