const User = require('../models/userModel');

const APIFeatures = require('../utils/apiFeatures');

const catchAsync = require('../utils/catchAsync');

const AppError = require('../utils/appError');

exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  // Send Query
  res.status(200).json({
    status: 'success',
    length: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet implemented',
  });
};
