/* tslint:disable */
/* eslint-disable */
/**
 * NHL API
 * Documenting the publicly accessible portions of the NHL API.
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
import { Conferences } from '../models';
import { Division } from '../models';
/**
 * ConferencesApi - axios parameter creator
 * @export
 */
export const ConferencesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * You can use this to also retrieve inactive conferences. For example, the ID for the World Cup of Hockey is `7`.
         * @summary Get an NHL conference.
         * @param {number} id The ID of the conference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConference: async (id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getConference.');
            }
            const localVarPath = `/conferences/{id}`
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
         * This only retrieves active conferences. For inactive conferences, use `/conferences/{id}`.
         * @summary Get all current NHL conferences.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConferences: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/conferences`;
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
    }
};

/**
 * ConferencesApi - functional programming interface
 * @export
 */
export const ConferencesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * You can use this to also retrieve inactive conferences. For example, the ID for the World Cup of Hockey is `7`.
         * @summary Get an NHL conference.
         * @param {number} id The ID of the conference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConference(id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Division>> {
            const localVarAxiosArgs = await ConferencesApiAxiosParamCreator(configuration).getConference(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This only retrieves active conferences. For inactive conferences, use `/conferences/{id}`.
         * @summary Get all current NHL conferences.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getConferences(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Conferences>> {
            const localVarAxiosArgs = await ConferencesApiAxiosParamCreator(configuration).getConferences(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ConferencesApi - factory interface
 * @export
 */
export const ConferencesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * You can use this to also retrieve inactive conferences. For example, the ID for the World Cup of Hockey is `7`.
         * @summary Get an NHL conference.
         * @param {number} id The ID of the conference.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConference(id: number, options?: any): AxiosPromise<Division> {
            return ConferencesApiFp(configuration).getConference(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This only retrieves active conferences. For inactive conferences, use `/conferences/{id}`.
         * @summary Get all current NHL conferences.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getConferences(options?: any): AxiosPromise<Conferences> {
            return ConferencesApiFp(configuration).getConferences(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConferencesApi - object-oriented interface
 * @export
 * @class ConferencesApi
 * @extends {BaseAPI}
 */
export class ConferencesApi extends BaseAPI {
    /**
     * You can use this to also retrieve inactive conferences. For example, the ID for the World Cup of Hockey is `7`.
     * @summary Get an NHL conference.
     * @param {number} id The ID of the conference.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConferencesApi
     */
    public getConference(id: number, options?: any) {
        return ConferencesApiFp(this.configuration).getConference(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This only retrieves active conferences. For inactive conferences, use `/conferences/{id}`.
     * @summary Get all current NHL conferences.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConferencesApi
     */
    public getConferences(options?: any) {
        return ConferencesApiFp(this.configuration).getConferences(options).then((request) => request(this.axios, this.basePath));
    }
}
