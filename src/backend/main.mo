import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Int "mo:core/Int";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type OrderId = Nat;

  type Order = {
    name : Text;
    eventType : Text;
    eventDate : Text;
    message : Text;
    submittedAt : Int;
  };

  module CompareOrder {
    public func bySubmittedAt(order1 : Order, order2 : Order) : Order.Order {
      Int.compare(order2.submittedAt, order1.submittedAt);
    };
  };

  let orders = Map.empty<OrderId, Order>();
  var nextOrderId = 0;

  public shared ({ caller }) func submitOrder(name : Text, eventType : Text, eventDate : Text, message : Text) : async OrderId {
    let orderId = nextOrderId;
    let newOrder : Order = {
      name;
      eventType;
      eventDate;
      message;
      submittedAt = Time.now();
    };
    orders.add(orderId, newOrder);
    nextOrderId += 1;
    orderId;
  };

  public query ({ caller }) func getAllOrders() : async [Order] {
    orders.values().toArray().sort(CompareOrder.bySubmittedAt);
  };
};
