<?php

namespace App\Http\Controllers;

use App\Mail\ContactInquiryMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Welcome');
    }

    public function projects(): Response
    {
        return Inertia::render('Projects');
    }

    public function about(): Response
    {
        return Inertia::render('About');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function submitContact(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:120'],
            'email' => ['required', 'email', 'max:180'],
            'company' => ['nullable', 'string', 'max:180'],
            'service' => ['nullable', 'string', 'max:120'],
            'budget' => ['nullable', 'string', 'max:80'],
            'timeline' => ['nullable', 'string', 'max:80'],
            'message' => ['nullable', 'string', 'max:3000'],
            'reference_project' => ['nullable', 'string', 'max:180'],
        ]);

        Log::info('New Portfolio Inquiry Received', $validated);

        $recipient = config('mail.to_address', 'jkleonardo.tech@gmail.com');
        $ccRecipient = config('mail.cc_address', 'hello@jkleonardo.tech');

        try {
            $pendingMail = Mail::to($recipient);
            if (!empty($ccRecipient) && strtolower($ccRecipient) !== strtolower($recipient)) {
                $pendingMail->cc($ccRecipient);
            }
            $pendingMail->send(new ContactInquiryMail($validated));
        } catch (\Throwable $e) {
            Log::error('Portfolio inquiry email failed to send: ' . $e->getMessage(), [
                'recipient' => $recipient,
                'inquiry' => $validated,
            ]);

            return back()->withErrors([
                'mail' => 'Unable to send email right now. Please check that MAIL_PASSWORD is set in .env for hello@jkleonardo.tech.',
            ]);
        }

        return back()->with('success', 'Your inquiry has been sent! I will get back to you soon.');
    }
}
