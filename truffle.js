module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
      rinkeby: {
          host: "localhost",
          port: 8545,
          network_id: "4", // Match any network id
          //If we want to use another account except
          // main etherbase account(first account) to deploy then it's address
          // should be mentioned to from, if account address is not mentioned
          //then it will use the first account or main account automatically to deploy
          //the contract
          from: "0x55d5c7b61be5873c70dfd36102ce2244fb1b8333",
          //this is the gas limit that will used in time of deployment
          gas: 5600000
      }

  }
};
