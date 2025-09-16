import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FadeInWhenVisible } from "@/components/fade-in-when-visible";
import { StaggerContainer, StaggerItem } from "@/components/stagger-animation";
import Link from "next/link";
import {
  Shield,
  Smile,
  Sparkles,
  Wrench,
  Heart,
  Users,
  Star,
  Quote,
  CheckCircle,
  Scissors,
  Baby,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 bg-gradient-to-br from-light-grey via-white to-mint-green/20 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-32 bg-gradient-to-r from-mint-green/30 to-sage-green/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-24 bg-gradient-to-r from-sage-green/20 to-mint-green/20 rounded-full blur-2xl"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <FadeInWhenVisible direction="up" className="text-center lg:text-left">
              <div className="mb-6">
                
                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                  <span className="text-gradient-beyond">Beyond Dentistry.</span>{" "}
                  <span className="italic text-sage-green/90">
                    Confidence, Precision, Experience.
                  </span>
                </h1>
              </div>

              <p className="text-xl text-dark-grey mb-8 leading-relaxed max-w-2xl font-neutral-medium">
                More than a clinic, it's a fusion of science and artistry, where
                every detail builds a smarter, faster and more advanced future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8 py-4 text-lg"
                  >
                    Book an Appointment
                  </Button>
                </Link>

                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-sage-green cursor-pointer font-neutral-medium  text-sage-green hover:bg-sage-green hover:text-white px-8 py-4 text-lg bg-transparent"
                  >
                    Explore Our Services
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm text-dark-grey font-neutral-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                  <span>Expert specialists across all fields</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                  <span>Advanced technology & precision care</span>
                </div>
              </div>
            </FadeInWhenVisible>

            {/* Right content - Hero image */}
            <FadeInWhenVisible direction="right" delay={0.2} className="relative">
              <div className="relative z-10">
                <img
                  src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6439.jpg"
                  alt="Professional dental care at Beyond Smiles"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-mint-green/20 to-sage-green/20 rounded-2xl -z-10"></div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Comprehensive Dental Care{" "}
              <span className="italic text-sage-green/80">Under One Roof</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              We offer a full range of dental specialties, ensuring that every
              patient receives the best care possible with our team of expert
              specialists.
            </p>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Featured Services - showing all 9 services */}
            {[
              {
                title: "Cosmetic Dentistry",
                description: "Teeth whitening, veneers, and complete smile makeovers to enhance your natural beauty.",
                features: [
                  "Professional teeth whitening",
                  "Porcelain veneers",
                  "Complete smile design",
                  "Dental bonding",
                  "Gum contouring",
                  "Smile makeover consultations",
                ],
                icon: Sparkles,
              },
              {
                title: "Implants & Oral Surgery",
                description: "Dental implants, extractions, and bone grafting for comprehensive tooth replacement solutions.",
                features: [
                  "Single and multiple implants",
                  "All-on-4 implant solutions",
                  "Wisdom tooth extraction",
                  "Bone grafting procedures",
                  "Sinus lift surgery",
                  "Implant-supported dentures",
                ],
                icon: Wrench,
              },
              {
                title: "Orthodontics",
                description: "Metal braces, ceramic braces, and clear aligners to straighten teeth and correct bite issues.",
                features: [
                  "Traditional metal braces",
                  "Clear ceramic braces",
                  "Invisible aligners",
                  "Bite correction therapy",
                  "Retainer fitting",
                  "Early orthodontic intervention",
                ],
                icon: Smile,
              },
              {
                title: "Orthognathic Surgery",
                description: "Correcting facial bone position or size to improve function, balance, and appearance.",
                features: [
                  "Jaw repositioning surgery",
                  "Facial balance correction",
                  "Functional improvement",
                  "Sleep apnea treatment",
                  "TMJ disorder correction",
                  "Aesthetic facial enhancement",
                ],
                icon: Scissors,
              },
              {
                title: "Endodontics (Root Canal Treatment)",
                description: "Precision root canal therapy to save your natural teeth and eliminate pain.",
                features: [
                  "Root canal treatment",
                  "Pulp therapy",
                  "Endodontic retreatment",
                  "Apicoectomy",
                  "Pain management",
                  "Tooth preservation",
                ],
                icon: Heart,
              },
              {
                title: "Periodontics",
                description: "Gum disease treatment, deep cleanings, and gum surgery to maintain healthy gums.",
                features: [
                  "Gum disease treatment",
                  "Deep cleaning (scaling)",
                  "Gum surgery and grafting",
                  "Pocket reduction surgery",
                  "Crown lengthening",
                  "Maintenance therapy",
                ],
                icon: Users,
              },
              {
                title: "Pediatric Dentistry",
                description: "Gentle and fun dental care tailored specifically for children and adolescents.",
                features: [
                  "Child-friendly environment",
                  "Preventive care for kids",
                  "Early orthodontic evaluation",
                  "Dental education",
                  "Sedation options",
                  "Special needs care",
                ],
                icon: Baby,
              },
              {
                title: "TMJ & Jaw Treatment",
                description: "Solutions for jaw pain, TMJ disorders, and bite issues to restore comfort and function.",
                features: [
                  "TMJ disorder diagnosis",
                  "Jaw pain relief therapy",
                  "Bite correction treatment",
                  "Custom night guards",
                  "Physical therapy referrals",
                  "Stress management guidance",
                ],
                icon: Zap,
              },
              {
                title: "General & Preventive Dentistry",
                description:
                  "Regular checkups, cleanings, and fillings to maintain optimal oral health and prevent future issues.",
                features: [
                  "Comprehensive oral examinations",
                  "Professional dental cleanings",
                  "Cavity prevention and treatment",
                  "Fluoride treatments",
                  "Dental sealants",
                  "Oral cancer screenings",
                ],
                icon: Shield,
              },
            ].map((service, index) => (
              <StaggerItem key={index}>
                <Card
                  className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-sage-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage-green/20 transition-colors">
                      <service.icon className="w-8 h-8 text-sage-green" />
                    </div>
                    <h3 className="font-serif text-xl text-sage-green mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-sage-green mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInWhenVisible className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
              >
                View All Services
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              See The{" "}
              <span className="italic text-sage-green/80">Transformation</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              Witness the remarkable results of our professional teeth whitening
              treatments. Drag the slider to reveal the incredible
              transformation.
            </p>
          </FadeInWhenVisible>

          {/* Interactive Before/After Slider - Centered */}
          <FadeInWhenVisible direction="up" delay={0.2} className="flex justify-center">
            <BeforeAfterSlider
              beforeImage="/image.png"
              afterImage="/Screenshot_1.jpg"
              beforeAlt="Teeth before whitening treatment"
              afterAlt="Teeth after professional whitening"
              className="shadow-2xl max-w-4xl"
            />
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <p className="text-center text-sm text-neutral-grey mt-6 font-neutral-regular">
              Drag the slider to see the transformation
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-mint-green/10 to-sage-green/5">
        <div className="max-w-7xl mx-auto">
          <FadeInWhenVisible className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              What Our Patients{" "}
              <span className="italic text-sage-green/80">Say</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto font-neutral-medium">
              Real stories from real patients who have experienced the Beyond
              Smiles difference.
            </p>
          </FadeInWhenVisible>

          {/* Featured Video Testimonial */}
          <FadeInWhenVisible className="mb-12">
            <div className="max-w-2xl mx-auto">
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group relative overflow-hidden">
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-sage-green mb-4">Patient Review</h3>
                  <div className="relative rounded-lg overflow-hidden shadow-lg mb-4">
                    <video 
                      controls 
                      className="w-full h-auto"
                      poster="/placeholder.jpg"
                    >
                      <source 
                        src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/VIDEO-2025-09-02-18-58-35.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="flex gap-1 justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-dark-grey italic">"Hear from our satisfied patients"</p>
                </div>
              </Card>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "shereef fahmy", location: "", rating: 5, text: "I was skeptical about teeth whitening at first, but the results were actually really good. The staff was nice and explained everything clearly. I feel more confident now when I smile in photos.", treatment: "Teeth Whitening" },
              { name: "Karim Salama", location: "", rating: 5, text: "I had some cosmetic work done and honestly, it took a few visits to get it right, but they were patient with me. The final result looks natural and I'm happy with how it turned out.", treatment: "Cosmetic Dentistry" },
              { name: "Maram Ghaly", location: "", rating: 5, text: "The orthodontic treatment was straightforward. They kept me updated on progress and answered all my questions. My teeth are much straighter now and the process wasn't as uncomfortable as I expected.", treatment: "Orthodontics" },
              { name: "Essam Mohamed", location: "", rating: 5, text: "I was really nervous about getting implants, but they made sure I understood everything first. The procedure went smoothly and the healing process was better than I thought it would be.", treatment: "Dental Implants" },
              { name: "Mostafa Mounir", location: "", rating: 5, text: "They found a small cavity during my regular checkup that I didn't even know I had. Caught it early so the filling was simple and quick. Good preventive care here.", treatment: "Preventive Care" },
              { name: "Maha Blakeway", location: "", rating: 5, text: "I was dreading the root canal, but it wasn't as bad as I thought. The dentist was gentle and the procedure was over quickly. The follow-up care was good too.", treatment: "Endodontics" },
              { name: "Eman Gamal", location: "", rating: 5, text: "Regular cleanings here are thorough and the hygienist is friendly. They always explain what they're doing and give good advice about oral care at home.", treatment: "Preventive Care" },
              { name: "Khaled Aly", location: "", rating: 5, text: "I had some front teeth work done and was worried it would look fake. But they matched the color perfectly and it looks natural. I'm glad I went with them.", treatment: "Cosmetic Dentistry" },
              { name: "Lina Amr", location: "", rating: 5, text: "Words won't do him justice, 1000% recommended, you're in safe hands. He gave me my dream smile in a matter of weeks and fixed what I thought couldn't be fixed. He is very patient and listens to his patients. Very understanding and professional, one of a kind dentist.", treatment: "Cosmetic Dentistry" },
            ].map((testimonial, index) => (
              <StaggerItem key={index}>
                <Card
                  className="p-6 border-sage-green/20 hover:border-sage-green/40 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                >
                  {/* Quote icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-8 h-8 text-sage-green" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-dark-grey mb-6 leading-relaxed font-neutral-regular italic">
                    "{testimonial.text}"
                  </p>

                  {/* Patient info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-sage-green font-neutral-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-neutral-grey font-neutral-regular">
                          {testimonial.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-sage-green font-medium bg-sage-green/10 px-2 py-1 rounded">
                          {testimonial.treatment}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <FadeInWhenVisible className="text-center mt-12">
            <p className="text-lg text-dark-grey mb-6 font-neutral-medium">
              Ready to start your own transformation story?
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-sage-green cursor-pointer hover:bg-sage-green/90 text-white px-8 font-neutral-medium"
              >
                Book Your Consultation
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInWhenVisible direction="left">
              <h2 className="font-serif text-4xl text-sage-green mb-6">
                Who We <span className="italic text-sage-green/80">Are</span>
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed mb-8 font-neutral-regular">
                Beyond Smiles is more than just a dental clinic; we are a
                full-service dental center dedicated to providing advanced oral
                care. Our team consists of specialists across all fields of
                dentistry.
              </p>
              <Link href="/about">
                <Button className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white">
                  Learn More About Us
                </Button>
              </Link>
            </FadeInWhenVisible>
            <FadeInWhenVisible direction="right" delay={0.2} className="relative">
              <img
                src="https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6414.jpg"
                alt="Modern dental clinic interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-sage-green/5 to-mint-green/10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Meet Our{" "}
              <span className="italic text-sage-green/80">Expert Team</span>
            </h2>
            <p className="text-xl text-dark-grey leading-relaxed max-w-4xl mx-auto mb-12 font-neutral-medium">
              Our team is made up of experienced specialists in every field of
              dentistry, ensuring that every patient receives top-tier care.
            </p>
            <Link href="/team">
              <Button
                size="lg"
                className="bg-sage-green font-neutral-medium cursor-pointer hover:bg-sage-green/90 text-white px-8"
              >
                Meet Our Team
              </Button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="px-6 py-20 bg-sage-green text-white">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <FadeInWhenVisible>
            <h2 className="font-serif text-4xl font-bold">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Schedule your consultation today and experience the Beyond Smiles
              difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white font-neutral-medium cursor-pointer text-sage-green hover:bg-gray-100"
              >
                Book Appointment
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white font-neutral-medium cursor-pointer text-white hover:bg-white hover:text-sage-green bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}
