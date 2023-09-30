"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getShadow_1 = require("./getShadow");
describe('Tests function helper getShadow', () => {
    it('should be render the correct small shadow', () => {
        const shadowOption = 'small';
        expect((0, getShadow_1.getShadow)(shadowOption)).toEqual({
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
        });
    });
    it('should be render the correct medium shadow', () => {
        const shadowOption = 'medium';
        expect((0, getShadow_1.getShadow)(shadowOption)).toEqual({
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        });
    });
    it('should be render the correct large shadow', () => {
        const shadowOption = 'large';
        expect((0, getShadow_1.getShadow)(shadowOption)).toEqual({
            shadowColor: '#000000',
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 7,
        });
    });
    it('should be render the correct large shadow', () => {
        const shadowOption = 'large';
        expect((0, getShadow_1.getShadow)({
            shadowColor: '#000000',
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 1,
        })).toEqual({
            shadowColor: '#000000',
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 1,
            shadowRadius: 2,
            elevation: 1,
        });
    });
});
