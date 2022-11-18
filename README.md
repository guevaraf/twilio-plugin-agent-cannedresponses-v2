# Agent Auto-Response / Canned Responses Plugin For Flex UI v2.x

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

> This repo is based on the original plugin for v1: <https://github.com/twilio-labs/plugin-agent-autoresponse/tree/main/src>

This Twilio Flex Plugin enables your agents to send canned responses when chatting with a customer and to present an auto-response depending on an event.

To learn more about developing plugins on your Flex instance, refer to the [getting started guide](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin).

---

There are two main files in this example:

```
src/AgentAutoResponsePlugin.js
src/components/CannedResponses.js
```

The main file is the `AgentAutoResponsePlugin.js` file, and contains many comments describing how the auto-response example is achieved.

In addition, it appends the Canned Responses component in `CannedResponses.js` has the added UI component to select an option and post directly to the Chat/SMS conversations.

Both samples are now using [Twilio Conversations](https://www.twilio.com/docs/conversations) which is the default text-based service for Flex UI v2.x.

While the canned-responses are static in this example, you might build on this example and call-out to your own server to retrieve your curated list of canned responses before rendering them in the Flex UI.

Some recommendations on how to make it dynamic:

-   Use Twilio Function to serve a templated response
-   Have an asset with templated strings such as #VALUE# or {{VALUE}}

## Running

When you run this plugin - you'll see a pre-defined message sent by the answering agent as soon as they accept the task.

Additionally, you'll see new UI added below the Chat Input field which is a Select menu and will let you select from a list of pre-defined canned responses. When selecting any message in the select menu - it will automatically be sent into the text-based channel.

### Screenshot

![Screenshot](https://indigo-bombay-5783.twil.io/assets/auto-response-canned.png)

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Afterwards install the dependencies by running `npm install`:

```bash
cd plugin-agent-autoresponse

# If you use npm
npm install
```

## Development

In order to develop locally, you can use the Webpack Dev Server by running:

```bash
twilio flex:plugins:start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 twilio flex:plugins:start
```

When you make changes to your code, the browser window will be automatically refreshed.

Type `twilio flex:plugins:start --help` to get more detailed information about the command.

## Deploy and Release Plugin

When you are ready to deploy your plugin, in your terminal run:

```bash
twilio flex:plugins:deploy --major --changelog "Adding Auto-Response for Agents" --description "Ability for agents to send canned responses"
```

This will upload your plugin to Flex. After a deploy, your plugin is not yet enabled for all your users on your Flex application. You need to run the release command after the deploy to enable any changes:

```bash
twilio flex:plugins:release --name "Plugin Auto-Response" --description "Enabling plugin auto-response" --plugin plugin-agent-autoresponse@latest
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/developer/plugins/cli/deploy-and-release).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
