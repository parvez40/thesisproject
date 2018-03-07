module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 6000000
    },
      rpc: {
          host: "localhost",
          port: 8545,
          network_id: "*", // Match any network id
          gas: 6000000
      },
      privateNet: {
          host: "localhost",
          port: 8545,
          network_id: "15" ,// Match any network id
          gas: 6000000
      },
      rinkeby: {
          host: "localhost",
          port: 8545,
          network_id: "4", // network id is 4 for rinkeby testnet
          //If we want to use another account except
          // main etherbase account(first account) to deploy then it's address
          // should be mentioned to from, if account address is not mentioned
          //then it will use the first account or main account automatically to deploy
          //the contract
          from: "0x55d5c7b61be5873c70dfd36102ce2244fb1b8333",
          //this is the gas limit that will used in time of deployment
          gas: 4600000,
          //this is the gas price that will used in time of deployment
          gasPrice: 46000000

      }

  }
};
