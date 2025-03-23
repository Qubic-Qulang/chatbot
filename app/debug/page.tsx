"use client"

import { useChat } from "@ai-sdk/react"
import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Loader2 } from "lucide-react"
import { Logo } from "@/components/logo"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with gradient background */}
      <header className="brand-gradient text-white shadow-md">
        <div className="container flex items-center h-16 px-4 mx-auto">
          <Logo />
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto p-4 flex flex-col max-w-3xl">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 min-h-[calc(100vh-12rem)]">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-6 max-w-md">
                <div className="w-24 h-24 mx-auto brand-gradient rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">!</span>
                </div>
                <h2 className="text-2xl font-bold brand-gradient-text">How can I help you today?</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Ask me anything and I'll do my best to assist you with accurate and helpful information.
                </p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === "user" ? "message-bubble-user" : "message-bubble-ai"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            disabled={isLoading || !input.trim()}
            className="brand-gradient text-white hover:opacity-90 transition-opacity"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Powered by Qulang • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

