@component('mail::message')
# Permintaan reset password

Hai, {{ $email }}!

Sepertinya kamu telah meminta reset password. Silakan klik tombol di bawah ini untuk mereset password akun
**{{ config('app.name') }}** mu.

@component('mail::button', ['url' => $resetUrl])
Reset Password
@endcomponent

Link ini hanya berlaku hingga 1 jam kedepan.
Jika kamu tidak meminta ini, silahkan abaikan email ini.

@endcomponent