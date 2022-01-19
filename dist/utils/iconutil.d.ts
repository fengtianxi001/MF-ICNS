/// <reference types="node" />
interface imagesProp {
}
declare class Iconutil {
    images: Buffer[];
    constructor(buffer: Buffer);
    fetchHeader(buffer: Buffer): {
        bytes: number;
        data: Buffer;
    };
    fetchImages(buffer: Buffer): {
        data: Buffer;
        image: Buffer;
    };
}
