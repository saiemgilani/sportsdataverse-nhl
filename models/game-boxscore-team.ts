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
 * @interface GameBoxscoreTeam
 */
export interface GameBoxscoreTeam {
    /**
     * 
     * @type {GameBoxscoreTeamTeam}
     * @memberof GameBoxscoreTeam
     */
    team?: any;
    /**
     * 
     * @type {GameBoxscoreTeamTeamStats}
     * @memberof GameBoxscoreTeam
     */
    teamStats?: any;
    /**
     * 
     * @type {GameBoxscoreTeamPlayers}
     * @memberof GameBoxscoreTeam
     */
    players?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameBoxscoreTeam
     */
    goalies?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameBoxscoreTeam
     */
    skaters?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameBoxscoreTeam
     */
    onIce?: any;
    /**
     * 
     * @type {Array&lt;GameBoxscoreTeamOnIcePlus&gt;}
     * @memberof GameBoxscoreTeam
     */
    onIcePlus?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameBoxscoreTeam
     */
    scratches?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof GameBoxscoreTeam
     */
    penaltyBox?: any;
    /**
     * 
     * @type {Array&lt;GameBoxscoreTeamCoaches&gt;}
     * @memberof GameBoxscoreTeam
     */
    coaches?: any;
}
