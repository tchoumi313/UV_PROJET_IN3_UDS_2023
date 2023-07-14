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
import { InlineResponse200100 } from '../models';
import { InlineResponse200101 } from '../models';
import { InlineResponse200102 } from '../models';
import { InlineResponse20113 } from '../models';
import { InlineResponse40038 } from '../models';
import { InlineResponse40039 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40448 } from '../models';
import { InlineResponse40449 } from '../models';
import { InlineResponse40450 } from '../models';
import { UpdateIdBody } from '../models';
import { UsersCreateBody } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a specific user by user ID
         * @summary Delete a specific user
         * @param {string} userId User ID
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser: async (userId: string, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteUser.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteUser.');
            }
            const localVarPath = `/api/users/delete/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
         * Retourner l'avatar d'un user
         * @summary Get an imgage by file name
         * @param {string} filename Name of user avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadUserAvatar: async (filename: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'filename' is not null or undefined
            if (filename === null || filename === undefined) {
                throw new RequiredError('filename','Required parameter filename was null or undefined when calling downloadUserAvatar.');
            }
            const localVarPath = `/api/files/download/{filename}`
                .replace(`{${"filename"}}`, encodeURIComponent(String(filename)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary Create a new user
         * @param {UsersCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreate: async (body: UsersCreateBody, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userCreate.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling userCreate.');
            }
            const localVarPath = `/api/users/create`;
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
         * Get information about a specific user by user ID
         * @summary Get a specific user
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userShow: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling userShow.');
            }
            const localVarPath = `/api/users/findOne/{userId}`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary Update a  user
         * @param {UpdateIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userUpdate: async (body: UpdateIdBody, authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling userUpdate.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling userUpdate.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling userUpdate.');
            }
            const localVarPath = `/api/users/update/{id}`
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
         * 
         * @summary Get a list of users
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling usersIndex.');
            }
            const localVarPath = `/api/users/findAll`;
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
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a specific user by user ID
         * @summary Delete a specific user
         * @param {string} userId User ID
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteUser(userId: string, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200102>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).deleteUser(userId, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retourner l'avatar d'un user
         * @summary Get an imgage by file name
         * @param {string} filename Name of user avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadUserAvatar(filename: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).downloadUserAvatar(filename, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create a new user
         * @param {UsersCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCreate(body: UsersCreateBody, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20113>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).userCreate(body, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific user by user ID
         * @summary Get a specific user
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userShow(userId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200101>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).userShow(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update a  user
         * @param {UpdateIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userUpdate(body: UpdateIdBody, authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20113>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).userUpdate(body, authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get a list of users
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200100>> {
            const localVarAxiosArgs = await UsersApiAxiosParamCreator(configuration).usersIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a specific user by user ID
         * @summary Delete a specific user
         * @param {string} userId User ID
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteUser(userId: string, authorization: string, options?: any): AxiosPromise<InlineResponse200102> {
            return UsersApiFp(configuration).deleteUser(userId, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Retourner l'avatar d'un user
         * @summary Get an imgage by file name
         * @param {string} filename Name of user avatar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadUserAvatar(filename: string, options?: any): AxiosPromise<void> {
            return UsersApiFp(configuration).downloadUserAvatar(filename, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new user
         * @param {UsersCreateBody} body 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCreate(body: UsersCreateBody, authorization: string, options?: any): AxiosPromise<InlineResponse20113> {
            return UsersApiFp(configuration).userCreate(body, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific user by user ID
         * @summary Get a specific user
         * @param {string} userId User ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userShow(userId: string, options?: any): AxiosPromise<InlineResponse200101> {
            return UsersApiFp(configuration).userShow(userId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a  user
         * @param {UpdateIdBody} body 
         * @param {string} authorization JWT token
         * @param {number} id ID of role to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userUpdate(body: UpdateIdBody, authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20113> {
            return UsersApiFp(configuration).userUpdate(body, authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a list of users
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersIndex(authorization: string, options?: any): AxiosPromise<InlineResponse200100> {
            return UsersApiFp(configuration).usersIndex(authorization, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Delete a specific user by user ID
     * @summary Delete a specific user
     * @param {string} userId User ID
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public deleteUser(userId: string, authorization: string, options?: any) {
        return UsersApiFp(this.configuration).deleteUser(userId, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retourner l'avatar d'un user
     * @summary Get an imgage by file name
     * @param {string} filename Name of user avatar
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public downloadUserAvatar(filename: string, options?: any) {
        return UsersApiFp(this.configuration).downloadUserAvatar(filename, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create a new user
     * @param {UsersCreateBody} body 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userCreate(body: UsersCreateBody, authorization: string, options?: any) {
        return UsersApiFp(this.configuration).userCreate(body, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific user by user ID
     * @summary Get a specific user
     * @param {string} userId User ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userShow(userId: string, options?: any) {
        return UsersApiFp(this.configuration).userShow(userId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update a  user
     * @param {UpdateIdBody} body 
     * @param {string} authorization JWT token
     * @param {number} id ID of role to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public userUpdate(body: UpdateIdBody, authorization: string, id: number, options?: any) {
        return UsersApiFp(this.configuration).userUpdate(body, authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get a list of users
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersIndex(authorization: string, options?: any) {
        return UsersApiFp(this.configuration).usersIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
}
