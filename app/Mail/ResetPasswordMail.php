<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public string $email;
    public string $resetUrl;

    public function __construct($email, $resetUrl)
    {
        $this->email = $email;
        $this->resetUrl = $resetUrl;
    }

    public function build(): ResetPasswordMail
    {
        return $this->markdown('emails.auth.reset-password')
                    ->subject(__('Reset password request for ') . config('app.name'));
    }
}
