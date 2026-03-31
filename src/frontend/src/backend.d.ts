import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    name: string;
    submittedAt: bigint;
    message: string;
    eventDate: string;
    eventType: string;
}
export type OrderId = bigint;
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    submitOrder(name: string, eventType: string, eventDate: string, message: string): Promise<OrderId>;
}
