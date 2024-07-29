import { Icon } from 'react-native-vector-icons/Icon'
import { images, icons } from '../constants'
import { Text } from 'react-native'
import styles from '../screens/Ads Screen/Ad Detail/style'

const planData = [
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,

    },
]

const ADplanData = [
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,

    },
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,

    },
    {
        duration: '30 days',
        price: '₹2000',
        lead: '200',
        reach: '50,000',
        platform: 'Instagram, Facebook',
        aiImages: '5',
        icon: icons.insta,
        icon1: icons.fb1,

    },
]


const HowToUse = [
    { id: 1, images: images.use },
    { id: 2, images: images.use },
    { id: 3, images: images.use },
    { id: 4, images: images.use },
]

const adsData = [
    {
        id: 0,
        icon: icons.leads,
        title: "Get Leads from Social Platforms",
        title2: "Acquire customers from insta, fb",
        instaimg: icons.insta,
        fbimg: icons.fb1,
        press: "NewLeads"
    },
    {
        id: 1,
        icon: icons.whatsapp,
        title: "Get WhatsApp messages",
        title2: "Customer will message you",
        instaimg: icons.insta,
        fbimg: icons.fb1,
        press: "WhatsAppMessages"
    },
    {
        id: 2,
        icon: icons.phone,
        title: "Get New Calls",
        title2: "You will be receive customer’s call",
        instaimg: icons.insta,
        fbimg: icons.fb1,
        google: icons.google,
        press: "NewCalls"
    },
    {
        id: 3,
        icon: icons.www,
        title: "Get Website Visitors",
        title2: "Get traffic on your website",
        instaimg: icons.insta,
        fbimg: icons.fb1,
        google: icons.google,
        press: "CreateUser"
    },
    {
        id: 4,
        icon: icons.playstore,
        title: "Get App Installs",
        title2: "Get users for your app",
        instaimg: icons.insta,
        fbimg: icons.fb1,
        google: icons.google,
        press: "SelectPlan"

    },
]

const AIdata = [
    {
        id: 1,
        icon: icons.ai,
        text: "AI Meta content"
    },
    {
        id: 2,
        icon: icons.ads1,
        text: "AI created Ads"
    },
    {
        id: 3,
        icon: icons.lead1,
        text: "Leads"
    },
    {
        id: 4,
        icon: icons.report,
        text: "Ad Reports"
    },
]

const Onboarding = [
    {
        id: 1,
        img: images.leadkartImg,
        title: "Welcome to Leadkart.ai",
        description: "We help you to create, manage ads and generate leads.",
    },
    {
        id: 2,
        img: images.DemoLead,
        title: "Get a new customer using leads",
        description: "Generate daily new leads by showing your ads to potential customers in target area.",
    },
    {
        id: 3,
        img: images.AI,
        title: "AI generated Images",
        description: "Our Generative AI auto-creates images for your ads."
    },
    {
        id: 4,
        img: images.monitorBar,
        title: "Monitor your ad performance",
        description: "We serve you the ad performance in real time."
    }
]

const budget = [
    { id: 1, icon: icons.fb1 },
    { id: 2, icon: icons.insta },
]

const AIPackages = [
    {
        id: 1,
        img: images.aitool,
        title: "AI Images",
        desc: "Our AI generative tool will create images for your business"
    },
    {
        id: 2,
        img: images.aicontent,
        title: "AI Content",
        desc: "Our AI tool will generate title, call to action and suggested audience."
    },
    {
        id: 3,
        img: images.aitool,
        title: "AI Images",
        desc: "Our AI generative tool will create images for your business"
    },
    {
        id: 4,
        img: images.aicontent,
        title: "AI Content",
        desc: "Our AI tool will generate title, call to action and suggested audience."
    }
]

const FAQ = [
    {
        id: 1,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },
    {
        id: 2,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },
    {
        id: 3,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },
    {
        id: 4,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },
    {
        id: 5,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },

    {
        id: 6,
        title: 'Where will my ad be shown?',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla saepe impedit nemo, eveniet itaque perferendis recusandae dolores accusamus est quae?',
    },
    // Add more FAQ items here, making sure each object has a title and content property
];

const aiImages = [
    { id: 1, image: images.dog },
    { id: 2, image: images.pyramid },
    { id: 3, image: images.robo },
    { id: 4, image: images.dog },
    { id: 5, image: images.pyramid },
    { id: 6, image: images.robo },
]
const businessImages = [
    { id: 1, image: images.q1 },
    { id: 2, image: images.q2 },
    { id: 3, image: images.q3 },
    { id: 4, image: images.q1 },
    { id: 5, image: images.q2 },
    { id: 6, image: images.q3 },
]

const PMImages = [
    { id: 1, image: images.pm },
    { id: 2, image: images.ab },
    { id: 3, image: images.pj },
    { id: 4, image: images.pm },
    { id: 5, image: images.ab },
    { id: 6, image: images.pj },
]

const AdCardData = [
    {
        id: 1,
        date: "01 May to 10 May, 2023 ",
        title: "Get New Leads",
        view: "2000",
        lead: "180",
        spent: "456",
        Clicks: "123",
        press: "AdDetail",
        press1: "CreateAd2"
    },
    {
        id: 2,
        date: "01 May to 10 May, 2023 ",
        title: "Google Call Ad",
        view: "2000",
        lead: "180",
        spent: "456",
        Clicks: "123",
        press: "AdDetail2",
        press1: "CreateAd2"
    }
]

const packageData = [
    {
        duration: '30 days',
        title: "Get New leads",
        lead: '200',
        reach: '>50,000',
        platform: 'Instagram, Facebook',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        title: "Get WhatsApp Message",
        lead: '200',
        reach: '50',
        platform: 'Instagram, Facebook',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        title: "Get New Calls",
        lead: '200',
        reach: '>50,000',
        platform: 'Instagram, Facebook',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        title: "Get Website Visitors",
        lead: '200',
        reach: '>50,000',
        platform: 'Instagram, Facebook',
        icon: icons.insta,
        icon1: icons.fb1,
    },
    {
        duration: '30 days',
        title: "Get App Installs",
        lead: '200',
        reach: '>50,000',
        platform: 'Instagram, Facebook',
        icon: icons.insta,
        icon1: icons.fb1,
    },
]

const businessData = [
    {
        id: 1,
        icon: icons.bill,
        title: "Campaign Settings",
        onpress: "AdCampaign"
    },
    {
        id: 2,
        icon: icons.bill,
        title: "Billing Details",
        onpress: "TransactionHistory"
    },
    {
        id: 3,
        icon: icons.pay,
        title: "Payment & Invoices",
        onpress: "PaymentDetail"
    },
    {
        id: 4,
        icon: icons.www,
        title: "Manage Website",
        onpress: "CreateUser"
    },
    {
        id: 5,
        icon: icons.bel,
        title: "Notification",
        onpress: "DemoLead2"
    },
    {
        id: 6,
        icon: icons.log,
        title: "Logout",
        onpress:"Home"
    },
]

const barData = [
    {
        value: 100, label: 'Below 25',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>28%</Text>
        ),
    },
    {
        value: 147, label: '25-30',
        LabelComponent: () => (
            <Text style={styles.toplabel}>36%</Text>
        ),
        topLabelComponent: () => (
            <Text style={styles.toplabel}>36%</Text>
        ),
    },
    {
        value: 164, label: '30-35',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>40%</Text>
        ),
    },
    {
        value: 170, label: '35-40',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>42%</Text>
        ),
    },
    {
        value: 150, label: '40-45',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>39%</Text>
        ),
    },
    {
        value: 140, label: '45-50',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>38%</Text>
        ),
    },
    {
        value: 150, label: '50-above',
        topLabelComponent: () => (
            <Text style={styles.toplabel}>40%</Text>
        ),
    },
];

const postEngagement = [
    {
        id: 1,
        icon: icons.message,
        title: "Comment",
        number: "45"
    },
    {
        id: 2,
        icon: icons.save,
        title: "Post Save",
        number: "45"
    },
    {
        id: 3,
        icon: icons.link,
        title: "Link Click  ",
        number: "45"
    },
    {
        id: 4,
        icon: icons.reaction,
        title: "Reaction",
        number: "45"
    },
]

const stateData = [
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },

    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
    {
        name: "kolkata,WB",
        view: "577",
        click: "25",
        ctr: "0.0%"
    },
]

const paymentMode = [
    {
        icon: icons.gpay,
        name: "Google Pay"
    },
    {
        icon: icons.ppay,
        name: "Phone Pay"
    },
    {
        icon: icons.paytm,
        name: "Paytm"
    },
    {
        icon: icons.amazon,
        name: "Amazon pay"
    },
    {
        icon: icons.card3,
        name: "Axis pay"
    },

]
const CardMode = [
    {
        icon: icons.card1,
        name: "Credit Card"
    },
    {
        icon: icons.card2,
        name: "Debit Card"
    },
    {
        icon: icons.card3,
        name: "Axis Card"
    },


]

const businessCategory = [
    {
        icon: icons.art,
        name: "Art & Entertainments"
    },
    {
        icon: icons.art,
        name: "Astrology"
    },
    {
        icon: icons.auto,
        name: "Automobiles "
    },
    {
        icon: icons.bakery,
        name: "Bakery and Cake"
    },
    {
        icon: icons.bank,
        name: "Banking and Finance"
    },
    {
        icon: icons.clean,
        name: "Cleaning & Pest Control"
    }
]

dateData = [
    {
        id: 1,
        date: "Today",
        time: "At 09:32 AM"
    },
    {
        id: 2,
        date: "Today",
        time: "At 09:32 AM"
    },
    {
        id: 3,
        date: "Tomarrow",
        time: "At 09:32 AM"
    },
    {
        id: 4,
        date: "2 Business day",
        time: "At 09:32 AM"
    },
    {
        id: 5,
        date: "6 Business day",
        time: "At 09:32 AM"
    },
    {
        id: 6,
        date: "Custom"
    },
]

const leadData = [
    {
        id: 1,
        img: images.seedetail,
        name: "Demo Lead",
        no: "+91 9988909890",
        add: "Added : 8789-887-788"
    },
    {
        id: 2,
        img: images.seedetail,
        name: "Demo Lead",
        no: "+91 9988909890",
        add: "Added : 8789-887-788"
    },
    {
        id: 3,
        img: images.seedetail,
        name: "Demo Lead",
        no: "+91 9988909890",
        add: "Added : 8789-887-788"
    },
    {
        id: 4,
        img: images.seedetail,
        name: "Demo Lead",
        no: "+91 9988909890",
        add: "Added : 8789-887-788"
    },
    {
        id: 5,
        img: images.seedetail,
        name: "Demo Lead",
        no: "+91 9988909890",
        add: "Added : 8789-887-788"
    },
]

const RecentActivities = [
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "23-08-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
    {
        date: "22-09-2022",
        text: "Followup via WhatsApp"
    },
]

const AdditionalBusinessDetails = [
    {
        
        img: images.art,
        name: "Art & Entertainment"
    },
    {
        img: images.astrology,
        name: "Astrology"
    },
    {
        img: images.automobile,
        name: "Art & Entertainment"
    },
    {
        img: images.cake,
        name: "Bakery and Cake"
    },
    {
        img: images.bank,
        name: "Banking & Finance"
    },
    {
        img: images.clean,
        name: "Cleaning & Pest Control"
    },
    {
        img: images.computer,
        name: "Computer & Networking"
    },
    {
        img: images.milk,
        name: "Dairy & Sweets"
    },
    {
        img: images.dry,
        name: "Dry Cleaners"
    },
    {
        img: images.hospital,
        name: "Hospital & Clients"
    },
    {
        img: images.hostal,
        name: "Hotels"
    },
    {
        img: images.micro,
        name: "Laboratory"
    },
    {
        img: images.law,
        name: "Legal & Accountings"
    },
    {
        img: images.order,
        name: "Logistics & Transports"
    },
    {
        img: images.medical,
        name: "Medical & Pharmacy"
    },
    {
        img: images.call,
        name: "Mobile & Accessories"
    },
    {
        img: images.other,
        name: "other"
    },
    {
        img: images.photo,
        name: "Photography & Videography"
    },
    {
        img: images.real,
        name: "Real Estate"
    },
    {
        img: images.dining,
        name: "Restaurants & Cafes"
    },
    {
        img: images.software,
        name: "Software & Technology"
    },

]

const businessBottom = [
    {
        id: 1,
        title:"Address"

    },
    {
        id: 2,
        title:"Name"

    },
    {
        id: 3,
        title:"Phone"

    },
    {
        id: 4,
        title:"Email"

    },
    {
        id: 5,
        title:"Website"

    },
    {
        id: 6,
        title:"Logo"

    },
    {
        id: 7,
        title:"Social Media icons"

    },

]


export default {
    Onboarding,
    AIdata,
    adsData,
    HowToUse,
    budget,
    planData,
    ADplanData,
    AIPackages,
    FAQ,
    aiImages,
    businessImages,
    PMImages,
    AdCardData,
    packageData,
    businessData,
    barData,
    postEngagement,
    stateData,
    paymentMode,
    CardMode,
    businessCategory,
    dateData,
    leadData,
    RecentActivities,
    AdditionalBusinessDetails,
    businessBottom
};