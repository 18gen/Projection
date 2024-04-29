type Sponsor = {
    name: string;
    logo: string;
    description: string;
    link: string;
};

type Partner = {
    name: string;
    logo: string;
    link: string;
};

export const sponsors: Sponsor[] = [
    {
        name: "Google",
        logo: "./logo/googlelogo.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sodales diam, at sodales magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mattis lacus aliquet quam egestas porta. Curabitur nec mauris nec ex posuere vehicula sit amet id diam. Mauris imperdiet ex a ullamcorper gravida. Nunc aliquet rhoncus ipsum, eget dapibus libero euismod sit amet. Aliquam vitae hendrerit neque, in rhoncus purus. Ut gravida vitae velit in finibus. Cras convallis lacus at maximus accumsan. Ut elementum velit nec hendrerit tincidunt.\n",
        link: "https://www.google.com"
    },
    {
        name: "Sun Life",
        logo: "./logo/sunlifelogo.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id sodales diam, at sodales magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In mattis lacus aliquet quam egestas porta. Curabitur nec mauris nec ex posuere vehicula sit amet id diam. Mauris imperdiet ex a ullamcorper gravida. Nunc aliquet rhoncus ipsum, eget dapibus libero euismod sit amet. Aliquam vitae hendrerit neque, in rhoncus purus. Ut gravida vitae velit in finibus. Cras convallis lacus at maximus accumsan. Ut elementum velit nec hendrerit tincidunt.\n",
        link: "https://www.sunlife.ca/en/"
    },
];


export const partners: Partner[] = [
    {
        name: "Sun Life",
        logo: '/logo/uwlogo.png',
        link: "https://www.sunlife.ca/en/"
    },
    {
        name: 'University of Waterloo',
        logo: '/logo/cscanlogo.jpg', // Replace with actual path to logo
        link: '/uwaterloo'
    },
    {
        name: 'CS-CAN | INFO-CAN',
        logo: '/logo/comingSoon.jpg', // Replace with actual path to logo
        link: '/cs-can'
    },
    {
        name: "Sun Life",
        logo: '/logo/comingSoon.jpg',
        link: '/cs-can'
    },
    {
        name: 'University of Waterloo',
        logo: '/logo/comingSoon.jpg', // Replace with actual path to logo
        link: '/uwaterloo'
    },
    {
        name: 'CS-CAN | INFO-CAN',
        logo: '/logo/comingSoon.jpg', // Replace with actual path to logo
        link: '/cs-can'
    },
    {
        name: "Sun Life",
        logo: '/logo/comingSoon.jpg',
        link: "https://www.sunlife.ca/en/"
    },
    {
        name: 'University of Waterloo',
        logo: '/logo/comingSoon.jpg', // Replace with actual path to logo
        link: '/uwaterloo'
    },
];
