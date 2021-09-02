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
 * @interface GamePeriod
 */
export interface GamePeriod {
    /**
     * 
     * @type {string}
     * @memberof GamePeriod
     */
    periodType?: any;
    /**
     * 
     * @type {Date}
     * @memberof GamePeriod
     */
    startTime?: any;
    /**
     * 
     * @type {Date}
     * @memberof GamePeriod
     */
    endTime?: any;
    /**
     * 
     * @type {number}
     * @memberof GamePeriod
     */
    num?: any;
    /**
     * 
     * @type {string}
     * @memberof GamePeriod
     */
    ordinalNum?: any;
    /**
     * 
     * @type {GamePeriodHome}
     * @memberof GamePeriod
     */
    home?: any;
    /**
     * 
     * @type {GamePeriodAway}
     * @memberof GamePeriod
     */
    away?: any;
}