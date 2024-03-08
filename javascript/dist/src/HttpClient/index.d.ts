/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import * as stream from 'stream';
import { EventEmitter } from 'events';
import * as Q from 'q';
declare class HttpClient extends EventEmitter {
    private config;
    private controller;
    private readonly defaultHeaders;
    private axiosInstance;
    constructor(config: any);
    sendRequest(httpMethod: string, path: string, body?: string | Buffer | stream.Readable | any, headers?: Record<string, any>, outputStream?: boolean | stream.Writable, params?: Record<string, any>, signFunction?: () => [string, string] | string): Q.Promise<any>;
    private _doRequest;
    establishSSEConnection(options: AxiosRequestConfig): Promise<AsyncIterable<any>>;
    private _recvResponse;
    private failure;
    private setAuthorizationHeader;
    private _getRequestUrl;
    private buildQueryString;
    /**
     * 猜测数据长度
     *
     * @param data 数据，可以是字符串、Buffer、可读流
     * @returns 返回数据长度
     * @throws {Error} 当没有指定 Content-Length 时抛出异常
     */
    private _guessContentLength;
    private isPromise;
    private createSignature;
}
export default HttpClient;
