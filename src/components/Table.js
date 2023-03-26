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
const TableHeader = () => {
    // boilerplate table header functional component
    return (React.createElement("thead", null,
        React.createElement("tr", null,
            React.createElement("th", null, "Name"),
            React.createElement("th", null, "URL"),
            React.createElement("th", null, "Remove"))));
};
const TableBody = (props) => {
    // boilerplate table body functional component
    //we use Array.map to create table rows from LinkData passed via props
    const names = props.linkNames;
    const rows = props.linkData.map((row, index) => {
        return (React.createElement("tr", { key: index },
            React.createElement("td", null, names[index]),
            React.createElement("td", null,
                React.createElement("a", { href: row }, row)),
            React.createElement("td", null,
                React.createElement("button", { onClick: () => props.removeLink(index) }, "Delete"))));
    });
    return (React.createElement("tbody", null, rows));
};
const Table = (props) => {
    /*TODO - return <table> component, TableHeader and TableBody  and pass props!*/
    return (React.createElement("table", null,
        React.createElement(TableHeader, null),
        React.createElement(TableBody, { linkData: props.URL, removeLink: props.removeLink, linkNames: props.name })));
};
exports.default = Table;
