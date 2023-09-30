"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontFamily = void 0;
const fonts_1 = require("../../../@types/fonts");
const getFontFamily = (font) => {
    switch (font) {
        case 'regular':
            return fonts_1.IFont.regular;
        case 'medium':
            return fonts_1.IFont.medium;
        case 'bold':
            return fonts_1.IFont.bold;
        case 'neue':
            return fonts_1.IFont.neue;
    }
};
exports.getFontFamily = getFontFamily;
