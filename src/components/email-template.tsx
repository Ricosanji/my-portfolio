import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div
    style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      backgroundColor: "#0f0f0f",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #2a2a2a",
    }}
  >
    {/* Header */}
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "32px 24px",
        textAlign: "center" as const,
      }}
    >
      <h1
        style={{
          color: "#ffffff",
          margin: 0,
          fontSize: "22px",
          fontWeight: 600,
          letterSpacing: "0.5px",
        }}
      >
        ✉️ New Message from Portfolio
      </h1>
    </div>

    {/* Body */}
    <div style={{ padding: "32px 24px" }}>
      {/* Sender Info */}
      <div
        style={{
          backgroundColor: "#1a1a2e",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "24px",
          border: "1px solid #2a2a3e",
        }}
      >
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td
                style={{
                  color: "#888",
                  fontSize: "13px",
                  paddingBottom: "8px",
                  width: "80px",
                }}
              >
                From
              </td>
              <td
                style={{
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 600,
                  paddingBottom: "8px",
                }}
              >
                {fullName}
              </td>
            </tr>
            <tr>
              <td style={{ color: "#888", fontSize: "13px" }}>Email</td>
              <td>
                <a
                  href={`mailto:${email}`}
                  style={{
                    color: "#667eea",
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
                >
                  {email}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Message */}
      <div>
        <p
          style={{
            color: "#888",
            fontSize: "13px",
            marginBottom: "8px",
            textTransform: "uppercase" as const,
            letterSpacing: "1px",
          }}
        >
          Message
        </p>
        <div
          style={{
            backgroundColor: "#1a1a2e",
            borderLeft: "4px solid #667eea",
            borderRadius: "0 10px 10px 0",
            padding: "20px",
            color: "#e0e0e0",
            fontSize: "15px",
            lineHeight: "1.7",
            whiteSpace: "pre-wrap" as const,
          }}
        >
          {message}
        </div>
      </div>
    </div>

    {/* Footer */}
    <div
      style={{
        borderTop: "1px solid #2a2a2a",
        padding: "16px 24px",
        textAlign: "center" as const,
      }}
    >
      <p style={{ color: "#555", fontSize: "12px", margin: 0 }}>
        Sent from Nguyen Huu Cong&apos;s Portfolio
      </p>
    </div>
  </div>
);