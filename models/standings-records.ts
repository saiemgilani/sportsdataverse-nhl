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
 * @interface StandingsRecords
 */
export interface StandingsRecords {
    /**
     * 
     * @type {string}
     * @memberof StandingsRecords
     */
    standingsType?: StandingsRecordsStandingsTypeEnum;
    /**
     * 
     * @type {StandingsLeague}
     * @memberof StandingsRecords
     */
    league?: any;
    /**
     * 
     * @type {StandingsDivision}
     * @memberof StandingsRecords
     */
    division?: any;
    /**
     * 
     * @type {DivisionConference}
     * @memberof StandingsRecords
     */
    conference?: any;
    /**
     * 
     * @type {Array&lt;StandingsTeamRecords&gt;}
     * @memberof StandingsRecords
     */
    teamRecords?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum StandingsRecordsStandingsTypeEnum {
    RegularSeason = 'regularSeason'
}

