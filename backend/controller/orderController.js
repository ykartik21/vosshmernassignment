const Order = require("../models/orderModel.js");

async function addOrder(req, res) {
  const { userId, number, total } = req.body;
  const order = await Order.create({
    userId,
    number,
    total,
  });
  //if order created
  if (order) {
    res.status(201).json({
      userId: order.userId,
      number: order.number,
      total: order.total,
      success: true,
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
}

async function finOrder(req, res) {
  const { userId } = req.params;
  const orders = await Order.find({ userId });
  //if order created
  if (orders) {
    res.status(201).json(orders);
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
}
module.exports = { addOrder, finOrder };
