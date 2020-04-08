import { ethers } from 'ethers'

async function example (provider: ethers.providers.Provider) {
    let blockNumber = await provider.getBlockNumber()
    console.log(`Block number: ${blockNumber}`)
}

example(ethers.getDefaultProvider()).catch(console.error)
