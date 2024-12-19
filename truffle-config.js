const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = '93842cce67b4672347be4c3e1c39bf8c52cce832a84f0a53af1ac19ee0d0a50d';

module.exports = {
  networks: {
    local: {
      provider: () => {
        // Create a new provider instance for each request to avoid ID conflicts
        return new HDWalletProvider({
          privateKeys: [privateKey],
          providerOrUrl: 'wss://rpc.gnosischain.com/wss',
          pollingInterval: 60000,
          networkCheckTimeout: 1800000,
          timeoutBlocks: 2000,
          confirmations: 3,
          skipDryRun: true,

          maxPollingInterval: 120000,
          maxRetries: 5,
        });
      },
      network_id: 100,
      gas: 12000000,
      gasPrice: 3000000000,
      networkCheckTimeout: 1800000,
      timeoutBlocks: 2000,
      confirmations: 3,
      skipDryRun: true,
    },
  },
  compilers: {
    solc: {
      version: '^0.5.12',
    },
  },
  plugins: ['truffle-plugin-networks'],
};
