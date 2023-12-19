// bignumber.js
const BigNumber = require("bignumber.js");

const compareBalances = (balance, amountToSend) => {
  const balanceBN = new BigNumber(balance);
  const amountToSendBN = new BigNumber(amountToSend);

  return balanceBN.isLessThan(amountToSendBN);
};

module.exports = { compareBalances };
