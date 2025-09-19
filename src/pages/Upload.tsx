import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, CheckCircle, FileText, Folder, ArrowLeft } from 'lucide-react';

const UploadPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const planData = location.state || { plan: 'Starter', paymentConfirmed: false };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  if (!planData.paymentConfirmed) {
    return (
      <Layout>
        <div className="min-h-screen py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
          <Card className="glass-effect backdrop-blur-xl bg-slate-800/50 border-slate-700/50 max-w-md">
            <CardContent className="text-center py-8">
              <h2 className="text-xl font-bold text-white mb-4">Payment Required</h2>
              <p className="text-slate-300 mb-6">Please complete your payment to access the upload area.</p>
              <Button onClick={() => navigate('/pricing')} className="bg-primary">
                Return to Pricing
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

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
            Back to Dashboard
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Upload Your Site Files
            </h1>
            <p className="text-slate-300 text-lg">
              Upload your website files to get started with {planData.plan} plan
            </p>
          </div>

          {!isComplete ? (
            <Card className="glass-effect backdrop-blur-xl bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Upload className="w-6 h-6 mr-2 text-primary" />
                  File Upload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isUploading ? (
                  <div
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-all ${
                      dragActive 
                        ? 'border-primary bg-primary/10' 
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Drop your files here
                    </h3>
                    <p className="text-slate-300 mb-4">
                      or click to browse your computer
                    </p>
                    <input
                      type="file"
                      multiple
                      {...({ webkitdirectory: "" } as any)}
                      className="hidden"
                      id="fileInput"
                      onChange={(e) => handleFileUpload(e.target.files)}
                    />
                    <label htmlFor="fileInput">
                      <Button className="bg-primary hover:bg-primary/90" asChild>
                        <span className="cursor-pointer">
                          <Folder className="w-4 h-4 mr-2" />
                          Select Folder
                        </span>
                      </Button>
                    </label>
                    <p className="text-xs text-slate-400 mt-4">
                      Supports: HTML, CSS, JS, and all web assets
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Uploading files...
                      </h3>
                      <p className="text-slate-300">
                        Please wait while we process your files
                      </p>
                    </div>
                    <Progress value={uploadProgress} className="w-full" />
                    <div className="text-center text-sm text-slate-400">
                      {uploadProgress}% complete
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-slate-300">
                    <FileText className="w-4 h-4 mr-2 text-primary" />
                    HTML, CSS, JS files
                  </div>
                  <div className="flex items-center text-slate-300">
                    <Upload className="w-4 h-4 mr-2 text-primary" />
                    Automatic deployment
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                    SSL enabled
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-effect backdrop-blur-xl bg-slate-800/50 border-slate-700/50 text-center">
              <CardContent className="py-12">
                <div className="mx-auto w-16 h-16 mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Upload Complete!
                </h2>
                <p className="text-slate-300 mb-6">
                  Your website has been successfully deployed and is now live.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-700/30 rounded-lg">
                    <p className="text-sm text-slate-300 mb-2">Your site is live at:</p>
                    <p className="text-primary font-mono">
                      https://your-site.aurevo.app
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" className="border-slate-600 text-slate-300">
                      View Site
                    </Button>
                    <Button className="bg-primary">
                      Manage Hosting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UploadPage;