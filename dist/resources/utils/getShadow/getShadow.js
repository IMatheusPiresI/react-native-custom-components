"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShadow = void 0;
const getShadow = (shadow, shadowColor) => {
    if (!shadow)
        return;
    switch (shadow) {
        case 'small':
            return {
                shadowColor: shadowColor !== null && shadowColor !== void 0 ? shadowColor : '#000000',
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 2,
            };
        case 'medium':
            return {
                shadowColor: shadowColor !== null && shadowColor !== void 0 ? shadowColor : '#000000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
            };
        case 'large':
            return {
                shadowColor: shadowColor !== null && shadowColor !== void 0 ? shadowColor : '#000000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 7,
            };
        default:
            return {
                shadowColor: shadowColor !== null && shadowColor !== void 0 ? shadowColor : '#000000',
                shadowOffset: {
                    width: shadow.shadowOffset.width,
                    height: shadow.shadowOffset.height,
                },
                shadowOpacity: shadow.shadowOpacity,
                shadowRadius: shadow.shadowRadius,
                elevation: shadow.elevation,
            };
    }
};
exports.getShadow = getShadow;
