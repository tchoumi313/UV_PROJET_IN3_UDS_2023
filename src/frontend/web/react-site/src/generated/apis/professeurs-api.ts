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
import { InlineResponse20015 } from '../models';
import { InlineResponse20016 } from '../models';
import { InlineResponse20017 } from '../models';
import { InlineResponse2014 } from '../models';
import { InlineResponse4003 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse4045 } from '../models';
import { InlineResponse4046 } from '../models';
import { InlineResponse4221 } from '../models';
import { ProfesseursCreateBody } from '../models';
import { ProfesseursUpdateBody } from '../models';
/**
 * ProfesseursApi - axios parameter creator
 * @export
 */
export const ProfesseursApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new professeur resource
         * @summary Create a new professeur
         * @param {ProfesseursCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfesseur: async (body: ProfesseursCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createProfesseur.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createProfesseur.');
            }
            const localVarPath = `/api/professeurs/create`;
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
         * Delete an professor resource
         * @summary Delete an professor
         * @param {string} authorization JWT token
         * @param {number} id ID of professor to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfesseur: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteProfesseur.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteProfesseur.');
            }
            const localVarPath = `/api/professeurs/delete/{id}`
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
         * Retrieve a list of all professeurs
         * @summary Get all professeurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        professeursIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling professeursIndex.');
            }
            const localVarPath = `/api/professeurs/findAll`;
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
         * Update a professeur's information
         * @summary Update a professeur's information
         * @param {ProfesseursUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfesseur: async (body: ProfesseursUpdateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateProfesseur.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateProfesseur.');
            }
            const localVarPath = `/api/professeurs/update`;
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
         * Get information about a specific professor
         * @summary Get professeur information
         * @param {string} authorization JWT token
         * @param {number} id ID of professeur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewProfesseur: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling viewProfesseur.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewProfesseur.');
            }
            const localVarPath = `/api/professeurs/findOne/{id}`
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
 * ProfesseursApi - functional programming interface
 * @export
 */
export const ProfesseursApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new professeur resource
         * @summary Create a new professeur
         * @param {ProfesseursCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createProfesseur(body: ProfesseursCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2014>> {
            const localVarAxiosArgs = await ProfesseursApiAxiosParamCreator(configuration).createProfesseur(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an professor resource
         * @summary Delete an professor
         * @param {string} authorization JWT token
         * @param {number} id ID of professor to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteProfesseur(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await ProfesseursApiAxiosParamCreator(configuration).deleteProfesseur(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all professeurs
         * @summary Get all professeurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async professeursIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20015>> {
            const localVarAxiosArgs = await ProfesseursApiAxiosParamCreator(configuration).professeursIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a professeur's information
         * @summary Update a professeur's information
         * @param {ProfesseursUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfesseur(body: ProfesseursUpdateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20017>> {
            const localVarAxiosArgs = await ProfesseursApiAxiosParamCreator(configuration).updateProfesseur(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific professor
         * @summary Get professeur information
         * @param {string} authorization JWT token
         * @param {number} id ID of professeur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewProfesseur(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20016>> {
            const localVarAxiosArgs = await ProfesseursApiAxiosParamCreator(configuration).viewProfesseur(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProfesseursApi - factory interface
 * @export
 */
export const ProfesseursApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new professeur resource
         * @summary Create a new professeur
         * @param {ProfesseursCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createProfesseur(body: ProfesseursCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse2014> {
            return ProfesseursApiFp(configuration).createProfesseur(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an professor resource
         * @summary Delete an professor
         * @param {string} authorization JWT token
         * @param {number} id ID of professor to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteProfesseur(authorization: string, id: number, options?: any): AxiosPromise<void> {
            return ProfesseursApiFp(configuration).deleteProfesseur(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all professeurs
         * @summary Get all professeurs
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        professeursIndex(authorization: string, options?: any): AxiosPromise<InlineResponse20015> {
            return ProfesseursApiFp(configuration).professeursIndex(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a professeur's information
         * @summary Update a professeur's information
         * @param {ProfesseursUpdateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfesseur(body: ProfesseursUpdateBody, authorization: string, options?: any): AxiosPromise<InlineResponse20017> {
            return ProfesseursApiFp(configuration).updateProfesseur(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific professor
         * @summary Get professeur information
         * @param {string} authorization JWT token
         * @param {number} id ID of professeur to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewProfesseur(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20016> {
            return ProfesseursApiFp(configuration).viewProfesseur(authorization, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProfesseursApi - object-oriented interface
 * @export
 * @class ProfesseursApi
 * @extends {BaseAPI}
 */
export class ProfesseursApi extends BaseAPI {
    /**
     * Create a new professeur resource
     * @summary Create a new professeur
     * @param {ProfesseursCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfesseursApi
     */
    public createProfesseur(body: ProfesseursCreateBody, authorization: string, options?: any) {
        return ProfesseursApiFp(this.configuration).createProfesseur(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an professor resource
     * @summary Delete an professor
     * @param {string} authorization JWT token
     * @param {number} id ID of professor to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfesseursApi
     */
    public deleteProfesseur(authorization: string, id: number, options?: any) {
        return ProfesseursApiFp(this.configuration).deleteProfesseur(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all professeurs
     * @summary Get all professeurs
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfesseursApi
     */
    public professeursIndex(authorization: string, options?: any) {
        return ProfesseursApiFp(this.configuration).professeursIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a professeur's information
     * @summary Update a professeur's information
     * @param {ProfesseursUpdateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfesseursApi
     */
    public updateProfesseur(body: ProfesseursUpdateBody, authorization: string, options?: any) {
        return ProfesseursApiFp(this.configuration).updateProfesseur(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific professor
     * @summary Get professeur information
     * @param {string} authorization JWT token
     * @param {number} id ID of professeur to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProfesseursApi
     */
    public viewProfesseur(authorization: string, id: number, options?: any) {
        return ProfesseursApiFp(this.configuration).viewProfesseur(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
}
