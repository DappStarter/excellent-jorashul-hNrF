require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn pull hunt narrow fresh spare'; 
let testAccounts = [
"0xcf8c99d918530b30bd5fe7a22b4fdc9467f5a6d5b164b4d360dfe5c4785ee887",
"0x302bdd48a0a3042c26eced3723ac0c946d2a4ea9f6ece7f3a3b5ae1152156798",
"0x610c522168ddcf77cbad2ae92b2f79cedff1cecca8492de85427f3f28604df4b",
"0xbf098f1d6145dfcc5810781812b33017afea11d4d04d67c95d304e35264748d4",
"0xc257d1f186b6a657a8be3722eba52cf3d1cd273e0c0b67c19ba0d3809ba109e5",
"0x556386aa3192dc1d137b52a48b70cef267d8ab28ee9230165956c8493e9048ad",
"0x1dd9ba11d1bff831b371503677076cb9519c860329b8be6e017019d5b1e23285",
"0xd19320a15532a80bfda949b0879bc70c65f2db991ced0a96a800d66c6bdac6c6",
"0xce5c7ba19415b905ba9fcdbde715a3a7ab2b0f0725e141c2e8af3d3c0d555e64",
"0x10c6610bb9d6f1d8fd5fe92de3864a4b5be84f3e8b7f82d6d797ca823fa02eab"
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


