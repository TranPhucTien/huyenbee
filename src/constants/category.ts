import {
    IMAGE_CATEGORY_URL,
    IMAGE_FOOD_URL,
    IMAGE_MILK_TEA_URL,
    IMAGE_SPICY_NOODLES_URL,
} from '~/configs';

interface Product {
    id: string;
    name: string;
    image: string[];
    price: number;
    desc: string;
}

interface Category {
    id: string;
    image: string;
    name: string;
    products: Product[];
}

interface CategoryMenu {
    categories: Category[];
}

const categoryMenu: CategoryMenu = {
    categories: [
        {
            id: 'tra-sua',
            image: `${IMAGE_CATEGORY_URL}/category_drink.jpg`,
            name: 'Trà sữa',
            products: [
                {
                    id: 'tra-sua-truyen-thong',
                    name: 'Trà sữa truyền thống',
                    image: [`${IMAGE_MILK_TEA_URL}/truyen_thong.jpg`],
                    price: 25000,
                    desc: 'Trà sữa truyền thống - một đồ uống vô cùng tươi mát, được làm từ trà với hương vị đậm đà của sữa, mang lại hương vị nguyên bản và thơm ngon cho mọi người. Trà sữa truyền thống là một lựa chọn tuyệt vời cho những ai muốn tìm một món ăn ngon và không quá phức tạp.',
                },
                {
                    id: 'tra-sua-socola',
                    name: 'Trà sữa socola',
                    image: [`${IMAGE_MILK_TEA_URL}/truyen_thong.jpg`],
                    price: 25000,
                    desc: 'Trà sữa socola - một kết hợp hoàn hảo giữa mùi thơm của trà với đậm đà hương vị của socola, kết hợp với vị ngọt của sữa tạo lên một cốc trà sữa socola thơm ngon và bất tận.',
                },
                {
                    id: 'tra-sua-socola',
                    name: 'Trà sữa socola',
                    image: [`${IMAGE_MILK_TEA_URL}/truyen_thong.jpg`],
                    price: 25000,
                    desc: 'Trà sữa socola - một kết hợp hoàn hảo giữa mùi thơm của trà với đậm đà hương vị của socola, kết hợp với vị ngọt của sữa tạo lên một cốc trà sữa socola thơm ngon và bất tận.',
                },
            ],
        },
        {
            id: 'do-an',
            image: `${IMAGE_CATEGORY_URL}/category_food.jpg`,
            name: 'Đồ ăn',
            products: [
                {
                    id: 'banh-mi-chao',
                    name: 'Bánh mì chảo',
                    image: [`${IMAGE_FOOD_URL}/banh_mi_chao.jpg`],
                    price: 50000,
                    desc: 'Món bánh mì chảo tuyệt vời được kết hợp giữa vị giòn giòn của bánh mì, mùi thơm nồng nàn của pate, hương vị nồng nàn của xúc xích và hấp dẫn của salad. Tất cả được sắp xếp thành một quang cảnh đặc sắc và tràn đầy hương vị, chắc chắn sẽ làm cho bạn khó có thể quên đi những giây phút thưởng thức món ăn này.',
                },
                {
                    id: 'mi-cay-thap-cam',
                    name: 'Mì cay thập cẩm',
                    image: [`${IMAGE_SPICY_NOODLES_URL}/thap_cam.jpg`],
                    price: 35000,
                    desc: 'Mì cay đậm đà với màu sắc và hương vị, chắc chắn sẽ làm bạn ngạc nhiên. Từ sợi mì mềm như những ánh nắng, đến nước dùng cay nồng, xúc xích giòn giòn, thịt bò mềm mại và salad tươi tắn, đều được chọn lựa kỹ lưỡng để tạo nên một món ăn hoàn hảo. Mì cay đầy đủ với hỗn hợp nhiều thành phần đặc sắc, làm cho bạn một trải nghiệm ăn uống tuyệt vời.',
                },
                {
                    id: 'banh-mi-chao',
                    name: 'Bánh mì chảo',
                    image: [`${IMAGE_FOOD_URL}/banh_mi_chao.jpg`],
                    price: 50000,
                    desc: 'Món bánh mì chảo tuyệt vời được kết hợp giữa vị giòn giòn của bánh mì, mùi thơm nồng nàn của pate, hương vị nồng nàn của xúc xích và hấp dẫn của salad. Tất cả được sắp xếp thành một quang cảnh đặc sắc và tràn đầy hương vị, chắc chắn sẽ làm cho bạn khó có thể quên đi những giây phút thưởng thức món ăn này.',
                },
                {
                    id: 'mi-cay-thap-cam',
                    name: 'Mì cay thập cẩm',
                    image: [`${IMAGE_SPICY_NOODLES_URL}/thap_cam.jpg`],
                    price: 35000,
                    desc: 'Mì cay đậm đà với màu sắc và hương vị, chắc chắn sẽ làm bạn ngạc nhiên. Từ sợi mì mềm như những ánh nắng, đến nước dùng cay nồng, xúc xích giòn giòn, thịt bò mềm mại và salad tươi tắn, đều được chọn lựa kỹ lưỡng để tạo nên một món ăn hoàn hảo. Mì cay đầy đủ với hỗn hợp nhiều thành phần đặc sắc, làm cho bạn một trải nghiệm ăn uống tuyệt vời.',
                },
                {
                    id: 'banh-mi-chao',
                    name: 'Bánh mì chảo',
                    image: [`${IMAGE_FOOD_URL}/banh_mi_chao.jpg`],
                    price: 50000,
                    desc: 'Món bánh mì chảo tuyệt vời được kết hợp giữa vị giòn giòn của bánh mì, mùi thơm nồng nàn của pate, hương vị nồng nàn của xúc xích và hấp dẫn của salad. Tất cả được sắp xếp thành một quang cảnh đặc sắc và tràn đầy hương vị, chắc chắn sẽ làm cho bạn khó có thể quên đi những giây phút thưởng thức món ăn này.',
                },
                {
                    id: 'mi-cay-thap-cam',
                    name: 'Mì cay thập cẩm',
                    image: [`${IMAGE_SPICY_NOODLES_URL}/thap_cam.jpg`],
                    price: 35000,
                    desc: 'Mì cay đậm đà với màu sắc và hương vị, chắc chắn sẽ làm bạn ngạc nhiên. Từ sợi mì mềm như những ánh nắng, đến nước dùng cay nồng, xúc xích giòn giòn, thịt bò mềm mại và salad tươi tắn, đều được chọn lựa kỹ lưỡng để tạo nên một món ăn hoàn hảo. Mì cay đầy đủ với hỗn hợp nhiều thành phần đặc sắc, làm cho bạn một trải nghiệm ăn uống tuyệt vời.',
                },
            ],
        },
        {
            id: 'combo-set',
            image: `${IMAGE_CATEGORY_URL}/category_combo.jpg`,
            name: 'Combo/Set',
            products: [],
        },
        {
            id: 'pho-bien',
            image: `${IMAGE_CATEGORY_URL}/category_popular.jpg`,
            name: 'Phổ biến',
            products: [],
        },
    ],
};

export { categoryMenu };
export type { Product };
