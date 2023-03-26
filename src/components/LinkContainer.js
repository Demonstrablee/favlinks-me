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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const Table_1 = __importDefault(require("./Table"));
const Form_1 = __importDefault(require("./Form"));
const LinkContainer = (props) => {
    const [favLinks, setFavLinks] = (0, react_1.useState)([]);
    const [linkNames, setLinkNames] = (0, react_1.useState)([]);
    const handleRemove = (index) => {
        /* TODO - Create logic for setting the state to filter array and remove favLink at index*/
        let arra1 = favLinks.filter((favLink) => { return (favLink) !== favLinks[index]; });
        let arra2 = linkNames.filter((linkName) => { return (linkName) !== linkNames[index]; });
        // console.log(arra1)
        setFavLinks(arra1);
        setLinkNames(arra2);
    };
    const handleSubmit = (favLink, linkName) => {
        /*TODO - Create logic to set state and add new favLink to favLinks array in state*/
        setFavLinks(favLinks.concat(favLink));
        setLinkNames(linkNames.concat(linkName));
        //console.log(favLinks) // this wont show me the array is updated until AFTER this function has fully run and I go again
        console.log("ADDED LINK and NAME ");
    };
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null, "My Favorite Links"),
        React.createElement("p", null, "Add a new url with a name and link to the table."),
        React.createElement("h3", null, "Add New"),
        React.createElement(Table_1.default, { URL: favLinks, name: linkNames, removeLink: handleRemove, handlesubmit: handleSubmit }),
        React.createElement(Form_1.default, { favlinks: favLinks, handleSubmit: handleSubmit })));
};
exports.default = LinkContainer;
