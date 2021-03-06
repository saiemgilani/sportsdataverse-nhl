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
 * @interface DraftPicks
 */
export interface DraftPicks {
    /**
     * 
     * @type {number}
     * @memberof DraftPicks
     */
    year?: any;
    /**
     * 
     * @type {string}
     * @memberof DraftPicks
     */
    round?: any;
    /**
     * 
     * @type {number}
     * @memberof DraftPicks
     */
    pickOverall?: any;
    /**
     * 
     * @type {number}
     * @memberof DraftPicks
     */
    pickInRound?: any;
    /**
     * 
     * @type {DraftTeam}
     * @memberof DraftPicks
     */
    team?: any;
    /**
     * 
     * @type {DraftProspect}
     * @memberof DraftPicks
     */
    prospect?: any;
}
