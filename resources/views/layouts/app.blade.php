<?php use App\Services\Th ?>

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <title>{{ config('app.name', 'Teenhealth') }}</title>

        @section('meta')
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">
            <link rel="icon" type="image/png" href="/assets/logo/light_64.png" sizes="64x64">
            <link rel="shortcut icon" href="/favicon.ico">
            <meta name="theme-color" content="#2892D7">
        @show

        @section('data')
            @if (!is_null(Th::loadStore()))
                <script>
                    window.thData = "{!! Th::loadStore() !!}";
                </script>
            @endif
        @show

        <!-- Scripts -->
        @vite([
            'resources/scripts/assets/css/app.css',
            'resources/scripts/index.tsx'
        ])
    </head>
    <body class="font-sans antialiased">
        <div id="root"><x-preload></x-preload></div>
        @yield('content')
        <x-noscript></x-noscript>
    </body>
</html>
