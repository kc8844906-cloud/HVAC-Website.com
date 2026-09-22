import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

type QuoteData = { name: string; phone: string; email: string; postcode: string; service: string; message: string };
const initialData: QuoteData = { name: "", phone: "", email: "", postcode: "", service: "Air-conditioning installation", message: "" };

export function QuoteForm() {
  const [data, setData] = useState(initialData);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const update = (key: keyof QuoteData, value: string) => setData((current) => ({ ...current, [key]: value }));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
    if (!data.name.trim() || !data.phone.trim() || !emailValid || !data.postcode.trim() || !data.message.trim() || !consent) {
      setError("Please complete every required field and confirm your consent.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Quote request from ${data.name.trim()} — ${data.postcode.trim()}`);
    const body = encodeURIComponent(`Name: ${data.name.trim()}\nPhone: ${data.phone.trim()}\nEmail: ${data.email.trim()}\nPostcode: ${data.postcode.trim()}\nService: ${data.service}\n\nMessage:\n${data.message.trim()}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={submit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="name"><Input id="name" value={data.name} onChange={(event) => update("name", event.target.value)} required maxLength={100} autoComplete="name" /></Field>
        <Field label="Phone number" id="phone"><Input id="phone" type="tel" value={data.phone} onChange={(event) => update("phone", event.target.value)} required maxLength={30} autoComplete="tel" /></Field>
        <Field label="Email" id="email"><Input id="email" type="email" value={data.email} onChange={(event) => update("email", event.target.value)} required maxLength={255} autoComplete="email" /></Field>
        <Field label="Postcode" id="postcode"><Input id="postcode" value={data.postcode} onChange={(event) => update("postcode", event.target.value)} required maxLength={12} autoComplete="postal-code" /></Field>
      </div>
      <Field label="Service needed" id="service">
        <select id="service" className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" value={data.service} onChange={(event) => update("service", event.target.value)}>
          <option>Air-conditioning installation</option><option>System and unit location advice</option><option>Other enquiry</option>
        </select>
      </Field>
      <Field label="Message" id="message"><Textarea id="message" value={data.message} onChange={(event) => update("message", event.target.value)} required maxLength={1000} className="min-h-32" placeholder="Tell us about your property and what you need." /></Field>
      <div className="flex items-start gap-3">
        <Checkbox id="consent" checked={consent} onCheckedChange={(value) => setConsent(value === true)} aria-required="true" />
        <label htmlFor="consent" className="text-sm leading-5 text-muted-foreground">I agree that my details may be used to respond to this enquiry.</label>
      </div>
      {error && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
      <Button type="submit" size="lg" className="h-12"><Send /> Prepare Quote Request</Button>
      <p className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"><Mail className="mt-0.5 size-4 shrink-0" /> This opens your email app with your enquiry prepared. No details are stored by this website.</p>
    </form>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><label htmlFor={id} className="text-sm font-semibold">{label} <span className="text-primary">*</span></label>{children}</div>;
}