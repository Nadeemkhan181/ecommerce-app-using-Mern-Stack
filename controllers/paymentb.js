var braintree = require("braintree");

var gateway = braintree.connect({
    environment:  braintree.Environment.Sandbox,
    merchantId:   'zf3j57zcrvqrfrvx',
    publicKey:    'zbsg733kkrptkrd3',
    privateKey:   '1bc27d5173f5bc5c5f894b2b012df139'
});

exports.getToken = (req, res) => {
  gateway.clientToken.generate({}, function(err, response) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send(response);
    }
  });
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true
      }
    },
    function(err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
