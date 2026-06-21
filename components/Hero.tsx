"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex items-center">

      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-24 w-[450px] h-[450px] rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            <HeartHandshake size={16} />
            HumanLink Community
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight text-slate-900">
            Helping People
            <br />
            Should Be
            <span className="text-blue-600"> Easy.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            HumanLink connects people who need help with people willing to
            help. Build trust, earn reputation, and make a meaningful impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button href="/signup">
              Get Started
            </Button>

            <Button href="/requests" variant="outline">
              Explore Requests
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

          </div>

          <div className="mt-12 flex gap-10 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                25K+
              </h2>

              <p className="text-gray-500">
                Community Members
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                150K+
              </h2>

              <p className="text-gray-500">
                Requests Solved
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                99%
              </h2>

              <p className="text-gray-500">
                Positive Reviews
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="bg-white rounded-3xl shadow-2xl p-8">

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Users className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Find Trusted Helpers
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Verified community members ready to help.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="bg-green-100 p-4 rounded-2xl">
                  <ShieldCheck className="text-green-600" />
                </div>

                <div>
                  <h3 className="font-bold">
                    Safe & Secure
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Reputation and reviews build trust.
                  </p>
                </div>

              </div>

              <div className="bg-blue-600 rounded-2xl p-6 text-white">

                <h2 className="text-xl font-bold">
                  Every Help Counts ❤️
                </h2>

                <p className="mt-2 text-blue-100">
                  Join thousands of people making a difference every day.
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
