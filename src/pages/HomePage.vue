<script setup>
const howWeWork = [
    {
        title: '#1. Find your service',
        content:
            'Find a service that you require from us and click on it. It will direct you to a page dedicated to that one service with more information on how to apply',
    },
    {
        title: '#2. Payment',
        content:
            'Make your payment through our till number XXXXXXX. Note that only services that have been paid for will be processed.',
    },
    {
        title: '#3. Make an application',
        content:
            'On the service page you will see a form and you will be required to fill in your details plus Mpesa code. After filling, you will receive a phone call from one of our agents.',
    },
];
const services = [
    { path: '/new-kra-pin', title: 'New KRA Pin', img: 'kra-img.png' },
    {
        path: '/driving-license-application',
        title: 'Driving License Application',
        img: 'driving-license.jpeg',
    },
    {
        path: '/new-gmail-account',
        title: 'Gmail Account creation',
        img: 'gmail-logo.jpeg',
    },
    {
        path: '/greencard-application',
        title: 'Green Card application',
        img: 'greencard-img.jpg',
    },
    {
        path: '/huduma-center-appointment',
        title: 'Huduma Center Appointment',
        img: 'huduma-center.png',
    },
    {
        path: '/kra-tax-returns',
        title: 'KRA tax Returns',
        img: 'kra-img.png',
    },
    {
        path: '/new-passport-application',
        title: 'Passport Application',
        img: 'kenyan-passport.jpeg',
    },
    {
        path: '/provincial-driving-license',
        title: 'Provincial Driving License',
        img: 'driving-license.jpeg',
    },
];
</script>
<template>
    <main>
        <header id="hero" class="relative z-0">
            <!-- Hero Container -->
            <div
                class="container flex flex-col-reverse items-center mx-auto p-6 lg:flex-row"
            >
                <!-- Content Container -->
                <div class="flex flex-col space-y-5 lg:w-1/2 pb-10 sm:pb-0">
                    <h1
                        class="text-3xl md:text-5xl text-slate-700 font-semibold text-center lg:max-w-lg lg:text-left"
                    >
                        Your Virtual Gateway to Seamless Services Online
                    </h1>
                    <p
                        class="text-lg md:text-xl text-center text-slate-600 lg:max-w-md lg:text-left"
                    >
                        KRA file returns, Passport Applications, and More, All
                        at Your Fingertips!
                    </p>
                </div>

                <!-- Image -->
                <div class="mx-auto lg:mb-0 lg:w-1/2">
                    <img
                        src="./../assets/images/digital-cyber-hero.svg"
                        alt="hero image"
                        class="w-full"
                    />
                </div>
            </div>
        </header>
        <section class="container mx-auto p-6">
            <!-- How we work -->
            <h2
                class="text-xl md:text-2xl lg:text-3xl text-slate-700 text-center font-semibold mb-3"
            >
                How we work
            </h2>
            <div
                class="flex flex-col gap-8 sm:flex-row justify-around items-center p-6 flex-wrap"
            >
                <div
                    class="w-72 min-h-80 border rounded-xl shadow-xl p-5"
                    v-for="item in howWeWork"
                    :key="item.title"
                >
                    <div class="flex flex-col space-y-3">
                        <h4 class="text-xl font-semibold text-green-800">
                            {{ item.title }}
                        </h4>
                        <p class="text-lg">
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="container mx-auto p-6">
            <!-- Our services -->
            <h2
                class="text-xl md:text-2xl lg:text-3xl text-slate-700 text-center font-semibold mb-3"
            >
                Our services
            </h2>
            <p class="text-slate-600 text-center">
                We offer a lot of services that could be beneficial to you.
                Reach out to us today!
            </p>
            <div
                class="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                <div
                    class="max-w-xs rounded-xl overflow-hidden shadow-xl border"
                    v-for="serv in services"
                    :key="serv.title"
                >
                    <img
                        class="w-full max-h-[10rem] bg-cover bg-no-repeat bg-center"
                        :src="`/${serv.img}`"
                        :alt="serv.title"
                    />
                    <div class="px-6 py-4 flex flex-col space-y-3">
                        <h4 class="text-xl font-semibold text-green-800">
                            {{ serv.title }}
                        </h4>

                        <router-link
                            to="/new-kra-pin"
                            class="px-5 py-2 outline-none rounded-xl bg-green-800 hover:bg-green-800/80 text-white text-center"
                            >Make application</router-link
                        >
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
