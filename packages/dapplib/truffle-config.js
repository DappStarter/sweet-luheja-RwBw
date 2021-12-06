require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strategy deny pave pull gentle light army giant'; 
let testAccounts = [
"0xa0034004dcc1ebf040fd642366db9de32f936351bb449959dd35945ead3032c5",
"0xa0d9e52dbeb534c18694cfff8daac3a8a652f45612fa6dd9e442733e3cd15ffb",
"0xf42af890996cb0aeca90f35295977d4530bde21f5fcbb8e2463667e0de0e4f46",
"0x3ab257c845ac6fd027a2de63d3199800afab2e34cb93dee539a06a20d0315f73",
"0xaae12ca1e50d26a49fa58d417858d87130394442e40219bd1fb2376babb961d1",
"0xae3110c67d2812ff4e8b6e311029849533c7516b108706852b90e5a72f3c7ec3",
"0xfb9f052e292aad9ff86e407f4fa8224657f8ef1b2f9274480355a6b08103500a",
"0xe47c9c583fe0715b2bf2182e2619e46c0b39a1627624599f8be86c37e650be8f",
"0xf1cc327b7cf36072a40667d5c91ef6f5ec2a72a7b8b23662a6872bd424404efa",
"0x22076ed3a5d08b47f58edf3d3bd19bf1e0e33abf0756399d14b033366ca58793"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


