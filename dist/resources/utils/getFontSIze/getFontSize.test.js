"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sizes_1 = require("../../../@types/sizes");
const getFontSize_1 = require("./getFontSize");
describe('Tests function helper getFontSize', () => {
    it('should be render the correct small fontSize', () => {
        const fontSizeOption = 'small';
        expect((0, getFontSize_1.getFontSize)(fontSizeOption)).toBe(sizes_1.ITextSizes.small);
    });
    it('should be render the correct medium fontSize', () => {
        const fontSizeOption = 'medium';
        expect((0, getFontSize_1.getFontSize)(fontSizeOption)).toBe(sizes_1.ITextSizes.medium);
    });
    it('should be render the correct large fontSize', () => {
        const fontSizeOption = 'large';
        expect((0, getFontSize_1.getFontSize)(fontSizeOption)).toBe(sizes_1.ITextSizes.large);
    });
    it('should be render the correct large fontSize', () => {
        const customValueSize = 32;
        expect((0, getFontSize_1.getFontSize)(customValueSize)).toBe(customValueSize);
    });
});
