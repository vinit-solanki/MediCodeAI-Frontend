import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Download,
  FileText,
  Upload,
  Home,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";
import logoSvg from "@/assets/health-insurance-logo.svg";

const HospitalResults = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const mockResults = {
    extractedData: {
      diagnosis: "Hypertension, Type 2 Diabetes",
      procedures: "Routine checkup, Blood pressure monitoring, Glucose test",
      medications: "Metformin 500mg, Lisinopril 10mg",
      physician: "Dr. Sarah Johnson",
    },
    medicalCodes: {
      icd10: ["I10", "E11.9", "Z00.00"],
      cpt: ["99213", "93000", "82947"],
    },
    aiConfidence: {
      overall: 94.2,
      diagnosis: 96.8,
      procedures: 92.1,
      medications: 89.5,
    },
    claimAmount: 1250.0,
    estimatedApproval: "High (92% confidence)",
  };

  const results = location.state?.results || mockResults;
  const patientInfo = location.state?.patientInfo || {
    patientId: "P-12345",
    patientName: "John Doe",
    dateOfService: "2025-09-15",
    insuranceProvider: "Aetna",
    notes: "Follow-up required",
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return "text-green-600";
    if (confidence >= 80) return "text-yellow-600";
    return "text-red-600";
  };

  const generateClaimPDF = () => {
    toast.info("Generating claim PDF...");
    setTimeout(() => {
      toast.success("Claim PDF generated successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logoSvg} alt="MediCore-AI" className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Processing Results</h1>
              <p className="text-sm text-muted-foreground">
                AI-extracted codes & claim summary
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Link to="/">
              <Button variant="ghost" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-7xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Processing Complete */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="w-6 h-6" />
                <span>Processing Complete</span>
              </CardTitle>
              <CardDescription>
                Documents processed for{" "}
                <span className="font-semibold">{patientInfo.patientName}</span>{" "}
                (ID: {patientInfo.patientId})
              </CardDescription>
            </CardHeader>
          </Card>

          {/* AI Confidence Scores */}
          <Card>
            <CardHeader>
              <CardTitle>AI Confidence Scores</CardTitle>
              <CardDescription>Reliability of extracted info</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p
                    className={`text-xl font-bold ${getConfidenceColor(
                      results.aiConfidence.overall
                    )}`}
                  >
                    {results.aiConfidence.overall}%
                  </p>
                  <p className="text-sm text-muted-foreground">Overall</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p
                    className={`text-xl font-bold ${getConfidenceColor(
                      results.aiConfidence.diagnosis
                    )}`}
                  >
                    {results.aiConfidence.diagnosis}%
                  </p>
                  <p className="text-sm text-muted-foreground">Diagnosis</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p
                    className={`text-xl font-bold ${getConfidenceColor(
                      results.aiConfidence.procedures
                    )}`}
                  >
                    {results.aiConfidence.procedures}%
                  </p>
                  <p className="text-sm text-muted-foreground">Procedures</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-muted/50">
                  <p
                    className={`text-xl font-bold ${getConfidenceColor(
                      results.aiConfidence.medications
                    )}`}
                  >
                    {results.aiConfidence.medications}%
                  </p>
                  <p className="text-sm text-muted-foreground">Medications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Extracted Information */}
          <Card>
            <CardHeader>
              <CardTitle>Extracted Information</CardTitle>
              <CardDescription>AI-extracted details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="font-medium">Diagnosis</Label>
                <p className="text-sm bg-muted/50 p-2 rounded">
                  {results.extractedData.diagnosis}
                </p>
              </div>
              <div>
                <Label className="font-medium">Procedures</Label>
                <p className="text-sm bg-muted/50 p-2 rounded">
                  {results.extractedData.procedures}
                </p>
              </div>
              <div>
                <Label className="font-medium">Medications</Label>
                <p className="text-sm bg-muted/50 p-2 rounded">
                  {results.extractedData.medications}
                </p>
              </div>
              <div>
                <Label className="font-medium">Physician</Label>
                <p className="text-sm bg-muted/50 p-2 rounded">
                  {results.extractedData.physician}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Medical Codes */}
          <Card>
            <CardHeader>
              <CardTitle>Medical Codes</CardTitle>
              <CardDescription>AI-assigned ICD-10 & CPT</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="font-medium">ICD-10</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {results.medicalCodes.icd10.map((code, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-blue-50 text-blue-700"
                    >
                      {code}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label className="font-medium">CPT</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {results.medicalCodes.cpt.map((code, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="bg-green-50 text-green-700"
                    >
                      {code}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Claim Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Claim Summary</CardTitle>
              <CardDescription>Insurance claim details</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-blue-50 border">
                <p className="text-lg font-bold text-blue-600">
                  {results.estimatedApproval}
                </p>
                <p className="text-sm text-blue-700">Approval Likelihood</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-purple-50 border">
                <p className="text-lg font-bold text-purple-600">CMS-1500</p>
                <p className="text-sm text-purple-700">Form Type</p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="lg:col-span-2">
            <CardContent className="pt-6 flex flex-wrap gap-4 justify-center">
              <Button onClick={generateClaimPDF} className="gradient-primary">
                <Download className="w-4 h-4 mr-2" />
                Generate Claim PDF
              </Button>
              <Button variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Save to Records
              </Button>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Submit to Insurance
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/hospital-dashboard")}
              >
                Process New Document
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HospitalResults;
