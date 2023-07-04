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
import { InlineResponse20085 } from '../models';
import { InlineResponse20086 } from '../models';
import { InlineResponse20087 } from '../models';
import { InlineResponse20088 } from '../models';
import { InlineResponse40036 } from '../models';
import { InlineResponse40037 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40443 } from '../models';
import { InlineResponse40444 } from '../models';
import { SuggestionCreateBody } from '../models';
import { UpdateCoursIdBody1 } from '../models';
/**
 * SuggestionsApi - axios parameter creator
 * @export
 */
export const SuggestionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new suggestion resource
         * @summary Create a new suggestion
         * @param {SuggestionCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSuggestion: async (body: SuggestionCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createSuggestion.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createSuggestion.');
            }
            const localVarPath = `/api/suggestion/create`;
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
         * Retrieve a list of all suggestions
         * @summary Get all suggestions
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllSuggestion: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling findAllSuggestion.');
            }
            const localVarPath = `/api/suggestion/findAll`;
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
         * Get information about a specific suggestion
         * @summary Get suggestion information
         * @param {string} authorization JWT token
         * @param {number} id ID of suggestion to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneSuggestion: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling findOneSuggestion.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling findOneSuggestion.');
            }
            const localVarPath = `/api/suggestion/findOne/{id}`
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
         * Update a suggestion's information
         * @summary Update a suggestion's information
         * @param {UpdateCoursIdBody1} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSuggestion: async (body: UpdateCoursIdBody1, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateSuggestion.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateSuggestion.');
            }
            const localVarPath = `/api/suggestion/update/{coursId}`;
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
 * SuggestionsApi - functional programming interface
 * @export
 */
export const SuggestionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new suggestion resource
         * @summary Create a new suggestion
         * @param {SuggestionCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSuggestion(body: SuggestionCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20087>> {
            const localVarAxiosArgs = await SuggestionsApiAxiosParamCreator(configuration).createSuggestion(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all suggestions
         * @summary Get all suggestions
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllSuggestion(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20085>> {
            const localVarAxiosArgs = await SuggestionsApiAxiosParamCreator(configuration).findAllSuggestion(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific suggestion
         * @summary Get suggestion information
         * @param {string} authorization JWT token
         * @param {number} id ID of suggestion to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findOneSuggestion(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20086>> {
            const localVarAxiosArgs = await SuggestionsApiAxiosParamCreator(configuration).findOneSuggestion(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a suggestion's information
         * @summary Update a suggestion's information
         * @param {UpdateCoursIdBody1} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSuggestion(body: UpdateCoursIdBody1, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20088>> {
            const localVarAxiosArgs = await SuggestionsApiAxiosParamCreator(configuration).updateSuggestion(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SuggestionsApi - factory interface
 * @export
 */
export const SuggestionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new suggestion resource
         * @summary Create a new suggestion
         * @param {SuggestionCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSuggestion(body: SuggestionCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse20087> {
            return SuggestionsApiFp(configuration).createSuggestion(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all suggestions
         * @summary Get all suggestions
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllSuggestion(authorization: string, options?: any): AxiosPromise<InlineResponse20085> {
            return SuggestionsApiFp(configuration).findAllSuggestion(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific suggestion
         * @summary Get suggestion information
         * @param {string} authorization JWT token
         * @param {number} id ID of suggestion to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findOneSuggestion(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20086> {
            return SuggestionsApiFp(configuration).findOneSuggestion(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a suggestion's information
         * @summary Update a suggestion's information
         * @param {UpdateCoursIdBody1} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSuggestion(body: UpdateCoursIdBody1, authorization: string, options?: any): AxiosPromise<InlineResponse20088> {
            return SuggestionsApiFp(configuration).updateSuggestion(body, authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SuggestionsApi - object-oriented interface
 * @export
 * @class SuggestionsApi
 * @extends {BaseAPI}
 */
export class SuggestionsApi extends BaseAPI {
    /**
     * Create a new suggestion resource
     * @summary Create a new suggestion
     * @param {SuggestionCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApi
     */
    public createSuggestion(body: SuggestionCreateBody, authorization: string, options?: any) {
        return SuggestionsApiFp(this.configuration).createSuggestion(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all suggestions
     * @summary Get all suggestions
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApi
     */
    public findAllSuggestion(authorization: string, options?: any) {
        return SuggestionsApiFp(this.configuration).findAllSuggestion(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific suggestion
     * @summary Get suggestion information
     * @param {string} authorization JWT token
     * @param {number} id ID of suggestion to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApi
     */
    public findOneSuggestion(authorization: string, id: number, options?: any) {
        return SuggestionsApiFp(this.configuration).findOneSuggestion(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a suggestion's information
     * @summary Update a suggestion's information
     * @param {UpdateCoursIdBody1} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SuggestionsApi
     */
    public updateSuggestion(body: UpdateCoursIdBody1, authorization: string, options?: any) {
        return SuggestionsApiFp(this.configuration).updateSuggestion(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
