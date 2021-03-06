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
 * @interface GamePlayAbout
 */
export interface GamePlayAbout {
    /**
     * 
     * @type {number}
     * @memberof GamePlayAbout
     */
    eventIdx?: any;
    /**
     * 
     * @type {number}
     * @memberof GamePlayAbout
     */
    eventId?: any;
    /**
     * 
     * @type {number}
     * @memberof GamePlayAbout
     */
    period?: any;
    /**
     * 
     * @type {string}
     * @memberof GamePlayAbout
     */
    periodType?: any;
    /**
     * 
     * @type {string}
     * @memberof GamePlayAbout
     */
    ordinalNum?: any;
    /**
     * 
     * @type {string}
     * @memberof GamePlayAbout
     */
    periodTime?: any;
    /**
     * 
     * @type {string}
     * @memberof GamePlayAbout
     */
    periodTimeRemaining?: any;
    /**
     * 
     * @type {Date}
     * @memberof GamePlayAbout
     */
    dateTime?: any;
    /**
     * 
     * @type {GamePlayAboutGoals}
     * @memberof GamePlayAbout
     */
    goals?: any;
}
