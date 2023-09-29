"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fonts_1 = require("../../../@types/fonts");
const getFontFamily_1 = require("./getFontFamily");
describe('Tests function helper getFontFamily', () => {
    it('should be render the correct regular fontFamily', () => {
        const font = 'regular';
        expect((0, getFontFamily_1.getFontFamily)(font)).toBe(fonts_1.IFont.regular);
    });
    it('should be render the correct medium fontFamily', () => {
        const font = 'medium';
        expect((0, getFontFamily_1.getFontFamily)(font)).toBe(fonts_1.IFont.medium);
    });
    it('should be render the correct bold fontFamily', () => {
        const font = 'bold';
        expect((0, getFontFamily_1.getFontFamily)(font)).toBe(fonts_1.IFont.bold);
    });
    it('should be render the correct neue fontFamily', () => {
        const font = 'neue';
        expect((0, getFontFamily_1.getFontFamily)(font)).toBe(fonts_1.IFont.neue);
    });
});
