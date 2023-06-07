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
import { InlineResponse20019 } from '../models';
import { InlineResponse20020 } from '../models';
import { InlineResponse2015 } from '../models';
import { InlineResponse40010 } from '../models';
import { InlineResponse4009 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse4047 } from '../models';
import { InlineResponse4222 } from '../models';
import { RolesCreateBody } from '../models';
/**
 * RolesApi - axios parameter creator
 * @export
 */
export const RolesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new role resource
         * @summary Create a new role
         * @param {RolesCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRole: async (body: RolesCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createRole.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createRole.');
            }
            const localVarPath = `/api/roles/create`;
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
         * Delete an role resource
         * @summary Delete an role
         * @param {string} authorization JWT token
         * @param {number} id ID of role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRole: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteRole.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteRole.');
            }
            const localVarPath = `/api/roles/delete/{id}`
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
         * Retrieve a list of all roles
         * @summary Get all roles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling rolesIndex.');
            }
            const localVarPath = `/api/roles/findAll`;
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
         * 
         * @summary Update a specific role
         * @param {string} authorization JWT token
         * @param {number} id ID of eleve to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRole: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateRole.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling updateRole.');
            }
            const localVarPath = `/api/roles/update/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
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
         * Get information about a specific role
         * @summary Get role information
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewRole: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling viewRole.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewRole.');
            }
            const localVarPath = `/api/roles/findOne/{id}`
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
 * RolesApi - functional programming interface
 * @export
 */
export const RolesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new role resource
         * @summary Create a new role
         * @param {RolesCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRole(body: RolesCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2015>> {
            const localVarAxiosArgs = await RolesApiAxiosParamCreator(configuration).createRole(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an role resource
         * @summary Delete an role
         * @param {string} authorization JWT token
         * @param {number} id ID of role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteRole(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await RolesApiAxiosParamCreator(configuration).deleteRole(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all roles
         * @summary Get all roles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rolesIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20019>> {
            const localVarAxiosArgs = await RolesApiAxiosParamCreator(configuration).rolesIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a specific role
         * @param {string} authorization JWT token
         * @param {number} id ID of eleve to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRole(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2015>> {
            const localVarAxiosArgs = await RolesApiAxiosParamCreator(configuration).updateRole(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific role
         * @summary Get role information
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewRole(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20020>> {
            const localVarAxiosArgs = await RolesApiAxiosParamCreator(configuration).viewRole(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RolesApi - factory interface
 * @export
 */
export const RolesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new role resource
         * @summary Create a new role
         * @param {RolesCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRole(body: RolesCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse2015> {
            return RolesApiFp(configuration).createRole(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an role resource
         * @summary Delete an role
         * @param {string} authorization JWT token
         * @param {number} id ID of role to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteRole(authorization: string, id: number, options?: any): AxiosPromise<void> {
            return RolesApiFp(configuration).deleteRole(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all roles
         * @summary Get all roles
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rolesIndex(authorization: string, options?: any): AxiosPromise<InlineResponse20019> {
            return RolesApiFp(configuration).rolesIndex(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a specific role
         * @param {string} authorization JWT token
         * @param {number} id ID of eleve to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRole(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse2015> {
            return RolesApiFp(configuration).updateRole(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific role
         * @summary Get role information
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewRole(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20020> {
            return RolesApiFp(configuration).viewRole(authorization, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RolesApi - object-oriented interface
 * @export
 * @class RolesApi
 * @extends {BaseAPI}
 */
export class RolesApi extends BaseAPI {
    /**
     * Create a new role resource
     * @summary Create a new role
     * @param {RolesCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public createRole(body: RolesCreateBody, authorization: string, options?: any) {
        return RolesApiFp(this.configuration).createRole(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an role resource
     * @summary Delete an role
     * @param {string} authorization JWT token
     * @param {number} id ID of role to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public deleteRole(authorization: string, id: number, options?: any) {
        return RolesApiFp(this.configuration).deleteRole(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all roles
     * @summary Get all roles
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public rolesIndex(authorization: string, options?: any) {
        return RolesApiFp(this.configuration).rolesIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a specific role
     * @param {string} authorization JWT token
     * @param {number} id ID of eleve to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public updateRole(authorization: string, id: number, options?: any) {
        return RolesApiFp(this.configuration).updateRole(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific role
     * @summary Get role information
     * @param {string} authorization JWT token
     * @param {number} id ID of role to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RolesApi
     */
    public viewRole(authorization: string, id: number, options?: any) {
        return RolesApiFp(this.configuration).viewRole(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
}
