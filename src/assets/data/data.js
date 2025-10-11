export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Saepur Rokib',
            child: 'Putra',
            father: 'Ngadiman',
            mother: 'almh. Koimah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Intan Amelia Santana',
            child: 'Putri',
            father: 'alm. Umar Santana',
            mother: 'almh. Uun',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '27',
            day: 'Senin',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '27',
            day: 'Senin',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address: 'Kediaman Mempelai Pria. Dusun Sukamanah RT 022 RW 011 Desa Karangsari Kecamatan Padaherang Kabupaten Pangandaran'
    },

    link: {
        calendar: 'https://calendar.app.google/er6mwgWBDivKNvRh9',
        map: 'https://maps.app.goo.gl/LCY1657pxvXM48cFA',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbyydz6N4p2VWUG8zsXeURv6ap9RP8a4eC3x6N3x6qTDjMVr1cIBz9S0NsHw2rWvBOSXGg/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
