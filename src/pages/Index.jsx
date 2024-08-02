import { ArrowRight, CheckCircle, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Amazing Product</h1>
        <p className="text-xl mb-8">Revolutionize your workflow with our cutting-edge solution</p>
        <Button className="text-lg px-6 py-3">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-12 w-12 text-yellow-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency"
          />
          <FeatureCard
            icon={<Shield className="h-12 w-12 text-green-500" />}
            title="Secure & Reliable"
            description="Your data is safe with our robust security measures"
          />
          <FeatureCard
            icon={<CheckCircle className="h-12 w-12 text-blue-500" />}
            title="Easy to Use"
            description="Intuitive interface for seamless user experience"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers today</p>
          <Button variant="secondary" className="text-lg px-6 py-3">
            Start Your Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;
