/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFTMarket, NFTMarketInterface } from "../NFTMarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_voteToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "ItemBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "MarketItemCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "itemId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "sold",
        type: "bool",
      },
    ],
    name: "MarketItemCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "createItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "getItem",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "itemId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nftContract",
            type: "address",
          },
          {
            internalType: "address",
            name: "seller",
            type: "address",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct NFTMarket.MarketItem",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "listItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200142538038062001425833981016040819052610031916100e7565b61003a3361007b565b6000805460ff60a01b19169055600480546001600160a01b039283166001600160a01b03199182161790915560038054939092169216919091179055610119565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146100e257600080fd5b919050565b600080604083850312156100f9578182fd5b610102836100cb565b9150610110602084016100cb565b90509250929050565b6112fc80620001296000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063715018a611610071578063715018a61461020f5780638456cb5914610217578063883efa671461021f5780638da5cb5b14610232578063e7fb74c71461024d578063f2fde38b1461026057600080fd5b806326fb76c2146100ae5780633129e773146100c35780633f4ba83a146101d757806340e58ee5146101df5780635c975abb146101f2575b600080fd5b6100c16100bc366004611054565b610273565b005b6101726100d1366004611131565b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915250600090815260056020908152604091829020825160c0810184528154815260018201549281019290925260028101546001600160a01b0390811693830193909352600381015483166060830152600401549182166080820152600160a01b90910460ff16151560a082015290565b6040516101ce919081518152602080830151908201526040808301516001600160a01b03908116918301919091526060808401518216908301526080808401519091169082015260a09182015115159181019190915260c00190565b60405180910390f35b6100c1610461565b6100c16101ed366004611131565b610495565b600054600160a01b900460ff1660405190151581526020016101ce565b6100c1610637565b6100c161066b565b6100c161022d366004611161565b61069d565b6000546040516001600160a01b0390911681526020016101ce565b6100c161025b366004611131565b6108a6565b6100c161026e36600461103a565b610b82565b6000546001600160a01b031633146102a65760405162461bcd60e51b815260040161029d9061124f565b60405180910390fd5b600054600160a01b900460ff16156102d05760405162461bcd60e51b815260040161029d90611225565b6102de600180546001019055565b60006102e960015490565b600354604051630138280760e01b81529192506001600160a01b03169063013828079061031c90869086906004016111ee565b602060405180830381600087803b15801561033657600080fd5b505af115801561034a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036e9190611149565b506040805160c08101825282815260006020808301828152600380546001600160a01b03908116868801908152606087018681528b83166080890181815260a08a018981528c8a526005909852978a9020985189559451600189015590516002880180549184166001600160a01b031992831617905590519287018054938316939091169290921790915592516004909401805492511515600160a01b026001600160a81b0319909316949093169390931717905590517fa9a8fc8429e9d4b8fe54b38fd34cb56aaa1a9bf6eb605f45b223b08b58b97618906104549084815260200190565b60405180910390a2505050565b6000546001600160a01b0316331461048b5760405162461bcd60e51b815260040161029d9061124f565b610493610c1d565b565b600054600160a01b900460ff16156104bf5760405162461bcd60e51b815260040161029d90611225565b6000818152600560205260409020600401546001600160a01b031633146105215760405162461bcd60e51b81526020600482015260166024820152752cb7ba9030b932903737ba1034ba32b69037bbb732b960511b604482015260640161029d565b60008181526005602052604090206001015461056f5760405162461bcd60e51b815260206004820152600d60248201526c4974656d206e6f742073616c6560981b604482015260640161029d565b6003546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906105a3903090339086906004016111ca565b600060405180830381600087803b1580156105bd57600080fd5b505af11580156105d1573d6000803e3d6000fd5b50505060008281526005602052604080822060018101929092556004909101805460ff60a01b19169055517fb1a176800c8fd3678d67204dac70aeb48aa9bb90b068dd8d94810161f12c68a9915061062c9083815260200190565b60405180910390a150565b6000546001600160a01b031633146106615760405162461bcd60e51b815260040161029d9061124f565b6104936000610cba565b6000546001600160a01b031633146106955760405162461bcd60e51b815260040161029d9061124f565b610493610d0a565b600054600160a01b900460ff16156106c75760405162461bcd60e51b815260040161029d90611225565b60006106d260015490565b90508083111561071a5760405162461bcd60e51b8152602060048201526013602482015272125d195b48191bd95cc81b9bdd08195e1a5cdd606a1b604482015260640161029d565b6000838152600560205260409020600401546001600160a01b031633146107755760405162461bcd60e51b815260206004820152600f60248201526e2737ba103a37b5b2b71037bbb732b960891b604482015260640161029d565b600082116107c55760405162461bcd60e51b815260206004820152601e60248201527f5072696365206d75737420626520626967676572207468656e207a65726f0000604482015260640161029d565b6003546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906107f9903390309088906004016111ca565b600060405180830381600087803b15801561081357600080fd5b505af1158015610827573d6000803e3d6000fd5b505050600084815260056020908152604080832060018101879055600401805460ff60a01b1916905560035481513081529283018790529082019290925285925033916001600160a01b0316907f5bfe4f0f5242c27246d16b3be58a2bb6bba41fc761f0c24f081f810a650ab94c9060600160405180910390a4505050565b600054600160a01b900460ff16156108d05760405162461bcd60e51b815260040161029d90611225565b600081815260056020526040902060040154600160a01b900460ff161561092d5760405162461bcd60e51b8152602060048201526011602482015270125d195b48185b1c9958591e481cdbdb19607a1b604482015260640161029d565b600480546040516370a0823160e01b815233928101929092526001600160a01b0316906370a082319060240160206040518083038186803b15801561097157600080fd5b505afa158015610985573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a99190611149565b60008281526005602052604090206001015411156109fd5760405162461bcd60e51b8152602060048201526011602482015270496e737566666963656e742066756e647360781b604482015260640161029d565b6000818152600560205260409020600401546001600160a01b0316331415610a605760405162461bcd60e51b815260206004820152601660248201527521b0b7103737ba10313abc90313c903434b6b9b2b63360511b604482015260640161029d565b60008181526005602052604090206004808201546001909201549054610a97926001600160a01b0391821692339290911690610d6f565b6003546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610acb903090339086906004016111ca565b600060405180830381600087803b158015610ae557600080fd5b505af1158015610af9573d6000803e3d6000fd5b5050506000828152600560209081526040918290206004810180546001600160a81b03191633908117600160a01b179091556001909101548351918252918101859052918201527ffe2094c9ff56716cb07edf0cff82da158f346cb3bb2d89703228ab4eb0c329b6915060600160405180910390a1600090815260056020526040812060010155565b6000546001600160a01b03163314610bac5760405162461bcd60e51b815260040161029d9061124f565b6001600160a01b038116610c115760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161029d565b610c1a81610cba565b50565b600054600160a01b900460ff16610c6d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161029d565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a01b900460ff1615610d345760405162461bcd60e51b815260040161029d90611225565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c9d3390565b610dc7846323b872dd60e01b858585604051602401610d90939291906111ca565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610dcd565b50505050565b6000610e22826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610ea49092919063ffffffff16565b805190915015610e9f5780806020019051810190610e409190611111565b610e9f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161029d565b505050565b6060610eb38484600085610ebd565b90505b9392505050565b606082471015610f1e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161029d565b843b610f6c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161029d565b600080866001600160a01b03168587604051610f8891906111ae565b60006040518083038185875af1925050503d8060008114610fc5576040519150601f19603f3d011682016040523d82523d6000602084013e610fca565b606091505b5091509150610fda828286610fe5565b979650505050505050565b60608315610ff4575081610eb6565b8251156110045782518084602001fd5b8160405162461bcd60e51b815260040161029d9190611212565b80356001600160a01b038116811461103557600080fd5b919050565b60006020828403121561104b578081fd5b610eb68261101e565b60008060408385031215611066578081fd5b61106f8361101e565b9150602083013567ffffffffffffffff8082111561108b578283fd5b818501915085601f83011261109e578283fd5b8135818111156110b0576110b06112b0565b604051601f8201601f19908116603f011681019083821181831017156110d8576110d86112b0565b816040528281528860208487010111156110f0578586fd5b82602086016020830137856020848301015280955050505050509250929050565b600060208284031215611122578081fd5b81518015158114610eb6578182fd5b600060208284031215611142578081fd5b5035919050565b60006020828403121561115a578081fd5b5051919050565b60008060408385031215611173578182fd5b50508035926020909101359150565b6000815180845261119a816020860160208601611284565b601f01601f19169290920160200192915050565b600082516111c0818460208701611284565b9190910192915050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0383168152604060208201819052600090610eb390830184611182565b602081526000610eb66020830184611182565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60005b8381101561129f578181015183820152602001611287565b83811115610dc75750506000910152565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220d9ef7f99242ab58824ad471e237eaa987463d84805eb05141c606a036b81587b64736f6c63430008040033";

type NFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTMarket__factory extends ContractFactory {
  constructor(...args: NFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _nftContract: string,
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFTMarket> {
    return super.deploy(
      _nftContract,
      _voteToken,
      overrides || {}
    ) as Promise<NFTMarket>;
  }
  getDeployTransaction(
    _nftContract: string,
    _voteToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _nftContract,
      _voteToken,
      overrides || {}
    );
  }
  attach(address: string): NFTMarket {
    return super.attach(address) as NFTMarket;
  }
  connect(signer: Signer): NFTMarket__factory {
    return super.connect(signer) as NFTMarket__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTMarketInterface {
    return new utils.Interface(_abi) as NFTMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTMarket;
  }
}