import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Frame {
  id: number
  video: string
  fallbackImage: string
  textContent: string
  label: string
}

interface HAL900InterestFormProps {
  selectedFrame: Frame | null
}

export function HAL900InterestForm({ selectedFrame }: HAL900InterestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    startDate: '',
    message: ''
  })

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', { ...formData, spaceType: selectedFrame?.label })
    setIsSubmitting(false)
    setStep(3) // Success step
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  }

  const getStepContent = () => {
    switch (step) {
      case 1:
  return (
          <motion.div
            key="step1"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileFocus="focus"
                variants={inputVariants}
                className="md:col-span-2"
              >
                <label htmlFor="name" className="block text-lg font-medium text-white/90 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </motion.div>
              
              <motion.div
                whileFocus="focus"
                variants={inputVariants}
              >
                <label htmlFor="email" className="block text-lg font-medium text-white/90 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div
                whileFocus="focus"
                variants={inputVariants}
              >
                <label htmlFor="phone" className="block text-lg font-medium text-white/90 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                />
              </motion.div>
            </div>
            
            <motion.button
              type="button"
              onClick={() => setStep(2)}
              className="w-full flex justify-center py-5 px-8 rounded-xl text-lg font-semibold text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
            </motion.button>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileFocus="focus"
                variants={inputVariants}
                className="md:col-span-2"
              >
                <label htmlFor="company" className="block text-lg font-medium text-white/90 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your company name"
                />
              </motion.div>

              <motion.div
                whileFocus="focus"
                variants={inputVariants}
              >
                <label htmlFor="teamSize" className="block text-lg font-medium text-white/90 mb-2">
                  Team Size
                </label>
                <select
                  id="teamSize"
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                >
                  <option value="" className="bg-gray-900">Select team size</option>
                  <option value="1-5" className="bg-gray-900">1-5 people</option>
                  <option value="6-10" className="bg-gray-900">6-10 people</option>
                  <option value="11-25" className="bg-gray-900">11-25 people</option>
                  <option value="26-50" className="bg-gray-900">26-50 people</option>
                  <option value="50+" className="bg-gray-900">50+ people</option>
                </select>
              </motion.div>

              <motion.div
                whileFocus="focus"
                variants={inputVariants}
              >
                <label htmlFor="startDate" className="block text-lg font-medium text-white/90 mb-2">
                  Desired Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </motion.div>

              <motion.div
                whileFocus="focus"
                variants={inputVariants}
              >
                <label htmlFor="message" className="block text-lg font-medium text-white/90 mb-2">
                  Additional Requirements
              </label>
              <textarea
                id="message"
                rows={4}
                  className="w-full px-6 py-4 bg-white/5 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-200 hover:bg-white/10 text-lg resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your specific requirements or questions..."
              />
              </motion.div>
            </div>

            <div className="flex gap-4">
              <motion.button
                type="button"
                onClick={() => setStep(1)}
                className="w-full flex justify-center py-5 px-8 rounded-xl text-lg font-semibold text-white bg-white/5 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-5 px-8 rounded-xl text-lg font-semibold text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full"
                  />
                ) : (
                  'Submit'
                )}
              </motion.button>
          </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            key="success"
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center space-y-6"
          >
            <motion.div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <motion.h3 
              className="text-3xl font-bold text-white/90"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Thank you!
            </motion.h3>
            <motion.p 
              className="text-white/60 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We've received your interest in our {selectedFrame?.label.toLowerCase()} space.
              <br />
              Our team will contact you shortly to discuss your requirements.
            </motion.p>
          </motion.div>
        )
    }
  }

  return (
    <section 
      id="interest-form" 
      className="min-h-screen flex flex-col items-center justify-start bg-black text-white"
    >
      <div className="w-full max-w-6xl px-4 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFrame?.id || 'default'}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative space-y-8"
          >
            {/* Header Section */}
            <div className="text-center space-y-6 max-w-3xl mx-auto mb-12">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Inquire about {selectedFrame ? selectedFrame.label : 'Workspace'}
              </motion.h1>
              <motion.p 
                className="text-xl text-white/70 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Fill out the form below and our team will get back to you with
                availability and pricing information.
              </motion.p>
            </div>

            {/* Form Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left Side - Form */}
              <div className="lg:col-span-3 space-y-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {getStepContent()}
        </form>
              </div>

              {/* Right Side - Selected Space Info */}
              {selectedFrame && (
                <motion.div 
                  className="lg:col-span-2 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={selectedFrame.fallbackImage}
                      alt={selectedFrame.label}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">{selectedFrame.label}</h3>
                    <p className="text-white/70">{selectedFrame.textContent}</p>
                    <ul className="space-y-3">
                      <li className="flex items-center text-white/70">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Flexible terms and pricing
                      </li>
                      <li className="flex items-center text-white/70">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        24/7 building access
                      </li>
                      <li className="flex items-center text-white/70">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        High-speed internet included
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        {selectedFrame && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            style={{
              background: `url(${selectedFrame.fallbackImage}) center/cover no-repeat`,
              filter: 'blur(30px)'
            }}
          />
        )}
      </div>
    </section>
  )
} 