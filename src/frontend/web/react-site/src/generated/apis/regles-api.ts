/* tslint:disable */
/* eslint-disable */
/**
 * Mon API
 * Documentation de l'API de votre application.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20030 } from '../models';
import { InlineResponse20031 } from '../models';
import { InlineResponse20032 } from '../models';
import { InlineResponse2017 } from '../models';
import { InlineResponse4007 } from '../models';
import { InlineResponse4008 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40412 } from '../models';
import { RegleCreateBody } from '../models';
import { RegleUpdateBody } from '../models';
/**
 * ReglesApi - axios parameter creator
 * @export
 */
export const ReglesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Regle resource
         * @summary Create a new Regle
         * @param {RegleCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRegle: async (body: RegleCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createRegle.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createRegle.');
            }
            const localVarPath = `/api/regle/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a regle resource
         * @summary Delete a regle
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRegle: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteRegle.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRegle.');
            }
            const localVarPath = `/api/regle/delete/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve a list of all regles with associated reglementInterieur
         * @summary Find all regles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllRegles: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling findAllRegles.');
            }
            const localVarPath = `/api/regle/findAll`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific regle
         * @summary Get regle information
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneRegle: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling findOneRegle.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling findOneRegle.');
            }
            const localVarPath = `/api/regle/findOne/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a regle's information
         * @summary Update a regle's information
         * @param {RegleUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRegle: async (body: RegleUpdateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateRegle.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateRegle.');
            }
            const localVarPath = `/api/regle/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReglesApi - functional programming interface
 * @export
 */
export const ReglesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new Regle resource
         * @summary Create a new Regle
         * @param {RegleCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRegle(body: RegleCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2017>> {
            const localVarAxiosArgs = await ReglesApiAxiosParamCreator(configuration).createRegle(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a regle resource
         * @summary Delete a regle
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRegle(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ReglesApiAxiosParamCreator(configuration).deleteRegle(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all regles with associated reglementInterieur
         * @summary Find all regles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllRegles(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20030>> {
            const localVarAxiosArgs = await ReglesApiAxiosParamCreator(configuration).findAllRegles(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific regle
         * @summary Get regle information
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOneRegle(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20031>> {
            const localVarAxiosArgs = await ReglesApiAxiosParamCreator(configuration).findOneRegle(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a regle's information
         * @summary Update a regle's information
         * @param {RegleUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRegle(body: RegleUpdateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20032>> {
            const localVarAxiosArgs = await ReglesApiAxiosParamCreator(configuration).updateRegle(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReglesApi - factory interface
 * @export
 */
export const ReglesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new Regle resource
         * @summary Create a new Regle
         * @param {RegleCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRegle(body: RegleCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse2017> {
            return ReglesApiFp(configuration).createRegle(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a regle resource
         * @summary Delete a regle
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRegle(authorization: string, id: number, options?: any): AxiosPromise<void> {
            return ReglesApiFp(configuration).deleteRegle(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all regles with associated reglementInterieur
         * @summary Find all regles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllRegles(authorization: string, options?: any): AxiosPromise<InlineResponse20030> {
            return ReglesApiFp(configuration).findAllRegles(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific regle
         * @summary Get regle information
         * @param {string} authorization JWT token
         * @param {number} id ID of regle to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneRegle(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20031> {
            return ReglesApiFp(configuration).findOneRegle(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a regle's information
         * @summary Update a regle's information
         * @param {RegleUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRegle(body: RegleUpdateBody, authorization: string, options?: any): AxiosPromise<InlineResponse20032> {
            return ReglesApiFp(configuration).updateRegle(body, authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReglesApi - object-oriented interface
 * @export
 * @class ReglesApi
 * @extends {BaseAPI}
 */
export class ReglesApi extends BaseAPI {
    /**
     * Create a new Regle resource
     * @summary Create a new Regle
     * @param {RegleCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglesApi
     */
    public createRegle(body: RegleCreateBody, authorization: string, options?: any) {
        return ReglesApiFp(this.configuration).createRegle(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a regle resource
     * @summary Delete a regle
     * @param {string} authorization JWT token
     * @param {number} id ID of regle to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglesApi
     */
    public deleteRegle(authorization: string, id: number, options?: any) {
        return ReglesApiFp(this.configuration).deleteRegle(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all regles with associated reglementInterieur
     * @summary Find all regles
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglesApi
     */
    public findAllRegles(authorization: string, options?: any) {
        return ReglesApiFp(this.configuration).findAllRegles(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific regle
     * @summary Get regle information
     * @param {string} authorization JWT token
     * @param {number} id ID of regle to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglesApi
     */
    public findOneRegle(authorization: string, id: number, options?: any) {
        return ReglesApiFp(this.configuration).findOneRegle(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a regle's information
     * @summary Update a regle's information
     * @param {RegleUpdateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglesApi
     */
    public updateRegle(body: RegleUpdateBody, authorization: string, options?: any) {
        return ReglesApiFp(this.configuration).updateRegle(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
