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
 * @interface GameLinescore
 */
export interface GameLinescore {
    /**
     * 
     * @type {number}
     * @memberof GameLinescore
     */
    currentPeriod?: any;
    /**
     * 
     * @type {string}
     * @memberof GameLinescore
     */
    currentPeriodOrdinal?: any;
    /**
     * 
     * @type {string}
     * @memberof GameLinescore
     */
    currentPeriodTimeRemaining?: any;
    /**
     * 
     * @type {Array&lt;GamePeriod&gt;}
     * @memberof GameLinescore
     */
    periods?: any;
    /**
     * 
     * @type {GameLinescoreShootoutInfo}
     * @memberof GameLinescore
     */
    shootoutInfo?: any;
    /**
     * 
     * @type {GameLinescoreTeams}
     * @memberof GameLinescore
     */
    teams?: any;
    /**
     * 
     * @type {string}
     * @memberof GameLinescore
     */
    powerPlayStrength?: any;
    /**
     * 
     * @type {boolean}
     * @memberof GameLinescore
     */
    hasShootout?: any;
    /**
     * 
     * @type {GameLinescoreIntermissionInfo}
     * @memberof GameLinescore
     */
    intermissionInfo?: any;
    /**
     * 
     * @type {GameLinescorePowerPlayInfo}
     * @memberof GameLinescore
     */
    powerPlayInfo?: any;
}
