<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactInquiryMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param array<string, mixed> $inquiry
     */
    public function __construct(
        public array $inquiry
    ) {}

    public function envelope(): Envelope
    {
        $senderName = $this->inquiry['name'] ?? 'Website Visitor';
        $senderEmail = $this->inquiry['email'] ?? null;
        $serviceTopic = !empty($this->inquiry['service']) ? " — {$this->inquiry['service']}" : '';

        return new Envelope(
            from: new Address(
                config('mail.from.address', 'hello@jkleonardo.tech'),
                config('mail.from.name', 'JKLeonardo Tech')
            ),
            replyTo: $senderEmail
                ? [new Address($senderEmail, $senderName)]
                : [],
            subject: "New Portfolio Inquiry from {$senderName}{$serviceTopic}",
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-inquiry',
            with: [
                'inquiry' => $this->inquiry,
            ],
        );
    }
}
