const router = require('express').Router();
const { Order, LineItem } = require('../db/models');
module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    //if the user is undefined or the user id equals the request user id then this ok, otherwise, redirect to login
    if (req.user === undefined || req.body.user === req.user.id) {
      const newOrder = await Order.create({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        street: req.body.street,
        addressLine2: req.body.addressLine2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        total: req.body.total,
        status: 'submitted'
      });

      if (newOrder) {
        // req.body.user will either be null (if a guest) or it'll be the user id (if user is logged in)
        newOrder.setUser(req.body.user);
        res.status(201).send('Order successfully created.');
      } else {
        res.status(400).send('Order not created.');
      }
    } else {
      res.redirect('/login');
    }
  } catch (err) {
    next(err);
  }
});
