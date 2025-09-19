import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Shield, Zap, CreditCard } from 'lucide-react';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState('btc');
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'card'>('crypto');
  
  const planData = location.state || { plan: 'Starter', price: 9, billing: 'monthly' };

  useEffect(() => {
    if (!location.state) {
      navigate('/pricing');
    }
  }, [location.state, navigate]);

  const cryptocurrencies = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', icon: '₿' },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', icon: 'Ξ' },
    { id: 'ltc', name: 'Litecoin', symbol: 'LTC', icon: 'Ł' },
    { id: 'doge', name: 'Dogecoin', symbol: 'DOGE', icon: 'Ð' },
    { id: 'usdt', name: 'Tether', symbol: 'USDT', icon: '₮' },
    { id: 'usdc', name: 'USD Coin', symbol: 'USDC', icon: '$' }
  ];

  const handlePayment = () => {
    // Here you would integrate with NOWPayments API
    console.log('Processing payment:', {
      plan: planData.plan,
      price: planData.price,
      billing: planData.billing,
      method: paymentMethod,
      crypto: selectedCrypto
    });
    
    // Simulate payment processing
    setTimeout(() => {
      navigate('/upload', { 
        state: { 
          plan: planData.plan,
          paymentConfirmed: true 
        }
      });
    }, 2000);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/pricing')}
            className="mb-8 border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pricing
          </Button>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="glass-effect backdrop-blur-xl bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{planData.plan} Plan</h3>
                      <p className="text-slate-300 capitalize">{planData.billing} billing</p>
                    </div>
                    <Badge className="bg-primary/20 text-primary">
                      <Zap className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${planData.price}</span>
                    </div>
                    {planData.billing === 'annual' && (
                      <div className="flex justify-between text-accent">
                        <span>Annual Discount (20%):</span>
                        <span>-${Math.round(planData.price * 0.25)}</span>
                      </div>
                    )}
                    <div className="border-t border-slate-600 pt-2 flex justify-between font-bold text-white">
                      <span>Total:</span>
                      <span>${planData.price}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-white">What's included:</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {planData.plan === 'Starter' ? [
                      '1 Website',
                      '10GB Storage',
                      '100GB Bandwidth',
                      'SSL Certificate',
                      'Basic Support'
                    ] : [
                      '5 Websites',
                      '50GB Storage',
                      '500GB Bandwidth',
                      'Priority Support',
                      'CI/CD Pipelines',
                      'Custom Domains'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="glass-effect backdrop-blur-xl bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <CreditCard className="w-6 h-6 mr-2 text-primary" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method Toggle */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-700/50 rounded-lg">
                  <button
                    onClick={() => setPaymentMethod('crypto')}
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      paymentMethod === 'crypto' 
                        ? 'bg-primary text-white' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Cryptocurrency
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 px-4 rounded-md text-sm font-medium transition-all ${
                      paymentMethod === 'card' 
                        ? 'bg-primary text-white' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    Credit Card
                  </button>
                </div>

                {paymentMethod === 'crypto' ? (
                  <div className="space-y-4">
                    <Label className="text-white">Select Cryptocurrency</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {cryptocurrencies.map((crypto) => (
                        <button
                          key={crypto.id}
                          onClick={() => setSelectedCrypto(crypto.id)}
                          className={`p-3 rounded-lg border transition-all ${
                            selectedCrypto === crypto.id
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-slate-600 text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <div className="text-lg mb-1">{crypto.icon}</div>
                          <div className="text-xs font-medium">{crypto.symbol}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-white">Card Number</Label>
                      <Input 
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-white">Expiry Date</Label>
                        <Input 
                          id="expiry"
                          placeholder="MM/YY"
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-white">CVV</Label>
                        <Input 
                          id="cvv"
                          placeholder="123"
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Cardholder Name</Label>
                      <Input 
                        id="name"
                        placeholder="John Doe"
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handlePayment}
                  className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25"
                >
                  Complete Payment • ${planData.price}
                </Button>

                <div className="text-center text-xs text-slate-400">
                  Powered by NOWPayments • Secure & Encrypted
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;