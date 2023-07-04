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
import { InlineResponse20038 } from '../models';
import { InlineResponse20039 } from '../models';
import { InlineResponse20040 } from '../models';
import { InlineResponse20041 } from '../models';
import { InlineResponse2015 } from '../models';
import { InlineResponse40015 } from '../models';
import { InlineResponse40016 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40418 } from '../models';
import { InlineResponse40419 } from '../models';
import { InlineResponse40420 } from '../models';
import { InlineResponse4223 } from '../models';
/**
 * MembreconseilsApi - axios parameter creator
 * @export
 */
export const MembreconseilsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new membreconseil resource
         * @summary Create a new membreconseil
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMembreConseil: async (idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'idChef' is not null or undefined
            if (idChef === null || idChef === undefined) {
                throw new RequiredError('idChef','Required parameter idChef was null or undefined when calling createMembreConseil.');
            }
            // verify required parameter 'idSurveillantG' is not null or undefined
            if (idSurveillantG === null || idSurveillantG === undefined) {
                throw new RequiredError('idSurveillantG','Required parameter idSurveillantG was null or undefined when calling createMembreConseil.');
            }
            // verify required parameter 'idRepresentantE' is not null or undefined
            if (idRepresentantE === null || idRepresentantE === undefined) {
                throw new RequiredError('idRepresentantE','Required parameter idRepresentantE was null or undefined when calling createMembreConseil.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createMembreConseil.');
            }
            const localVarPath = `/api/membreconseils/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (idChef !== undefined) { 
                localVarFormParams.append('idChef', idChef as any);
            }

            if (idSurveillantG !== undefined) { 
                localVarFormParams.append('idSurveillantG', idSurveillantG as any);
            }

            if (idRepresentantE !== undefined) { 
                localVarFormParams.append('idRepresentantE', idRepresentantE as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete an membreconseil resource
         * @summary Delete an membreconseil
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMembreConseil: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteMembreConseil.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteMembreConseil.');
            }
            const localVarPath = `/api/membreconseils/delete/{id}`
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
         * Retrieve a list of all membreconseils
         * @summary Get all membreconseils
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membreconseilsIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling membreconseilsIndex.');
            }
            const localVarPath = `/api/membreconseils/findAll`;
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
         * Update a membreconseil's information
         * @summary Update a membreconseil's information
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {number} membreconseilId ID of membreconseil to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMembreConseil: async (idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, membreconseilId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'idChef' is not null or undefined
            if (idChef === null || idChef === undefined) {
                throw new RequiredError('idChef','Required parameter idChef was null or undefined when calling updateMembreConseil.');
            }
            // verify required parameter 'idSurveillantG' is not null or undefined
            if (idSurveillantG === null || idSurveillantG === undefined) {
                throw new RequiredError('idSurveillantG','Required parameter idSurveillantG was null or undefined when calling updateMembreConseil.');
            }
            // verify required parameter 'idRepresentantE' is not null or undefined
            if (idRepresentantE === null || idRepresentantE === undefined) {
                throw new RequiredError('idRepresentantE','Required parameter idRepresentantE was null or undefined when calling updateMembreConseil.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateMembreConseil.');
            }
            // verify required parameter 'membreconseilId' is not null or undefined
            if (membreconseilId === null || membreconseilId === undefined) {
                throw new RequiredError('membreconseilId','Required parameter membreconseilId was null or undefined when calling updateMembreConseil.');
            }
            const localVarPath = `/api/membreconseils/update/{membreconseilId}`
                .replace(`{${"membreconseilId"}}`, encodeURIComponent(String(membreconseilId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


            if (idChef !== undefined) { 
                localVarFormParams.append('idChef', idChef as any);
            }

            if (idSurveillantG !== undefined) { 
                localVarFormParams.append('idSurveillantG', idSurveillantG as any);
            }

            if (idRepresentantE !== undefined) { 
                localVarFormParams.append('idRepresentantE', idRepresentantE as any);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
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
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about a specific membreconseil
         * @summary Get membreconseil information
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewMembreConseil: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling viewMembreConseil.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewMembreConseil.');
            }
            const localVarPath = `/api/membreconseils/findOne/{id}`
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
 * MembreconseilsApi - functional programming interface
 * @export
 */
export const MembreconseilsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new membreconseil resource
         * @summary Create a new membreconseil
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2015>> {
            const localVarAxiosArgs = await MembreconseilsApiAxiosParamCreator(configuration).createMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an membreconseil resource
         * @summary Delete an membreconseil
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMembreConseil(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20041>> {
            const localVarAxiosArgs = await MembreconseilsApiAxiosParamCreator(configuration).deleteMembreConseil(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all membreconseils
         * @summary Get all membreconseils
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async membreconseilsIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20038>> {
            const localVarAxiosArgs = await MembreconseilsApiAxiosParamCreator(configuration).membreconseilsIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a membreconseil's information
         * @summary Update a membreconseil's information
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {number} membreconseilId ID of membreconseil to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, membreconseilId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20040>> {
            const localVarAxiosArgs = await MembreconseilsApiAxiosParamCreator(configuration).updateMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, membreconseilId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific membreconseil
         * @summary Get membreconseil information
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewMembreConseil(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20039>> {
            const localVarAxiosArgs = await MembreconseilsApiAxiosParamCreator(configuration).viewMembreConseil(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MembreconseilsApi - factory interface
 * @export
 */
export const MembreconseilsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new membreconseil resource
         * @summary Create a new membreconseil
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, options?: any): AxiosPromise<InlineResponse2015> {
            return MembreconseilsApiFp(configuration).createMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an membreconseil resource
         * @summary Delete an membreconseil
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMembreConseil(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20041> {
            return MembreconseilsApiFp(configuration).deleteMembreConseil(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all membreconseils
         * @summary Get all membreconseils
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        membreconseilsIndex(authorization: string, options?: any): AxiosPromise<InlineResponse20038> {
            return MembreconseilsApiFp(configuration).membreconseilsIndex(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a membreconseil's information
         * @summary Update a membreconseil's information
         * @param {number} idChef 
         * @param {number} idSurveillantG 
         * @param {number} idRepresentantE 
         * @param {string} authorization JWT token
         * @param {number} membreconseilId ID of membreconseil to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, membreconseilId: number, options?: any): AxiosPromise<InlineResponse20040> {
            return MembreconseilsApiFp(configuration).updateMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, membreconseilId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific membreconseil
         * @summary Get membreconseil information
         * @param {string} authorization JWT token
         * @param {number} id ID of membreconseil to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewMembreConseil(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20039> {
            return MembreconseilsApiFp(configuration).viewMembreConseil(authorization, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MembreconseilsApi - object-oriented interface
 * @export
 * @class MembreconseilsApi
 * @extends {BaseAPI}
 */
export class MembreconseilsApi extends BaseAPI {
    /**
     * Create a new membreconseil resource
     * @summary Create a new membreconseil
     * @param {number} idChef 
     * @param {number} idSurveillantG 
     * @param {number} idRepresentantE 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembreconseilsApi
     */
    public createMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, options?: any) {
        return MembreconseilsApiFp(this.configuration).createMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an membreconseil resource
     * @summary Delete an membreconseil
     * @param {string} authorization JWT token
     * @param {number} id ID of membreconseil to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembreconseilsApi
     */
    public deleteMembreConseil(authorization: string, id: number, options?: any) {
        return MembreconseilsApiFp(this.configuration).deleteMembreConseil(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all membreconseils
     * @summary Get all membreconseils
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembreconseilsApi
     */
    public membreconseilsIndex(authorization: string, options?: any) {
        return MembreconseilsApiFp(this.configuration).membreconseilsIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a membreconseil's information
     * @summary Update a membreconseil's information
     * @param {number} idChef 
     * @param {number} idSurveillantG 
     * @param {number} idRepresentantE 
     * @param {string} authorization JWT token
     * @param {number} membreconseilId ID of membreconseil to update in this request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembreconseilsApi
     */
    public updateMembreConseil(idChef: number, idSurveillantG: number, idRepresentantE: number, authorization: string, membreconseilId: number, options?: any) {
        return MembreconseilsApiFp(this.configuration).updateMembreConseil(idChef, idSurveillantG, idRepresentantE, authorization, membreconseilId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific membreconseil
     * @summary Get membreconseil information
     * @param {string} authorization JWT token
     * @param {number} id ID of membreconseil to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembreconseilsApi
     */
    public viewMembreConseil(authorization: string, id: number, options?: any) {
        return MembreconseilsApiFp(this.configuration).viewMembreConseil(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
}
