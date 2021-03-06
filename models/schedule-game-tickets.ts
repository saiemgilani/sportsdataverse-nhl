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
 * @interface ScheduleGameTickets
 */
export interface ScheduleGameTickets {
    /**
     * 
     * @type {string}
     * @memberof ScheduleGameTickets
     */
    ticketType?: ScheduleGameTicketsTicketTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ScheduleGameTickets
     */
    ticketLink?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleGameTicketsTicketTypeEnum {
    Buysell = 'buysell',
    ClubBuysell = 'club buysell',
    ClubMobile = 'club mobile',
    ClubMobileBuysell = 'club mobile buysell',
    ClubTicket = 'club ticket',
    MobileAppTicket = 'mobile app ticket',
    MobileBuysell = 'mobile buysell',
    MobileTicket = 'mobile ticket',
    TabletAppTicket = 'tablet app ticket',
    Ticket = 'ticket'
}

