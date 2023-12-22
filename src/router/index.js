import { defineAsyncComponent } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import HomePage from './../pages/HomePage.vue';

const NewPin = defineAsyncComponent(() =>
    import('./../pages/services/NewKraPin.vue')
);
const DLApplication = defineAsyncComponent(() =>
    import('./../pages/services/DlApplication.vue')
);
const GmailAccount = defineAsyncComponent(() =>
    import('./../pages/services/GmailAccount.vue')
);
const GreenCard = defineAsyncComponent(() =>
    import('./../pages/services/GreenCard.vue')
);
const HudumaCenter = defineAsyncComponent(() =>
    import('./../pages/services/HudumaCenter.vue')
);
const KRAReturns = defineAsyncComponent(() =>
    import('./../pages/services/KraReturns.vue')
);
const PassportApp = defineAsyncComponent(() =>
    import('./../pages/services/Passport.vue')
);
const ProvincialDL = defineAsyncComponent(() =>
    import('./../pages/services/ProvincialDL.vue')
);

const routes = [
    { path: '/', component: HomePage },
    { path: '/new-kra-pin', component: NewPin },
    { path: '/driving-license-application', component: DLApplication },
    { path: '/new-gmail-account', component: GmailAccount },
    { path: '/greencard-application', component: GreenCard },
    {
        path: '/huduma-center-appointment',
        component: HudumaCenter,
    },
    {
        path: '/kra-tax-returns',
        component: KRAReturns,
    },
    {
        path: '/new-passport-application',
        component: PassportApp,
    },
    {
        path: '/provincial-driving-license',
        component: ProvincialDL,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
