
import { useState } from "react"

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    mobile: "",
    message: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    // Validate name (required)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Validate mobile (required)
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required"
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number"
    }

    // Validate email (optional but must be valid if provided)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData)
      // Reset form after submission
      setFormData({
        name: "",
        city: "",
        email: "",
        mobile: "",
        message: "",
      })
      alert("Thank you for your enquiry! We will get back to you soon.")
    }
  }

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2> */}

        <div className="flex flex-col lg:flex-row bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            <img src="https://catalog.wlimg.com/templates-images/12585/12586/contact01.jpg" alt="Contact Us" fill className="object-cover" />
          </div>

          {/* Form Section */}
          <div className="lg:w-1/2 p-6 lg:p-10">
            <h3 className="text-2xl font-semibold mb-6">Send an Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                  placeholder="Your city"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition ${
                    errors.mobile ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Your mobile number"
                />
                {errors.mobile && <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
