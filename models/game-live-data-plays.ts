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
 * @interface GameLiveDataPlays
 */
export interface GameLiveDataPlays {
    /**
     * 
     * @type {Array&lt;GamePlay&gt;}
     * @memberof GameLiveDataPlays
     */
    allPlays?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameLiveDataPlays
     */
    scoringPlays?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameLiveDataPlays
     */
    penaltyPlays?: any;
    /**
     * 
     * @type {Array&lt;GameLiveDataPlaysPlaysByPeriod&gt;}
     * @memberof GameLiveDataPlays
     */
    playsByPeriod?: any;
    /**
     * 
     * @type {GamePlay}
     * @memberof GameLiveDataPlays
     */
    currentPlay?: any;
}
