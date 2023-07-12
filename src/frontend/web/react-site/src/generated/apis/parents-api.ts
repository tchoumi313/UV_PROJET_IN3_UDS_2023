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
import { InlineResponse20050 } from '../models';
import { InlineResponse20051 } from '../models';
import { InlineResponse20052 } from '../models';
import { InlineResponse20053 } from '../models';
import { InlineResponse20054 } from '../models';
import { InlineResponse40019 } from '../models';
import { InlineResponse40020 } from '../models';
import { InlineResponse401 } from '../models';
import { InlineResponse40425 } from '../models';
import { InlineResponse40426 } from '../models';
import { InlineResponse4224 } from '../models';
/**
 * ParentsApi - axios parameter creator
 * @export
 */
export const ParentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new parent resource
         * @summary Create a new parent
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createParent: async (email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            if (email === null || email === undefined) {
                throw new RequiredError('email','Required parameter email was null or undefined when calling createParent.');
            }
            // verify required parameter 'firstName' is not null or undefined
            if (firstName === null || firstName === undefined) {
                throw new RequiredError('firstName','Required parameter firstName was null or undefined when calling createParent.');
            }
            // verify required parameter 'lastName' is not null or undefined
            if (lastName === null || lastName === undefined) {
                throw new RequiredError('lastName','Required parameter lastName was null or undefined when calling createParent.');
            }
            // verify required parameter 'dateDeNaissance' is not null or undefined
            if (dateDeNaissance === null || dateDeNaissance === undefined) {
                throw new RequiredError('dateDeNaissance','Required parameter dateDeNaissance was null or undefined when calling createParent.');
            }
            // verify required parameter 'lieuDeNaissance' is not null or undefined
            if (lieuDeNaissance === null || lieuDeNaissance === undefined) {
                throw new RequiredError('lieuDeNaissance','Required parameter lieuDeNaissance was null or undefined when calling createParent.');
            }
            // verify required parameter 'photo' is not null or undefined
            if (photo === null || photo === undefined) {
                throw new RequiredError('photo','Required parameter photo was null or undefined when calling createParent.');
            }
            // verify required parameter 'sexe' is not null or undefined
            if (sexe === null || sexe === undefined) {
                throw new RequiredError('sexe','Required parameter sexe was null or undefined when calling createParent.');
            }
            // verify required parameter 'telephone' is not null or undefined
            if (telephone === null || telephone === undefined) {
                throw new RequiredError('telephone','Required parameter telephone was null or undefined when calling createParent.');
            }
            // verify required parameter 'profession' is not null or undefined
            if (profession === null || profession === undefined) {
                throw new RequiredError('profession','Required parameter profession was null or undefined when calling createParent.');
            }
            // verify required parameter 'eleveIds' is not null or undefined
            if (eleveIds === null || eleveIds === undefined) {
                throw new RequiredError('eleveIds','Required parameter eleveIds was null or undefined when calling createParent.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling createParent.');
            }
            const localVarPath = `/api/parents/create`;
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


            if (email !== undefined) { 
                localVarFormParams.append('email', email as any);
            }

            if (firstName !== undefined) { 
                localVarFormParams.append('firstName', firstName as any);
            }

            if (lastName !== undefined) { 
                localVarFormParams.append('lastName', lastName as any);
            }

            if (dateDeNaissance !== undefined) { 
                localVarFormParams.append('dateDeNaissance', dateDeNaissance as any);
            }

            if (lieuDeNaissance !== undefined) { 
                localVarFormParams.append('lieuDeNaissance', lieuDeNaissance as any);
            }

            if (photo !== undefined) { 
                localVarFormParams.append('photo', photo as any);
            }

            if (sexe !== undefined) { 
                localVarFormParams.append('sexe', sexe as any);
            }

            if (telephone !== undefined) { 
                localVarFormParams.append('telephone', telephone as any);
            }

            if (profession !== undefined) { 
                localVarFormParams.append('profession', profession as any);
            }
            if (eleveIds) {
                eleveIds.forEach((element) => {
                    localVarFormParams.append('eleveIds', element as any);
                })
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
         * Delete an parent resource
         * @summary Delete an parent
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteParent: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling deleteParent.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteParent.');
            }
            const localVarPath = `/api/parents/delete/{id}`
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
         * Retrieve a list of all parents
         * @summary Get all parents
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parentsIndex: async (authorization: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling parentsIndex.');
            }
            const localVarPath = `/api/parents/findAll`;
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
         * Update a parent's information
         * @summary Update a parent's information
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {number} parentId ID of parent to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateParent: async (email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, parentId: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            if (email === null || email === undefined) {
                throw new RequiredError('email','Required parameter email was null or undefined when calling updateParent.');
            }
            // verify required parameter 'firstName' is not null or undefined
            if (firstName === null || firstName === undefined) {
                throw new RequiredError('firstName','Required parameter firstName was null or undefined when calling updateParent.');
            }
            // verify required parameter 'lastName' is not null or undefined
            if (lastName === null || lastName === undefined) {
                throw new RequiredError('lastName','Required parameter lastName was null or undefined when calling updateParent.');
            }
            // verify required parameter 'dateDeNaissance' is not null or undefined
            if (dateDeNaissance === null || dateDeNaissance === undefined) {
                throw new RequiredError('dateDeNaissance','Required parameter dateDeNaissance was null or undefined when calling updateParent.');
            }
            // verify required parameter 'lieuDeNaissance' is not null or undefined
            if (lieuDeNaissance === null || lieuDeNaissance === undefined) {
                throw new RequiredError('lieuDeNaissance','Required parameter lieuDeNaissance was null or undefined when calling updateParent.');
            }
            // verify required parameter 'photo' is not null or undefined
            if (photo === null || photo === undefined) {
                throw new RequiredError('photo','Required parameter photo was null or undefined when calling updateParent.');
            }
            // verify required parameter 'sexe' is not null or undefined
            if (sexe === null || sexe === undefined) {
                throw new RequiredError('sexe','Required parameter sexe was null or undefined when calling updateParent.');
            }
            // verify required parameter 'telephone' is not null or undefined
            if (telephone === null || telephone === undefined) {
                throw new RequiredError('telephone','Required parameter telephone was null or undefined when calling updateParent.');
            }
            // verify required parameter 'profession' is not null or undefined
            if (profession === null || profession === undefined) {
                throw new RequiredError('profession','Required parameter profession was null or undefined when calling updateParent.');
            }
            // verify required parameter 'eleveIds' is not null or undefined
            if (eleveIds === null || eleveIds === undefined) {
                throw new RequiredError('eleveIds','Required parameter eleveIds was null or undefined when calling updateParent.');
            }
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling updateParent.');
            }
            // verify required parameter 'parentId' is not null or undefined
            if (parentId === null || parentId === undefined) {
                throw new RequiredError('parentId','Required parameter parentId was null or undefined when calling updateParent.');
            }
            const localVarPath = `/api/parents/update/{parentId}`
                .replace(`{${"parentId"}}`, encodeURIComponent(String(parentId)));
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


            if (email !== undefined) { 
                localVarFormParams.append('email', email as any);
            }

            if (firstName !== undefined) { 
                localVarFormParams.append('firstName', firstName as any);
            }

            if (lastName !== undefined) { 
                localVarFormParams.append('lastName', lastName as any);
            }

            if (dateDeNaissance !== undefined) { 
                localVarFormParams.append('dateDeNaissance', dateDeNaissance as any);
            }

            if (lieuDeNaissance !== undefined) { 
                localVarFormParams.append('lieuDeNaissance', lieuDeNaissance as any);
            }

            if (photo !== undefined) { 
                localVarFormParams.append('photo', photo as any);
            }

            if (sexe !== undefined) { 
                localVarFormParams.append('sexe', sexe as any);
            }

            if (telephone !== undefined) { 
                localVarFormParams.append('telephone', telephone as any);
            }

            if (profession !== undefined) { 
                localVarFormParams.append('profession', profession as any);
            }
            if (eleveIds) {
                eleveIds.forEach((element) => {
                    localVarFormParams.append('eleveIds', element as any);
                })
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
         * Get information about a specific parent
         * @summary Get parent information
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewparent: async (authorization: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            if (authorization === null || authorization === undefined) {
                throw new RequiredError('authorization','Required parameter authorization was null or undefined when calling viewparent.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling viewparent.');
            }
            const localVarPath = `/api/parents/findOne/{parentId}`
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
 * ParentsApi - functional programming interface
 * @export
 */
export const ParentsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new parent resource
         * @summary Create a new parent
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20052>> {
            const localVarAxiosArgs = await ParentsApiAxiosParamCreator(configuration).createParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an parent resource
         * @summary Delete an parent
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteParent(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20054>> {
            const localVarAxiosArgs = await ParentsApiAxiosParamCreator(configuration).deleteParent(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a list of all parents
         * @summary Get all parents
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async parentsIndex(authorization: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20050>> {
            const localVarAxiosArgs = await ParentsApiAxiosParamCreator(configuration).parentsIndex(authorization, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a parent's information
         * @summary Update a parent's information
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {number} parentId ID of parent to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, parentId: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20053>> {
            const localVarAxiosArgs = await ParentsApiAxiosParamCreator(configuration).updateParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, parentId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific parent
         * @summary Get parent information
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async viewparent(authorization: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20051>> {
            const localVarAxiosArgs = await ParentsApiAxiosParamCreator(configuration).viewparent(authorization, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ParentsApi - factory interface
 * @export
 */
export const ParentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new parent resource
         * @summary Create a new parent
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, options?: any): AxiosPromise<InlineResponse20052> {
            return ParentsApiFp(configuration).createParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an parent resource
         * @summary Delete an parent
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteParent(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20054> {
            return ParentsApiFp(configuration).deleteParent(authorization, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a list of all parents
         * @summary Get all parents
         * @param {string} authorization JWT token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        parentsIndex(authorization: string, options?: any): AxiosPromise<InlineResponse20050> {
            return ParentsApiFp(configuration).parentsIndex(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a parent's information
         * @summary Update a parent's information
         * @param {string} email 
         * @param {string} firstName 
         * @param {string} lastName 
         * @param {string} dateDeNaissance 
         * @param {string} lieuDeNaissance 
         * @param {string} photo 
         * @param {string} sexe 
         * @param {string} telephone 
         * @param {string} profession 
         * @param {Array&lt;number&gt;} eleveIds 
         * @param {string} authorization JWT token
         * @param {number} parentId ID of parent to update in this request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, parentId: number, options?: any): AxiosPromise<InlineResponse20053> {
            return ParentsApiFp(configuration).updateParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, parentId, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific parent
         * @summary Get parent information
         * @param {string} authorization JWT token
         * @param {number} id ID of parent to get information for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        viewparent(authorization: string, id: number, options?: any): AxiosPromise<InlineResponse20051> {
            return ParentsApiFp(configuration).viewparent(authorization, id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ParentsApi - object-oriented interface
 * @export
 * @class ParentsApi
 * @extends {BaseAPI}
 */
export class ParentsApi extends BaseAPI {
    /**
     * Create a new parent resource
     * @summary Create a new parent
     * @param {string} email 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} dateDeNaissance 
     * @param {string} lieuDeNaissance 
     * @param {string} photo 
     * @param {string} sexe 
     * @param {string} telephone 
     * @param {string} profession 
     * @param {Array&lt;number&gt;} eleveIds 
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ParentsApi
     */
    public createParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, options?: any) {
        return ParentsApiFp(this.configuration).createParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an parent resource
     * @summary Delete an parent
     * @param {string} authorization JWT token
     * @param {number} id ID of parent to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ParentsApi
     */
    public deleteParent(authorization: string, id: number, options?: any) {
        return ParentsApiFp(this.configuration).deleteParent(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a list of all parents
     * @summary Get all parents
     * @param {string} authorization JWT token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ParentsApi
     */
    public parentsIndex(authorization: string, options?: any) {
        return ParentsApiFp(this.configuration).parentsIndex(authorization, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a parent's information
     * @summary Update a parent's information
     * @param {string} email 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} dateDeNaissance 
     * @param {string} lieuDeNaissance 
     * @param {string} photo 
     * @param {string} sexe 
     * @param {string} telephone 
     * @param {string} profession 
     * @param {Array&lt;number&gt;} eleveIds 
     * @param {string} authorization JWT token
     * @param {number} parentId ID of parent to update in this request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ParentsApi
     */
    public updateParent(email: string, firstName: string, lastName: string, dateDeNaissance: string, lieuDeNaissance: string, photo: string, sexe: string, telephone: string, profession: string, eleveIds: Array<number>, authorization: string, parentId: number, options?: any) {
        return ParentsApiFp(this.configuration).updateParent(email, firstName, lastName, dateDeNaissance, lieuDeNaissance, photo, sexe, telephone, profession, eleveIds, authorization, parentId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific parent
     * @summary Get parent information
     * @param {string} authorization JWT token
     * @param {number} id ID of parent to get information for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ParentsApi
     */
    public viewparent(authorization: string, id: number, options?: any) {
        return ParentsApiFp(this.configuration).viewparent(authorization, id, options).then((request) => request(this.axios, this.basePath));
    }
}
