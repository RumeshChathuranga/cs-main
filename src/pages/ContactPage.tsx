import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  ChevronDown,
  HelpCircle,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { submitContactMessage } from '../hooks/useContactMessages'

// ─── Icon helpers (reuse identical SVGs from Footer) ─────────────────────────

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'size-[18px]'}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className ?? 'size-[18px]'}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className ?? 'size-[18px]'}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="bg-brand relative overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute top-[-70px] right-[80px] size-[260px] rounded-[130px] bg-white/6" />
      <div className="pointer-events-none absolute bottom-0 left-[-40px] size-[180px] rounded-[90px] bg-white/5" />

      {/* White bleed that overlaps into the next section */}
      <div className="absolute bottom-0 left-0 h-10 w-full bg-white" />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-20 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/28 bg-white/16 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="text-white/90">
            <svg viewBox="0 0 12 12" fill="currentColor" className="size-3">
              <path d="M6 0l1.347 4.146H12L8.326 6.708 9.674 10.854 6 8.292l-3.674 2.562L3.674 6.708 0 4.146h4.653z" />
            </svg>
          </span>
          <span className="text-[11px] font-bold tracking-[1.1px] text-white uppercase">
            AIESEC in Colombo South
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
          className="text-[52px] leading-[1.1] font-black tracking-[-0.02em] text-white"
        >
          Get In Touch.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.16}
          className="mt-4 max-w-lg text-[18px] leading-[1.65] text-white/82"
        >
          We&apos;d love to hear from you — whether you&apos;re a student, a company, or just
          curious about what we do.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Contact section ──────────────────────────────────────────────────────────

const subjectOptions = [
  'General Inquiry',
  'Global Volunteer Program',
  'Global Talent Program',
  'Global Teacher Program',
  'Partnership / Collaboration',
  'Media & Press',
  'Other',
]

const COOLDOWN_KEY = 'contact_form_last_submit'
const COOLDOWN_MS = 60_000

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    const lastSubmit = localStorage.getItem(COOLDOWN_KEY)
    if (lastSubmit && Date.now() - Number(lastSubmit) < COOLDOWN_MS) {
      setError('Please wait a moment before sending another message.')
      return
    }

    setSubmitting(true)
    const { error: submitError } = await submitContactMessage({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject,
      message: form.message.trim(),
    })
    setSubmitting(false)

    if (submitError) {
      setError(
        submitError.includes('Too many messages')
          ? 'You have sent several messages recently. Please try again later.'
          : 'Something went wrong. Please try again or email us directly.',
      )
      return
    }

    localStorage.setItem(COOLDOWN_KEY, String(Date.now()))
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#eef1f5] bg-white shadow-[0px_10px_40px_0px_rgba(0,0,0,0.08),0px_4px_6px_0px_rgba(0,0,0,0.04)]">
      {/* Gradient top accent bar */}
      <div className="from-brand to-violet absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-linear-to-r" />

      <div className="px-9 pt-10 pb-9">
        {/* Card header */}
        <div className="mb-7">
          <h2 className="text-navy text-[22px] font-extrabold">Send Us a Message.</h2>
          <p className="mt-1.5 text-sm text-[#9ca3af]">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-12 text-center"
          >
            <div className="bg-brand/10 flex size-14 items-center justify-center rounded-full">
              <CheckCircle size={28} className="text-brand" />
            </div>
            <p className="text-navy text-[17px] font-bold">Message Sent!</p>
            <p className="max-w-xs text-sm text-[#6b7280]">
              Thank you for reaching out. We&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-[18px]">
            {error && (
              <div className="flex items-start gap-2 rounded-[10px] border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                {error}
              </div>
            )}

            {/* Full Name */}
            <div className="flex flex-col gap-[7px]">
              <label className="text-navy text-[13px] font-semibold tracking-[0.01em]">
                Full Name<span className="text-brand">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Nethmi Perera"
                className="text-navy placeholder:text-navy/50 focus:border-brand focus:ring-brand/15 h-[47px] w-full rounded-[10px] border border-[#e5e7eb] bg-white px-4 text-[14px] transition-colors outline-none focus:ring-2"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-[7px]">
              <label className="text-navy text-[13px] font-semibold tracking-[0.01em]">
                Email Address<span className="text-brand">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="text-navy placeholder:text-navy/50 focus:border-brand focus:ring-brand/15 h-[47px] w-full rounded-[10px] border border-[#e5e7eb] bg-white px-4 text-[14px] transition-colors outline-none focus:ring-2"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-[7px]">
              <label className="text-navy text-[13px] font-semibold tracking-[0.01em]">
                Subject<span className="text-brand">*</span>
              </label>
              <div className="relative">
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="text-navy focus:border-brand focus:ring-brand/15 [&:not(:has(option:checked:not([value=''])))]:text-navy/50 h-[47px] w-full appearance-none rounded-[10px] border border-[#e5e7eb] bg-white px-4 pr-10 text-[14px] transition-colors outline-none focus:ring-2"
                >
                  <option value="" disabled>
                    Select a subject…
                  </option>
                  {subjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 text-[#9ca3af]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[7px]">
              <label className="text-navy text-[13px] font-semibold tracking-[0.01em]">
                Message<span className="text-brand">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind…"
                className="text-navy placeholder:text-navy/50 focus:border-brand focus:ring-brand/15 w-full resize-none rounded-[10px] border border-[#e5e7eb] bg-white px-4 py-3 text-[14px] leading-[1.65] transition-colors outline-none focus:ring-2"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="bg-brand hover:bg-brand-dark flex h-[50px] w-full items-center justify-center gap-2.5 rounded-[12px] text-[15px] font-bold text-white shadow-[0px_4px_9px_rgba(3,126,243,0.27)] transition-all hover:shadow-[0px_6px_14px_rgba(3,126,243,0.35)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
              {submitting ? 'Sending…' : 'Send Message'}
            </button>

            <p className="text-center text-[12px] leading-relaxed text-[#9ca3af]">
              By submitting, you agree to our privacy policy. We never share your information with
              third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ElementType
  label: string
  value: string
  sub: string
}) {
  return (
    <div className="flex gap-[18px] rounded-2xl border border-[#eef1f5] bg-white px-[25px] py-[23px] shadow-[0px_2px_6px_rgba(0,0,0,0.05)]">
      <div className="bg-brand/[0.07] flex size-[46px] shrink-0 items-center justify-center rounded-[12px]">
        <Icon size={20} className="text-brand" />
      </div>
      <div>
        <p className="mb-1.5 text-[12px] font-bold tracking-[1.2px] text-[#9ca3af] uppercase">
          {label}
        </p>
        <p className="text-navy text-[14px] font-semibold">{value}</p>
        <p className="text-[14px] text-[#6b7280]">{sub}</p>
      </div>
    </div>
  )
}

type SocialRowProps = {
  icon: React.ComponentType<{ className?: string }>
  name: string
  handle: string
  href: string
}

function SocialRow({ icon: Icon, name, handle, href }: SocialRowProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:border-brand/25 hover:bg-brand/3 flex items-center gap-3 rounded-[12px] border border-[#eef1f5] px-[17px] py-[13px] transition-all"
    >
      <div className="group-hover:bg-brand/10 flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-[#f3f4f6] transition-colors">
        <Icon className="group-hover:text-brand size-[18px] text-[#1a1a2e]" />
      </div>
      <div>
        <p className="text-navy text-[13px] leading-snug font-bold">{name}</p>
        <p className="text-[12px] leading-snug text-[#9ca3af]">{handle}</p>
      </div>
    </a>
  )
}

function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-8">
      {/* Info Cards */}
      <div className="flex flex-col gap-[14px]">
        <InfoCard
          icon={MapPin}
          label="Location"
          value="University of Moratuwa"
          sub="Katubedda, Moratuwa, Sri Lanka"
        />
        <InfoCard
          icon={Mail}
          label="Email"
          value="aiesec.colombosouth@aiesec.net"
          sub="Replies within 24 hours"
        />
        <InfoCard icon={Phone} label="Phone" value="+94 11 2650 301" sub="Mon–Fri, 9am–5pm (IST)" />
      </div>

      {/* Social Links */}
      <div>
        <p className="mb-[14px] text-[13px] font-bold tracking-[1.3px] text-[#9ca3af] uppercase">
          Follow Us
        </p>
        <div className="flex flex-col gap-[10px]">
          <SocialRow
            icon={FacebookIcon}
            name="Facebook"
            handle="AIESEC in Colombo South"
            href="https://www.facebook.com/aiesec.colombosouth"
          />
          <SocialRow
            icon={InstagramIcon}
            name="Instagram"
            handle="@aiesec.colombosouth"
            href="https://www.instagram.com/aiesec.colombosouth"
          />
          <SocialRow
            icon={LinkedinIcon}
            name="LinkedIn"
            handle="AIESEC in Colombo South"
            href="https://www.linkedin.com/company/aiesec-in-colombo-south"
          />
        </div>
      </div>

      {/* Response time note */}
      <div className="border-brand/13 bg-brand/3 flex items-start gap-[14px] rounded-[14px] border px-[21px] py-[19px]">
        <div className="bg-brand/9 flex size-[42px] shrink-0 items-center justify-center rounded-[12px]">
          <Clock size={20} className="text-brand" />
        </div>
        <div>
          <p className="text-navy text-[13px] leading-normal font-bold">
            We respond within 24 hours
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-[#6b7280]">
            Our team is available Monday to Friday. Weekend inquiries are answered first thing
            Monday morning.
          </p>
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  return (
    <section className="bg-white py-[72px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <ContactForm />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
          >
            <ContactInfoPanel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Map section ──────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-8 flex items-center gap-3"
        >
          <div className="bg-brand/8 flex size-10 items-center justify-center rounded-[10px]">
            <MapPin size={18} className="text-brand" />
          </div>
          <div>
            <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">
              Where to find us
            </p>
            <h2 className="text-navy text-[20px] font-extrabold">University of Moratuwa</h2>
          </div>
        </motion.div>

        {/* Two-column layout: map + details */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.08}
          className="grid overflow-hidden rounded-2xl border border-[#eef1f5] shadow-[0px_4px_24px_rgba(0,0,0,0.07)] lg:grid-cols-[1fr_300px]"
        >
          {/* Map */}
          <div className="relative h-[280px] lg:h-[300px]">
            <iframe
              title="University of Moratuwa location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8236893484136!2d79.9007!3d6.7964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2451c3a1ac44d%3A0x6e2d0b87caf08c47!2sUniversity%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1718000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.55) brightness(0.98)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="bg-brand/5 pointer-events-none absolute inset-0" />
          </div>

          {/* Info sidebar */}
          <div className="flex flex-col justify-between border-t border-[#eef1f5] bg-white p-7 lg:border-t-0 lg:border-l">
            <div className="space-y-5">
              <div>
                <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">
                  Address
                </p>
                <p className="text-navy mt-1.5 text-[14px] leading-relaxed font-semibold">
                  University of Moratuwa
                </p>
                <p className="text-[13px] leading-relaxed text-[#6b7280]">
                  Katubedda, Moratuwa 10400
                  <br />
                  Sri Lanka
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">
                  Office Hours
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#6b7280]">
                  Monday – Friday
                  <br />
                  9:00 AM – 5:00 PM (IST)
                </p>
              </div>

              <div>
                <p className="text-[11px] font-bold tracking-[1.1px] text-[#9ca3af] uppercase">
                  Campus
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#6b7280]">
                  Faculty of Engineering building, ground floor, Room 101
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=University+of+Moratuwa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark mt-6 flex items-center justify-center gap-2 rounded-[10px] py-3 text-[14px] font-bold text-white shadow-[0px_4px_9px_rgba(3,126,243,0.27)] transition-all"
            >
              <MapPin size={15} />
              Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── FAQ / CTA section ────────────────────────────────────────────────────────

const stats = [
  { value: '< 24h', label: 'Response Time' },
  { value: '100%', label: 'Messages Answered' },
  { value: 'Mon–Fri', label: 'Office Hours' },
]

function FaqSection() {
  return (
    <section className="bg-surface py-[80px]">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* Icon */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="bg-brand/[0.07] mb-6 flex size-16 items-center justify-center rounded-[18px]"
        >
          <HelpCircle size={30} className="text-brand" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.07}
          className="text-navy text-[36px] leading-[1.2] font-extrabold"
        >
          Have More Questions?
        </motion.h2>

        {/* Body */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.14}
          className="mt-4 max-w-lg text-[16px] leading-[1.75] text-[#6b7280]"
        >
          Check out our FAQ for quick answers to common questions — or reach out directly. We reply
          to every message within 24 hours, no exceptions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.21}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/about#faq"
            className="border-brand text-brand hover:bg-brand inline-flex h-[52px] items-center gap-2 rounded-[10px] border-2 px-6 text-[15px] font-bold transition-all hover:text-white"
          >
            View FAQ
            <ArrowRight size={15} />
          </a>
          <Link
            to="/programs/global-volunteer"
            className="bg-brand hover:bg-brand-dark inline-flex h-[52px] items-center gap-2 rounded-[10px] px-6 text-[15px] font-bold text-white shadow-[0px_4px_9px_rgba(3,126,243,0.27)] transition-all hover:shadow-[0px_6px_14px_rgba(3,126,243,0.35)]"
          >
            Explore Programs
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.28}
          className="mt-12 flex flex-wrap justify-center gap-10"
        >
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-brand text-[20px] leading-tight font-black">{value}</span>
              <span className="text-[12px] font-medium text-[#9ca3af]">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapSection />
      <FaqSection />
    </>
  )
}
