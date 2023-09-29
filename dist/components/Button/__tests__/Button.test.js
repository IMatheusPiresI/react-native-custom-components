"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("@testing-library/react-native");
const __1 = require("..");
describe('Buttom Component Tests UI', () => {
    it('should be verify render correct title Button', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Button, { bgColor: "#000fff", font: "bold", title: "Entrar", titleColor: "#fff" }));
        expect(react_native_1.screen.getByText('Entrar')).toBeTruthy();
    });
    it('shuld be render the correct background style Button', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Button, { bgColor: "#000fff", font: "bold", title: "Entrar", titleColor: "#fff" }));
        const button = react_native_1.screen.getByTestId('button');
        expect(button.props.style.backgroundColor).toBe('#000fff');
    });
    it('should be render the correct height button', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Button, { bgColor: "#000fff", font: "bold", title: "Entrar", titleColor: "#fff", height: 40 }));
        const button = react_native_1.screen.getByTestId('button');
        expect(button.props.style.height).toBe(40);
    });
    it('should be render the default disabledColor button', () => {
        (0, react_native_1.render)(react_1.default.createElement(__1.Button, { bgColor: "#000fff", disabled: true, font: "bold", title: "Entrar", titleColor: "#fff", height: 40 }));
        const button = react_native_1.screen.getByTestId('button');
        expect(button.props.style.backgroundColor).toBe('#B0AFAF');
    });
});
