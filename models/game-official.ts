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
 * @interface GameOfficial
 */
export interface GameOfficial {
    /**
     * 
     * @type {GameOfficialOfficial}
     * @memberof GameOfficial
     */
    official?: any;
    /**
     * 
     * @type {string}
     * @memberof GameOfficial
     */
    officialType?: GameOfficialOfficialTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum GameOfficialOfficialTypeEnum {
    Linesman = 'Linesman',
    Referee = 'Referee'
}
