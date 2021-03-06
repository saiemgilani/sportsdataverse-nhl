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
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    copyright?: any;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    totalItems?: any;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    totalEvents?: any;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    totalGames?: any;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    totalMatches?: any;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    wait?: any;
    /**
     * 
     * @type {Array&lt;ScheduleDay&gt;}
     * @memberof Schedule
     */
    dates?: any;
}
