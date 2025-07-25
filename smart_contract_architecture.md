# Smart Contract Architecture for $TEOS Contribution Pool

## 1. Overview
The $TEOS Contribution Pool smart contract will be developed on the Solana blockchain. It will manage the SOL contributions, $TEOS token distribution, and implement the locking and unlocking mechanisms based on contributor milestones.

## 2. Program ID
- A unique Program ID will identify the smart contract on the Solana blockchain.

## 3. Accounts
### 3.1. Program Derived Address (PDA) Accounts
- **Contribution Pool Account:**
  - Stores the total SOL contributed and the amount locked.
  - Tracks the number of verified contributors.
  - Stores the address of the $TEOS token mint.
- **Contributor Account:**
  - Stores individual contributor's data (e.g., wallet address, amount contributed, $TEOS received, verification status).

### 3.2. Token Accounts
- **$TEOS Token Mint Account:** The official mint account for the $TEOS token.
- **Program's $TEOS Token Account:** A token account owned by the program to hold $TEOS tokens for distribution.
- **Contributor's $TEOS Token Account:** The contributor's associated token account where $TEOS tokens will be deposited.

## 4. Instructions (Functions)
### 4.1. `initialize_pool`
- **Purpose:** Initializes the contribution pool account.
- **Arguments:** Initial $TEOS token mint address.
- **Permissions:** Only callable once by the deployer.

### 4.2. `contribute_sol`
- **Purpose:** Allows users to contribute SOL and receive $TEOS tokens.
- **Arguments:** Amount of SOL to contribute (fixed at $50 equivalent).
- **Logic:**
  - Receive SOL from the contributor.
  - Transfer 10,000 $TEOS from the program's token account to the contributor's token account.
  - Update the total SOL contributed in the Contribution Pool Account.
  - Increment the verified contributor count (assuming off-chain verification updates this).
  - Lock 50% of the contributed SOL within the pool account.

### 4.3. `update_verified_contributors`
- **Purpose:** Updates the count of verified contributors. This instruction is expected to be called by a trusted off-chain authority (backend service) after successful verification.
- **Arguments:** Number of new verified contributors.
- **Permissions:** Only callable by a designated authority.

### 4.4. `unlock_trading`
- **Purpose:** Unlocks the private trading phase when 500 verified contributors are reached.
- **Arguments:** None.
- **Permissions:** Callable by anyone, but only executes if the condition (500 contributors) is met.

### 4.5. `unlock_sol`
- **Purpose:** Unlocks the locked SOL when 10,000 verified holders are reached.
- **Arguments:** None.
- **Permissions:** Callable by anyone, but only executes if the condition (10,000 holders) is met.

## 5. Error Handling
- Insufficient SOL.
- Invalid $TEOS token mint.
- Pool already initialized.
- Unauthorized calls.
- Conditions for unlocking not met.

## 6. Events
- `ContributionMade`: Emitted upon successful SOL contribution.
- `TradingUnlocked`: Emitted when the private trading phase is unlocked.
- `SolUnlocked`: Emitted when the locked SOL is released.

## 7. Dependencies
- Solana Program Library (SPL) Token program for token operations.

## 8. Development Environment
- Rust for smart contract development.
- Anchor framework for Solana program development (recommended for ease of use).

