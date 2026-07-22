import { WHATSAPP_URL } from "../../styles/tokens.js";

export default function WhatsAppLink({ children, style, ...rest }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      {...rest}
    >
      {children}
    </a>
  );
}
