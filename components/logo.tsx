import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="Chatbot Logo" width={40} height={40} className="rounded-md" />
      <span className="font-bold text-xl brand-gradient-text">AI Assistant</span>
    </div>
  )
}

