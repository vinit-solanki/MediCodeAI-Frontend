import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Shield, Eye, Upload, History } from "lucide-react";
import medicalInnovation from "@/assets/medical-innovation.jpg";
import financialProfessional from "@/assets/financial-professional.jpg";
import medicalShield from "@/assets/medical-shield.jpg";

const features = [
  {
    icon: Brain,
    title: "AI-Assisted Medical Coding",
    description:
      "Suggests accurate ICD-10 and CPT-4 codes based on patient documents using advanced AI algorithms with confidence scores.",
    image: medicalInnovation,
  },
  {
    icon: FileText,
    title: "Auto-Generated Claim Forms",
    description:
      "Converts coded data into standardized insurance-ready claim forms including CMS-1500 and UB-04 formats.",
    image: financialProfessional,
  },
  {
    icon: Eye,
    title: "Patient Transparency Dashboard",
    description:
      "Allows patients to view their medical costs, codes, and services promoting billing clarity and trust.",
    image: medicalShield,
  },
  {
    icon: Upload,
    title: "Multi Document Upload System",
    description:
      "Accepts hospital bills, payment receipts, prescriptions, discharge summaries, and lab reports with bulk upload support.",
    image: null,
  },
  {
    icon: Shield,
    title: "Smart Document Classifier",
    description:
      "Automatically detects and tags the type of each uploaded file ensuring proper categorization and processing.",
    image: null,
  },
  {
    icon: History,
    title: "Wallet / Claim History",
    description:
      "Saves previous claims, uploaded documents, and form histories for quick reference and audit trails.",
    image: null,
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-indigo-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center space-y-4 mb-14 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Comprehensive AI-Powered Features
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our intelligent platform combines cutting-edge AI technology with healthcare expertise 
            to deliver unparalleled accuracy and efficiency in medical coding and claim processing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group h-full border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col space-y-4 h-full">
                
                {/* Image or Icon */}
                {feature.image ? (
                  <div>
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-xl shadow-sm"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                    <feature.icon className="h-7 w-7 text-indigo-600" />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
