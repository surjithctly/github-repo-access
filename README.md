# Github Repo Access

Automatically Invite Collaborators to your Github Repo using Github API based on Envato Market Themeforest Purchases.

![image](https://user-images.githubusercontent.com/1884712/89714611-93cdb600-d9bd-11ea-9c68-0f7fcc456cdc.png)

# Installation

```bash
npm install
```

## `.env` Configuration

Add a `.env` file in your root folder and then add your github token.

```
ENVATO_TOKEN=YOUR_ENVATO_PEROSNAL_TOKEN
GITHUB_TOKEN=YOUR_GITHUB_PEROSNAL_TOKEN
```

## Personal Token Scope

The following scope is required to make it work.

**Envato Token** : Verify purchases of your items

**Github Token** : Private Repo


## Update Repo Map

Map your github repo name with Envato Item ID

```js
module.exports = {
  12345678: "repo-one",
  87654321: "repo-two",
};
```

## Use Vercel for easy deployment

```bash
npm i -g vercel
npm vercel
```

## Development Server

Use the following command to fireup Dev Server at `http://localhost:3000/`

```bash
vercel dev
```
