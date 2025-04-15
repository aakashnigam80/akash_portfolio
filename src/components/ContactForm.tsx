"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Image from "next/image";
import { Send } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookCall = async (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
    const cal = await getCalApi({ namespace: "30min" });
    cal("modal", { calLink: "akash-nigam09/30min" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-white/95 backdrop-blur-md border-border p-8">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-[32px] font-medium leading-none tracking-tight">
            Let&apos;s Connect
            <p className="text-[16px] text-muted-foreground leading-6 font-normal mt-3">
              Interested in discussing potential opportunities? Fill out the
              form below or{" "}
              <a
                href="#"
                className="underline font-medium"
                onClick={handleBookCall}
              >
                schedule a call.
              </a>
            </p>
          </DialogTitle>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative overflow-hidden rounded-full">
              <Image
                src="/images/akash.jpeg"
                alt="Akash Nigam"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[16px] font-medium">Akash Nigam</h3>
              <p className="text-[14px] text-muted-foreground leading-6">
                akashnigam0911@gmail.com
              </p>
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-black">
              Name
            </label>
            <Input
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-white/80 border-border h-12"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-white/80 border-border h-12"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-black">
              Tell me about the opportunity
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              className="min-h-[120px] bg-white/80 border-border"
              placeholder="Please include details about the role, company, and any other relevant information"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border shadow-2xl h-10 text-sm font-medium rounded-full"
            disabled={isSubmitting}
          >
            <Send />
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
          <p className="text-center text-[14px] text-gray-500">
            I&apos;ll get back to you within 24 hours
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
