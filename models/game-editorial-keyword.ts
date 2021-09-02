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
 * @interface GameEditorialKeyword
 */
export interface GameEditorialKeyword {
    /**
     * 
     * @type {string}
     * @memberof GameEditorialKeyword
     */
    type?: GameEditorialKeywordTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameEditorialKeyword
     */
    value?: any;
    /**
     * 
     * @type {string}
     * @memberof GameEditorialKeyword
     */
    displayName?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum GameEditorialKeywordTypeEnum {
    BodyParagraphCount = 'bodyParagraphCount',
    BodyWordCount = 'bodyWordCount',
    ClobAutoTagSkipPlayerCards = 'clob_autoTagSkip_playerCards',
    Content = 'content',
    Embeddable = 'embeddable',
    GameId = 'gameId',
    Language = 'language',
    PlayerId = 'playerId',
    PreviewParagraphCount = 'previewParagraphCount',
    PrimaryTag = 'primaryTag',
    PreviewWordCount = 'previewWordCount',
    Shareable = 'shareable',
    StatsEventId = 'statsEventId',
    TeamFileCode = 'teamFileCode',
    TeamId = 'teamId'
}
