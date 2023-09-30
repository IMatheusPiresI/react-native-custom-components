"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sizes_1 = require("../../../@types/sizes");
const getButtonSize_1 = require("./getButtonSize");
describe('Tests function helper getButtonSize', () => {
    it('should be render the correct small button size', () => {
        const buttonSizeOption = 'small';
        expect((0, getButtonSize_1.getButtonSize)(buttonSizeOption)).toBe(sizes_1.IButtonSizes.small);
    });
    it('should be render the correct medium button size', () => {
        const buttonSizeOption = 'medium';
        expect((0, getButtonSize_1.getButtonSize)(buttonSizeOption)).toBe(sizes_1.IButtonSizes.medium);
    });
    it('should be render the correct large button size', () => {
        const buttonSizeOption = 'large';
        expect((0, getButtonSize_1.getButtonSize)(buttonSizeOption)).toBe(sizes_1.IButtonSizes.large);
    });
    it('should be render the correct large button size', () => {
        const customValueSizeButton = 40;
        expect((0, getButtonSize_1.getButtonSize)(customValueSizeButton)).toBe(customValueSizeButton);
    });
});
