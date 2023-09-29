"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
const __1 = require("..");
describe('Typograph Test', () => {
    it('should be render the text message', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Typograph, null, "My text"));
        const text = react_native_1.screen.getByText('My text');
        expect(text).toBeTruthy();
    });
    it('should be render the underline in text', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Typograph, { underline: true }, "My text"));
        const text = react_native_1.screen.getByText('My text');
        expect(text.props.style.textDecorationLine).toBe('underline');
    });
});
