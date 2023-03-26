"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const Form = (props) => {
    const [Wname, setWName] = (0, react_1.useState)('');
    const [WURL, setWURL] = (0, react_1.useState)('');
    let formRef = React.useRef();
    const handleChange = (event) => {
        /*TODO - Logic for changing state based on form changes*/
        //console.log(event.target.id)
        switch (event.target.id) {
            case "wname":
                setWName(event.target.value);
                console.log(event.target.id);
                break;
            case "url":
                setWURL(event.target.value);
                console.log(event.target.id);
                break;
            //console.log("change handled")
        }
    };
    const onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        //console.log("this is "+ document.getElementById("enterUser"))
        //console.log(WURL)     
        /* TODO - Logic for calling props to handle submission and setting state changes*/
        props.handleSubmit(WURL, Wname);
        setWName(''); //YESSSS erases data stored in these input so that the form is cleared after the you press submit
        setWURL('');
    };
    return (React.createElement("form", null,
        React.createElement("label", null, "Name"),
        React.createElement("br", null),
        React.createElement("input", { id: 'wname', value: Wname, type: "text", onChange: handleChange }),
        React.createElement("br", null),
        React.createElement("label", null, "URL"),
        React.createElement("br", null),
        React.createElement("input", { id: 'url', value: WURL, type: "text", onChange: handleChange }),
        React.createElement("br", null),
        React.createElement("input", { type: "reset", value: "Submit", onClick: onFormSubmit })));
};
exports.default = Form;
