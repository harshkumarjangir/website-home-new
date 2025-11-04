"use client";
import formData from "@/data/formData.json"; // ✅ JSON import

export default function ConsultationForm() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-black to-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
              {formData.leftSection.title}
            </h2>
            <p className="text-lg text-gray-200">
              {formData.leftSection.subtitle}
            </p>
          </div>

          {/* Form Section */}
          <div className="md:w-1/2 bg-[#111118] text-white rounded-2xl shadow-2xl p-8">
            <form suppressHydrationWarning className="space-y-5">
              {formData.form.fields.map((field, index) => {
                if (field.type === "select") {
                  return (
                    <select
                      key={index}
                      className="w-full bg-transparent border-b border-gray-600 text-gray-200 placeholder-gray-400 py-3 focus:outline-none focus:border-blue-500"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#111118]">
                        {field.placeholder}
                      </option>
                      {field.options.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#111118]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  );
                }

                if (field.type === "textarea") {
                  return (
                    <textarea
                      key={index}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full bg-transparent border-b border-gray-600 text-gray-200 placeholder-gray-400 py-3 focus:outline-none focus:border-blue-500"
                    ></textarea>
                  );
                }

                return (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b border-gray-600 text-gray-200 placeholder-gray-400 py-3 focus:outline-none focus:border-blue-500"
                  />
                );
              })}

              {/* NDA + Captcha */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <label className="flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600 rounded"
                  />
                  {formData.form.ndaLabel}
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-300">
                    {formData.form.captcha}
                  </span>
                  <input
                    type="number"
                    className="w-16 bg-transparent border-b border-gray-600 text-white px-2 py-1 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition"
              >
                {formData.buttonText}
              </button>
            </form>

            {/* Response Notes */}
            <ul className="mt-6 text-sm text-gray-400 space-y-1">
              {formData.responseNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
