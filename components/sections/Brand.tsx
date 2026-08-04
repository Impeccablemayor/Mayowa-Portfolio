'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'

export function Brand() {
  const brandValues = [
    {
      title: 'Innovation',
      description: 'Push boundaries with cutting-edge technologies and creative problem-solving',
      icon: '🚀',
    },
    {
      title: 'Quality',
      description: 'Deliver production-grade code with rigorous testing and documentation',
      icon: '✨',
    },
    {
      title: 'Scalability',
      description: 'Build systems that grow with your business needs',
      icon: '📈',
    },
    {
      title: 'Reliability',
      description: 'Design fault-tolerant systems that work when it matters most',
      icon: '🛡️',
    },
  ]

  const stats = [
    { label: '5+', description: 'Years in Software Engineering' },
    { label: '50+', description: 'Projects Delivered' },
    { label: '1M+', description: 'Users Served' },
    { label: '99.9%', description: 'Average Uptime' },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 max-w-6xl mx-auto">
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={STAGGER_ITEM} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Personal <span className="text-gradient">Brand</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            I&apos;m committed to engineering excellence, continuous learning, and delivering
            real value through technology
          </p>
        </motion.div>

        {/* Core Values */}
        <motion.div
          variants={STAGGER_CONTAINER}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {brandValues.map((value, idx) => (
            <motion.div
              key={idx}
              variants={STAGGER_ITEM}
              className="p-6 bg-surface rounded-lg border border-primary/20 hover:border-primary/40 transition-all group"
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-muted">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          variants={STAGGER_ITEM}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-8 bg-surface-elevated rounded-lg border border-primary/20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={STAGGER_ITEM}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.label}
              </div>
              <p className="text-xs md:text-sm text-muted">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Promise */}
        <motion.div
          variants={STAGGER_ITEM}
          className="relative overflow-hidden rounded-lg border border-primary/20 p-8 md:p-12 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">My Promise to You</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold">Speed & Performance</h4>
                  <p className="text-muted">Optimized systems that respond instantly</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold">Security & Reliability</h4>
                  <p className="text-muted">Enterprise-grade security and 99.9% uptime</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <h4 className="font-semibold">Clear Communication</h4>
                  <p className="text-muted">Transparent progress and detailed documentation</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold">Results Focused</h4>
                  <p className="text-muted">Every line of code serves your business goals</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div variants={STAGGER_ITEM} className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">What I Specialize In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Full-Stack Development',
              'System Architecture',
              'Performance Tuning',
              'Cloud Infrastructure',
              'Microservices Design',
              'Database Optimization',
              'Team Leadership',
              'Technical Strategy',
            ].map((spec) => (
              <Badge key={spec} variant="secondary">
                {spec}
              </Badge>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
