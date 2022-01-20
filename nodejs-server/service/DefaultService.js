'use strict';


/**
 *
 * body Refunds_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Create a Refund = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "emvData" : "8A023030910A7344A67B24F6578F30309F6E04000000019F7C20DEADBEEFDEADBEEF010203040506070809101112131415161718192021222324",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "captured",
  "statusCode" : "captured",
  "statusDescription" : "Transaction capture success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "terminalCapability" : "hybrid",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z",
  "customer" : {
    "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
    "address" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "companyName" : "ABC Business",
    "email" : "hello@seamlesspay.com",
    "metadata" : {
      "customOption" : "example"
    },
    "name" : "Michael Smith",
    "phone" : "2125555000",
    "website" : "https://example.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Retrieve a Refund = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "refunded",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "terminalCapability" : "hybrid",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Refunds_transaction_id _body 
 * transaction_id String 
 * transaction_id String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Update a Refund = function(body,transaction_id,transaction_id,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "refund",
  "status" : "refunded",
  "statusCode" : "refunded",
  "statusDescription" : "Transaction refund success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "terminalCapability" : "hybrid",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports. Void a Charge = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "status" : "voided",
  "statusCode" : "voided",
  "statusDescription" : "Transaction void success",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Charges_body 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.create a Charge = function(body,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "105.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "ipAddress" : "192.168.0.1",
  "method" : "charge",
  "order" : {
    "shipFromPostalCode" : "99999-9999",
    "shippingAddress" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "state" : "NY",
      "country" : "US",
      "postalCode" : "11111-1111"
    },
    "items" : [ {
      "discountAmount" : "20.00",
      "unitCost" : "10.00",
      "unitOfMeasure" : "CS",
      "lineNumber" : "1",
      "description" : "DESCRIPTION-1",
      "taxAmount" : "5.00",
      "quantity" : "12",
      "upc" : "UPC-1",
      "lineTotal" : "105.00",
      "taxExempt" : false,
      "taxRate" : "0.05"
    } ]
  },
  "paymentType" : "credit_card",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "1.00",
  "statusDescription" : "Transaction capture success",
  "cardBrand" : "Visa",
  "lastFour" : "1000",
  "statusCode" : "captured",
  "status" : "captured",
  "batch" : "BCH_01D8JSWWW3YQ1N8FCSKZ6Z8GDR",
  "accountType" : "Credit",
  "emvData" : "8A023030910A7344A67B24F6578F30309F6E04000000019F7C20DEADBEEFDEADBEEF010203040506070809101112131415161718192021222324",
  "customer" : {
    "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
    "address" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "companyName" : "ABC Business",
    "email" : "hello@seamlesspay.com",
    "metadata" : {
      "customOption" : "example"
    },
    "name" : "Michael Smith",
    "phone" : "2125555000",
    "website" : "https://example.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  },
  "transactionDate" : "2020-02-24T19:43:12.730Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalcode" : "pass",
    "cvv" : "pass"
  },
  "updatedAt" : "2020-02-24T19:43:12.730Z",
  "createdAt" : "2020-02-24T19:43:12.730Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Charges = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "adjustments" : [ {
      "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
      "amount" : "105.00",
      "tip" : "1.00",
      "taxAmount" : "5.00",
      "surchargeFeeAmount" : "1.00"
    } ],
    "currency" : "USD",
    "fullyRefunded" : "true",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "expDate" : "0125",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "4242",
    "method" : "charge",
    "order" : {
      "shipFromPostalCode" : "99999-9999",
      "shippingAddress" : {
        "line1" : "string",
        "line2" : "string",
        "city" : "string",
        "country" : "string",
        "state" : "st",
        "postalCode" : "11111-1111"
      },
      "items" : [ {
        "discountAmount" : "9.00",
        "unitCost" : "2.00",
        "unitOfMeasure" : "CS",
        "lineNumber" : "1",
        "description" : "DESCRIPTION-1",
        "taxAmount" : "109.00",
        "quantity" : "1000",
        "upc" : "UPC-1",
        "lineTotal" : "2000.00",
        "taxExempt" : true,
        "taxRate" : "0.025"
      } ]
    },
    "refunds" : [ {
      "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
      "amount" : "1.00",
      "authCode" : "A11111",
      "currency" : "USD",
      "cardBrand" : "Visa",
      "cardType" : "Credit",
      "metadata" : {
        "customOption" : "example"
      },
      "ipAddress" : "192.168.0.1",
      "lastFour" : "1000",
      "method" : "refund",
      "status" : "REFUNDED",
      "statusCode" : "refunded",
      "statusDescription" : "Transaction refund success",
      "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
      "txnDate" : "2022-01-06T12:13:45Z",
      "updatedAt" : "2017-12-15T19:08:18.262Z",
      "createdAt" : "2017-12-15T19:08:18.262Z"
    } ],
    "status" : "authorized",
    "statusCode" : "approved",
    "statusDescription" : "Transaction approved",
    "surchargeFeeAmount" : "1.00",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "tip" : "string",
    "transactionDate" : "2022-01-06T12:13:45Z",
    "terminalCapability" : "hybrid",
    "verification" : {
      "addressLine1" : "pass",
      "addressPostalcode" : "pass",
      "cvv" : "pass"
    },
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z",
    "customer" : {
      "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
      "address" : {
        "line1" : "400 Madison Ave",
        "line2" : "10th Fl",
        "city" : "New York",
        "country" : "USA",
        "state" : "NY",
        "postalCode" : "10010"
      },
      "companyName" : "ABC Business",
      "email" : "hello@seamlesspay.com",
      "metadata" : {
        "customOption" : "example"
      },
      "name" : "Michael Smith",
      "phone" : "2125555000",
      "website" : "https://example.com",
      "updatedAt" : "2017-12-15T19:08:18.262Z",
      "createdAt" : "2017-12-15T19:08:18.262Z"
    }
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.list Refunds = function(authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "paymentNetwork" : "Visa",
    "accountType" : "Credit",
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "refunded",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "transactionDate" : "2022-01-06T12:13:45Z",
    "terminalCapability" : "hybrid",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "pagination" : {
    "count" : 10,
    "page" : 1,
    "pages" : 2,
    "size" : 19
  },
  "total" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * transaction_id String 
 * authorization String 
 * transaction_id String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.retrieve a Charge = function(transaction_id,authorization,transaction_id,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "adjustments" : [ {
    "id" : "ADJ_01BBEBNMZ7VYYMADN9MJ3RDAJM",
    "amount" : "105.00",
    "tip" : "1.00",
    "taxAmount" : "5.00",
    "surchargeFeeAmount" : "1.00"
  } ],
  "currency" : "USD",
  "fullyRefunded" : "true",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "expDate" : "0125",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "4242",
  "method" : "charge",
  "order" : {
    "shipFromPostalCode" : "99999-9999",
    "shippingAddress" : {
      "line1" : "string",
      "line2" : "string",
      "city" : "string",
      "country" : "string",
      "state" : "st",
      "postalCode" : "11111-1111"
    },
    "items" : [ {
      "discountAmount" : "9.00",
      "unitCost" : "2.00",
      "unitOfMeasure" : "CS",
      "lineNumber" : "1",
      "description" : "DESCRIPTION-1",
      "taxAmount" : "109.00",
      "quantity" : "1000",
      "upc" : "UPC-1",
      "lineTotal" : "2000.00",
      "taxExempt" : true,
      "taxRate" : "0.025"
    } ]
  },
  "refunds" : [ {
    "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
    "amount" : "1.00",
    "authCode" : "A11111",
    "currency" : "USD",
    "cardBrand" : "Visa",
    "cardType" : "Credit",
    "metadata" : {
      "customOption" : "example"
    },
    "ipAddress" : "192.168.0.1",
    "lastFour" : "1000",
    "method" : "refund",
    "status" : "REFUNDED",
    "statusCode" : "refunded",
    "statusDescription" : "Transaction refund success",
    "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
    "txnDate" : "2022-01-06T12:13:45Z",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  } ],
  "status" : "authorized",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "string",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "terminalCapability" : "hybrid",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalcode" : "pass",
    "cvv" : "pass"
  },
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z",
  "customer" : {
    "id" : "CUS_01CBVZHCFCYQD84QS5V2323HB6",
    "address" : {
      "line1" : "400 Madison Ave",
      "line2" : "10th Fl",
      "city" : "New York",
      "country" : "USA",
      "state" : "NY",
      "postalCode" : "10010"
    },
    "companyName" : "ABC Business",
    "email" : "hello@seamlesspay.com",
    "metadata" : {
      "customOption" : "example"
    },
    "name" : "Michael Smith",
    "phone" : "2125555000",
    "website" : "https://example.com",
    "updatedAt" : "2017-12-15T19:08:18.262Z",
    "createdAt" : "2017-12-15T19:08:18.262Z"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Charges_transaction_id _body 
 * transaction_id String 
 * transaction_id String 
 * authorization String 
 * aPIVersion String  (optional)
 * returns Object
 **/
exports.update a Charge = function(body,transaction_id,transaction_id,authorization,aPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "TR_01BBEBNMZ7VYYMADN8MJ4RDBJX",
  "amount" : "1.00",
  "authCode" : "A11111",
  "currency" : "USD",
  "paymentNetwork" : "Visa",
  "accountType" : "Credit",
  "ipAddress" : "192.168.0.1",
  "lastFour" : "1000",
  "method" : "charge",
  "status" : "authorized",
  "statusCode" : "approved",
  "statusDescription" : "Transaction approved",
  "surchargeFeeAmount" : "1.00",
  "token" : "TKN_01BMFGDTK30EYH9FWTXPYR50",
  "tip" : "string",
  "transactionDate" : "2022-01-06T12:13:45Z",
  "verification" : {
    "addressLine1" : "pass",
    "addressPostalcode" : "pass",
    "cvv" : "pass"
  },
  "updatedAt" : "2017-12-15T19:08:18.262Z",
  "createdAt" : "2017-12-15T19:08:18.262Z"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

