"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var PredictionMarket = (function (_Pudding) {
    _inherits(PredictionMarket, _Pudding);

    function PredictionMarket() {
      _classCallCheck(this, PredictionMarket);

      _get(Object.getPrototypeOf(PredictionMarket.prototype), "constructor", this).apply(this, arguments);
    }

    return PredictionMarket;
  })(Pudding);

  ;

  // Set up specific data for this class.
  PredictionMarket.abi = [{ "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }], "name": "buyOrder", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "awardBuyers", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "revert", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }], "name": "sellOrder", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "orders", "outputs": [{ "name": "seller", "type": "address" }, { "name": "buyer", "type": "address" }, { "name": "odds", "type": "uint256" }, { "name": "sellerQuantity", "type": "uint256" }, { "name": "buyerQuantity", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "odds", "type": "uint256" }, { "name": "quantity", "type": "uint256" }], "name": "cancelOrder", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "awardSellers", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "ordersLength", "outputs": [{ "name": "result", "type": "uint256" }], "type": "function" }];
  PredictionMarket.binary = "606060405260008054600160a060020a03191633179055610ee8806100246000396000f36060604052361561006c5760e060020a600035046322f85eaa811461006e57806358eae004146101915780637da3c3ab1461025757806397514d9014610340578063a85c38ef14610451578063b6ed063214610511578063b6f29d50146105b5578063be8acd3f1461067a575b005b61006c60043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150339b50349a505b60008b11156106c65760009950600098508c6001019750600096505b60015460ff88161015610ae857600180548890811015610002576000918252600502600080516020610ec8833981519152810154600080516020610ea8833981519152919091019750600160a060020a031614801561016e575060028601548890105b1561018557600286015460019a5096985095965087955b6001969096019561010b565b61006c600080548190600160a060020a03908116339091161415610d7c575b60015460ff83161015610d8057600180548390811015610002576000918252600502600080516020610ec8833981519152810154600080516020610ea8833981519152919091019250600160a060020a03161480159061021b57508054600160a060020a0316600014155b15610d8e57604051600382015460048301546001840154600160a060020a031692600092919091019082818181858883f1935050505050610e0f565b61006c600080548190600160a060020a03908116339091161415610d7c575b60015460ff83161015610d8057600180548390811015610002576000918252600502600080516020610ec8833981519152810154600080516020610ea8833981519152919091019250600160a060020a0316146102f95760405160018201546004830154600160a060020a0391909116916000919082818181858883f150505050505b8054600160a060020a03166000146103345780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b60019190910190610276565b61006c60043560006000600060006000600060006000600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150600060a060405190810160405280600081526020016000815260200160008152602001600081526020016000815260200150339b50349a505b60008b11156106c657600099506000985060018d039750600096505b60015460ff881610156106d557600180548890811015610002576000918252600502600080516020610ea8833981519152018054909750600160a060020a031614801561042e575060028601548890115b1561044557600286015460019a5096985095965087955b600196909601956103dd565b61068f6004356001805482908110156100025750600052600502600080516020610ec8833981519152810154600080516020610ea88339815191528201547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf98301547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa8401547fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf89490940154600160a060020a0392831694939092169285565b61006c600435602435600080805b60015460ff831610156109895760018054839081101561000257600091909152600502600080516020610ea88339815191520190508215156109d1576002810154851415610ad7576001810154600160a060020a039081163390911614801561059257508054600160a060020a03166000145b15610a5c576004810180548590039081905560009011610aaa5760019250610abd565b61006c600080548190600160a060020a03908116339091161415610d7c575b60015460ff83161015610d8057600180548390811015610002576000918252600502600080516020610ec8833981519152810154600080516020610ea8833981519152919091019250600160a060020a03161480159061063f57508054600160a060020a0316600014155b15610e1b57604051815460038301546004840154600160a060020a0392909216926000929091019082818181858883f1935050505050610e9c565b60015460408051918252519081900360200190f35b60408051600160a060020a039687168152949095166020850152838501929092526060830152608082015290519081900360a00190f35b50505050505050505050505050565b891561072e57600180548a90811015610002576000918252600502600080516020610ea883398151915201905060038101549095508b106107ac578454600160a060020a0319168c1785556003850154909a039961089e565b8a8d6064038c6064020403915060a0604051908101604052808d8152602001600081526020018e81526020018c815260200183815260200150905060016000508054806001018281815481835581811511610924576000839052610924906005908102600080516020610ea883398151915290810191840201610847565b8a85600201600050546064038c606402040393508460040160005054841015610889576040805160a0810182528d8152600187810154600160a060020a03166020830152600288015492820192909252606081018d90526080810186905281548083018084559195509082818380158290116108a35760008390526108a3906005908102600080516020610ea8833981519152908101918402015b80821115610920578054600160a060020a0319908116825560018201805490911681556000600283018190556003830181905560049290920191909155610847565b8454600160a060020a0319168c17855560009a505b610984565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180548790039055860180549c909c03909b5560009a5061089e565b5090565b5050509190906000526020600020906005020160005080548351600160a060020a0319918216178255602084015160018301805490921617905560408301516002820155606083015160038201556080830151600491909101555060009a505b6103c1565b8215610ae157600180546000198101808355909190828015829011610adc576000839052610adc906005908102600080516020610ea883398151915290810191840201610847565b806001600050600184038154811015610002576000918252600502600080516020610ea883398151915201905080548254600160a060020a0319918216600160a060020a039182161783556001838101805491860154909216921691909117905560028281015490820155600382810154908201556004918201549101555b6001919091019061051f565b8054600160a060020a0390811633909116148015610a8757506001810154600160a060020a03166000145b15610ad7576003810180548590039081905560009011610ac25760019250610ad7565b6004810154606481028690040360038201555b610ad7565b60038101546064868103908202040360048201555b610a50565b505050505b5050505050565b8915610b6457600180548a908110156100025750600052600589027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cfa810154600080516020610ea88339815191529190910195508b10610bdf57600185018054600160a060020a0319168d1790556004850154909a0399610c94565b8a8d8c6064020403915060a060405190810160405280600081526020018d81526020018e81526020018381526020018c815260200150905060016000508054806001018281815481835581811511610d17576000839052610d17906005908102600080516020610ea883398151915290810191840201610847565b8a85600201600050548c606402040393508460030160005054841015610c7b576040805160a0810182528654600160a060020a03168152602081018e905260028701549181019190915260608101859052608081018c90526001805480820180835592955090918281838015829011610c99576000839052610c99906005908102600080516020610ea883398151915290810191840201610847565b600185018054600160a060020a0319168d17905560009a505b610d77565b5050509190906000526020600020906005020160005080548551600160a060020a031991821617825560018201805460208801519216919091179055604085015160028201556060850151600382810191909155608086015160049283015590870180549d909d03909c555099840180548490039055600099610c94565b5050509190906000526020600020906005020160005080548351600160a060020a0319918216178255602084015160018301805490921617905560408301516002820155606083015160038201556080830151600491909101555060009a505b6100ef565b5050565b600054600160a060020a0316ff5b6001810154600160a060020a0316600014610dd45760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050610e0f565b8054600160a060020a0316600014610e0f5780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b600191909101906101b0565b6001810154600160a060020a0316600014610e615760405160018201546004830154600160a060020a0391909116916000919082818181858883f1935050505050610e9c565b8054600160a060020a0316600014610e9c5780546003820154604051600160a060020a0392909216916000919082818181858883f150505050505b600191909101906105d456b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6b10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7";

  if ("0xf89c6be46f1984e3cbc6863e68a35b1e61ba2847" != "") {
    PredictionMarket.address = "0xf89c6be46f1984e3cbc6863e68a35b1e61ba2847";

    // Backward compatibility; Deprecated.
    PredictionMarket.deployed_address = "0xf89c6be46f1984e3cbc6863e68a35b1e61ba2847";
  }

  PredictionMarket.generated_with = "1.0.2";
  PredictionMarket.contract_name = "PredictionMarket";

  return PredictionMarket;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.PredictionMarket = factory;
}