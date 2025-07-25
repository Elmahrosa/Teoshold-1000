# Contributing to $TEOS Private Contribution Pool

We welcome contributions from the community! This document provides guidelines for contributing to the $TEOS Private Contribution Pool project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Focus on constructive feedback
- Help create a welcoming environment for all contributors
- Report any unacceptable behavior to the project maintainers

## How to Contribute

### Reporting Issues

If you find a bug or have a feature request:

1. Check existing issues to avoid duplicates
2. Create a new issue with a clear title and description
3. Include steps to reproduce (for bugs)
4. Add relevant labels and assign to appropriate milestone

### Development Workflow

1. **Fork the Repository**
   ```bash
   git clone https://github.com/your-username/teos-contribution-pool.git
   cd teos-contribution-pool
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the coding standards outlined below
   - Write tests for new functionality
   - Update documentation as needed

4. **Test Your Changes**
   ```bash
   # Frontend tests
   cd frontend && npm test
   
   # Backend tests
   cd backend && python -m pytest
   
   # Smart contract tests
   cd smart_contract && anchor test
   ```

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

6. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

## Coding Standards

### Smart Contract (Rust)

- Follow Rust naming conventions (snake_case for functions and variables)
- Use meaningful variable and function names
- Add comprehensive comments for complex logic
- Implement proper error handling
- Write unit tests for all functions

```rust
// Good example
pub fn contribute_sol(ctx: Context<ContributeSol>, amount_sol: u64) -> Result<()> {
    // Validate contribution amount
    require!(amount_sol == REQUIRED_SOL_AMOUNT, ErrorCode::InvalidContributionAmount);
    
    // Process contribution logic
    // ...
    
    Ok(())
}
```

### Frontend (JavaScript/React)

- Use camelCase for variables and functions
- Use PascalCase for component names
- Implement proper error handling
- Write meaningful component and function names
- Add PropTypes or TypeScript types

```jsx
// Good example
const ContributionCard = ({ onContribute, isLoading }) => {
  const handleSubmit = async (amount) => {
    try {
      await onContribute(amount);
    } catch (error) {
      console.error('Contribution failed:', error);
    }
  };

  return (
    <Card>
      {/* Component JSX */}
    </Card>
  );
};
```

### Backend (Python)

- Follow PEP 8 style guidelines
- Use meaningful function and variable names
- Implement proper error handling and logging
- Write docstrings for all functions and classes
- Use type hints where appropriate

```python
# Good example
def create_contribution(wallet_address: str, sol_amount: float) -> Dict[str, Any]:
    """
    Create a new contribution record.
    
    Args:
        wallet_address: The contributor's wallet address
        sol_amount: Amount of SOL contributed
        
    Returns:
        Dictionary containing contribution details
        
    Raises:
        ValueError: If contribution amount is invalid
    """
    if sol_amount != REQUIRED_SOL_AMOUNT:
        raise ValueError("Invalid contribution amount")
    
    # Implementation logic
    return contribution_data
```

## Testing Guidelines

### Unit Tests

- Write tests for all new functionality
- Aim for high test coverage (>80%)
- Use descriptive test names
- Test both success and failure cases

### Integration Tests

- Test API endpoints end-to-end
- Test smart contract interactions
- Verify frontend-backend integration

### Test Structure

```python
# Backend test example
def test_create_contribution_success():
    """Test successful contribution creation."""
    # Arrange
    wallet_address = "test_wallet_address"
    sol_amount = 50.0
    
    # Act
    result = create_contribution(wallet_address, sol_amount)
    
    # Assert
    assert result['success'] is True
    assert result['data']['sol_amount'] == sol_amount
```

## Documentation

### Code Documentation

- Add docstrings to all functions and classes
- Include parameter descriptions and return values
- Document any complex algorithms or business logic

### API Documentation

- Update API documentation for new endpoints
- Include request/response examples
- Document error codes and responses

### README Updates

- Update installation instructions if needed
- Add new features to the feature list
- Update usage examples

## Pull Request Guidelines

### Before Submitting

- Ensure all tests pass
- Update documentation
- Rebase your branch on the latest main
- Squash commits if necessary

### PR Description

Include in your PR description:

- Summary of changes
- Motivation for the changes
- Testing performed
- Screenshots (for UI changes)
- Breaking changes (if any)

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tests added/updated
```

## Security Considerations

### Reporting Security Issues

- Do not create public issues for security vulnerabilities
- Email security concerns to: security@teosegypt.com
- Include detailed information about the vulnerability
- Allow reasonable time for response before public disclosure

### Security Guidelines

- Never commit private keys or sensitive data
- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper authentication and authorization
- Follow secure coding practices

## Community Guidelines

### Communication

- Use GitHub issues for bug reports and feature requests
- Join our Telegram channel for general discussion
- Follow us on Twitter for updates

### Getting Help

- Check existing documentation first
- Search closed issues for similar problems
- Ask questions in GitHub discussions
- Reach out on community channels

## Recognition

Contributors will be recognized in:

- CONTRIBUTORS.md file
- Release notes for significant contributions
- Project documentation
- Community announcements

## Development Environment Setup

### Prerequisites

- Node.js 18+
- Python 3.8+
- Rust and Cargo
- Solana CLI tools
- Anchor framework

### Quick Start

```bash
# Clone the repository
git clone https://github.com/teosegypt/teos-contribution-pool.git
cd teos-contribution-pool

# Install frontend dependencies
cd frontend && npm install

# Install backend dependencies
cd ../backend && pip install -r requirements.txt

# Build smart contract
cd ../smart_contract && anchor build
```

## Release Process

### Version Numbering

We follow Semantic Versioning (SemVer):
- MAJOR.MINOR.PATCH
- MAJOR: Breaking changes
- MINOR: New features (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Checklist

- [ ] Update version numbers
- [ ] Update CHANGELOG.md
- [ ] Create release branch
- [ ] Run full test suite
- [ ] Update documentation
- [ ] Create GitHub release
- [ ] Deploy to production

Thank you for contributing to the $TEOS Private Contribution Pool project! Your contributions help build a stronger, more secure, and more feature-rich platform for the community.

