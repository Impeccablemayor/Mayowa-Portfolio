'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'
import { GithubIcon, LinkedinIcon, MailIcon } from '@/components/ui/Icons'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const socialLinks = [
    { icon: GithubIcon, href: SOCIAL_LINKS.github, label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: MailIcon, href: SOCIAL_LINKS.email, label: 'Email', color: 'hover:text-red-400' },
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
            Let&apos;s <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Have a project in mind? Want to discuss technical architecture? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={STAGGER_ITEM} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-muted leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities to build amazing products.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { label: 'Location', value: PERSONAL_INFO.location, href: '#' },
                { label: 'Availability', value: 'Open to new opportunities', href: '#' },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  variants={STAGGER_ITEM}
                  className="block p-4 bg-surface rounded-lg border border-primary/20 hover:border-primary/40 transition-all group"
                  whileHover={{ x: 4 }}
                >
                  <p className="text-sm text-muted font-medium">{item.label}</p>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Follow</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-surface-hover rounded-lg flex items-center justify-center text-foreground transition-colors ${link.color}`}
                    title={link.label}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={STAGGER_ITEM}
            className="p-6 md:p-8 bg-surface rounded-lg border border-primary/20"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2 bg-surface-hover border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2 bg-surface-hover border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2 bg-surface-hover border border-primary/20 rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button className="w-full" size="lg">
                Send Message
              </Button>
              <p className="text-xs text-muted text-center">
                I&apos;ll get back to you as soon as possible
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
