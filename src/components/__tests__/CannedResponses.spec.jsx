import React from "react";
import { create, act, queryByAttribute } from "react-test-renderer";
import InputLabel from "@material-ui/core/InputLabel";

import CannedResponses from "../CannedResponses";

describe("CannedResponses", () => {
    it("should load and display component", () => {
        const renderer = create(<CannedResponses />);
        const root = renderer.root;

        const element = root.findByType(InputLabel);
        expect(element.props.children).toEqual("Canned Responses");
    });
});
