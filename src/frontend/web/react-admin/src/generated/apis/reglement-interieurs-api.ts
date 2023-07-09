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
import { InlineResponse20070 } from '../models';
import { InlineResponse20071 } from '../models';
import { InlineResponse20072 } from '../models';
import { InlineResponse20073 } from '../models';
import { InlineResponse20074 } from '../models';
import { InlineResponse40028 } from '../models';
import { InlineResponse40029 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40434 } from '../models';
import { InlineResponse40435 } from '../models';
import { ReglementCreateBody } from '../models';
import { UpdateReglementIdBody } from '../models';
/**
 * ReglementInterieursApi - axios parameter creator
 * @export
 */
export const ReglementInterieursApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new reglementInterieur resource
         * @summary Create a new reglementInterieur
         * @param {ReglementCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReglementInterieur: async (body: ReglementCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createReglementInterieur.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createReglementInterieur.');
            }
            const localVarPath = `/api/reglement/create`;
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
         * Delete a reglementInterieur resource
         * @summary Delete a reglementInterieur
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReglementInterieur: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteReglementInterieur.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteReglementInterieur.');
            }
            const localVarPath = `/api/reglement/delete/{id}`
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
         * Retrieve a list of all disciplinary councils with associated eleve
         * @summary Get all Reglement Interieurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reglementInterieursIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling reglementInterieursIndex.');
            }
            const localVarPath = `/api/reglement/findAll`;
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
         * Update a reglementInterieur's information
         * @summary Update a reglementInterieur's information
         * @param {UpdateReglementIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} reglementId2 ID of reglement to update in this request
         * @param {number} reglementId ID of eleve to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReglementInterieur: async (body: UpdateReglementIdBody, authorization: string, reglementId2: number, reglementId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateReglementInterieur.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateReglementInterieur.');
            }
            // verify required parameter 'reglementId2' is not null or undefined
            if (reglementId2 === null || reglementId2 === undefined) {
                throw new RequiredError('reglementId2','Required parameter reglementId2 was null or undefined when calling updateReglementInterieur.');
            }
            // verify required parameter 'reglementId' is not null or undefined
            if (reglementId === null || reglementId === undefined) {
                throw new RequiredError('reglementId','Required parameter reglementId was null or undefined when calling updateReglementInterieur.');
            }
            const localVarPath = `/api/reglement/update/{reglementId}`
                .replace(`{${"reglementId"}}`, encodeURIComponent(String(reglementId)))
                .replace(`{${"reglementId"}}`, encodeURIComponent(String(reglementId)));
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
         * Get information about a specific reglementInterieur
         * @summary Get reglement information
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewReglementInterieur: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling viewReglementInterieur.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewReglementInterieur.');
            }
            const localVarPath = `/api/reglement/findOne/{id}`
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
    }
};

/**
 * ReglementInterieursApi - functional programming interface
 * @export
 */
export const ReglementInterieursApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new reglementInterieur resource
         * @summary Create a new reglementInterieur
         * @param {ReglementCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReglementInterieur(body: ReglementCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20071>> {
            const localVarAxiosArgs = await ReglementInterieursApiAxiosParamCreator(configuration).createReglementInterieur(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a reglementInterieur resource
         * @summary Delete a reglementInterieur
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteReglementInterieur(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20074>> {
            const localVarAxiosArgs = await ReglementInterieursApiAxiosParamCreator(configuration).deleteReglementInterieur(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all disciplinary councils with associated eleve
         * @summary Get all Reglement Interieurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reglementInterieursIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20070>> {
            const localVarAxiosArgs = await ReglementInterieursApiAxiosParamCreator(configuration).reglementInterieursIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a reglementInterieur's information
         * @summary Update a reglementInterieur's information
         * @param {UpdateReglementIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} reglementId2 ID of reglement to update in this request
         * @param {number} reglementId ID of eleve to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateReglementInterieur(body: UpdateReglementIdBody, authorization: string, reglementId2: number, reglementId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20073>> {
            const localVarAxiosArgs = await ReglementInterieursApiAxiosParamCreator(configuration).updateReglementInterieur(body, authorization, reglementId2, reglementId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific reglementInterieur
         * @summary Get reglement information
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewReglementInterieur(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20072>> {
            const localVarAxiosArgs = await ReglementInterieursApiAxiosParamCreator(configuration).viewReglementInterieur(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ReglementInterieursApi - factory interface
 * @export
 */
export const ReglementInterieursApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new reglementInterieur resource
         * @summary Create a new reglementInterieur
         * @param {ReglementCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReglementInterieur(body: ReglementCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse20071> {
            return ReglementInterieursApiFp(configuration).createReglementInterieur(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a reglementInterieur resource
         * @summary Delete a reglementInterieur
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReglementInterieur(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20074> {
            return ReglementInterieursApiFp(configuration).deleteReglementInterieur(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all disciplinary councils with associated eleve
         * @summary Get all Reglement Interieurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reglementInterieursIndex(authorization: string, options?: any): AxiosPromise<InlineResponse20070> {
            return ReglementInterieursApiFp(configuration).reglementInterieursIndex(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a reglementInterieur's information
         * @summary Update a reglementInterieur's information
         * @param {UpdateReglementIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} reglementId2 ID of reglement to update in this request
         * @param {number} reglementId ID of eleve to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReglementInterieur(body: UpdateReglementIdBody, authorization: string, reglementId2: number, reglementId: number, options?: any): AxiosPromise<InlineResponse20073> {
            return ReglementInterieursApiFp(configuration).updateReglementInterieur(body, authorization, reglementId2, reglementId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific reglementInterieur
         * @summary Get reglement information
         * @param {string} authorization JWT token
         * @param {number} id ID of reglementInterieur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewReglementInterieur(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20072> {
            return ReglementInterieursApiFp(configuration).viewReglementInterieur(authorization, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ReglementInterieursApi - object-oriented interface
 * @export
 * @class ReglementInterieursApi
 * @extends {BaseAPI}
 */
export class ReglementInterieursApi extends BaseAPI {
    /**
     * Create a new reglementInterieur resource
     * @summary Create a new reglementInterieur
     * @param {ReglementCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglementInterieursApi
     */
    public createReglementInterieur(body: ReglementCreateBody, authorization: string, options?: any) {
        return ReglementInterieursApiFp(this.configuration).createReglementInterieur(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a reglementInterieur resource
     * @summary Delete a reglementInterieur
     * @param {string} authorization JWT token
     * @param {number} id ID of reglementInterieur to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglementInterieursApi
     */
    public deleteReglementInterieur(authorization: string, id: number, options?: any) {
        return ReglementInterieursApiFp(this.configuration).deleteReglementInterieur(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all disciplinary councils with associated eleve
     * @summary Get all Reglement Interieurs
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglementInterieursApi
     */
    public reglementInterieursIndex(authorization: string, options?: any) {
        return ReglementInterieursApiFp(this.configuration).reglementInterieursIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a reglementInterieur's information
     * @summary Update a reglementInterieur's information
     * @param {UpdateReglementIdBody} body 
     * @param {string} authorization JWT token
     * @param {number} reglementId2 ID of reglement to update in this request
     * @param {number} reglementId ID of eleve to update in this request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglementInterieursApi
     */
    public updateReglementInterieur(body: UpdateReglementIdBody, authorization: string, reglementId2: number, reglementId: number, options?: any) {
        return ReglementInterieursApiFp(this.configuration).updateReglementInterieur(body, authorization, reglementId2, reglementId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific reglementInterieur
     * @summary Get reglement information
     * @param {string} authorization JWT token
     * @param {number} id ID of reglementInterieur to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReglementInterieursApi
     */
    public viewReglementInterieur(authorization: string, id: number, options?: any) {
        return ReglementInterieursApiFp(this.configuration).viewReglementInterieur(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
}
