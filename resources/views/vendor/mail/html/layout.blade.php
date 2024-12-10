<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>{{ config('app.name') }}</title>
    <style>
        @media only screen and (max-width: 600px) {
            .inner-body { width: 100% !important; }
            .footer { width: 100% !important; }
        }
        @media only screen and (max-width: 500px) {
            .button { width: 100% !important; }
        }
        .content-cell * { text-align: center; }
    </style>
</head>
<body style="background-color:rgb(244,244,245);margin:auto;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;padding:40px 16px">
    {{ $header ?? '' }}

    <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation"
           style="background-color:rgb(255,255,255);border-radius:0.75rem;border:1px solid rgb(228,228,231);
                  padding:24px 32px;text-align:center;max-width:37.5em">
        <tr>
            <td class="content-cell">
                {{ Illuminate\Mail\Markdown::parse($slot) }}
                {{ $subcopy ?? '' }}
            </td>
        </tr>
    </table>

    {{ $footer ?? '' }}
</body>
</html>
