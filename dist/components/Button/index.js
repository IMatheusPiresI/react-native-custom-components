"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const getButtonSize_1 = require("../../resources/utils/getButtonSize/getButtonSize");
const getShadow_1 = require("../../resources/utils/getShadow/getShadow");
const Typograph_1 = require("../Typograph");
const Button = (_a) => {
    var { title, bgColor, disabledColor, fontSize, width, height, font, titleColor, shadow, shadowColor, radius, padding, paddingHorizontal, paddingVertical } = _a, rest = __rest(_a, ["title", "bgColor", "disabledColor", "fontSize", "width", "height", "font", "titleColor", "shadow", "shadowColor", "radius", "padding", "paddingHorizontal", "paddingVertical"]);
    const styles = react_native_1.StyleSheet.create({
        container: Object.assign({ width: width || '100%', height: height ? (0, getButtonSize_1.getButtonSize)(height) : 'auto', backgroundColor: rest.disabled
                ? disabledColor !== null && disabledColor !== void 0 ? disabledColor : '#B0AFAF'
                : bgColor !== null && bgColor !== void 0 ? bgColor : '#000fff', alignItems: 'center', justifyContent: 'center', paddingVertical: paddingVertical || 6, paddingHorizontal: paddingHorizontal || 6, padding: padding, shadowColor: shadowColor || '#000000', borderRadius: radius || 12 }, (0, getShadow_1.getShadow)(shadow, shadowColor)),
    });
    return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({ style: styles.container }, rest, { testID: "button" }),
        react_1.default.createElement(Typograph_1.Typograph, { font: font, color: titleColor !== null && titleColor !== void 0 ? titleColor : '#ffffff', fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : 12 }, title)));
};
exports.Button = Button;
