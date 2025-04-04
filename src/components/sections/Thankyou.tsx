import React from 'react';
import { Button } from "../../components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-8 border border-zinc-200 dark:border-zinc-700">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6">
            Your message has been sent successfully. I'll get back to you as soon as possible.
          </p>
          
          <Button asChild>
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 -z-10 transform translate-x-1/3 translate-y-1/4 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-green-500 to-blue-500 blur-3xl"></div>
      </div>
      <div className="absolute left-0 top-1/4 -z-10 transform -translate-x-1/3 opacity-10 dark:opacity-5" aria-hidden="true">
        <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-blue-500 to-green-500 blur-3xl"></div>
      </div>
    </section>
  );
};

export default ThankYou;
