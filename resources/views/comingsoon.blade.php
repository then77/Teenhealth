<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">

    <!-- Styles -->
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/cm.js'])
</head>
<body class="antialiased font-sans bg-zinc-100 min-h-screen">
<x-navigation></x-navigation>

<section class="w-full h-screen flex justify-center items-center px-8 pt-20 pb-28 sm:pb-40 md:pb-44 lg:pb-52">
    <div class="text-center" id="title">
        <div class="flex justify-center">
            <img src="/assets/illustrations/ill_bird1.png" class="hidden sm:block h-12 lg:h-14 absolute -ml-[26rem] lg:-ml-[34rem] -mt-4 lg:-mt-6 transition-all duration-500 ease-out" />
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-sky-500 pb-4 sm:pb-8">Coming soon!</h1>
            <img src="/assets/illustrations/ill_bird2.png" class="hidden sm:block h-12 lg:h-14 absolute -mr-[26rem] lg:-mr-[34rem] mt-4 lg:mt-6 transition-all duration-500 ease-out" />
        </div>
        <p class="sm:text-lg md:text-xl text-stone-800 max-w-md">Website Teenhealth akan segera hadir di awal - pertengahan Desember 2024!</p>
    </div>
</section>

<div class="fixed z-[-1] bottom-0 left-0 w-full flex justify-center">
    <img class="max-h-32 sm:max-h-40 md:max-h-44 lg:max-h-52 transition-all duration-500 ease-out" src="/assets/illustrations/ill_404.png" />
</div>

</body>
</html>
