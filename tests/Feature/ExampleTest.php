<?php

namespace Tests\Feature;

use App\Mail\ContactInquiryMail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_the_portfolio_pages_return_successful_responses(): void
    {
        $this->get('/')->assertStatus(200);
        $this->get('/projects')->assertStatus(200);
        $this->get('/about')->assertStatus(200);
        $this->get('/contact')->assertStatus(200);
    }

    public function test_contact_form_sends_email_and_allows_optional_fields(): void
    {
        Mail::fake();

        // 1. Test full inquiry with Peso budget
        $response = $this->from('/contact')->post('/contact', [
            'name' => 'Juan Dela Cruz',
            'email' => 'juan@example.com',
            'company' => 'Vela Aroma PH',
            'service' => 'Online Shop / E-Commerce',
            'budget' => '₱15,000 – ₱30,000',
            'timeline' => '2 – 4 Weeks',
            'message' => 'Hi Joram, I would love to have a website built.',
            'reference_project' => 'Vela Aroma PH',
        ]);

        $response->assertRedirect('/contact');
        $response->assertSessionHas('success');

        Mail::assertSent(ContactInquiryMail::class, function (ContactInquiryMail $mail) {
            return $mail->hasTo('jkleonardo.tech@gmail.com');
        });

        // 2. Test minimal inquiry where service, budget, timeline, and message are omitted
        $minimalResponse = $this->from('/contact')->post('/contact', [
            'name' => 'Maria Clara',
            'email' => 'maria@example.com',
        ]);

        $minimalResponse->assertRedirect('/contact');
        $minimalResponse->assertSessionHas('success');
    }
}
