var HDWalletProvider = require('truffle-hdwallet-provider');

var mnemonic = 'pulse sell robot river toss fog view father case account protect success';

module.exports = {
  networks: { 
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: "*"
    }, 
    rinkeby: {
      provider: function() { 
        return new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/c0f985b2740140a89fdca9fd06ff789d') 
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};