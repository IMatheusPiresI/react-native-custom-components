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
exports.CardQuickAccess = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Typograph_1 = require("../Typograph");
const CardQuickAccess = (_a) => {
    var { icon, title, width, height, bgColor, disabledColor, font, fontSize, color, numberOfLines } = _a, rest = __rest(_a, ["icon", "title", "width", "height", "bgColor", "disabledColor", "font", "fontSize", "color", "numberOfLines"]);
    const styles = react_native_1.StyleSheet.create({
        container: {
            width: width !== null && width !== void 0 ? width : 80,
            height: height !== null && height !== void 0 ? height : 80,
            backgroundColor: rest.disabled ? disabledColor !== null && disabledColor !== void 0 ? disabledColor : '#B0AFAF' : bgColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
            paddingHorizontal: 2,
            paddingVertical: 2,
        },
    });
    return (react_1.default.createElement(react_native_1.TouchableOpacity, Object.assign({ style: styles.container, activeOpacity: 0.7 }, rest, { testID: "CardQuickAccess" }),
        icon,
        react_1.default.createElement(Typograph_1.Typograph, { font: font !== null && font !== void 0 ? font : 'medium', fontSize: fontSize !== null && fontSize !== void 0 ? fontSize : 12, color: color !== null && color !== void 0 ? color : '#ffffff', numberOfLines: numberOfLines !== null && numberOfLines !== void 0 ? numberOfLines : 2 }, title)));
};
exports.CardQuickAccess = CardQuickAccess;
