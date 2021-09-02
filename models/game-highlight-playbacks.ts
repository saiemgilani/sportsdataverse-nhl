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
 * @interface GameHighlightPlaybacks
 */
export interface GameHighlightPlaybacks {
    /**
     * 
     * @type {string}
     * @memberof GameHighlightPlaybacks
     */
    name?: GameHighlightPlaybacksNameEnum;
    /**
     * 
     * @type {string}
     * @memberof GameHighlightPlaybacks
     */
    width?: any;
    /**
     * 
     * @type {string}
     * @memberof GameHighlightPlaybacks
     */
    height?: any;
    /**
     * 
     * @type {string}
     * @memberof GameHighlightPlaybacks
     */
    url?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum GameHighlightPlaybacksNameEnum {
    FLASH192K320X180 = 'FLASH_192K_320X180',
    FLASH450K400X224 = 'FLASH_450K_400X224',
    FLASH1200K640X360 = 'FLASH_1200K_640X360',
    FLASH1800K960X540 = 'FLASH_1800K_960X540',
    HTTPCLOUDMOBILE = 'HTTP_CLOUD_MOBILE',
    HTTPCLOUDTABLET = 'HTTP_CLOUD_TABLET',
    HTTPCLOUDTABLET60 = 'HTTP_CLOUD_TABLET_60',
    HTTPCLOUDWIRED = 'HTTP_CLOUD_WIRED',
    HTTPCLOUDWIRED60 = 'HTTP_CLOUD_WIRED_60',
    HTTPCLOUDWIREDWEB = 'HTTP_CLOUD_WIRED_WEB'
}
