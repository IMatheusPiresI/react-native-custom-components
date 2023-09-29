"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontSize = void 0;
const sizes_1 = require("../../../@types/sizes");
const getFontSize = (size) => {
    switch (size) {
        case 'small':
            return sizes_1.ITextSizes.small;
        case 'medium':
            return sizes_1.ITextSizes.medium;
        case 'large':
            return sizes_1.ITextSizes.large;
        default:
            return size;
    }
};
exports.getFontSize = getFontSize;
