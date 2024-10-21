import productsModel from '../models/productsModel.js';


export const getAllProducts = async() => {
    return await productsModel.find()
}

export const getAllProductsById = async (id) => {
  try {
      const product = await productsModel.findById(id);
      if (!product) {
          return null; // Return null if the product is not found
      }
      return product;  // Return the product data
  } catch (error) {
      console.error("Error fetching product by ID:", error);
      throw new Error("Database error");  // Throw an error to be caught in the route
  }
};


export const seedInitialProducts = async () => {
    const products = [
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/eb4305db09fb6492bb059b8131f647e3/h/p/hp-laptop-i5-12450h--8g---512ssd---gtx1silver-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-laptop-i5-12450h--.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-victus-15-fa0031dx--0.jpg",
        title: "HP Victus 15-fa0031dx",
        details: "Hp Victus 15-fa0031dx Intel® Core™ i5-12450H, 8GB Ram, 512GB SSD, Nvidia GeForce GTX 1650, 15.6 inch FHD - Mica Silver",
        price: 35000,
        stock: 45,
        ram: "8GB",
        brand: "hp",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne--000.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne-.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/p/hp-14-dv2006ne-00.jpg",
        title: "HP Pavilion 14-dv2006ne",
        details: "HP Pavilion 14-dv2006ne Intel® Core™ i7-1255U -16GB RAM - 512GB - Nvidia GeForce MX550 2GB - 14.0” FHD - Win 11 - Silver",
        price: 50400,
        stock: 50,
        ram: "16GB",
        brand: "hp",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-x1605va-mb005wintel_-core_-i5-13500h-z.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-laptop-i5-13700h--8g---512-ssd-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-laptop-i5-13700h--8g---512-ssd-3.jpg",
        title: "Asus X1605VA",
        details: "Asus X1605VA-MB005WIntel® Core™ i5-13500H, 8GB Ram, 512GB SSD, Intel UHD Graphics, 16.0 WUXGA, Win 11 - Indie Black",
        price: 28800,
        stock: 55,
        ram: "8GB",
        brand: "asus",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/s/asus-tuf-gaming-a15-fa506ncr-hn007w-1.jpg",
        title: "ASUS TUF Gaming A15",
        details: "Asus TUF Gaming A15 FA506NCR-HN007W - AMD Ryzen 7-7435HS , 8GB RAM , 512GB SSD , RTX 3050 4GB , 15.6'' FHD , Win11 - Black",
        price: 38900,
        stock: 60,
        ram: "8GB",
        brand: "asus",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-air-13-m1-chip-8_core-cpu-and-7_core-gpu-256gb-storage-space-gray-5.jpg",
        title: "Apple MacBook Air M1",
        details: "Apple Macbook Air M1 Chip 13 inch 8 Core CPU & 7 Core GPU 8GB RAM 8GB 256GB - Space Gray",
        price: 44600,
        stock: 65,
        ram: "8GB",
        brand: "apple",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver-4_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver-6_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-macbook-pro-14.2_-m3-pro-18g-512g-ssd-silver_1.jpg",
        title: "Apple MacBook M3 Pro",
        details: "Apple MacBook M3 Pro 18GB , 512G SSD - 14.2inch - Silver",
        price: 135000,
        stock: 70,
        ram: "18GB",
        brand: "apple",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/8/2/82nk002yed-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-yoga-slim-7-pro-amd-ryzen_7-5800hs--000_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-yoga-slim-7-pro-amd-ryzen_7-5800hs-_1.jpg",
        title: "Lenovo Yoga Pro Slim 7",
        details: "Lenovo Yoga Slim 7 Pro 82NK002YED , AMD Ryzen™7 5800HS - 16GB - 1TB SSD - NVIDIA® GeForce® MX450 - 14″ 2.8K - Win 11 - Slate Grey",
        price: 44000,
        stock: 75,
        ram: "16GB",
        brand: "lenovo",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-4_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo-83dv008ped-loq-2_1.jpg",
        title: "Lenovo LOQ 83GS008NED",
        details: "Lenovo 83GS008NED -LOQ Intel® Core™ i5-12450HX 8GB , 512GB SSD , RTX3050 , 15.6 FHD - Grey",
        price: 39000,
        stock: 80,
        ram: "8GB",
        brand: "lenovo",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003--0_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-vostro-3520-e003-000_1.jpg",
        title: "Dell Vostro 3520",
        details: "Dell Vostro 3520 Intel® Core™i5-1235U , 8GB RAM , 256GB ٍ intel UHD , 15.6FHD - Black",
        price: 21500,
        stock: 85,
        ram: "8GB",
        brand: "dell",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/d/e/dell-latitude-3420-1.jpg",
        title: "Dell Latitude 3420",
        details: "Dell Latitude 3420 Intel® Core™i5-1135G7 , RAM 8GB , 256GB SSD , Intel® Iris® Xe -14 FHD -Black",
        price: 25600,
        stock: 90,
        ram: "8GB",
        brand: "dell",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--6.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-katana-15-b13vgk--3.jpg",
        title: "MSI Katana 15 B13VGK",
        details: "MSI Katana 15 B13VGK Intel® Core™ i7-13620H , 16GBRAM , 512 GB SSD , RTX 4070 , 15.6 QHD , Win 11- Black",
        price: 71900,
        stock: 95,
        ram: "16GB",
        brand: "msi",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/m/s/msi-modern-15-h-2.jpg",
        title: "MSI Modern 15 H",
        details: "MSI Modern 15 H Intel® Core™i7-13620H , 8GBRam , 512 GB SSD , Iris Xe , 15.6 FHD - Black",
        price: 29700,
        stock: 100,
        ram: "8GB",
        brand: "msi",
        type: "laptop"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-2_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-iphone-13-256g-blue-3_1.jpg",
        title: "Apple Iphone 13 128GB - Blue",
        details: "Apple Iphone 13 128GB - Blue, 6.1 Inch OLED, 4 GB RAM, Battery 3240 mAh, Back Camera 12 + 12 MP",
        price: 29000,
        stock: 50,
        ram: "4GB",
        brand: "apple",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_15_pro_8gb_ram_128gb_-_blue_titanium-3.jpg",
        title: "Apple iPhone 15 Pro 8GB RAM, 128GB - Blue Titanium",
        details: "Apple iPhone 15 Pro 8GB RAM, 128GB - Blue Titanium, 6.1 Inch OLED, Battery 3274 mAh, Back Camera 48 + 12 + 12 MP ",
        price: 52500,
        stock: 10,
        ram: "8GB",
        brand: "apple",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_iphone_14_6gb_ram_128gb_-_blue-3.jpg",
        title: "Apple iPhone 14 6GB RAM, 128GB - Blue",
        details: "Apple iPhone 14 6GB RAM, 128GB - Blue, 6.1 Inch OLED, Battery 3279 mAh, Back Camera 12 + 12 MP",
        price: 34000,
        stock: 15,
        ram: "6GB",
        brand: "apple",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-99.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-0.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi-redmi-13-sandy-gold-2.jpg",
        title: "Xiaomi Redmi 13 8GB RAM , 256GB - Sandy Gold",
        details: "Xiaomi Redmi 13 8GB RAM, 256GB - Sandy Gold, 6.79 Inch, Back Camera 108+2 MP, Battery 5030 mAh",
        price: 7900,
        stock: 20,
        ram: "8GB",
        brand: "xiaomi",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_poco_f6_12gb_ram_512gb_-_green-3.jpg",
        title: "Xiaomi Poco F6 12GB RAM, 512GB - Green",
        details: "Xiaomi Poco F6 12GB RAM, 512GB - Green, 6.67 Inch, Back Camera 50+8 MP, Battery 5000 mAh",
        price: 20700,
        stock: 25,
        ram: "12GB",
        brand: "xiaomi",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-s23-ultra-_12_256_-green-3.jpg",
        title: "Samsung S23 Ultra 12GB Ram, 256GB - Green",
        details: "Samsung S23 Ultra 12GB Ram, 256GB - Green, 6.8 Inch, Back Camera 200+10+10+12 MP, Battery 5000 mAh",
        price: 39000,
        stock: 30,
        ram: "12GB",
        brand: "samsung",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-1_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-2_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_a55_8gb_ram_256gb_-_awesome_navy-3_2.jpg",
        title: "Samsung Galaxy A55 8GB RAM, 128GB - Awesome Navy",
        details: "Samsung Galaxy A55 8GB RAM, 128GB - Awesome Navy, 6.6 Inch, Back Camera 50+12+5 MP, Battery 5000 mAh",
        price: 18000,
        stock: 35,
         ram: "8GB",
        brand: "samsung",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo_reno11_f_8gb_ram_256gb_-_blue-3.jpg",
        title: "Oppo Reno 11F 5G 8GB RAM, 256GB - Blue",
        details: "Oppo Reno 11F 5G 8GB RAM, 256GB - Blue, 6.7 Inch, Back Camera 64+8+2 MP, Battery 5000 mAh",
        price: 13000,
        stock: 40,
        ram: "8GB",
        brand: "oppo",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-3_3.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-0_3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/o/p/oppo-a3x-nebula-red-1_3.jpg",
        title: "Oppo A3X 4GB Ram, 64GB - Nebula Red",
        details: "Oppo A3X 4GB Ram, 64GB - Nebula Red, 6.67 Inch, Back Camera 8 MP, Battery 5100 mAh",
        price: 5500,
        stock: 45,
        ram: "4GB",
        brand: "oppo",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_4gb_ram_64gb_-_timber_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_-timber_black-1_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_8_x6525_-timber_black-2_1.jpg",
        title: "Infinix Smart 8 X6525 4GB RAM, 64GB - Timber Black",
        details: "Infinix Smart 8 X6525 4GB RAM, 64GB - Timber Black, 6.6 Inch, Back Camera 13 + .08 MP, Battery 5000 mAh",
        price: 4300,
        stock: 50,
        ram: "4GB",
        brand: "infinix",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-1_3.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-2_3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_hot_40i_x6528_4gb_ram_128gb_-_gold-4_3.jpg",
        title: "Infinix Hot 40i X6528 8GB Ram, 256GB - Gold",
        details: "Infinix Hot 40i X6528 8GB Ram, 256GB - Gold, 6.56 Inch, Back Camera 50 + .08 MP, Battery 5000 mAh",
        price: 6500,
        stock: 51,
        ram: "8GB",
        brand: "infinix",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-5.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor_x8b_8gb_ram_512gb_-_glamorous_green-4.jpg",
        title: "Honor X8b 8GB RAM, 512GB - Glamorous Green",
        details: "Honor X8b 8GB RAM, 512GB - Glamorous Green, 6.7 Inch, Back Camera 108+5+2 MP, Battery 4500 mAh",
        price: 12500,
        stock: 52,
        ram: "8GB",
        brand: "honor",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro-white-g.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro---moonlight-white.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/o/honor-200-pro---moonlight-white-0.jpg",
        title: "Honor 200 PRO 5G 12GB Ram, 512GB - Moonlight White",
        details: "Honor 200 PRO 5G 12GB Ram, 512GB - Moonlight White, 6.78 Inch, Back Camera 50+50+12 MP, Battery 5200 mAh",
        price: 31000,
        stock: 53,
        ram: "12GB",
        brand: "honor",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-0_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-3_1_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/realme_12_pro_plus_12gb_ram_512gb_-_submarine_blue-2_1_2.jpg",
        title: "Realme 12 Pro Plus 5G 12GB RAM, 512GB - Submarine Blue",
        details: "Realme 12 Pro Plus 5G 12GB RAM, 512GB - Submarine Blue, 6.7 Inch, Back Camera 50+64+8 MP, Battery 5000 mAh",
        price: 18900,
        stock: 40,
        ram: "12GB",
        brand: "realme",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_nova_12i-green-3.jpg",
        title: "Huawei Nova 12i 8GB RAM, 256GB - Green + FreeLace Buds",
        details: "Huawei Nova 12i 8GB RAM, 256GB - Green + FreeLace Buds, 6.7 Inch, Back Camera 108+2 MP, Battery 5000 mAh",
        price: 11000,
        stock: 52,
        ram: "8GB",
        brand: "huawei",
        type: "mobile"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_64gb_wi-fi_cellular_-_blue-1_1_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_256gb_wi-fi_cellular_-_blue-3_4.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.9_22_10_gen_256gb_wi-fi_cellular_-_blue-6_4.jpg",
        title: "Apple iPad 10.9 inch",
        details: "Apple iPad 10.9 inch, 10th Generation, 64GB Memory (Wi-Fi Only) - Blue",
        price: 22000,
        stock: 100,
        ram: "4GB",
        brand: "apple",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple-ipad-10.2-64g-wifi-_9generaition_-space-gray-.e-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.2_64gb_wi-fi_9_generaition_-_space_gray-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_ipad_10.2_64gb_wi-fi_9_generaition_-_space_gray-4.jpg",
        title: "Apple iPad 10.2 inch",
        details: "Apple iPad 10.2 inch, 64GB, Wi-Fi - (9th Generation) - Gray",
        price: 16333,
        stock: 95,
        ram: "3GB",
        brand: "apple",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_galaxy_tab_a9_8gb_ram_128gb_-_navy-3.jpg",
        title: "Samsung Galaxy Tab A9",
        details: "Samsung Galaxy Tab A9 8GB RAM, 128GB - Navy",
        price: 10000,
        stock: 90,
        ram: "8GB",
        brand: "samsung",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-5.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-6.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung-galaxy-tab-s9-fe_-gray-2.jpg",
        title: "Samsung Galaxy Tab S9 FE+",
        details: "Samsung Galaxy Tab S9 FE+ (5G) 12GB Ram, 256GB - Gray",
        price: 34500,
        stock: 85,
        ram: "12GB",
        brand: "samsung",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-0.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_s_8gb_ram_256gb_-_space_gray_pen_free_buds_5i_-2.jpg",
        title: "HUAWEI MatePad 11.5",
        details: "HUAWEI MatePad 11.5- S 8GB RAM, 256GB - Space Gray (Pen+Free Buds 5I)",
        price: 24666,
        stock: 80,
        ram: "8GB",
        brand: "huawei",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-0_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_matepad_11.5_22_8gb_ram_256gb_-_space_gray-2.jpg",
        title: "Huawei MatePad 11.5",
        details: "Huawei MatePad 11.5- 8GB RAM, 256GB - Space Gray ( Free Pen )",
        price: 19777,
        stock: 75,
        ram: "8GB",
        brand: "huawei",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3gen_4gb_ram_128gb_-_storm_grey_pen_2_folio_case_-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3rd_gen_4gb_ram_128gb_-_storm_grey-1_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_m10_plus_3gen_4gb_ram_128gb_-_storm_grey_pen_2_folio_case_-2_1.jpg",
        title: "Lenovo Tab M10 Plus",
        details: "Lenovo Tab M10 Plus (3Gen) 4GB RAM, 128GB - Storm Grey + (Pen 2 + Folio Case)",
        price: 12777,
        stock: 70,
        ram: "4GB",
        brand: "lenovo",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-0_2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-1_2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_tab_p12_8gb_ram_128gb_-_storm_grey_-_wifi-only-3_2.jpg",
        title: "Lenovo Tab P12",
        details: "Lenovo Tab P12 8GB RAM, 256GB - Storm Grey - WIFI-Only + (Pen Plus)",
        price: 19555,
        stock: 65,
        ram: "8GB",
        brand: "lenovo",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/n/o/nokia_tab_t10_ta-1530_4gb_ram_64gb_-_ocean_blue-3.jpg",
        title: "Nokia Tab T10 TA-1530",
        details: "Nokia Tab T10 TA-1530 4GB RAM, 64GB - Ocean Blue",
        price: 4500,
        stock: 60,
        ram: "4GB",
        brand: "nokia",
        type: "tablet"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-11.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-14.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/r/e/redmi_watch_2_lite-12.jpg",
        title: "Redmi Watch 2 Lite 1.55",
        details: "Redmi Watch 2 Lite 1.55 - Blue, Compatible with: Android 6.0, iOS 10.0 and Later, Battery: 262 mAh, Play Time: Up to 10 days",
        price: 2000,
        stock: 55,
        brand: "xiaomi",
        type: "wearable"

      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei-watch-fit-2-_1.74-_inch-yda-b09s-pink-3.jpg",
        title: "Huawei Watch Fit 2 1.74",
        details: "Huawei Watch Fit 2 1.74 - Pink, Compatible with: IOS 9.0 & Android 6.0, Play Time: Up to 10 days",
        price: 5500,
        stock: 9,
        brand: "huawei",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-3_1.png",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-4_1.png",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/p/apple_watch_series_9_45mm_-_midnight-4_1.png",
        title: "Apple Watch Series 9",
        details: "Apple Watch Series 9 (45MM) - Midnight, Play Time: Up to 36 hrs, Compatible with: Apple iPhone Xs or later with iOS 17 or later",
        price: 21000,
        stock: 77,
        brand: "apple",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_watch_gt4_sport_46mm_-_black-3.jpg",
        title: "Huawei Watch GT4 Sport (46MM)",
        details: "Huawei Watch GT4 Sport (46MM) - Black, Compatible with: Android 8.0, iOS 13.0 or later, Play Time: Up to 14 days",
        price: 9600,
        stock: 99,
        brand: "huawei",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huwwwwb-4.jpg",
        title: "Huawei Watch GT5 (46MM)",
        details: "Huawei Watch GT5 (46MM) - Brown, System Requirements: Android 9.0 or later - iOS 13.0 or later, Play Time: 14-day battery life for maximum usage",
        price: 12000,
        stock: 44,
        brand: "huawei",
        type: "wearable" 
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/n/infinix_smart_watch_xw1_-_black-1.jpg",
        title: "INFINIX XW1 Smart Watch1",
        details: "INFINIX XW1 Smart Watch1 - Black, Display: 1.83 Inch TFT, Battery: 280mAh, Play Time: Up to 7 Days, Compatible with: Android , iOS",
        price: 1250,
        stock: 55,
        brand: "infinix",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/huawei_band_9_1.47_inch_-_blue-3.jpg",
        title: "Huawei Band 9 (1.47 Inch)",
        details: "Huawei Band 9 (1.47 Inch) - Blue, Compatible with: Android 8.0 & iOS 13.0 or Later, Battery Capacity: Up to 14 days",
        price: 2200,
        stock: 6,
        brand: "huawei" ,
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/a/samsung_smart_watch_fit3_sm-r390_-_gray-4.jpg",
        title: "Samsung Smart Watch Fit3 ",
        details: "Samsung Smart Watch Fit3 SM-R390 - Gray, Play Time: Up to 13 days, Display: 1.6 Inch, Battery: 208 mAh",
        price: 2900,
        stock: 55,
        brand: "samsung",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/x/i/xiaomi_redmi_smart_watch_s3_-_silver-3.jpg",
        title: "Xiaomi Redmi Smart Watch S3",
        details: "Xiaomi Redmi Smart Watch S3 - Silver, Battery: 486 mAh, Display: 1.43 Inch, Compatible with: IOS 12.0 or Android 6.0 and later",
        price: 7700,
        stock: 55,
        brand: "xiaomi",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/t/strap-fit-2-22mm-for-watch-gt3-_46mm_-gulf-_blue-orange_-huawie-3.jpg",
        title: "Huawei Strap Fit 2 22MM For Watch GT3 (46MM)",
        details: "Huawei Strap Fit 2 22MM For Watch GT3 (46MM) Blue - Orange, Compatibility: Huawei Watch GT3 (46mm)",
        price: 500,
        stock: 55,
        brand: "huawei",
        type: "wearable"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/1/_/1_114.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/2/_/2_110.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/3/_/3_109.jpg",
        title: "Xiaomi Wired Earphone",
        details: "Xiaomi Wired Earphone - Matte Black, Model: QTEJ02JY, Microphone, Line Length: 1.25M",
        price: 400,
        stock: 40,
        brand: "Xiaomi",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black-4.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/l/e/lenovo_300_wireless_compact_mouse_gx30k79401_-_black-1.jpg",
        title: "Lenovo 300 Wireless Compact Mouse GX30K79401",
        details: "Lenovo 300 Wireless Compact Mouse GX30K79401 - Black, Connection Type:2.4 GHz Wireless via Nano USB, Mouse Sensor:Optical sensor",
        price: 550,
        stock: 33,
        brand: "lenovo",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_type-c_to_type-c_cable_100w_braided_ultra_a8757h11_-_black_-2.jpg",
        title: "Anker Type-C to Type-C Cable",
        details: "Anker Type-C to Type-C Cable 100W Braided Ultra A8756H11 - Black, Power: 100W",
        price: 600,
        stock: 30,
        brand: "anker",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/speaker-soundcore-wireless-flare-2-a3165h11-anker-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_speaker_sound_core_wireless_flare_2_a3165h11-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_speaker_sound_core_wireless_flare_2_a3165h11-3.jpg",
        title: "Anker SoundCore Flare2 Wireless Speaker",
        details: "SoundCore by Anker Flare2 Wireless Speaker - Black - A3165H11, Compatible With: All Laptop & Mobile Devieces, Play Time: Up to 12 hrs",
        price: 2100,
        stock: 20,
        brand: "anker",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-1_1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-2_1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/i/p/iphone-12_12-pro-screen-nillkin-2-in-1-orginal-3_1.jpg",
        title: "Nillkin Iphone 12 Pro Max Screen 2 IN 1",
        details: " Full-screen tempered glass + Camera protective film protective set is specially designed for iPhone 12 series.",
        price: 470,
        stock: 200,
        brand: "apple",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/h/u/hub-usb-7-in-1-a8352ha1-grey-anker-3.jpg",
        title: "Anker Hub USB 7 In 1",
        details: "Enjoy high-speed pass-through charging while using. Maximum input of 60W minus 12W for the hub is operation allows the hub to give your MacBook up to an 48W pass-through charge while using other functions.",
        price: 1700,
        stock: 16,
        brand: "anker",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-11.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-12.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/a/n/anker_home_adapetr_313_fast_charger_45w_a2643g11_-_black-13.jpg",
        title: "Anker Home Adapter A2643G11",
        details: "Anker Home Adapter 313 Fast Charger 45W A2643G11 - Black",
        price: 1300,
        stock: 13,
        brand: "anker",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/h/charger-car-typ-c-ep-l1100-30w_15w-black-samsung-3.jpg",
        title: "Samsung Charger Car Type-C 15W",
        details: "Samsung Charger Car Type-C EP-L1100 - Black, 30W Dual, 15W Single Max Output, Dual Port, Blue LED Light, Metal + PC Outer Shell ",
        price: 970,
        stock: 44,
        brand: "samsung",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/c/scanner-lide-400-emea_5ez-one-touch-buttons-usb-type-c-kan-s85129-black-canon-3.jpg",
        title: "Canon Scanner Lide 400 EMEA",
        details: "Canon Scanner Lide 400 EMEA ( 5EZ One Touch Buttons USB Type-C - Black, scan Resolution: 4800 x 4800dpi, scan Speed: Scan speed (A4, 300dpi, Colour) Approx. 8 sec,Scan speed (4x6, 300dpi, Colour)Approx. 4 sec, Preview SpeedApprox. 7 sec",
        price: 4600,
        stock: 34,
        brand: "canon",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-pixma-ts3440-wireless-inkjet-printer-.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/r/printer-pixma-wireless-printer_---ts3440-black-3.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/r/printer-pixma-wireless-printer_---ts3440-black-2.jpg",
        title: "Canon Pixma Wireless Inkjet Printer",
        details: "Canon Pixma TS3440 Wireless Inkjet Printer, Paper Input: Rear tray: Max. 60 sheets (plain paper), Print Speed: Borderless 10x15cm : Approx. 65 seconds, Print Resolution: Up to 4800 x 1200 dpi",
        price: 2000,
        stock: 12,
        brand: "canon",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/c/a/canon-ink-bottle---gi-43-c-.jpg",
        title: "Canon GI-43 C Ink Bottle",
        details: "Canon GI-43 C Ink Bottle - Cyan, Compatibility: PIXMA G640, PIXMA G540, Capacity: 60 ml",
        price: 725,
        stock: 66,
        brand: "canon",
        type: "accessory"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5_spider-man2-limited-edition-3.jpg",
        title: "Play Station 5 + Spider Man 2 limited Edition",
        details: "Play Station 5 + Spider Man 2 limited Edition, CPU:x86-64-AMD Ryzen “Zen 2”, Key Features: Experience lightning-fast loading Ultra-high-speed SSD Deeper immersion with support for haptic feedback, adaptive triggers 3D Audio technology",
        price: 50500,
        stock: 10,
        type: "gaming"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5-slim-console-warranty-2-years-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/p/l/playstation-5-one-year-warrantt-ibs-2_1_1.jpg",
        image3: "https://myxprs.com/cdn/shop/products/sony-playstation-5-slim-570862.png?v=1723625774&width=700",
        title: "PlayStation 5 Slim Console",
        details: "PlayStation 5 Slim Console, CPU:x86-64-AMD Ryzen “Zen 2”, Key Features: Experience lightning-fast loading Ultra-high-speed SSD Deeper immersion with support for haptic feedback, adaptive triggers 3D Audio technology. Color: White",
        price: 38000,
        stock: 20,
        type: "gaming"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-1.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/s/p/spider_man_2_ps5_gaming_cd-1.jpg",
        title: "Spider man 2 PS5 Gaming CD",
        details: "Spider man 2 PS5 Gaming CD, Platform: Playstation 5, PEGI Rating: Ages 3 and Over",
        price: 4500,
        stock: 7,
        type: "gaming"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/f/c/fc24_arabic_gaming_cd_ps5-2.jpg",
        title: "FC24 Arabic Gaming CD PS5",
        details: "FC24 Arabic Gaming CD PS5, Platform: Playstation 5, PEGI Rating: Ages 3 and Over",
        price: 2800,
        stock: 10,
        type: "gaming"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gaming-driving-car-wheel-with-pedals-v3-pro-black-pxn-3.jpg",
        title: "PXN V3 Pro Gaming Driving Car Wheel With Pedals - Black",
        details: "PXN V3 Pro Gaming Driving Car Wheel With Pedals - Black, Compatibility: Windows 7/8/10 / PC x-input i d-input / PS3 / PS4 / XBOX ONE / Nintendo Switch, ",
        price: 3400,
        stock: 20,
        type: "gaming"
      },
      {
        image1: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-1.jpg",
        image2: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-2.jpg",
        image3: "https://r2media.horizondm.com/catalog/product/cache/257553d71735e96dcdf7e87f4b22e6bc/g/a/gamepad-f710-wirless-white-logitech-3.jpg",
        title: "Logitech Gamepad F710 Wirless - Silver",
        details: "Logitech Gamepad F710 Wirless - Silver, Receiver: Nano USB, Wireless Range: 10 Meters, Connectivity: 2.4GHz Wireless.",
        price: 1750,
        stock: 55,
        type: "gaming"
      },
        ];


const existedProducts = await getAllProducts();
    if (existedProducts.length === 0) {
        await productsModel.insertMany(products)
    }
}