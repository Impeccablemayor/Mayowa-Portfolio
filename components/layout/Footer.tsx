'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants'
import { STAGGER_CONTAINER, STAGGER_ITEM } from '@/lib/animations'
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpIcon } from '@/components/ui/Icons'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: GithubIcon, href: SOCIAL_LINKS.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
    { icon: MailIcon, href: SOCIAL_LINKS.email, label: 'Email' },
  ]

  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={STAGGER_ITEM}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold">
                YN
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">{PERSONAL_INFO.name}</h3>
                <p className="text-sm text-muted">{PERSONAL_INFO.title}</p>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {PERSONAL_INFO.description}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={STAGGER_ITEM}>
            <h4 className="font-display font-bold text-sm mb-4 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Work', href: '#work' },
                { label: 'Blog', href: '#blog' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={STAGGER_ITEM}>
            <h4 className="font-display font-bold text-sm mb-4 text-foreground">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface-hover rounded-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-muted text-sm text-center md:text-left"
            variants={STAGGER_ITEM}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 bg-surface-hover hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors text-foreground"
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpIcon />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
