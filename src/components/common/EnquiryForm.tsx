"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export default function LeaveReplyForm() {
  const [formData, setFormData] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Comment submitted for moderation!");
      setFormData({ comment: "", name: "", email: "", website: "", saveInfo: false });
    }, 1500);
  };

  return (
    <section className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
      
      {/* Header */}
      <div className="mb-10">
        <h3 className="text-3xl font-black text-slate-900 mb-2">Leave a Reply</h3>
        <p className="text-slate-500 font-medium">
          Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Comment Field (Full Width) */}
        <div>
          <label htmlFor="comment" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            rows={6}
            required
            className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all resize-none"
            placeholder="Write your thoughts here..."
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
        </div>

        {/* Name / Email / Website Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="block text-xs font-bold text-slate-900 uppercase tracking-widest mb-3">
              Website
            </label>
            <input
              type="url"
              id="website"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-4 focus:ring-brand-green/10 focus:border-brand-green transition-all"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-slate-300 transition-all checked:border-brand-green checked:bg-brand-green hover:border-brand-green"
              checked={formData.saveInfo}
              onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
            />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <Check size={14} strokeWidth={4} />
            </div>
          </div>
          <label htmlFor="saveInfo" className="cursor-pointer text-sm font-medium text-slate-600 select-none pt-0.5">
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-brand-green hover:shadow-lg hover:shadow-brand-green/20 hover:-translate-y-1 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Posting..." : "Post Comment"}
            {!isSubmitting && <Send size={18} />}
          </button>
        </div>

      </form>
    </section>
  );
}