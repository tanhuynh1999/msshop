Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [{
                name: 'Áo thêu',
                image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/p526x296/218106556_181093824075714_6992626703689745489_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=-eWDpYgRG54AX_O4uIJ&_nc_ht=scontent.fvca1-4.fna&oh=d5a18b4ef741802b034d9c7d54f080f0&oe=615CC392',
                code: 'AT-1',
                price: 200000,
                view: 1,
                describe: '🔸Đồ thêu chất lượng, tiêu chuẩn hàng nhà may tại Quần áo thêu đẹp',
                content: '⭐ Quần áo thêu đẹp cung cấp các sản phẩm thêu chất lượng hàng đầu tại Việt Nam.thêu logo, thêu quần áo, thêu cặp túi, thêu khăn mũ, thêu áo thun, thêu áo phông, thêu áo đồng phục… ',
                password: '',
                percentDiscount: 10,
                follow: false,
                note: false,
                bin: false,
                active: true,
                dateCreate: '10-02-2021 lúc 11:11',
                dateModified: '10-02-2021 lúc 11:11',
                userCreate: 'tanhuynh',
                userModified: 'tanhuynh',

            }, {
                name: 'Áo thêu',
                image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/p526x296/218106556_181093824075714_6992626703689745489_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=-eWDpYgRG54AX_O4uIJ&_nc_ht=scontent.fvca1-4.fna&oh=d5a18b4ef741802b034d9c7d54f080f0&oe=615CC392',
                code: 'AT-1',
                price: 200000,
                view: 1,
                describe: '🔸Đồ thêu chất lượng, tiêu chuẩn hàng nhà may tại Quần áo thêu đẹp',
                content: '⭐ Quần áo thêu đẹp cung cấp các sản phẩm thêu chất lượng hàng đầu tại Việt Nam.thêu logo, thêu quần áo, thêu cặp túi, thêu khăn mũ, thêu áo thun, thêu áo phông, thêu áo đồng phục… ',
                password: '',
                percentDiscount: 10,
                follow: false,
                note: false,
                bin: false,
                active: true,
                dateCreate: '10-02-2021 lúc 11:11',
                dateModified: '10-02-2021 lúc 11:11',
                userCreate: 'tanhuynh',
                userModified: 'tanhuynh',

            }, {
                name: 'Áo thêu',
                image: 'https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/p526x296/218106556_181093824075714_6992626703689745489_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=-eWDpYgRG54AX_O4uIJ&_nc_ht=scontent.fvca1-4.fna&oh=d5a18b4ef741802b034d9c7d54f080f0&oe=615CC392',
                code: 'AT-1',
                price: 200000,
                view: 1,
                describe: '🔸Đồ thêu chất lượng, tiêu chuẩn hàng nhà may tại Quần áo thêu đẹp',
                content: '⭐ Quần áo thêu đẹp cung cấp các sản phẩm thêu chất lượng hàng đầu tại Việt Nam.thêu logo, thêu quần áo, thêu cặp túi, thêu khăn mũ, thêu áo thun, thêu áo phông, thêu áo đồng phục… ',
                password: '',
                percentDiscount: 10,
                follow: false,
                note: false,
                bin: false,
                active: true,
                dateCreate: '10-02-2021 lúc 11:11',
                dateModified: '10-02-2021 lúc 11:11',
                userCreate: 'tanhuynh',
                userModified: 'tanhuynh',

            }],
            listData: {
                listActiveMain: [{
                        label: 'Tất cả sản phẩm',
                        name: 'index'
                    },
                    {
                        label: 'Theo dõi',
                        name: 'follow'
                    },
                    {
                        label: 'Chú ý',
                        name: 'note'
                    },
                    {
                        label: 'Thùng rác',
                        name: 'bin'
                    }
                ]
            },
            titlePage: 'Quản lý sản phẩm',
            activeMain: 'index'
        }
    },
    mounted() {

    },
    methods: {

    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')