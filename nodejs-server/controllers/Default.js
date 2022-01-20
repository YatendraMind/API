'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports. Create a Refund = function  Create a Refund (req, res, next, body, authorization, aPIVersion) {
  Default. Create a Refund(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Retrieve a Refund = function  Retrieve a Refund (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default. Retrieve a Refund(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Update a Refund = function  Update a Refund (req, res, next, body, transaction_id, transaction_id, authorization, aPIVersion) {
  Default. Update a Refund(body, transaction_id, transaction_id, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports. Void a Charge = function  Void a Charge (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default. Void a Charge(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.create a Charge = function create a Charge (req, res, next, body, authorization, aPIVersion) {
  Default.create a Charge(body, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Charges = function list Charges (req, res, next, authorization, aPIVersion) {
  Default.list Charges(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.list Refunds = function list Refunds (req, res, next, authorization, aPIVersion) {
  Default.list Refunds(authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieve a Charge = function retrieve a Charge (req, res, next, transaction_id, authorization, transaction_id, aPIVersion) {
  Default.retrieve a Charge(transaction_id, authorization, transaction_id, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update a Charge = function update a Charge (req, res, next, body, transaction_id, transaction_id, authorization, aPIVersion) {
  Default.update a Charge(body, transaction_id, transaction_id, authorization, aPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
