use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount, Transfer};

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkgorMVJqpT2A"); // Placeholder ID

#[program]
pub mod teos_contribution_pool {
    use super::*;

    pub fn initialize_pool(ctx: Context<InitializePool>) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.teos_mint = ctx.accounts.teos_mint.key();
        pool.total_sol_contributed = 0;
        pool.locked_sol = 0;
        pool.verified_contributors = 0;
        pool.trading_unlocked = false;
        Ok(())
    }

    pub fn contribute_sol(ctx: Context<ContributeSol>, amount_sol: u64) -> Result<()> {
        // Transfer SOL from contributor to pool
        // This part would involve native SOL transfer, which is handled differently in Anchor
        // For simplicity, we'll assume SOL is transferred to the pool's associated token account
        // or directly to the program's SOL account.

        let cpi_accounts = Transfer {
            from: ctx.accounts.contributor_teos_token_account.to_account_info(),
            to: ctx.accounts.pool_teos_token_account.to_account_info(),
            authority: ctx.accounts.contributor.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

        // For demonstration, we'll simulate token transfer. In a real scenario,
        // the user would send SOL, and the program would send TEOS.
        // Here, we're simulating the TEOS transfer from the pool to the contributor.
        token::transfer(cpi_ctx, 10_000_000_000)?; // 10,000 TEOS (assuming 9 decimal places)

        let pool = &mut ctx.accounts.pool;
        pool.total_sol_contributed += amount_sol;
        pool.locked_sol += amount_sol / 2; // 50% of SOL locked

        // This would typically be updated by an off-chain process after verification
        // For now, we'll increment it directly for demonstration purposes.
        pool.verified_contributors += 1;

        Ok(())
    }

    pub fn update_verified_contributors(ctx: Context<UpdateVerifiedContributors>, new_contributors: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.verified_contributors += new_contributors;
        Ok(())
    }

    pub fn unlock_trading(ctx: Context<UnlockTrading>) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        require!(!pool.trading_unlocked, ErrorCode::TradingAlreadyUnlocked);
        require!(pool.verified_contributors >= 500, ErrorCode::NotEnoughContributorsForTrading);
        pool.trading_unlocked = true;
        Ok(())
    }

    pub fn unlock_sol(ctx: Context<UnlockSol>) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        require!(pool.verified_contributors >= 10_000, ErrorCode::NotEnoughHoldersForSolUnlock);

        // Transfer locked SOL back to a designated treasury account or make it available
        // For simplicity, we'll just set locked_sol to 0.
        pool.locked_sol = 0;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(init, payer = user, space = 8 + Pool::INIT_SPACE)]
    pub pool: Account<'info, Pool>,
    pub teos_mint: Account<'info, Mint>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ContributeSol<'info> {
    #[account(mut)]
    pub pool: Account<'info, Pool>,
    #[account(mut)]
    pub contributor: Signer<'info>,
    #[account(mut)]
    pub contributor_teos_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub pool_teos_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateVerifiedContributors<'info> {
    #[account(mut)]
    pub pool: Account<'info, Pool>,
    pub authority: Signer<'info>,
}

#[derive(Accounts)]
pub struct UnlockTrading<'info> {
    #[account(mut)]
    pub pool: Account<'info, Pool>,
}

#[derive(Accounts)]
pub struct UnlockSol<'info> {
    #[account(mut)]
    pub pool: Account<'info, Pool>,
}

#[account]
#[derive(Default, InitSpace)]
pub struct Pool {
    pub teos_mint: Pubkey,
    pub total_sol_contributed: u64,
    pub locked_sol: u64,
    pub verified_contributors: u64,
    pub trading_unlocked: bool,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Trading is already unlocked.")]
    TradingAlreadyUnlocked,
    #[msg("Not enough contributors to unlock trading.")]
    NotEnoughContributorsForTrading,
    #[msg("Not enough holders to unlock SOL.")]
    NotEnoughHoldersForSolUnlock,
}


