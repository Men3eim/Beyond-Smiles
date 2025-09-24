import type { Metadata } from "next"
import { FadeInWhenVisible } from "@/components/fade-in-when-visible"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cookies Policy | Beyond Smiles - Premium Dental Care",
  description: "Learn about how Beyond Smiles uses cookies on our website. Our cookies policy explains what cookies we use and how you can manage them.",
  keywords: "cookies policy, Beyond Smiles, website cookies, privacy, data protection, dental clinic",
  openGraph: {
    title: "Cookies Policy | Beyond Smiles - Premium Dental Care",
    description: "Learn about how Beyond Smiles uses cookies on our website. Our cookies policy explains what cookies we use and how you can manage them.",
    url: "https://www.beyondsmiles.net/cookies",
    images: [
      {
        url: "https://obxgbxpiygppoztqzksw.supabase.co/storage/v1/object/public/Pictures/beyondsmiles/Dentalimages/HIMA6418.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Smiles - Premium Dental Care Cookies Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | Beyond Smiles - Premium Dental Care",
    description: "Learn about how Beyond Smiles uses cookies on our website.",
  },
  alternates: {
    canonical: "https://www.beyondsmiles.net/cookies",
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 py-20 bg-gradient-to-br from-light-grey via-white to-mint-green/20">
        <div className="max-w-4xl mx-auto">
          <FadeInWhenVisible className="text-center">
            <div className="inline-flex items-center gap-2 bg-sage-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
              <span className="text-sage-green font-neutral-medium text-sm">Legal Information</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-sage-green mb-6">
              Cookies Policy
            </h1>
            <p className="text-xl text-dark-grey leading-relaxed max-w-3xl mx-auto font-neutral-medium">
              Learn about how Beyond Smiles uses cookies on our website to provide you with the best possible experience.
            </p>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* What are Cookies */}
            <FadeInWhenVisible>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">What Are Cookies?</h2>
                  <p className="text-dark-grey leading-relaxed mb-4">
                    Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                    They are widely used to make websites work more efficiently and to provide information to website owners.
                  </p>
                  <p className="text-dark-grey leading-relaxed">
                    Cookies do not contain any information that personally identifies you, but personal information that we 
                    store about you may be linked to the information stored in and obtained from cookies.
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* How We Use Cookies */}
            <FadeInWhenVisible delay={0.1}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">How We Use Cookies</h2>
                  <p className="text-dark-grey leading-relaxed mb-4">
                    Beyond Smiles uses cookies for the following purposes:
                  </p>
                  <ul className="space-y-3 text-dark-grey">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Analytics Cookies:</strong> We use Google Analytics to understand how visitors interact with our website.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Performance Cookies:</strong> These cookies help us improve our website's performance and user experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* Types of Cookies */}
            <FadeInWhenVisible delay={0.2}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">1. Strictly Necessary Cookies</h3>
                      <p className="text-dark-grey leading-relaxed">
                        These cookies are essential for you to browse the website and use its features. Without these cookies, 
                        services you have asked for cannot be provided.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">2. Performance and Analytics Cookies</h3>
                      <p className="text-dark-grey leading-relaxed">
                        These cookies collect information about how you use our website, such as which pages you visit most often. 
                        This data helps us improve how our website works.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">3. Functionality Cookies</h3>
                      <p className="text-dark-grey leading-relaxed">
                        These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">4. Marketing Cookies</h3>
                      <p className="text-dark-grey leading-relaxed">
                        These cookies are used to deliver advertisements more relevant to you and your interests. They may also 
                        be used to limit the number of times you see an advertisement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* Third-Party Cookies */}
            <FadeInWhenVisible delay={0.3}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">Third-Party Cookies</h2>
                  <p className="text-dark-grey leading-relaxed mb-4">
                    Our website may contain third-party cookies from the following services:
                  </p>
                  <ul className="space-y-3 text-dark-grey">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Google Analytics:</strong> To analyze website traffic and user behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Google Fonts:</strong> To display custom fonts on our website</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-sage-green rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Social Media Platforms:</strong> For social sharing functionality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* Managing Cookies */}
            <FadeInWhenVisible delay={0.4}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">Managing Your Cookie Preferences</h2>
                  <p className="text-dark-grey leading-relaxed mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">Browser Settings</h3>
                      <p className="text-dark-grey leading-relaxed">
                        Most web browsers allow you to control cookies through their settings preferences. You can set your 
                        browser to refuse cookies or delete certain cookies.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">Opt-Out Links</h3>
                      <p className="text-dark-grey leading-relaxed">
                        You can opt out of Google Analytics by visiting the Google Analytics opt-out page or by installing 
                        the Google Analytics opt-out browser add-on.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-neutral-medium text-lg text-sage-green mb-2">Cookie Consent</h3>
                      <p className="text-dark-grey leading-relaxed">
                        When you first visit our website, you will see a cookie consent banner where you can choose which 
                        types of cookies you want to accept.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* Contact Information */}
            <FadeInWhenVisible delay={0.5}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">Contact Us About Cookies</h2>
                  <p className="text-dark-grey leading-relaxed mb-4">
                    If you have any questions about our use of cookies or this cookies policy, please contact us:
                  </p>
                  
                  <div className="space-y-3 text-dark-grey">
                    <p><strong>Phone:</strong> +201289107773 or +201109721677</p>
                    <p><strong>Address:</strong> Building 1, Floor 2, Clinic 24, New Giza Health Park, New Giza, Egypt</p>
                    <p><strong>Email:</strong> info@beyondsmiles.net</p>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

            {/* Policy Updates */}
            <FadeInWhenVisible delay={0.6}>
              <Card className="border-sage-green/20 hover:border-sage-green/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl text-sage-green mb-4">Updates to This Policy</h2>
                  <p className="text-dark-grey leading-relaxed">
                    We may update this cookies policy from time to time to reflect changes in our practices or for other 
                    operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                    new cookies policy on this page.
                  </p>
                  <p className="text-dark-grey leading-relaxed mt-4">
                    <strong>Last updated:</strong> January 27, 2025
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>

          </div>
        </div>
      </section>
    </div>
  )
}
