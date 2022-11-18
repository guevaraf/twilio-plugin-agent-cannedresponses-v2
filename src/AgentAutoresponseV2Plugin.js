import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";
import { Actions } from "@twilio/flex-ui";

import CannedResponses from "./components/CannedResponses";

const PLUGIN_NAME = "AgentAutoresponseV2Plugin";

export default class AgentAutoresponseV2Plugin extends FlexPlugin {
    constructor() {
        super(PLUGIN_NAME);
    }

    /**
     * This code is run when your plugin is being started
     * Use this to modify any UI components or attach to the actions framework
     *
     * @param flex { typeof import('@twilio/flex-ui') }
     */
    async init(flex, manager) {
        flex.MessageInputV2.Content.add(
            <CannedResponses key="canned-responses" />
        );
        Actions.addListener("afterAcceptTask", (payload) => {
            if (payload.task.attributes.conversationSid) {
                const body = `Hi! I'm ${manager.workerClient.attributes.full_name} and this is our predefined message.`;
                flex.Actions.invokeAction("SendMessage", {
                    body,
                    conversationSid: payload.task.attributes.conversationSid,
                });
            }
        });
    }
}
