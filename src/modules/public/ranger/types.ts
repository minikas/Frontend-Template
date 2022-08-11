export const customTypes = {
  ResourceId: '[u8; 32]',
  DepositNonce: 'u64',
  Balances: 'u64',
  Currency: 'Balances',
  KYCStatus: {
    _enum: {
      Tier0: null,
      Tier1: null,
      Tier2: null
    }
  },
  InvestorInfo: {
    kyc_status: 'KYCStatus'
  },
  ProposalVotes: {
    votes_for: 'Vec<MultiAddress>',
    votes_against: 'Vec<MultiAddress>',
    status: 'enum'
  },
  Erc721Token: {
    id: 'TokenId',
    metadata: 'Vec<u8>'
  },
  TokenId: 'U256',
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  AssetId: {
    _enum: {
      POLKADEX: null,
      ASSET: 'u64'
    }
  },
  CHAINSAFE: 'H160',
  CurrencyIdOf: 'AssetId',
  CurrencyId: 'AssetId',
  ShardIdentifier: 'H256',
  BalanceOf: 'Balance',
  Message: {
    data: 'Vec<u8>',
    proof: 'Proof'
  },
  Proof: {
    blockHash: 'H256',
    txIndex: 'u32',
    data: '(Vec<Vec<u8>>, Vec<Vec<u8>>)'
  },
  EthereumHeaderId: {
    number: 'u64',
    hash: 'H256'
  },
  AccountInfo: {
    nonce: 'Index',
    consumers: 'RefCount',
    providers: 'RefCount',
    sufficients: 'RefCount',
    data: 'AccountData'
  },
  EthereumHeader: {
    parentHash: 'H256',
    timestamp: 'u64',
    number: 'u64',
    author: 'H160',
    transactionsRoot: 'H256',
    ommersHash: 'H256',
    extraData: 'Vec<u8>',
    stateRoot: 'H256',
    receiptsRoot: 'H256',
    logBloom: 'Bloom',
    gasUsed: 'U256',
    gasLimit: 'U256',
    difficulty: 'U256',
    seal: 'Vec<Vec<u8>>'
  },
  StoredHeader: {
    submitter: 'Option<AccountId>',
    header: 'EthereumHeader',
    totalDifficulty: 'U256'
  },
  EthashProofData: {
    dagNodes: '[H512; 2]',
    proof: 'Vec<H128>'
  },
  Bloom: '[u8; 256]',
  PruningRange: {
    oldestUnprunedBlock: 'u64',
    oldestBlockToKeep: 'u64'
  },
  FundingRound: {
    tokenA: 'AssetId',
    creator: 'AccountId',
    amount: 'Balance',
    tokenB: 'AssetId',
    projectInfoCid: 'Vec<u8>',
    voteEndBlock: 'BlockNumber',
    vestingEndBlock: 'BlockNumber',
    vestingPerBlock: 'Balance',
    startBlock: 'BlockNumber',
    minAllocation: 'Balance',
    maxAllocation: 'Balance',
    tokenAPriceperTokenB: 'Balance',
    closeRoundBlock: 'BlockNumber',
    actualRaise: 'Balance'
  },
  FundingRoundWithPrimitives: {
    tokenA: 'AssetId',
    creator: 'AccountId',
    amount: 'Balance',
    tokenB: 'AssetId',
    vestingPerBlock: 'Balance',
    startBlock: 'BlockNumber',
    voteEndBlock: 'BlockNumber',
    vestingEndBlock: 'BlockNumber',
    projectInfoCid: 'Vec<u8>',
    minAllocation: 'Balance',
    maxAllocation: 'Balance',
    tokenAPriceperTokenB: 'Balance',
    closeRoundBlock: 'BlockNumber',
    actualRaise: 'Balance'
  },
  Voter: {
    accountId: 'AccountId',
    votes: 'Balance'
  },
  Votes: {
    ayes: 'Vec<Voter>',
    nays: 'Vec<Voter>'
  },
  VoteCast: {
    amount: 'Balance',
    unlockingBlock: 'BlockNumber',
    voterAccount: 'AccountId'
  },
  VoteStat: {
    yes: 'String',
    no: 'String'
  },
  whitelistInfoFundingRound: {
    tokenA: 'AssetId',
    creator: 'AccountId',
    amount: 'Balance',
    tokenB: 'AssetId',
    projectInfoCid: 'Vec<u8>',
    voteEndBlock: 'BlockNumber',
    vestingEndBlock: 'BlockNumber',
    vestingPerBlock: 'Balance',
    startBlock: 'BlockNumber',
    minAllocation: 'Balance',
    maxAllocation: 'Balance',
    tokenAPriceperTokenB: 'Balance',
    closeRoundBlock: 'BlockNumber',
    actualRaise: 'Balance'
  }
}

export const rpc = {
  polkadexido: {
    getRoundsByCreator: {
      description: 'gets all rounds by created by account',
      params: [
        {
          name: 'accountid',
          type: 'AccountId'
        }
      ],
      type: 'Vec<(Hash, FundingRoundWithPrimitives)>'
    },
    getRoundsByInvestor: {
      description: 'gets all rounds invested by account',
      params: [
        {
          name: 'accountid',
          type: 'AccountId'
        }
      ],
      type: 'Vec<(Hash, FundingRoundWithPrimitives)>'
    },
    getVotingStat: {
      params: [
        {
          name: 'roundId',
          type: 'Hash'
        }
      ],
      type: 'VoteStat'
    }
  }
}
export type CustomTypes = typeof customTypes
