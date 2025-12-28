import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { humanizeText } from "@/lib/humanizer";
import { Copy, FileText, RefreshCw, ShieldCheck, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [intensity, setIntensity] = useState([0.5]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleHumanize = () => {
    if (!input.trim()) {
      toast.error("Input required", {
        description: "Please provide a document to process.",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate "processing" time for that bureaucratic feel
    setTimeout(() => {
      const result = humanizeText(input, { intensity: intensity[0] });
      setOutput(result);
      setIsProcessing(false);
      toast.success("Document Processed", {
        description: "Human errors successfully inserted.",
      });
    }, 800);
  };

  const copyToClipboard = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      toast.success("Copied to Clipboard", {
        description: "Ready for submission.",
      });
    } catch (err) {
      toast.error("Copy Failed", {
        description: "Could not access clipboard.",
      });
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    toast.info("Workspace Cleared");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8 flex flex-col items-center font-mono selection:bg-primary selection:text-primary-foreground">
      
      {/* Header / Letterhead */}
      <header className="w-full max-w-3xl mb-8 border-b-2 border-foreground/20 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground uppercase">
            Typos_Inc<span className="text-primary">.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">
            Department of Human Authenticity Verification
          </p>
        </div>
        <div className="hidden md:block text-right text-xs text-muted-foreground opacity-70">
          <p>FORM: TI-808</p>
          <p>REV: 2025-A</p>
        </div>
      </header>

      <main className="w-full max-w-3xl space-y-8">
        
        {/* Controls Section */}
        <section className="grid gap-6 md:grid-cols-[2fr_1fr] items-end">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Error Density
              </label>
              <span className="text-xs font-mono border border-foreground/20 px-2 py-0.5">
                {(intensity[0] * 100).toFixed(0)}%
              </span>
            </div>
            <Slider
              value={intensity}
              onValueChange={setIntensity}
              max={1}
              step={0.05}
              className="w-full cursor-pointer"
            />
            <div className="flex justify-between text-[10px] uppercase text-muted-foreground">
              <span>Subtle</span>
              <span>Moderate</span>
              <span>Chaotic</span>
            </div>
          </div>

          <div className="flex justify-end gap-2">
             <Button 
              variant="outline" 
              onClick={clearAll}
              className="border-2 border-foreground/20 hover:bg-destructive/10 hover:text-destructive hover:border-destructive transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear
            </Button>
          </div>
        </section>

        {/* Input Area */}
        <Card className="border-2 border-foreground/10 shadow-none bg-card rounded-none relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-foreground/10"></div>
          <CardHeader className="pb-2 border-b border-foreground/10 bg-secondary/30">
            <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-muted-foreground">
              <FileText className="w-4 h-4" />
              Source Material (AI Generated)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Textarea
              placeholder="Paste your perfectly robotic text here..."
              className="min-h-[200px] resize-y border-0 focus-visible:ring-0 rounded-none p-4 text-base md:text-lg leading-relaxed bg-transparent placeholder:text-muted-foreground/50"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            onClick={handleHumanize}
            disabled={isProcessing || !input}
            className="relative overflow-hidden bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-none px-8 py-6 text-lg font-bold uppercase tracking-widest border-2 border-transparent hover:border-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <span className="flex items-center gap-2 animate-pulse">
                <RefreshCw className="w-5 h-5 animate-spin" />
                Processing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Humanize Text
              </span>
            )}
          </Button>
        </div>

        {/* Output Area */}
        {output && (
          <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Stamp Effect */}
            <div className="absolute -top-6 -right-4 z-10 rotate-12 pointer-events-none select-none opacity-80 mix-blend-multiply dark:mix-blend-screen">
              <div className="border-4 border-primary text-primary px-4 py-1 text-xl font-black uppercase tracking-widest rounded-sm mask-stamp">
                VERIFIED HUMAN
              </div>
            </div>

            <Card className="border-2 border-primary/30 shadow-none bg-card rounded-none relative overflow-hidden">
              <CardHeader className="pb-2 border-b border-primary/20 bg-primary/5">
                <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  Processed Output
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 relative">
                <Textarea
                  readOnly
                  value={output}
                  className="min-h-[200px] resize-y border-0 focus-visible:ring-0 rounded-none p-4 text-base md:text-lg leading-relaxed bg-transparent text-foreground font-medium"
                />
                <Button
                  onClick={copyToClipboard}
                  className="absolute bottom-4 right-4 rounded-none bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Clipboard
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-muted-foreground uppercase tracking-widest opacity-50">
        <p>© 2025 Typos_Inc. Imperfection is the only proof.</p>
      </footer>
    </div>
  );
}
