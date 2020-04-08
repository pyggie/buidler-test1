# Setup
```
$ npm init
$ npm install --save-dev @nomiclabs/buidler
$ npm install --save-dev @nomiclabs/buidler-ethers ethers
$ npm install --save-dev ts-node typescript
$ npm install --save-dev chai @types/node @types/mocha @types/chai
[create buidler.config.ts]
[create tsconfig.json]
[create scripts/Example1.ts]
[create scripts/Example2.ts]
```

# Example 1
Given the following script:
```
import { ethers } from '@nomiclabs/buidler'

async function example (provider: ethers.providers.Provider) {
    let blockNumber = await provider.getBlockNumber()
    console.log(`Block number: ${blockNumber}`)
}

example(ethers.getDefaultProvider()).catch(console.error)
```

Attempting to run it fails during TypeScript compilation:

`$ npx buidler run scripts/Example1.ts`

```
TSError: Unable to compile TypeScript:
scripts/Example1.ts:3:35 - error TS2503: Cannot find namespace 'ethers'.

3 async function example (provider: ethers.providers.Provider) {
```


# Example 2
Given the following script:
```
import { ethers } from 'ethers'

async function example (provider: ethers.providers.Provider) {
    let blockNumber = await provider.getBlockNumber()
    console.log(`Block number: ${blockNumber}`)
}

example(ethers.getDefaultProvider()).catch(console.error)
```

This example compiles and runs as expected.

```
$ npx buidler run scripts/Example2.ts
Block number: 9833062
```