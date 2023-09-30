"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("@testing-library/react-native");
const react_1 = __importDefault(require("react"));
const react_native_2 = require("react-native");
const __1 = require("..");
describe('TitleIconScreen Tests', () => {
    it("Should be render 'icon' component", () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.TitleIconScreen, { icon: react_1.default.createElement(react_native_2.Text, null, "Icon render"), title: "My title section" }));
        const iconRendered = react_native_1.screen.getByText('Icon render');
        expect(iconRendered).toBeTruthy();
    });
    it('Should be render the correct title', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.TitleIconScreen, { icon: react_1.default.createElement(react_native_2.Text, null, "Icon render"), title: "My title section" }));
        const titleSection = react_native_1.screen.getByText('My title section');
        expect(titleSection).toBeTruthy();
    });
});
