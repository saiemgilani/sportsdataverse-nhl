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
 * @interface Player
 */
export interface Player {
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    fullName?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    link?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    firstName?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    lastName?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    primaryNumber?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    birthDate?: any;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    currentAge?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    birthCity?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    birthStateProvince?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    birthCountry?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    nationality?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    height?: any;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    weight?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Player
     */
    active?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Player
     */
    alternateCaptain?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Player
     */
    captain?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Player
     */
    rookie?: any;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    shootsCatches?: PlayerShootsCatchesEnum;
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    rosterStatus?: any;
    /**
     * 
     * @type {PlayerCurrentTeam}
     * @memberof Player
     */
    currentTeam?: any;
    /**
     * 
     * @type {DraftProspectPrimaryPosition}
     * @memberof Player
     */
    primaryPosition?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum PlayerShootsCatchesEnum {
    L = 'L',
    R = 'R'
}

