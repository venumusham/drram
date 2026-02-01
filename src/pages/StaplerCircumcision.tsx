import React from 'react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/FAQAccordion';
import FloatingSocialBar from '../components/FloatingSocialBar';
import Button from '../components/ui/Button';
import {
    Clock,
    Droplet,
    Home,
    Sparkles,
    CheckCircle2,
    AlertCircle,
    Stethoscope,
    Calendar,
    Phone,
    MessageCircle,
    ShieldCheck
} from 'lucide-react';

const StaplerCircumcision: React.FC = () => {
    const circumSchema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: 'Stapler Circumcision in Hyderabad',
        alternateName: 'ZSR Stapler Circumcision',
        url: 'https://drramprabhu.com/stapler-circumcision-hyderabad',
        image: 'https://drramprabhu.com/images/stapler-circumcision/illustration.png',
        description: 'Advanced, painless, and bloodless stapler circumcision procedure by Dr. Ram Prabhu in Hyderabad. Quick recovery and excellent cosmetic results.',
        medicalSpecialty: 'Urology',
        procedureType: 'Outpatient',
        areaServed: ['Hyderabad', 'Kondapur', 'Gachibowli', 'Madhapur', 'Hitech City'],
        performer: {
            '@type': 'Physician',
            name: 'Dr. M. Ram Prabhu',
            medicalSpecialty: ['Plastic Surgery', 'Reconstructive Surgery'],
            telephone: '9949808628'
        }
    };

    const faqs = [
        {
            question: 'Is stapler circumcision painful?',
            answer: 'The procedure is performed under local anesthesia, making it virtually painless. Post-operative discomfort is minimal compared to conventional methods.'
        },
        {
            question: 'How long do staples remain?',
            answer: 'The staples used are designed to fall off naturally within 7 to 14 days after the procedure as the tissue heals.'
        },
        {
            question: 'Is it better than conventional circumcision?',
            answer: 'Yes, stapler circumcision is generally preferred due to minimal blood loss, shorter procedure time (10-15 mins), no manual stitching, and superior cosmetic outcomes.'
        },
        {
            question: 'Can adults undergo this procedure?',
            answer: 'Absolutely. Stapler circumcision is suitable and highly effective for both children and adults.'
        }
    ];

    return (
        <>
            <SEO
                title="Stapler Circumcision in Hyderabad | Painless & Bloodless | Dr. Ram Prabhu"
                description="Get painless stapler circumcision in Hyderabad by Dr. Ram Prabhu. Bloodless procedure, 15-minute surgery, and quick recovery. Book your consultation today."
                keywords={[
                    'stapler circumcision hyderabad',
                    'zsr circumcision hyderabad',
                    'painless circumcision hyderabad',
                    'best circumcision surgeon hyderabad',
                    'circumcision for adults hyderabad'
                ]}
                image="https://drramprabhu.com/images/stapler-circumcision/illustration.png"
                url="https://drramprabhu.com/stapler-circumcision-hyderabad"
                type="article"
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(circumSchema) }}
            />

            <div className="relative min-h-screen bg-white">
                <FloatingSocialBar />

                {/* STRIP 1: HERO SECTION */}
                <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-primary-50 to-white overflow-hidden py-12 md:py-20 px-4">
                    <div className="absolute inset-0 bg-white/20 z-0"></div>
                    <div className="container mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-4 leading-tight">
                                    Stapler Circumcision <br />
                                    <span className="text-primary-600 font-serif font-normal italic">in Hyderabad</span>
                                </h1>
                                <h3 className="text-xl md:text-2xl text-accent-600 font-semibold mb-6">
                                    Painless • Bloodless • Quick Recovery
                                </h3>
                                <div className="mb-8">
                                    <p className="text-lg font-medium text-gray-800">By Dr. Ramprabhu</p>
                                    <p className="text-gray-600">Plastic & Reconstructive Surgeon</p>
                                    <p className="text-gray-600">Kondapur, Hyderabad</p>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                    <Button
                                        href="/contact"
                                        variant="primary"
                                        size="lg"
                                        className="shadow-lg"
                                    >
                                        Book Consultation
                                    </Button>
                                    <Button
                                        href="tel:9949808628"
                                        variant="secondary"
                                        size="lg"
                                        icon={<Phone size={20} />}
                                        className="bg-green-600 hover:bg-green-700 border-none shadow-lg text-white"
                                    >
                                        Call Now
                                    </Button>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                                    <img
                                        src="/images/stapler-circumcision/illustration.png"
                                        alt="Stapler Circumcision"
                                        className="relative w-full max-w-lg rounded-2xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 2: TRUST SIGNALS */}
                <section className="py-12 bg-white border-y border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                    <Clock size={32} />
                                </div>
                                <p className="font-bold text-gray-900">10–15 min</p>
                                <p className="text-sm text-gray-600">Procedure</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                    <Droplet size={32} />
                                </div>
                                <p className="font-bold text-gray-900">Minimal</p>
                                <p className="text-sm text-gray-600">Bleeding</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                    <Home size={32} />
                                </div>
                                <p className="font-bold text-gray-900">Day-care</p>
                                <p className="text-sm text-gray-600">Surgery</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-4">
                                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                    <Sparkles size={32} />
                                </div>
                                <p className="font-bold text-gray-900">Excellent</p>
                                <p className="text-sm text-gray-600">Cosmetic Results</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 3: ABOUT */}
                <section className="py-20 bg-gray-50 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <img
                                    src="/images/stapler-circumcision/schematic.png"
                                    alt="Stapler Circumcision Schematic"
                                    className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                                />
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                                    What is Stapler Circumcision?
                                </h2>
                                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                    Stapler circumcision is a revolutionary, minimally invasive technique that uses a specialized disposable device to perform the procedure with incredible precision and minimal downtime.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-800">Advanced disposable stapler device ensures maximum safety and hygiene.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-800">Simultaneously removes the foreskin and seals the edges for a clean finish.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="text-accent-500 mr-3 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-800">Highly suitable for both children and adults with a faster healing time.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 4: WHY CHOOSE STAPLER */}
                <section className="py-20 bg-white px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-12">
                            Why Choose Stapler Circumcision?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {[
                                "Painless procedure",
                                "Minimal blood loss",
                                "Faster healing",
                                "Better cosmetic outcome",
                                "Reduced infection risk",
                                "Same-day discharge"
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center p-6 bg-primary-50 rounded-xl transition-all hover:shadow-md">
                                    <CheckCircle2 className="text-primary-600 mr-4" size={24} />
                                    <span className="text-lg font-semibold text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* STRIP 5: WHO NEEDS IT */}
                <section className="py-20 bg-primary-50 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-2/3">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                                    Who is it Recommended For?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        "Phimosis (tight foreskin)",
                                        "Recurrent infections (Balanitis)",
                                        "Pain during intercourse",
                                        "Hygiene concerns",
                                        "Religious or personal reasons"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                                            <AlertCircle className="text-accent-500 mr-3 mt-1" size={20} />
                                            <span className="text-gray-800 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 flex justify-center">
                                <div className="p-12 bg-white rounded-full shadow-inner border-2 border-primary-100">
                                    <Stethoscope size={120} className="text-primary-200" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 6: PROCEDURE STEPS */}
                <section className="py-20 bg-white px-4">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary-900 mb-16">
                            How is Stapler Circumcision Done?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Local anesthesia", step: "1" },
                                { title: "Stapler placement", step: "2" },
                                { title: "Instant removal", step: "3" },
                                { title: "Healing process", step: "4" },
                                { title: "Walk home same day", step: "5" }
                            ].map((s, i) => (
                                <div key={i} className="relative flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                        {s.step}
                                    </div>
                                    <p className="font-bold text-gray-900 leading-tight">{s.title}</p>
                                    {i < 4 && (
                                        <div className="hidden lg:block absolute top-8 left-[70%] w-full h-0.5 bg-primary-100 -z-10"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center max-w-2xl mx-auto">
                            <p className="text-gray-600 italic">
                                *The procedure is quick, safe, and doesn't require any manual stitching.
                            </p>
                        </div>
                    </div>
                </section>

                {/* STRIP 7: RECOVERY */}
                <section className="py-20 bg-gray-50 px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-1/2 flex justify-center">
                                <div className="p-8 bg-white/50 backdrop-blur rounded-2xl shadow-xl">
                                    <Calendar size={120} className="text-accent-300" />
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                                    Recovery & Healing
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        "Mild swelling for 2–3 days is normal and expected.",
                                        "Resume routine office work in 2–3 days.",
                                        "Avoid strenuous activities and sexual activity for 4 weeks.",
                                        "Follow-up visit as advised to ensure perfect healing."
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="p-1 bg-accent-100 rounded-full mr-4 text-accent-700">
                                                <CheckCircle2 size={16} />
                                            </div>
                                            <span className="text-gray-700 text-lg">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 8: SAFETY */}
                <section className="py-20 bg-white px-4 border-b border-gray-100">
                    <div className="container mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                            Is Stapler Circumcision Safe?
                        </h2>
                        <div className="p-8 bg-green-50 rounded-2xl border-l-4 border-green-500">
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Absolutely. Stapler circumcision is one of the safest modern methods available. When performed by a highly trained surgeon like Dr. Ram Prabhu, the complication rate is exceptionally low.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <div className="flex items-center text-green-700 font-bold">
                                    <ShieldCheck className="mr-2" />
                                    FDA Approved Tech
                                </div>
                                <div className="flex items-center text-green-700 font-bold">
                                    <ShieldCheck className="mr-2" />
                                    Minor Discomfort Only
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 9: WHY DR RAMPRABHU */}
                <section className="py-20 bg-primary-900 text-white px-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="w-full lg:w-1/2">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src="/banner-desktop.png"
                                        alt="Dr. Ram Prabhu"
                                        className="w-full aspect-[4/3] object-cover"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-900 to-transparent p-6">
                                        <p className="text-xl font-bold">Dr. Ram Prabhu</p>
                                        <p className="text-primary-200">Plastic & Reconstructive Surgeon</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Dr. Ram Prabhu?</h2>
                                <div className="space-y-6">
                                    {[
                                        "Board-certified Plastic & Reconstructive Surgeon",
                                        "Extensive expertise in advanced urological surgeries",
                                        "Ethical, patient-first approach with transparent care",
                                        "Focus on achieving excellent cosmetic and functional results"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-start">
                                            <div className="p-1 bg-accent-400 rounded-full mr-4 text-primary-900">
                                                <CheckCircle2 size={18} />
                                            </div>
                                            <span className="text-lg text-primary-50 leading-tight">{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10">
                                    <Button
                                        href="/contact"
                                        variant="secondary"
                                        className="bg-accent-500 hover:bg-accent-600 text-primary-900 border-none font-bold px-8 py-4"
                                    >
                                        Discuss Your Case
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRIP 10: FAQ */}
                <section className="py-20 bg-white px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <FAQAccordion items={faqs} />
                    </div>
                </section>

                {/* STRIP 11: FINAL CTA */}
                <section className="py-20 px-4">
                    <div className="container mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-primary-800 to-accent-700 text-white p-12 shadow-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Book Your Stapler Circumcision Consultation Today
                            </h2>
                            <div className="space-y-4 mb-10">
                                <div className="flex items-center justify-center gap-4 text-xl">
                                    <Phone size={24} className="text-accent-300" />
                                    <a href="tel:9949808628" className="hover:text-accent-300 transition-colors">9949808628</a>
                                </div>
                                <div className="flex items-center justify-center gap-4 text-xl">
                                    <MessageCircle size={24} className="text-green-400" />
                                    <a href="https://wa.me/9949808628" className="hover:text-green-400 transition-colors">WhatsApp us</a>
                                </div>
                                <p className="text-primary-100 flex items-center justify-center">
                                    <ShieldCheck size={18} className="mr-2" />
                                    Kondapur, Hyderabad
                                </p>
                            </div>
                            <Button
                                href="/contact"
                                variant="outline"
                                size="lg"
                                className="!bg-white !text-primary-900 hover:!bg-gray-100 !border-none px-12 py-5 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all"
                            >
                                👉 Book Appointment Now
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default StaplerCircumcision;
