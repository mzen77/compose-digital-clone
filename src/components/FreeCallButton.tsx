import { ChatBubbleIcon } from "./icons";

export function FreeCallButton() {
  return (
    <a
      href="/contact"
      aria-label="Contact us"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#101010] shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-colors duration-200 ease-in-out hover:bg-[#2a2a2a]"
    >
      <ChatBubbleIcon className="h-6 w-6 text-white" />
    </a>
  );
}
