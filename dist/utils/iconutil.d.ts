/// <reference types="node" />
declare const OSTYPE: any;
declare class Iconutil {
    images: {
        size: string;
        image: Buffer;
    }[];
    constructor(buffer: Buffer);
    fetchHeader(buffer: Buffer): {
        bytes: number;
        data: Buffer;
    };
    fetchImages(buffer: Buffer): {
        data: Buffer;
        image: Buffer;
        osType: string;
    };
}
