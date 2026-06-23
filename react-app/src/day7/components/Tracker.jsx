// import { Component } from "react";

// export default class Tracker extends Component {
//   constructor(props) {
//     super(props);
//     // this.props.addLogs("constructor called");
//   }

//   componentDidMount() {
//     this.props.addLogs("componentDidMount called");
//   }

//   shouldComponentUpdate(nextProps) {
//     const orderData = this.props.orderData;
//     const nextOrderData = nextProps.orderData;

//     if (orderData.status !== nextOrderData.status) {
//       // this.props.addLogs("Status changed, should update");
//       return true;
//     }

//     if (orderData.priority !== "high" && nextOrderData.priority === "high") {
//       // this.props.addLogs("Priority changed to High, should update");
//       return true;
//     }

//     const etaDiff = Math.abs(orderData.eta - nextOrderData.eta);
//     if (etaDiff >= 5) {
//       // this.props.addLogs(`ETA changed by ${etaDiff} minutes, should update`);
//       return true;
//     }

//     // this.props.addLogs("No significant changes, should NOT update");
//     return false;
//   }

//   componentDidUpdate() {
//     this.props.addLogs("componentDidUpdate called");
//   }

//   componentWillUnmount() {
//     this.props.addLogs("componentWillUnmount called");
//   }

//   render() {
//     return (
//       <div>
//         <h2>Order Tracking Details</h2>
//         <p>Order Id: {this.props.orderData.orderId}</p>
//         <p>Customer: {this.props.orderData.customerName}</p>
//         <p>Status: {this.props.orderData.status}</p>
//         <p>Priority: {this.props.orderData.priority}</p>
//         <p>ETA: {this.props.orderData.eta} minutes</p>
//       </div>
//     );
//   }
// }

import { useEffect } from "react";

export default function Tracker({ orderData, addLogs }) {
  // runs on EVERY render (mount + update)
  useEffect(() => {
    addLogs("componentDidMount / componentDidUpdate called");
  });

  // runs ONLY on mount
  useEffect(() => {
    addLogs("componentDidMount called");

    return () => {
      addLogs("componentWillUnmount called");
    };
  }, []);

  // status change tracking
  useEffect(() => {
    addLogs("Status effect triggered");
  }, [orderData.status]);

  // priority change tracking
  useEffect(() => {
    addLogs("Priority effect triggered");
  }, [orderData.priority]);

  // ETA change tracking
  useEffect(() => {
    addLogs("ETA effect triggered");
  }, [orderData.eta]);

  return (
    <div>
      <h2>Order Tracking Details</h2>
      <p>Order Id: {orderData.orderId}</p>
      <p>Customer: {orderData.customerName}</p>
      <p>Status: {orderData.status}</p>
      <p>Priority: {orderData.priority}</p>
      <p>ETA: {orderData.eta} minutes</p>
    </div>
  );
}
