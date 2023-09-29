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
exports.Typograph = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const getFontFamily_1 = require("../../resources/utils/getFontFamily/getFontFamily");
const getFontSize_1 = require("../../resources/utils/getFontSIze/getFontSize");
const Typograph = (_a) => {
    var _b;
    var { font, fontSize, children, color, textAlign, alignSelf, underline, underlineColor, lineHeight, pb, pl, pr, pt, px, py, mb, ml, mr, mt, mx, my, p, m } = _a, rest = __rest(_a, ["font", "fontSize", "children", "color", "textAlign", "alignSelf", "underline", "underlineColor", "lineHeight", "pb", "pl", "pr", "pt", "px", "py", "mb", "ml", "mr", "mt", "mx", "my", "p", "m"]);
    const styles = react_native_1.StyleSheet.create({
        text: {
            fontSize: (0, getFontSize_1.getFontSize)(fontSize !== null && fontSize !== void 0 ? fontSize : 'medium'),
            fontFamily: (0, getFontFamily_1.getFontFamily)(font !== null && font !== void 0 ? font : 'regular'),
            color: color || '#000000',
            textAlign,
            alignSelf,
            lineHeight,
            textDecorationLine: underline ? 'underline' : undefined,
            textDecorationColor: (_b = underlineColor !== null && underlineColor !== void 0 ? underlineColor : color) !== null && _b !== void 0 ? _b : '#000000',
            padding: p,
            paddingHorizontal: px,
            paddingVertical: py,
            paddingLeft: pl,
            paddingRight: pr,
            paddingBottom: pb,
            paddingTop: pt,
            margin: m,
            marginLeft: ml,
            marginRight: mr,
            marginTop: mt,
            marginBottom: mb,
            marginHorizontal: mx,
            marginVertical: my,
        },
    });
    return (react_1.default.createElement(react_native_1.Text, Object.assign({ style: styles.text }, rest), children));
};
exports.Typograph = Typograph;
