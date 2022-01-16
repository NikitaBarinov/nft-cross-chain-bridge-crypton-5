/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200165238038062001652833981016040819052620000349162000105565b6200003f8162000046565b506200022e565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001db565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b6000602080838503121562000118578182fd5b82516001600160401b03808211156200012f578384fd5b818501915085601f83011262000143578384fd5b81518181111562000158576200015862000218565b604051601f8201601f19908116603f0116810190838211818310171562000183576200018362000218565b8160405282815288868487010111156200019b578687fd5b8693505b82841015620001be57848401860151818501870152928501926200019f565b82841115620001cf57868684830101525b98975050505050505050565b600181811c90821680620001f057607f821691505b602082108114156200021257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611414806200023e6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610e9a565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610f8e565b610223565b60405190151581526020016100a9565b6100e86100e3366004610fcd565b610275565b6040516100a9919061114e565b610108610103366004610d57565b610309565b005b61011d610118366004610ec3565b6103a0565b6040516100a9919061110d565b610108610138366004610e60565b610502565b6100c561014b366004610d25565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610187366004610dfd565b610511565b60006001600160a01b0383166101fd5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025457506001600160e01b031982166303a24d0760e21b145b8061026f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606002805461028490611274565b80601f01602080910402602001604051908101604052809291908181526020018280546102b090611274565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103255750610325853361014b565b61038c5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101f4565b6103998585858585610598565b5050505050565b606081518351146104055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f4565b6000835167ffffffffffffffff81111561042f57634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610458578160200160208202803683370190505b50905060005b84518110156104fa576104bf85828151811061048a57634e487b7160e01b600052603260045260246000fd5b60200260200101518583815181106104b257634e487b7160e01b600052603260045260246000fd5b602002602001015161018c565b8282815181106104df57634e487b7160e01b600052603260045260246000fd5b60209081029190910101526104f3816112dc565b905061045e565b509392505050565b61050d338383610791565b5050565b6001600160a01b03851633148061052d575061052d853361014b565b61058b5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101f4565b6103998585858585610872565b81518351146105fa5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f4565b6001600160a01b0384166106205760405162461bcd60e51b81526004016101f4906111a9565b3360005b845181101561072357600085828151811061064f57634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061067b57634e487b7160e01b600052603260045260246000fd5b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156106cb5760405162461bcd60e51b81526004016101f4906111ee565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b1682528120805484929061070890849061125c565b925050819055505050508061071c906112dc565b9050610624565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610773929190611120565b60405180910390a4610789818787878787610998565b505050505050565b816001600160a01b0316836001600160a01b031614156108055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f4565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108985760405162461bcd60e51b81526004016101f4906111a9565b336108b18187876108a888610b03565b61039988610b03565b6000848152602081815260408083206001600160a01b038a168452909152902054838110156108f25760405162461bcd60e51b81526004016101f4906111ee565b6000858152602081815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061092f90849061125c565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461098f828888888888610b5c565b50505050505050565b6001600160a01b0384163b156107895760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109dc908990899088908890889060040161106a565b602060405180830381600087803b1580156109f657600080fd5b505af1925050508015610a26575060408051601f3d908101601f19168201909252610a2391810190610fb1565b60015b610ad357610a32611323565b806308c379a01415610a6c5750610a4761133b565b80610a525750610a6e565b8060405162461bcd60e51b81526004016101f4919061114e565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f4565b6001600160e01b0319811663bc197c8160e01b1461098f5760405162461bcd60e51b81526004016101f490611161565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610b4b57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b156107895760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610ba090899089908890889088906004016110c8565b602060405180830381600087803b158015610bba57600080fd5b505af1925050508015610bea575060408051601f3d908101601f19168201909252610be791810190610fb1565b60015b610bf657610a32611323565b6001600160e01b0319811663f23a6e6160e01b1461098f5760405162461bcd60e51b81526004016101f490611161565b80356001600160a01b0381168114610c3d57600080fd5b919050565b600082601f830112610c52578081fd5b81356020610c5f82611238565b604051610c6c82826112af565b8381528281019150858301600585901b87018401881015610c8b578586fd5b855b85811015610ca957813584529284019290840190600101610c8d565b5090979650505050505050565b600082601f830112610cc6578081fd5b813567ffffffffffffffff811115610ce057610ce061130d565b604051610cf7601f8301601f1916602001826112af565b818152846020838601011115610d0b578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610d37578182fd5b610d4083610c26565b9150610d4e60208401610c26565b90509250929050565b600080600080600060a08688031215610d6e578081fd5b610d7786610c26565b9450610d8560208701610c26565b9350604086013567ffffffffffffffff80821115610da1578283fd5b610dad89838a01610c42565b94506060880135915080821115610dc2578283fd5b610dce89838a01610c42565b93506080880135915080821115610de3578283fd5b50610df088828901610cb6565b9150509295509295909350565b600080600080600060a08688031215610e14578081fd5b610e1d86610c26565b9450610e2b60208701610c26565b93506040860135925060608601359150608086013567ffffffffffffffff811115610e54578182fd5b610df088828901610cb6565b60008060408385031215610e72578182fd5b610e7b83610c26565b915060208301358015158114610e8f578182fd5b809150509250929050565b60008060408385031215610eac578182fd5b610eb583610c26565b946020939093013593505050565b60008060408385031215610ed5578182fd5b823567ffffffffffffffff80821115610eec578384fd5b818501915085601f830112610eff578384fd5b81356020610f0c82611238565b604051610f1982826112af565b8381528281019150858301600585901b870184018b1015610f38578889fd5b8896505b84871015610f6157610f4d81610c26565b835260019690960195918301918301610f3c565b5096505086013592505080821115610f77578283fd5b50610f8485828601610c42565b9150509250929050565b600060208284031215610f9f578081fd5b8135610faa816113c5565b9392505050565b600060208284031215610fc2578081fd5b8151610faa816113c5565b600060208284031215610fde578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561101457815187529582019590820190600101610ff8565b509495945050505050565b60008151808452815b8181101561104457602081850181015186830182015201611028565b818111156110555782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061109690830186610fe5565b82810360608401526110a88186610fe5565b905082810360808401526110bc818561101f565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906111029083018461101f565b979650505050505050565b602081526000610faa6020830184610fe5565b6040815260006111336040830185610fe5565b82810360208401526111458185610fe5565b95945050505050565b602081526000610faa602083018461101f565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600067ffffffffffffffff8211156112525761125261130d565b5060051b60200190565b6000821982111561126f5761126f6112f7565b500190565b600181811c9082168061128857607f821691505b602082108114156112a957634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff811182821017156112d5576112d561130d565b6040525050565b60006000198214156112f0576112f06112f7565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561133857600481823e5160e01c5b90565b600060443d10156113495790565b6040516003193d81016004833e81513d67ffffffffffffffff816024840111818411171561137957505050505090565b82850191508151818111156113915750505050505090565b843d87010160208285010111156113ab5750505050505090565b6113ba602082860101876112af565b509095945050505050565b6001600160e01b0319811681146113db57600080fd5b5056fea2646970667358221220c5b277026a0ff071bcaf83f6800280193e4be9574f0aa6f0d5ddccb1bc97ab0564736f6c63430008040033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
