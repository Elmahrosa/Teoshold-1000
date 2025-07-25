import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Wallet, Shield, Lock, Users, TrendingUp, CheckCircle, ExternalLink, Twitter, MessageCircle, Facebook } from 'lucide-react'
import './App.css'

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')
  const [contributionProgress, setContributionProgress] = useState(347) // Current contributors
  const [solLocked, setSolLocked] = useState(8675) // SOL locked
  const [tradingUnlocked, setTradingUnlocked] = useState(false)

  const maxContributors = 1000
  const tradingUnlockThreshold = 500
  const progressPercentage = (contributionProgress / maxContributors) * 100
  const tradingProgressPercentage = (contributionProgress / tradingUnlockThreshold) * 100

  const connectWallet = async () => {
    // Simulate wallet connection
    setIsWalletConnected(true)
    setWalletAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU')
  }

  const disconnectWallet = () => {
    setIsWalletConnected(false)
    setWalletAddress('')
  }

  const handleContribute = () => {
    // This would integrate with the smart contract
    alert('Contribution functionality would integrate with Solana wallet and smart contract')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-lg">π</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">$TEOS</h1>
              <p className="text-sm text-gray-400">Pioneers Portal</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {!isWalletConnected ? (
              <Button onClick={connectWallet} className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            ) : (
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-green-900/50 text-green-300 border-green-700">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
                <span className="text-sm text-gray-300">{walletAddress.slice(0, 4)}...{walletAddress.slice(-4)}</span>
                <Button variant="outline" size="sm" onClick={disconnectWallet}>
                  Disconnect
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            🚨 $TEOS Whitelist Contribution Pool
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Only <strong>real holders</strong> gain access—get ready to claim your spot in the exclusive $TEOS pioneer pool.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Shield className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <p className="text-sm text-gray-300">100% Decentralized</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Lock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <p className="text-sm text-gray-300">No Mint Authority</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <p className="text-sm text-gray-300">Fixed Supply Forever</p>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <p className="text-sm text-gray-300">Built for Holders</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contribution Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contribution Card */}
          <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                💰 Contribution Pool Details
              </CardTitle>
              <CardDescription className="text-gray-300">
                Secure your position in the exclusive $TEOS ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400">$50 SOL</p>
                  <p className="text-gray-300">↓</p>
                  <p className="text-3xl font-bold text-green-400">10,000 $TEOS</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">🔐 50% SOL locked until 10,000 holders</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">⚡️ Early trading at 500 contributors</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">🎯 Private trading until 10,000 holders</span>
                </div>
              </div>

              {isWalletConnected ? (
                <Button 
                  onClick={handleContribute} 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3"
                >
                  Contribute $50 SOL → Get 10,000 $TEOS
                </Button>
              ) : (
                <Button 
                  onClick={connectWallet} 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Wallet to Contribute
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Progress Card */}
          <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                📈 Pool Progress
              </CardTitle>
              <CardDescription className="text-gray-300">
                Track the journey to 1,000 verified contributors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Contributors</span>
                  <span className="text-sm text-white font-bold">{contributionProgress} / {maxContributors}</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-300">Trading Unlock Progress</span>
                  <span className="text-sm text-white font-bold">{contributionProgress} / {tradingUnlockThreshold}</span>
                </div>
                <Progress value={Math.min(tradingProgressPercentage, 100)} className="h-3" />
                {contributionProgress >= tradingUnlockThreshold && (
                  <Badge className="mt-2 bg-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Trading Unlocked!
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-blue-400">{solLocked.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">SOL Locked</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-purple-400">{(contributionProgress * 10000).toLocaleString()}</p>
                  <p className="text-xs text-gray-400">$TEOS Distributed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">📈 What Comes Next?</CardTitle>
            <CardDescription className="text-gray-300">
              The journey from 10,000 holders to global adoption
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📲</span>
                </div>
                <h3 className="text-lg font-bold text-white">Mining App Launch</h3>
                <p className="text-sm text-gray-300">Onboard new holders and distribute airdrops</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏦</span>
                </div>
                <h3 className="text-lg font-bold text-white">Exchange Listings</h3>
                <p className="text-sm text-gray-300">Listed on OKX and Binance</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-white">Security Audit</h3>
                <p className="text-sm text-gray-300">Full audit by CertiK</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Social Links */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white">⚡️ Stay Connected</CardTitle>
            <CardDescription className="text-gray-300">
              Join our community and stay updated
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-6">
              <a href="https://x.com/TeosEgypt" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="text-white">@TeosEgypt</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://t.me/elmahrosapi" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-white">Telegram</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/TeosEgypt" target="_blank" rel="noopener noreferrer"
                 className="flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="text-white">Facebook</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Final Thought 👌</h3>
            <p className="text-gray-300 italic">
              "We're not chasing hype. We're building a strong, verified holder base that will carry $TEOS into serious exchange listings and secure growth. Egypt is rising in Web3 — and $TEOS is leading that movement."
            </p>
            <div className="mt-6 text-sm text-gray-400">
              <p>🚀 Only the first 1,000 verified wallets will enter — the gate closes forever after that.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

