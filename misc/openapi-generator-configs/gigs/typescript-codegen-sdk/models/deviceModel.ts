/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type deviceModel = {
    /**
     * Type of object is always `deviceModel`.
     */
    object: string;
    /**
     * Unique identifier for the deviceModel.
     */
    id: string;
    /**
     * The brand of the device model.
     */
    brand: string;
    /**
     * The device model's name.
     */
    name: string;
    /**
     * List of SIM types supported by this device model.
     */
    simTypes: Array<'eSIM' | 'pSIM'>;
    /**
     * The type of the device model.
     */
    type: deviceModel.type;
};

export namespace deviceModel {

    /**
     * The type of the device model.
     */
    export enum type {
        CAR = 'car',
        IOT = 'iot',
        LAPTOP = 'laptop',
        ROUTER = 'router',
        SMARTPHONE = 'smartphone',
        FEATURE_PHONE = 'feature-phone',
        SMARTWATCH = 'smartwatch',
        TABLET = 'tablet',
        WEARABLE = 'wearable',
        OTHER = 'other',
    }


}

