export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Saepur Rokib',
            child: 'Putra',
            father: 'Ngadiman',
            mother: 'almh. Koyimah',
            image: './src/assets/images/20251013_121306_0001.png'
        },
        P: {
            id: 2,
            name: 'Intan Amelia Santana',
            child: 'Putri',
            father: 'alm. Umar Santana',
            mother: 'almh. Uun',
            image: './src/assets/images/20251013_121306_0000.png'
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
            image: './src/assets/images/IMG_0479.JPG'
        },
        {
            id: 2,
            image: './src/assets/images/IMG_0477.JPG'
        },
        {
            id: 3,
            image: './src/assets/images/IMG_0476.JPG'
        },
        {
            id: 4,
            image: './src/assets/images/IMG_0472.JPG'
        },
        
    ],

    bank: [
        {
            id: 1,
            name: 'Intan Amelia Santana',
            icon: './src/assets/images/sea-bank.png',
            rekening: '901311558973'
        },
        {
            id: 2,
            name: 'Saepur Rokib',
            icon: './src/assets/images/dana.png',
            rekening: '085721533720'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbwRXiShHxMNiEJQ9DWu59r06fAFEhNAkF8I9kGNC37uWP--BRYpwxVbbIJgSX2Sk8q35A/exec',

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
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
