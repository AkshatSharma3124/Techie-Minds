import React, { useState } from "react";

const ordersData = [
  {
    id: 1,
    item: "Old Laptop",
    status: "Request Added",
    dateDue: "2024-10-15",
    dateArrived: "2024-10-17",
    wasteCollected: "Yes",
  },
  {
    id: 2,
    item: "Broken TV",
    status: "In Transit",
    dateDue: "2024-10-18",
    dateArrived: "2024-10-20",
    wasteCollected: "No",
  },
  {
    id: 3,
    item: "Mobile Phone",
    status: "Delivered",
    dateDue: "2024-10-20",
    dateArrived: "2024-10-21",
    wasteCollected: "Yes",
  },
  // Add more orders as needed
];

const OrderTracking = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className="container mx-auto my-10 p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-orange-800 mb-6 text-center">Your Courses</h1>
      <div className="grid grid-cols-1 gap-4">
        {ordersData.map((order) => (
          <div
            key={order.id}
            className="p-4 border border-gray-300 rounded-lg hover:shadow-lg cursor-pointer"
            onClick={() => handleOrderClick(order)}
          >
            <h2 className="text-xl font-semibold text-orange-800">{order.item}</h2>
            <p className="text-gray-700">Status: {order.status}</p>
          </div>
        ))}
      </div>

      {selectedOrder && (
        <div className="mt-10 p-5 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Order Details</h2>
          <p><strong>Item:</strong> {selectedOrder.item}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <p><strong>Date Due:</strong> {selectedOrder.dateDue}</p>
          <p><strong>Date Arrived:</strong> {selectedOrder.dateArrived}</p>
          <p><strong>Waste Collected:</strong> {selectedOrder.wasteCollected}</p>
          <button
            className="mt-4 px-4 py-2 bg-orange-800 text-white rounded hover:bg-orange-700"
            onClick={() => setSelectedOrder(null)}
          >
            Back to Orders
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
