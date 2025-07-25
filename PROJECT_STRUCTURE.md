# $TEOS Contribution Pool - Project Structure

## Overview

This document provides a comprehensive overview of the project structure for the $TEOS Private Contribution Pool system.

## Root Directory

```
teos_contribution_pool/
├── README.md                    # Main project documentation
├── LICENSE                      # MIT License
├── CONTRIBUTING.md             # Contribution guidelines
├── .gitignore                  # Git ignore rules
├── PROJECT_STRUCTURE.md        # This file
├── smart_contract/             # Solana smart contract
├── frontend/                   # React frontend application
├── backend/                    # Flask backend API
└── docs/                       # Additional documentation
```

## Smart Contract (`smart_contract/`)

The Solana smart contract built with Anchor framework:

```
smart_contract/
├── Cargo.toml                  # Rust dependencies and metadata
├── src/
│   └── lib.rs                  # Main smart contract code
├── tests/                      # Contract tests (to be added)
└── target/                     # Build artifacts (ignored)
```

**Key Features:**
- SOL contribution handling ($50 → 10,000 $TEOS)
- 50% SOL locking mechanism
- Progressive unlock system (500 contributors → trading, 10,000 → SOL unlock)
- Holder verification integration
- Security measures and access controls

## Frontend (`frontend/`)

React application with modern UI components:

```
frontend/
├── package.json                # Node.js dependencies
├── vite.config.js             # Vite build configuration
├── index.html                 # HTML entry point
├── src/
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles
│   ├── assets/                # Static assets
│   ├── components/            # React components
│   │   └── ui/                # shadcn/ui components
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── public/                    # Public assets
└── dist/                      # Build output (ignored)
```

**Key Features:**
- Wallet integration (Phantom, Solflare)
- Real-time contribution tracking
- Progress visualization
- Responsive design
- Social media integration
- Modern UI with Tailwind CSS and shadcn/ui

## Backend (`backend/`)

Flask API server with database integration:

```
backend/
├── requirements.txt           # Python dependencies
├── src/
│   ├── main.py               # Flask application entry point
│   ├── models/               # Database models
│   │   ├── user.py          # User model (template)
│   │   └── contribution.py  # Contribution and pool models
│   ├── routes/               # API route handlers
│   │   ├── user.py          # User routes (template)
│   │   └── contribution.py  # Contribution API routes
│   ├── static/              # Static files for frontend serving
│   └── database/            # Database files
│       └── app.db           # SQLite database
├── venv/                    # Python virtual environment (ignored)
└── tests/                   # API tests (to be added)
```

**Key Features:**
- RESTful API endpoints
- Database models for contributions, pool stats, and holders
- CORS support for frontend integration
- Holder verification system
- Real-time statistics tracking
- Admin endpoints for verification

## Documentation (`docs/`)

Comprehensive project documentation:

```
docs/
├── technical_specifications.md  # Technical requirements and architecture
├── smart_contract_architecture.md # Smart contract design details
├── API_DOCUMENTATION.md         # Complete API reference
├── DEPLOYMENT_GUIDE.md          # Deployment instructions
└── SECURITY_CONSIDERATIONS.md   # Security measures and best practices
```

## Key Files and Their Purpose

### Configuration Files

- **`package.json`**: Frontend dependencies and build scripts
- **`requirements.txt`**: Backend Python dependencies
- **`Cargo.toml`**: Smart contract Rust dependencies
- **`vite.config.js`**: Frontend build configuration
- **`components.json`**: shadcn/ui component configuration

### Source Code Files

- **`smart_contract/src/lib.rs`**: Complete Solana smart contract implementation
- **`frontend/src/App.jsx`**: Main React application with full UI
- **`backend/src/main.py`**: Flask application with CORS and routing
- **`backend/src/models/contribution.py`**: Database models for the system
- **`backend/src/routes/contribution.py`**: API endpoints for contribution management

### Documentation Files

- **`README.md`**: Comprehensive project overview and setup instructions
- **`CONTRIBUTING.md`**: Guidelines for contributing to the project
- **`LICENSE`**: MIT license for the project
- **`.gitignore`**: Git ignore rules for all project components

## Development Workflow

### Local Development Setup

1. **Smart Contract Development**
   ```bash
   cd smart_contract
   anchor build
   anchor test
   ```

2. **Frontend Development**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Development**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python src/main.py
   ```

### Build and Deployment

1. **Frontend Build**
   ```bash
   cd frontend
   npm run build
   ```

2. **Backend Deployment**
   ```bash
   cd backend
   source venv/bin/activate
   gunicorn --config gunicorn.conf.py src.main:app
   ```

3. **Smart Contract Deployment**
   ```bash
   cd smart_contract
   anchor deploy --provider.cluster mainnet-beta
   ```

## Technology Stack

### Smart Contract
- **Language**: Rust
- **Framework**: Anchor
- **Blockchain**: Solana
- **Token Standard**: SPL Token

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks

### Backend
- **Framework**: Flask
- **Database**: SQLite (development) / PostgreSQL (production)
- **ORM**: SQLAlchemy
- **CORS**: Flask-CORS
- **Authentication**: JWT (planned)

### Development Tools
- **Version Control**: Git
- **Package Managers**: npm (frontend), pip (backend), cargo (smart contract)
- **Testing**: Jest (frontend), pytest (backend), Anchor test (smart contract)
- **Linting**: ESLint (frontend), Black (backend), Clippy (smart contract)

## Security Considerations

### Smart Contract Security
- Reentrancy protection
- Access control mechanisms
- Integer overflow protection
- Comprehensive testing
- Planned CertiK audit

### API Security
- Input validation and sanitization
- CORS configuration
- Rate limiting (planned)
- Authentication and authorization (planned)
- Secure database queries

### Frontend Security
- Wallet integration security
- XSS protection
- Content Security Policy
- Secure communication (HTTPS)
- Input validation

## Deployment Architecture

### Development Environment
- Local development servers
- SQLite database
- Solana devnet
- Hot reloading for all components

### Production Environment
- Containerized deployment (Docker)
- PostgreSQL database
- Solana mainnet
- Load balancing and scaling
- SSL/TLS encryption
- Monitoring and logging

## Future Enhancements

### Planned Features
- Mobile application
- Advanced analytics dashboard
- Multi-language support
- Enhanced security features
- Integration with additional wallets
- Automated testing suite

### Scalability Considerations
- Database optimization
- Caching layer implementation
- CDN integration
- Microservices architecture
- Load balancing strategies

This project structure provides a solid foundation for the $TEOS Private Contribution Pool system, with clear separation of concerns, comprehensive documentation, and scalable architecture for future growth.

