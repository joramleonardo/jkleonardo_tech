<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>New Portfolio Inquiry — JKLeonardo Tech</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #06050c; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #0f0b1d; border: 1px solid rgba(139, 92, 246, 0.35); border-radius: 16px; overflow: hidden;">
        <tr>
            <td style="padding: 24px 28px; background: linear-gradient(135deg, #4c1d95 0%, #6d28d9 60%, #a21caf 100%);">
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #ddd6fe; font-weight: 600;">
                    JKLeonardo Tech • Portfolio Inquiry
                </div>
                <h1 style="margin: 6px 0 0; font-size: 22px; color: #ffffff;">
                    New Inquiry from {{ $inquiry['name'] ?? 'Visitor' }}
                </h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 28px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px; width: 160px;">
                            Name
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #ffffff; font-size: 14px; font-weight: 600;">
                            {{ $inquiry['name'] ?? 'N/A' }}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Email Address
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; font-size: 14px;">
                            <a href="mailto:{{ $inquiry['email'] ?? '' }}" style="color: #c4b5fd; text-decoration: none;">
                                {{ $inquiry['email'] ?? 'N/A' }}
                            </a>
                        </td>
                    </tr>
                    @if(!empty($inquiry['company']))
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Company / Website
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; font-size: 14px;">
                            {{ $inquiry['company'] }}
                        </td>
                    </tr>
                    @endif
                    @if(!empty($inquiry['service']))
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Project Type
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; font-size: 14px;">
                            {{ $inquiry['service'] }}
                        </td>
                    </tr>
                    @endif
                    @if(!empty($inquiry['budget']))
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Estimated Budget
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #6ee7b7; font-size: 14px; font-weight: 600;">
                            {{ $inquiry['budget'] }}
                        </td>
                    </tr>
                    @endif
                    @if(!empty($inquiry['timeline']))
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Target Timeline
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; font-size: 14px;">
                            {{ $inquiry['timeline'] }}
                        </td>
                    </tr>
                    @endif
                    @if(!empty($inquiry['reference_project']))
                    <tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 13px;">
                            Referenced Project
                        </td>
                        <td style="padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); color: #e2e8f0; font-size: 14px;">
                            {{ $inquiry['reference_project'] }}
                        </td>
                    </tr>
                    @endif
                </table>

                <div style="margin-top: 22px; padding: 16px; background-color: #06050c; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;">
                    <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #a78bfa; margin-bottom: 8px;">
                        Message / Project Details
                    </div>
                    <div style="font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">{{ !empty($inquiry['message']) ? $inquiry['message'] : 'No additional message provided.' }}</div>
                </div>

                <div style="margin-top: 22px; font-size: 12px; color: #64748b; text-align: center;">
                    Sent from JKLeonardo Tech Portfolio (hello@jkleonardo.tech) • Hit Reply to respond directly to {{ $inquiry['email'] ?? 'the sender' }}.
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
