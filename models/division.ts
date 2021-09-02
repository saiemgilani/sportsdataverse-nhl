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
/**
 * 
 * @export
 * @interface Division
 */
export interface Division {
    /**
     * 
     * @type {number}
     * @memberof Division
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof Division
     */
    name?: any;
    /**
     * 
     * @type {string}
     * @memberof Division
     */
    link?: any;
    /**
     * 
     * @type {string}
     * @memberof Division
     */
    abbreviation?: any;
    /**
     * 
     * @type {DivisionConference}
     * @memberof Division
     */
    conference?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Division
     */
    active?: any;
}
