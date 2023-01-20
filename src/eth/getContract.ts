import {ethers, providers} from "ethers";

export default function getContract(provider: providers.Web3Provider) {
  return new ethers.Contract(
    '0x352f8c1f8576183b6c783d3e589abb69ffbebc47',
    [],
    provider
  )
}
