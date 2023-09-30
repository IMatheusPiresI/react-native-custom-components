"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
const __1 = require("..");
describe('Test CardQuickAccess', () => {
    it('should be render correct text card', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.CardQuickAccess, { bgColor: "#000fff", title: "My component", icon: react_1.default.createElement(react_1.default.Fragment, null) }));
        const cardTitle = react_native_1.screen.getByText('My component');
        expect(cardTitle).toBeTruthy();
    });
    it('should be render disabledColor card', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.CardQuickAccess, { bgColor: "#000fff", disabledColor: "#CCCCCC", title: "My component", disabled: true, icon: react_1.default.createElement(react_1.default.Fragment, null) }));
        const cardTitle = react_native_1.screen.getByTestId('CardQuickAccess');
        expect(cardTitle.props.style.backgroundColor).toBe('#CCCCCC');
    });
    it('should be render default disabledColor card', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.CardQuickAccess, { bgColor: "#000fff", title: "My component", disabled: true, icon: react_1.default.createElement(react_1.default.Fragment, null) }));
        const cardTitle = react_native_1.screen.getByTestId('CardQuickAccess');
        expect(cardTitle.props.style.backgroundColor).toBe('#B0AFAF');
    });
    it('should be render default bgColor card', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.CardQuickAccess, { title: "My component", icon: react_1.default.createElement(react_1.default.Fragment, null) }));
        const cardTitle = react_native_1.screen.getByTestId('CardQuickAccess');
        expect(cardTitle.props.style.backgroundColor).toBe('#000fff');
    });
});
