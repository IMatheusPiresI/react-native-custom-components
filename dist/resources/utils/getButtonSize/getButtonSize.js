"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getButtonSize = void 0;
const sizes_1 = require("../../../@types/sizes");
const getButtonSize = (size) => {
    switch (size) {
        case 'small':
            return sizes_1.IButtonSizes.small;
        case 'medium':
            return sizes_1.IButtonSizes.medium;
        case 'large':
            return sizes_1.IButtonSizes.large;
        default:
            return size;
    }
};
exports.getButtonSize = getButtonSize;
