Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [{
                name: 'Áo thêu',
                image: 'https://damvaydep.net/image/ao-so-mi-kieu-co-v-nhun-cot-no-andy-40357j.jpg',
                code: 'AT-1',
                price: 200000,
                view: 1,
                describe: '🔸Đồ thêu chất lượng, tiêu chuẩn hàng nhà may tại Quần áo thêu đẹp',
                content: '⭐ Quần áo thêu đẹp cung cấp các sản phẩm thêu chất lượng hàng đầu tại Việt Nam.thêu logo, thêu quần áo, thêu cặp túi, thêu khăn mũ, thêu áo thun, thêu áo phông, thêu áo đồng phục… ',
                password: '',
                percentDiscount: 50,
                follow: false,
                note: false,
                bin: false,
                active: true,
                dateCreate: '2021-10-05T07:43:16.567+00:00',
                dateModified: '2021-10-05T07:43:16.567+00:00',
                userCreate: 'tanhuynh',
                userModified: 'tanhuynh',

            }, {
                name: 'Áo thêu',
                image: 'https://damvaydep.net/image/ao-so-mi-kieu-co-v-nhun-cot-no-andy-40357j.jpg',
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
                dateCreate: '2021-10-05T07:43:16.567+00:00',
                dateModified: '2021-10-05T07:43:16.567+00:00',
                userCreate: 'tanhuynh',
                userModified: 'tanhuynh',

            }, {
                name: 'Áo thêu 2',
                image: 'https://damvaydep.net/image/ao-so-mi-kieu-co-v-nhun-cot-no-andy-40357j.jpg',
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
                dateCreate: '2021-10-05T07:43:16.567+00:00',
                dateModified: '2021-10-05T07:43:16.567+00:00',
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
                ],
                listAction: [{
                    name: 'Xoá vào thùng rác',
                    _id: '123'
                }, {
                    name: 'Ngưng hoạt động',
                    _id: '124'
                }]
            },
            productForm: {
                name: '',
                image: '',
                code: '',
                price: '',
                view: '',
                describe: '',
                content: '',
                percentDiscount: '',
                active: '',
            },
            productValidate: {
                name: [{
                    required: true,
                    message: 'Vui lòng nhập tên sản phẩm',
                    trigger: 'change'
                }, ]
            },
            titlePage: 'Quản lý sản phẩm',
            activeMain: 'index',
            search: '',
            action: '',
            title: '',
            dialogFormProduct: false,
            labelPositionTop: 'top',
            imgUpload: 'images/commons/noimage.jpg'
        }
    },
    mounted() {

    },
    methods: {
        handleClickMain(tab, event) {
            console.log(tab, event);
        },
        priceProduct(price) {
            return this.priceFormat(price);
        },
        priceSum(price, percentDiscount) {
            const format = price * (100 - percentDiscount) / 100;
            return this.priceFormat(format);
        },
        dateCreate(date) {
            return this.dateFormat(date);
        },
        dateModified(date) {
            return this.dateFormat(date);
        },
        imageUpload(image) {
            let that = this;
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                that.imgUpload = reader.result;
            }, false);

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        //load
        //click
        clickCreateProduct() {
            let that = this;
            that.dialogFormProduct = true;
            that.title = 'Thêm sản phẩm'
        },
        //function
        createProduct(productForm) {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    console.log(that.productForm);
                } else {
                    console.log('!!!');
                    return false;
                }
            })
        },
        //reset
        resetProductForm(productForm) {
            let that = this;
            that.$refs[productForm].resetFields();
        },
        //common
        priceFormat(price) {
            return price.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND'
            });;
        },
        dateFormat(date) {
            const format = new Date(date);
            return format.toLocaleString();
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')