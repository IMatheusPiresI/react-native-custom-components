"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleIconScreen = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Typograph_1 = require("../Typograph");
const TitleIconScreen = ({ title, font, fontSize, icon, color, }) => {
    const styles = react_native_1.StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    });
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        icon,
        react_1.default.createElement(Typograph_1.Typograph, { font: font !== null && font !== void 0 ? font : 'medium', fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : 20, ml: 14, color: color !== null && color !== void 0 ? color : '#000000' }, title)));
};
exports.TitleIconScreen = TitleIconScreen;
