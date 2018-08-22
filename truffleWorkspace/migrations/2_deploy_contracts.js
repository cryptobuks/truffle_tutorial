var set_int = artifacts.require("./set_int.sol");
var set_string = artifacts.require("./set_string.sol");
var permissions_set_string = artifacts.require("./permission_set_string.sol");
var permissions_set_int = artifacts.require("./permission_set_int.sol");
var dynamic_set_string = artifacts.require("./dynamic_set_string.sol");
var dynamic_set_int = artifacts.require("./dynamic_set_int.sol");
var smart_contract_wallet = artifacts.require("./smart_contract_wallet.sol");

module.exports = function (deployer) {
  deployer.deploy(set_int);
  deployer.deploy(set_string, "First Example");
  deployer.deploy(permissions_set_string);
  deployer.deploy(permissions_set_int);
  deployer.deploy(dynamic_set_string, "First Dynamic String");
  deployer.deploy(dynamic_set_int);
  deployer.deploy(smart_contract_wallet);
};
